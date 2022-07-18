export const VideoPreview = ({ video, onSelect }) => {
  return (
    <article
      className="video-preview-container"
      onClick={() => onSelect(video.id.videoId)}
    >
      <div className="video-thumbnail-container">
        <img src={video.snippet.thumbnails.high.url} alt="" />
      </div>
      <section className="video-info">
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </section>
    </article>
  )
}
