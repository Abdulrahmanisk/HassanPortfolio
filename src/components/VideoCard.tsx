import { Video } from '../data';
import { Play, FileText, Clock } from 'lucide-react';

interface VideoCardProps {
  video: Video;
  onVideoClick: (video: Video) => void;
  onScriptClick: (video: Video) => void;
}

export default function VideoCard({
  video,
  onVideoClick,
  onScriptClick
}: VideoCardProps) {
  const platformColor = video.platform === 'youtube'
    ? 'from-red-500 to-red-600'
    : 'from-pink-500 to-pink-600';

  return (
    <div className="w-full max-w-sm h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInCard">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${platformColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
        <button
          onClick={() => onVideoClick(video)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className="bg-white rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
            <Play size={32} className="text-blue-600 fill-blue-600" />
          </div>
        </button>
        <div className={`absolute top-4 right-4 bg-gradient-to-r ${platformColor} text-white px-4 py-2 rounded-full text-sm font-bold transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}>
          {video.platform === 'youtube' ? 'YouTube' : 'TikTok'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {video.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {video.description}
        </p>

        {/* Time Spent */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <Clock size={16} />
          <span>{video.timeSpent}</span>
        </div>

        {/* Script Link */}
        <button
          onClick={() => onScriptClick(video)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4 transition-colors group/script"
        >
          <FileText size={18} className="group-hover/script:rotate-12 transition-transform" />
          View Script
        </button>

        {/* Watch Button */}
        <button
          onClick={() => onVideoClick(video)}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          <Play size={18} className="fill-white group-hover/btn:translate-x-1 transition-transform" />
          Watch Video
        </button>
      </div>

      <style>{`
        @keyframes fadeInCard {
          from {
            opacity: 0;
            transform: translateY(20px) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        .animate-fadeInCard {
          animation: fadeInCard 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
