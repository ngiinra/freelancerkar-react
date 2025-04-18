export default function truncateText(text, wantedLength = 30) {
  if (text.length < wantedLength) return text;
  else return text.slice(0, wantedLength) + "...";
}
