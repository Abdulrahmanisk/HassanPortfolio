import { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import { resumeData } from '../data';
import Modal from './Modal';

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = `${resumeData.name}-Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="w-full bg-gradient-to-b from-blue-600 via-cyan-600 to-transparent py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeInDown">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
              {resumeData.name}
            </h1>
            <p className="text-xl text-blue-100 mb-8">{resumeData.title}</p>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {resumeData.summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowPreview(true)}
              className="group flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <FileText size={24} className="group-hover:rotate-12 transition-transform" />
              Preview Resume
            </button>
            <button
              onClick={handleDownload}
              className="group flex items-center justify-center gap-3 bg-blue-500/30 text-white px-8 py-4 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              <Download size={24} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300 animate-fadeInUp">
              <p className="text-3xl font-bold text-white mb-2">{resumeData.youtubeSubscribers}</p>
              <p className="text-blue-100 font-medium">YouTube Subscribers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300 animate-fadeInUp">
              <p className="text-3xl font-bold text-white mb-2">{resumeData.tiktokFollowers}</p>
              <p className="text-blue-100 font-medium">TikTok Followers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300 animate-fadeInUp">
              <p className="text-3xl font-bold text-white mb-2">5+</p>
              <p className="text-blue-100 font-medium">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300 animate-fadeInUp">
              <p className="text-3xl font-bold text-white mb-2">100+</p>
              <p className="text-blue-100 font-medium">Videos Created</p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        title="Resume Preview"
        showDownload
        downloadFileName={`${resumeData.name}-Resume.pdf`}
      >
        <div className="bg-gray-100 rounded-lg p-8 min-h-96">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{resumeData.name}</h2>
            <p className="text-lg text-gray-600">{resumeData.title}</p>
            <p className="text-gray-600">{resumeData.email}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">SUMMARY</h3>
              <p className="text-gray-700">{resumeData.summary}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">EXPERIENCE</h3>
              <div className="space-y-4">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-bold text-gray-900">{exp.title}</h4>
                    <p className="text-sm text-gray-600">{exp.company} | {exp.period}</p>
                    <ul className="mt-2 text-sm text-gray-700 space-y-1">
                      {exp.points.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">SKILLS</h3>
              <p className="text-gray-700"><strong>Technical:</strong> {resumeData.skills.technical.join(', ')}</p>
              <p className="text-gray-700 mt-2"><strong>Soft Skills:</strong> {resumeData.skills.soft.join(', ')}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">LANGUAGES</h3>
              <p className="text-gray-700">{resumeData.languages.join(' • ')}</p>
            </div>
          </div>
        </div>
      </Modal>

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

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }
      `}</style>
    </>
  );
}
