// src/components/ScriptModal.tsx
import { X, Download } from 'lucide-react';
import { Video } from '../data';

interface ScriptModalProps {
  video: Video;
  onClose: () => void;
}

export default function ScriptModal({ video, onClose }: ScriptModalProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = video.scriptUrl; // Use the PDF for this specific video
    link.download = `${video.title}-script.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-cyan-600 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-white">Video Script</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
          <p className="text-gray-600 mb-6">Production time: {video.timeSpent}</p>

          {/* Script Preview */}
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
            <div className="prose prose-sm max-w-none text-gray-700">
              <p className="font-semibold mb-4">Script Preview:</p>
              <p className="mb-4">{video.scriptPreview}</p>
              <p className="text-gray-600 italic">
                Click the Download button below to get the full script in PDF format.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200 flex gap-4">
          <button
            onClick={handleDownload}
            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            Download Script
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </div>
  );
}
