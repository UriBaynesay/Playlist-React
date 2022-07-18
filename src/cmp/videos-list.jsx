import { VideoPreview } from "./video-preview"

export const VideosList = ({ videos, onSelect }) => {
  return (
    <section className="videos-list-container">
      {videos && (
        <ul>
          {videos.map((video) => (
            <li key={video.id.videoId}>
              <VideoPreview video={video} onSelect={onSelect} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
