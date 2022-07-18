export const VideoPreview = ({ video, onSelect }) => {
  return (
    <article
      className="video-preview-container"
      onClick={() => onSelect(video.id.videoId)}
    >
      <h3>hello from preview</h3>
    </article>
  )
}
