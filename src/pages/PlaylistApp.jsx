import { useEffect } from "react"
import { useState } from "react"

import { SearchBar } from "../cmp/search-bar"
import { VideosList } from "../cmp/videos-list"
import { MediaPlayer } from "../cmp/media-player"
import { videosService } from "../services/videos.service"

export const PlaylistApp = () => {
  const [videos, setVideos] = useState(null)
  const [currVideo, setCurrVideo] = useState("41qC3w3UUkU")

  useEffect(() => {
    setVideos(videosService.query())
  }, [])

  const onSearch = (searchBy) => {}

  const onSelect = (videoId) => {
    setCurrVideo(videoId)
  }

  return (
    <div className="playlist-app-container">
      <SearchBar onSearch={onSearch} />
      <section className="videos-list-player-container">
        <VideosList onSelect={onSelect} videos={videos} />
        <MediaPlayer videoId={currVideo} />
      </section>
    </div>
  )
}
