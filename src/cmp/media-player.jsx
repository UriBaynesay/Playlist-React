export const MediaPlayer = ({ videoId }) => {
  return (
    <section className="media-player-container">
      <iframe
        title="Video"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
    </section>
  )
}
