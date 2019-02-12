export function translate(x, y) {
  return 'translate(' + x + ',' + y + ')';
}

export function rotate(a) {
  return 'rotate(' + a + ')';
}

export function translateItem(item) {
  return translate(item.x || 0, item.y || 0);
}

export function transformItem(item) {
  return translate(item.x || 0, item.y || 0)
    + (item.angle ? ' ' + rotate(item.angle) : '');
}
