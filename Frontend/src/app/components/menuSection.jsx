import {
  Home,
  Search,
  Bell,
  Bookmark,
  User,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";

export default function TockSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // toggle popup
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col justify-between h-screen bg-background text-white p-4 w-[112%] relative overflow-visible">
      {/* Top Section */}
      <div className="flex flex-col gap-2">
        <div className="p-3 w-fit">
          <img src="/TockLogo.png" alt="tock logo" className="w-[50px]" />
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1">
          {[
            { icon: <Home className="w-7 h-7" />, text: "Home" },
            { icon: <Search className="w-7 h-7" />, text: "Explore" },
            {
              icon: (
                <div className="relative">
                  <Bell className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    1
                  </span>
                </div>
              ),
              text: "Notifications",
            },
            { icon: <Bookmark className="w-7 h-7" />, text: "Bookmarks" },
            {
              icon: <img src="/TockLogo.png" alt="" className="w-[30px]" />,
              text: "Premium",
            },
            { icon: <User className="w-7 h-7" />, text: "Profile" },
          ].map(({ icon, text }, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-5 p-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              {icon}
              <span className="text-xl">{text}</span>
            </a>
          ))}
        </nav>

        <button className="btn btnHover text-white font-bold text-lg rounded-full py-3 px-7 mt-4 transition-colors">
          Post
        </button>
      </div>

      {/* Bottom Profile Section */}
      <div className="relative">
        <div
          className="flex items-center justify-between p-3 rounded-full hover:bg-gray-900 transition-colors cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm">Satyam Gaur</span>
              <span className="text-gray-500 text-sm">@staphennob93463</span>
            </div>
          </div>
          <MoreHorizontal className="w-5 h-5" />
        </div>

        {/* Popup Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Popup */}
            <div className="absolute bottom-full left-0 mb-3 w-72 bg-black border border-gray-700 rounded-2xl shadow-2xl z-50 overflow-visible">
              {/* Arrow */}
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-black border-r border-b border-gray-700 transform rotate-45" />

              {/* Menu Items */}
              <div className="p-3">
                <button className="w-full text-left px-4 py-3 text-white hover:bg-gray-900 rounded-lg transition-colors font-medium">
                  Add an existing account
                </button>
                <button className="w-full text-left px-4 py-3 text-white hover:bg-gray-900 rounded-lg transition-colors font-medium">
                  Log out @staphennob93463
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
