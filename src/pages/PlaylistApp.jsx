import { useEffect } from "react"
import { useState } from "react"

import { SearchBar } from "../cmp/search-bar-cmp"
import { VideosList } from "../cmp/videos-list"
import { videosService } from "../services/videos.service"

export const PlaylistApp = () => {
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    setVideos(videosService.query())
  }, [])

  const onSearch = (searchBy) => {}

  const onSelect = (videoId) => {}

  return (
    <div className="playlist-app-container">
      <SearchBar onSearch={onSearch} />
      <VideosList onSelect={onSelect} videos={videos} />
    </div>
  )
}
