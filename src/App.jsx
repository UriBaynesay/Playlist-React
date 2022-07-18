import "./assets/styles/main.scss"
import { AppHeader } from "./cmp/AppHeader"
import { AppFooter } from "./cmp/AppFooter"
import { PlaylistApp } from "./pages/PlaylistApp"

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <PlaylistApp />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
