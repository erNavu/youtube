
const MY_GOOGLE_API_KEY = 'AIzaSyAj-_WsU-9KX3U1AQL-I5g1p4LainMOPMk'

const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/"

export const YOUTUBE_VIDEO_API = YOUTUBE_URL + "videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + MY_GOOGLE_API_KEY

export const YOUTUBE_SEARCH_LIST = YOUTUBE_URL + "search?part=snippet&maxResults=50&key=" + MY_GOOGLE_API_KEY + "&q="

export const YOUTUBE_SEARCH_SUGGESTIONS = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="