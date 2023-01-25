export default function YouTubeEmbed(props) {
  return (
    <div>
      <iframe
        width="100%"
        height="512"
        src={`https://www.youtube.com/embed/${props.attrs.matches[2]}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}