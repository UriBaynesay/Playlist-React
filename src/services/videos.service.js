import axios from "axios"

export const videosService = {
  query,
}

async function query(searchBy) {
  try {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchBy}&key=AIzaSyDqJboSTwYGHWapgKmIYKzh8t3scWHjeLM`
    )
    return data.items
  } catch (error) {
    throw error
  }
}
