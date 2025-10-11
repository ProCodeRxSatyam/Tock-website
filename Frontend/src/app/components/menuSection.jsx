import { Home, Search, Bell, Bookmark, Crown, User, MoreHorizontal } from 'lucide-react';

export default function TockSidebar() {
  return (
    <div className="flex flex-col justify-between h-screen bg-background text-foreground text-white w- p-4">
      {/* Top Section */}
      <div className="flex flex-col gap-2">
        {/* X Logo */}
        <div className="p-3 w-fit">
            <img src="/TockLogo.png" alt="tock logo" 
             className='w-[50px]'/>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1">
          <a href="#" className="flex items-center gap-5 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <Home className="w-7 h-7" />
            <span className="text-xl">Home</span>
          </a>

          <a href="#" className="flex items-center gap-5 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <Search className="w-7 h-7" />
            <span className="text-xl">Explore</span>
          </a>

          <a href="#" className="flex items-center gap-5 p-3 rounded-full hover:bg-gray-900 transition-colors relative">
            <div className="relative">
              <Bell className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                1
              </span>
            </div>
            <span className="text-xl">Notifications</span>
          </a>

          <a href="#" className="flex items-center gap-5 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <Bookmark className="w-7 h-7" />
            <span className="text-xl">Bookmarks</span>
          </a>

          <a href="#" className="flex items-center gap-5 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-xl">Premium</span>
          </a>

          <a href="#" className="flex items-center gap-5 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <User className="w-7 h-7" />
            <span className="text-xl">Profile</span>
          </a>
        </nav>

        {/* Post Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full py-3 mt-4 transition-colors">
          Post
        </button>
      </div>

      {/* Bottom Profile Section */}
      <div className="flex items-center justify-between p-3 rounded-full hover:bg-gray-900 transition-colors cursor-pointer">
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
    </div>
  );
}