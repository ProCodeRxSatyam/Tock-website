"use client";
import { useState , useRef ,useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  MoreHorizontal,
  Bookmark,
} from "lucide-react";
import Sidebar from "../components/menuSection";

const TockContentSection = () => {
  const [likedTweets, setLikedTweets] = useState(new Set());
  const [retweetedTweets, setRetweetedTweets] = useState(new Set());
  const [bookmarkedTweets, setBookmarkedTweets] = useState(new Set());
  const [tweet, setTweet] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  const toggleLike = (tweetId) => {
    setLikedTweets((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tweetId)) {
        newSet.delete(tweetId);
      } else {
        newSet.add(tweetId);
      }
      return newSet;
    });
  };

  const toggleRetweet = (tweetId) => {
    setRetweetedTweets((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tweetId)) {
        newSet.delete(tweetId);
      } else {
        newSet.add(tweetId);
      }
      return newSet;
    });
  };

  const toggleBookmark = (tweetId) => {
    setBookmarkedTweets((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tweetId)) {
        newSet.delete(tweetId);
      } else {
        newSet.add(tweetId);
      }
      return newSet;
    });
  };

  const handleTweetCompose = (e) => {
    setTweet(e.target.value);
    setWordCount(e.target.value.length);
    console.log(e.target.value.length);
  };

    useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // set new height
    }
  }, [tweet]);

  const tweets = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        handle: "sarahdesigns",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b812b833?w=40&h=40&fit=crop&crop=face",
      },
      content:
        "Just shipped a new design system component library! 🎉 The amount of developer happiness this is going to create makes all the late nights worth it.",
      timestamp: "2h",
      replies: 12,
      retweets: 89,
      likes: 234,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      user: {
        name: "Tech Daily",
        handle: "techdaily",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      },
      content:
        "Breaking: Major breakthrough in quantum computing achieved by researchers at MIT. This could revolutionize encryption and cybersecurity as we know it.",
      timestamp: "4h",
      replies: 156,
      retweets: 1200,
      likes: 3400,
    },
    {
      id: 3,
      user: {
        name: "Alex Rivera",
        handle: "alexcodes",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      content:
        "Hot take: Writing good documentation is harder than writing the actual code. Change my mind. 🧵",
      timestamp: "6h",
      replies: 89,
      retweets: 45,
      likes: 312,
    },
    {
      id: 4,
      user: {
        name: "Design Inspiration",
        handle: "designdaily",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      content:
        "Beautiful minimal website designs that prove less is more ✨ Thread below with 10 examples that will inspire your next project 👇",
      timestamp: "8h",
      replies: 23,
      retweets: 167,
      likes: 892,
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    },
    {
      id: 5,
      user: {
        name: "Maya Patel",
        handle: "mayastartup",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      },
      content:
        "Year 1 of my startup: Failed 47 times, succeeded 3 times. Those 3 times changed everything. Persistence isn't just motivational poster material—it's the actual game.",
      timestamp: "12h",
      replies: 78,
      retweets: 234,
      likes: 1567,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-background text-foreground min-h-screen border border-gray-800 ">

      <div className="absolute fixed left-0 top-0 p-2">
        < Sidebar />
      </div>

      {/* Header */}
      <div className="sticky top-0  backdrop-blur-md border-b border-gray-200  flex ">
        <div className="flex-1 text-center hover:bg-gray-800 cursor-pointer py-3">
          <h1 className="text-xl font-bold ">For you</h1>
        </div>
        <div className="flex-1 text-center hover:bg-gray-800 cursor-pointer py-3 blueBar">
          <h1 className="text-xl font-bold ">Following</h1>
        </div>
      </div>

      {/* Tweet Composer */}
      <div className="border-b border-gray-700 p-4">
        <div className="flex space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="Your avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              placeholder="What's happening?"
              className="w-full text-xl  placeholder-gray-500 border-none outline-none  "
              rows={1}
              onChange={handleTweetCompose}
              value={tweet}
              ref = {textareaRef}
            />
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4 text-blue-500">
                {/* Tweet options would go here */}
                <span
                  className={`text-sm ${
                    wordCount > 280 ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {wordCount}/280
                </span>
              </div>
              <button
                className="btn btnHover text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors cursor-pointer disabled:opacity-50"
                disabled={tweet.length === 0 || tweet.length > 280}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="divide-y divide-gray-800 ">
        {tweets.map((tweet) => (
          <article
            key={tweet.id}
            className="p-4  transition-colors cursor-pointer"
          >
            <div className="flex space-x-3">
              {/* Avatar */}
              <img
                src={tweet.user.avatar}
                alt={tweet.user.name}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />

              {/* Tweet Content */}
              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-bold  truncate">{tweet.user.name}</h3>
                  <span className="text-gray-500 text-sm">
                    @{tweet.user.handle}
                  </span>
                  <span className="text-gray-500 text-sm">·</span>
                  <span className="text-gray-500 text-sm">
                    {tweet.timestamp}
                  </span>
                  <div className="ml-auto">
                    <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Tweet Text */}
                <div className=" mb-3 leading-relaxed">{tweet.content}</div>

                {/* Tweet Image */}
                {tweet.image && (
                  <div className="mb-3 rounded-2xl overflow-hidden border border-gray-200">
                    <img
                      src={tweet.image}
                      alt="Tweet media"
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Interaction Buttons */}
                <div className="flex items-center justify-between max-w-md mt-3">
                  {/* Reply */}
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{tweet.replies}</span>
                  </button>

                  {/* Retweet */}
                  <button
                    onClick={() => toggleRetweet(tweet.id)}
                    className={`flex items-center space-x-2 transition-colors group ${
                      retweetedTweets.has(tweet.id)
                        ? "text-green-500"
                        : "text-gray-500 hover:text-green-500"
                    }`}
                  >
                    <div className="p-2 rounded-full group-hover:bg-green-50 transition-colors">
                      <Repeat2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm">
                      {retweetedTweets.has(tweet.id)
                        ? tweet.retweets + 1
                        : tweet.retweets}
                    </span>
                  </button>

                  {/* Like */}
                  <button
                    onClick={() => toggleLike(tweet.id)}
                    className={`flex items-center space-x-2 transition-colors group ${
                      likedTweets.has(tweet.id)
                        ? "text-red-500"
                        : "text-gray-500 hover:text-red-500"
                    }`}
                  >
                    <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors">
                      <Heart
                        className={`w-4 h-4 ${
                          likedTweets.has(tweet.id) ? "fill-current" : ""
                        }`}
                      />
                    </div>
                    <span className="text-sm">
                      {likedTweets.has(tweet.id)
                        ? tweet.likes + 1
                        : tweet.likes}
                    </span>
                  </button>

                  {/* Share & Bookmark */}
                  <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors">
                      <Share className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleBookmark(tweet.id)}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarkedTweets.has(tweet.id)
                          ? "text-blue-500"
                          : "text-gray-500 hover:text-blue-500 hover:bg-blue-50"
                      }`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          bookmarkedTweets.has(tweet.id) ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="p-4 text-center">
        <button className="text-blue-500 hover:text-blue-600 font-medium">
          Load more tweets
        </button>
      </div>
    </div>
  );
};

export default TockContentSection;
