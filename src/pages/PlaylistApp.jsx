import { SearchBar } from "../cmp/search-bar-cmp"

export const PlaylistApp = () => {
  const onSearch = (searchBy) => {
  }

  return (
    <div className="playlist-app-container">
      <SearchBar onSearch={onSearch} />
    </div>
  )
}
