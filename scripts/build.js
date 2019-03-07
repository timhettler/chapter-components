'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const babel = require('@babel/core');

const source = './src';
const destination = './dist';

// Remove all content but keep the directory so that
// if you're in it, you don't end up in Trash
fs.emptyDirSync(destination);

// Copy all Sass to destination folder.
async function copyStyles() {
  const paths = await globby(`${source}/**/*.scss`);

  paths.forEach(async file => {
    const base = path.parse(file).base;
    const dest = path.parse(file).dir.replace(source, destination);

    await fs.ensureDir(dest);
    await fs.copyFile(file, `${dest}/${base}`);
  });
}

// Get all JS files to prep for Babel transfomation
async function transformScripts() {
  const paths = await globby([`${source}/**/*.js`]);

  paths.forEach(async file => {
    const contents = await transformScript(file);
  });
}

// Perform Babel transformation and write to destination
async function transformScript(file) {
  const contents = await babel.transformFileAsync(file, {
    rootMode: 'upward',
    sourceMaps: true,
    ignore: ['./src/**/*.stories.js', './src/__tests__/'],
  });

  if (contents) {
    const base = path.parse(file).base;
    const dest = path.parse(file).dir.replace(source, destination);

    await fs.ensureDir(dest);
    await fs.writeFile(`${dest}/${base}`, contents.code);
    await fs.writeJson(`${dest}/${base}.map`, contents.map);

    return true;
  }

  return false;
}

copyStyles();
transformScripts();
