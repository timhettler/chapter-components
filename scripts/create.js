'use strict';

const { prompt } = require('enquirer');
const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const changeCase = require('change-case');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const pkg = require('./boilerplate/package.json');

async function createPackage() {
  const basics = await prompt([
    {
      type: 'input',
      name: 'name',
      initial: 'foo-bar',
      message: 'What is the name of this package?',
      // TODO ensure package name is in param case
      validate: name => {
        return fs.existsSync(`./packages/${name}`)
          ? 'This package already exists. Please choose another name.'
          : true;
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of this package',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Who will own this package?',
      initial: 'R/GA',
    },
  ]);

  const details = await prompt({
    type: 'input',
    name: 'name',
    message: 'What is the name of the main class?',
    initial: changeCase.pascalCase(basics.name),
  });

  const destination = `./packages/${basics.name}`;

  // Create the directories
  await fs.ensureDir(`${destination}/src/__tests__`);

  // Edit and write the package file
  await fs.writeFile(
    `${destination}/package.json`,
    JSON.stringify({
      ...pkg,
      name: `@ssgw/${basics.name}`,
      description: basics.description,
      author: basics.author,
    })
  );

  // Write the Sass file
  await fs.writeFile(
    `${destination}/src/${details.name}.scss`,
    `@import '~@ssgw/utils/src/scss/index';`
  );

  const jsFiles = await globby(path.join(__dirname, 'boilerplate/**/*.js'));

  await Promise.all(
    jsFiles.map(file => {
      fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;

        // Replace placeholder with Class name
        const newData = data.replace(/__CLASS_NAME__/gim, details.name);

        // Rename files
        let newFilename = file.replace(
          'scripts/boilerplate',
          `packages/${basics.name}`
        );

        if (newFilename.indexOf('main.js') >= 0) {
          newFilename = newFilename.replace('main.js', `${details.name}.js`);
        }

        // Write boilerplate files to new directory
        fs.writeFile(
          file.replace('scripts/boilerplate', `packages/${basics.name}`),
          newData,
          'utf-8',
          err => {
            if (err) throw err;
          }
        );
      });
    })
  );

  return {
    basics,
    details,
  };
}

createPackage().then(async ({ basics, details }) => {
  console.log(`${basics.name} created! Now installing dependencies...`);
  await exec(`cd packages/${basics.name}`);
  await exec(`yarn`);
  console.log('Installation complete! Happy coding!');
});
