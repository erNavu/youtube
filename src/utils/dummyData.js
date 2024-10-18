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

export const LIVE_MESSAGES = [
    "Have a great day! 🌟",
    "💪 Keep up the good work!",
    "Success is on the horizon 🚀.",
    "Believe in yourself! ✨",
    "You're doing awesome! 👍",
    "Stay positive and 🌈 keep moving forward.",
    "Don't forget to smile today! 😊",
    "🎯 You can achieve anything you set your mind to.",
    "Today is full of possibilities! 🌟",
    "🏆 Keep pushing towards your goals.",
    "Challenges are opportunities 🧠 in disguise.",
    "⏳ Your hard work will pay off soon.",
    "🚪 Great things never come from comfort zones.",
    "The journey of a thousand miles begins 🛤️ with a single step.",
    "Progress 📈 is progress, no matter how small.",
    "Mistakes are proof you're trying! 🛠️",
    "🔄 Every day is a second chance.",
    "You are stronger than you think. 🦸‍♂️",
    "Dream big and dare to fail! 🌟",
    "🎯 Stay focused and never give up.",
    "Believe you can and you're halfway there 🏅.",
    "The best way to predict the future 🌍 is to create it.",
    "⏳ Success doesn’t happen overnight, stay patient.",
    "Little things make big days 📅.",
    "Your potential is endless! 🌠",
    "💼 Failure is not the opposite of success, it's part of success.",
    "💭 One small positive thought can change your whole day.",
    "🔧 Do what you can, with what you have, where you are.",
    "🌄 The only limit to your impact is your imagination and commitment.",
    "Difficult roads often lead to 🌅 beautiful destinations.",
    "Stay hungry, stay foolish! 🔥",
    "Don’t watch the clock; do what it does ⏰. Keep going!",
    "You are your only limit 🚫.",
    "💪 Good things take time.",
    "No pressure, no diamonds 💎.",
    "Small progress is still progress 📊.",
    "Take a deep breath, 🌬️ you’ve got this.",
    "Success 🔄 is the sum of small efforts repeated day in and day out.",
    "🌸 Believe in the magic of new beginnings.",
    "Start where you are, 🛠️ use what you have, do what you can.",
    "Every sunrise brings new hope 🌞.",
    "The best view comes after the hardest climb 🏔️.",
    "🎉 Celebrate small victories!",
    "Keep building your dreams, brick by brick 🧱.",
    "⚡ You are full of energy and potential!",
    "Focus on the journey, 🌟 not the destination.",
    "Shine bright, 🌟 you’re unique!",
    "🤩 Stay curious and keep learning.",
    "🧠 Your mindset determines your success.",
    "📅 Take it one day at a time.",
    "Keep moving forward 🏃‍♂️, no matter how slow.",
    "The sky's the limit! 🎇",
    "Hello! 😊",
    "How are you? 🤔",
    "I'm here to help! 💬",
    "What do you need assistance with? 🤗",
    "Have a great day! 🌞",
    "Let's chat! 🗨️",
    "Good to see you! 👋",
    "Any questions? ❓",
    "I'm just a message away! 📩",
    "Thank you for reaching out! 🙏",
    "Enjoying the video? 🎥",
    "Feel free to ask anything! 🆗",
    "What's your favorite part? 🎉",
    "I'm excited to chat! 😄",
    "Stay positive! ✨",
    "Looking forward to your message! 📬",
    "Let's keep the conversation going! 🔄",
    "Happy to assist! 🤝",
    "Your feedback matters! 📝",
    "Chat with us anytime! ⏰",
    "We're here for you! 💖"
];

export const USERS_NAME = [
    "Alice", "Bob", "Charlie", "David", "Eva",
    "Frank", "Grace", "Hannah", "Ian", "Jasmine",
    "Smith", "Johnson", "Williams", "Jones", "Brown",
    "Davis", "Miller", "Wilson", "Moore", "Taylor"
]