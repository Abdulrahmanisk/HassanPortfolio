import { useState } from 'react';
import { Video, videosData } from '../data';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';
import ScriptModal from './ScriptModal';

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedScript, setSelectedScript] = useState<Video | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
<div className="text-center mb-16 animate-fadeInDown">
  <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Work</h2>
  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    Explore my latest video creations showcasing creativity, technical excellence, and storytelling skills
  </p>
  <div className="flex justify-center gap-2 mt-6">
    <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
    <div className="w-1 h-1 bg-blue-600 rounded-full" />
    <div className="w-1 h-1 bg-blue-600 rounded-full" />
  </div>
</div>

        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((video, idx) => (
            <div
              key={video.id}
              style={{
                animation: `fadeInCard 0.6s ease-out ${0.1 * idx}s both`
              }}
            >
              <VideoCard
                video={video}
                onVideoClick={setSelectedVideo}
                onScriptClick={setSelectedScript}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {videosData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No videos yet. Check back soon!</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fadeInUp">
          <p className="text-gray-600 mb-6">More videos coming soon...</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.youtube.com/channel/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Subscribe on YouTube
            </a>
            <a
              href="https://www.tiktok.com/@hssnbkry"
              target="_blank"
              rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Follow on TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {selectedScript && (
        <ScriptModal
          video={selectedScript}
          onClose={() => setSelectedScript(null)}
        />
      )}

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}
