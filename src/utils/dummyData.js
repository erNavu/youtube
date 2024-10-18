import { FaFireAlt, FaHistory, FaRegNewspaper } from "react-icons/fa";
import { MdOutlineWatchLater, MdOutlineSettings, MdOutlineFlag, MdOutlineFeedback, MdOutlineHelpOutline, MdOutlineLibraryMusic, MdOutlineLiveTv, MdOutlineSportsVolleyball, MdOutlineSportsEsports, MdOutlineThumbUp, MdOutlineVideoLibrary, MdOutlineSubscriptions } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";

export const SIDEBAR_DATA = [
    {
        "section": "",
        "items": [
            {
                "title": "Home",
                "icon": IoHomeOutline,
                "url": "/"
            },
            {
                "title": "Trending",
                "icon": FaFireAlt,
                "url": "/trending"
            },
            {
                "title": "Subscriptions",
                "icon": MdOutlineSubscriptions,
                "url": "/subscriptions"
            }
        ]
    },
    {
        "section": "Library",
        "items": [
            {
                "title": "Library",
                "icon": MdOutlineVideoLibrary,
                "url": "/library"
            },
            {
                "title": "History",
                "icon": FaHistory,
                "url": "/history"
            },
            {
                "title": "Watch Later",
                "icon": MdOutlineWatchLater,
                "url": "/watch-later"
            },
            {
                "title": "Liked Videos",
                "icon": MdOutlineThumbUp,
                "url": "/liked-videos"
            }
        ]
    },
    {
        "section": "Explore",
        "items": [
            {
                "title": "Music",
                "icon": MdOutlineLibraryMusic,
                "url": "/explore/music"
            },
            {
                "title": "Sports",
                "icon": MdOutlineSportsVolleyball,
                "url": "/explore/sports"
            },
            {
                "title": "Gaming",
                "icon": MdOutlineSportsEsports,
                "url": "/explore/gaming"
            },
            {
                "title": "News",
                "icon": FaRegNewspaper,
                "url": "/explore/news"
            },
            {
                "title": "Live",
                "icon": MdOutlineLiveTv,
                "url": "/explore/live"
            }
        ]
    },
    {
        "section": "More from YouTube",
        "items": [
            {
                "title": "YouTube Premium",
                "icon": AiOutlineYoutube,
                "url": "/premium"
            },
            {
                "title": "Movies & Shows",
                "icon": BiMoviePlay,
                "url": "/movies"
            },
            {
                "title": "Gaming",
                "icon": MdOutlineSportsEsports,
                "url": "/gaming"
            }
        ]
    },
    {
        "section": "Settings",
        "items": [
            {
                "title": "Settings",
                "icon": MdOutlineSettings,
                "url": "/settings"
            },
            {
                "title": "Report history",
                "icon": MdOutlineFlag,
                "url": "/report-history"
            },
            {
                "title": "Help",
                "icon": MdOutlineHelpOutline,
                "url": "/help"
            },
            {
                "title": "Send feedback",
                "icon": MdOutlineFeedback,
                "url": "/feedback"
            }
        ]
    }
]
