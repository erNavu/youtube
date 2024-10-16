
const MY_GOOGLE_API_KEY = process.env.REACT_APP_API_KEY

const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/"

export const YOUTUBE_VIDEO_API = YOUTUBE_URL + "videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + MY_GOOGLE_API_KEY

export const YOUTUBE_SEARCH_LIST = YOUTUBE_URL + "search?part=snippet&maxResults=50&key=" + MY_GOOGLE_API_KEY + "&q="

export const YOUTUBE_SEARCH_SUGGESTIONS = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_COMMENTS_LIST = "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet%2Creplies&maxResults=50&key=" + MY_GOOGLE_API_KEY + "&videoId="

export const YOUTUBE_VIDEO_DETAILS = "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&key=" + MY_GOOGLE_API_KEY + "&id="