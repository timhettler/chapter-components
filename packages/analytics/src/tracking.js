function replaceWithId(string, id = '', template = '{id}') {
  return string.replace(template, id);
}

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
