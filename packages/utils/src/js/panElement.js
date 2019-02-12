export default function panElement(e, nodeElement, lag = 0.035) {
  if (!nodeElement) return false;

  const $xTargetDistance =
    nodeElement.offsetWidth / 2 + nodeElement.offsetLeft - e.pageX;
  const $yTargetDistance =
    nodeElement.offsetHeight / 2 + nodeElement.offsetTop - e.pageY;

  const $valX = !($xTargetDistance < 0)
    ? $xTargetDistance * -lag
    : Math.abs($xTargetDistance) * lag;
  const $valY = !($yTargetDistance < 0)
    ? $yTargetDistance * -lag
    : Math.abs($yTargetDistance) * lag;

  nodeElement.style.transform = `translate3d(${$valX}px, ${$valY}px, 0px)`;

  return true;
}
