export default function getEmailUrl(subject, body) {
  const x = [];
  subject && x.push(`subject=${encodeURIComponent(subject)}`);
  body && x.push(`body=${encodeURIComponent(body)}`);
  return `mailto:?${x.join('&')}`;
}
