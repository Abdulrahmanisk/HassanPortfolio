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
  const platformColor =
    video.platform === 'youtube'
      ? 'from-red-500 to-red-600'
      : 'from-pink-500 to-pink-600';

  return (
    <div className="group w-full max-w-[280px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInCard mx-auto">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[1/1] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${platformColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        />
        <button
          onClick={() => onVideoClick(video)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className="bg-white rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
            <Play size={28} className="text-blue-600 fill-blue-600" />
          </div>
        </button>
        <div
          className={`absolute top-3 right-3 bg-gradient-to-r ${platformColor} text-white px-3 py-1 rounded-full text-xs font-bold transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300`}
        >
          {video.platform === 'youtube' ? 'YouTube' : 'TikTok'}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-md font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {video.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {video.description}
        </p>

        {/* Time Spent */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Clock size={14} />
          <span>{video.timeSpent}</span>
        </div>

        {/* Script Link */}
        <button
          onClick={() => onScriptClick(video)}
          className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold mb-3 transition-colors group/script text-sm"
        >
          <FileText
            size={16}
            className="group-hover/script:rotate-12 transition-transform"
          />
          View Script
        </button>

        {/* Watch Button */}
        <button
          onClick={() => onVideoClick(video)}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm group/btn"
        >
          <Play
            size={16}
            className="fill-white group-hover/btn:translate-x-1 transition-transform"
          />
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
