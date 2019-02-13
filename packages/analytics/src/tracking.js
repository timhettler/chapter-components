function replaceWithId(string, id = '', template = '{id}') {
  return string.replace(template, id);
}

// Notes:
// 'window.utag.track' is used on the Samsung US site
// 'window.track' is used everywhere else

export function track(data, id) {
  if (!window.track && !window.utag) return;

  if (window.utag && window.utag.track) {
    if (!data['data-link_id']) {
      throw new Error('Missing data-link_<option>');
    }

    return window.utag.track('link', {
      'data-link_id': replaceWithId(data['data-link_id'], id),
      'data-link_meta': replaceWithId(data['data-link_meta'], id),
    });
  }

  return window.track('scroll', replaceWithId(data, id));
}

export function mockClickTracker(e) {
  // TODO 'closest' doesn't work in IE - Do we need to polyfill?
  const taggedElem = e.target.closest('[data-omni]');

  if (!taggedElem) {
    const interactiveParent = e.target.closest('a, button');
    if (interactiveParent) {
      console.warn(
        'An interactive element was clicked, but there is no tracking information.'
      );
    }
    return true;
  }

  console.info('Click tracking triggered:');
  console.table({
    ['data-omni']: taggedElem.getAttribute('data-omni'),
    ['data-omni-type']: taggedElem.getAttribute('data-omni-type'),
  });
}

export function mockExplicitTracker(type, data) {
  console.log('Explicit tracking triggered:');
  console.log(type, data);
}

export function registerMockListeners() {
  window.addEventListener('click', mockClickTracker, { passive: true });
  window.track = mockExplicitTracker;

  return true;
}
