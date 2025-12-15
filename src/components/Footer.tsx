import { Mail, Youtube, Share2 } from 'lucide-react';
import { resumeData } from '../data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Content Creator</h3>
            <p className="text-gray-400">
              Creating engaging content across YouTube and TikTok with passion for quality and creativity.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.youtube.com/channel/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transform hover:scale-110 transition-all duration-300 group"
              >
                <Youtube size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://www.tiktok.com/@hssnbkry"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transform hover:scale-110 transition-all duration-300 group"
              >
                <Share2 size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href={`mailto:${resumeData.email}`}
                className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 group"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">Audience</h3>
            <p className="text-gray-400">
              YouTube: {resumeData.youtubeSubscribers} | TikTok: {resumeData.tiktokFollowers}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 {resumeData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
