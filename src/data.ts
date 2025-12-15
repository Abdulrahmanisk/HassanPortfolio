// src/data.ts
import heroshimaThumbnail from './thumbnails/JAPAN.png';
import worldwar1Thumbnail from './thumbnails/first-world-war.png';

export interface Video {
  id: string;
  title: string;
  description: string;
  timeSpent: string;
  videoUrl: string;         // Embed-ready URL
  thumbnail: string;        // Imported thumbnail
  scriptUrl: string;        // Path to PDF script
  scriptPreview: string;    // Short text preview for modal
  platform: 'youtube' | 'tiktok';
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  youtubeSubscribers: string;
  tiktokFollowers: string;
  summary: string;
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    points: string[];
  }[];
  education: {
    degree: string;
    school: string;
    period: string;
    location: string;
    description: string;
  }[];
  skills: {
    technical: string[];
    soft: string[];
  };
  languages: string[];
}

// ================== Resume Data ==================
export const resumeData: ResumeData = {
  name: 'Hassan Ahmed Bakry',
  title: 'Content Creator & Senior Network Field Engineer',
  email: 'Hasanbakry86@gmail.com',
  youtubeSubscribers: '135K+',
  tiktokFollowers: '200K+',
  summary: 'Content Creator & Senior Network Field Engineer',
  experience: [
    {
      title: 'YouTube Content Creator',
      company: 'Independent',
      period: 'Jul 2022 – Present',
      location: 'Jazan, Saudi Arabia',
      points: [
        'Creates engaging long-form videos with strong storytelling and clean editing.',
        'Grows an active community of 135K+ subscribers through consistent, high-value content.',
        'Uses analytics to improve performance, retention, and channel reach.'
      ]
    },
    {
      title: 'TikTok Content Creator',
      company: 'Independent',
      period: 'Jan 2023 – Present',
      location: 'Jazan, Saudi Arabia',
      points: [
        'Produces fast, creative short-form videos tailored to trends and audience interest.',
        'Built a strong presence with 200K+ followers through viral and high-engagement content.',
        'Focuses on consistency, visual impact, and algorithm-driven growth.'
      ]
    },
    {
      title: 'Senior IT Field Engineer',
      company: 'SITA CUTE Project, JA Regional Airport',
      period: 'Nov 2021 – Present',
      location: 'Jazan, Saudi Arabia',
      points: [
        'Delivered on-site support for airport IT systems and network infrastructure.',
        'Troubleshot workstations, peripherals, and network connectivity issues.',
        'Supported maintenance of CUTE systems to reduce service disruption.',
        'Executed inspections and preventive maintenance on network devices.',
        'Worked with senior engineers to implement updates and system improvements.'
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor's in Computer & Network Engineering",
      school: 'Jazan University',
      period: 'Jan 2015 – Aug 2020',
      location: 'Jazan, Saudi Arabia',
      description: 'Completed a capstone project in Networking, emphasizing practical application of engineering principles.'
    }
  ],
  skills: {
    technical: ['Creativity', 'Video Editing', 'Content Strategy', 'Network Engineering', 'IT Support', 'Problem Solving'],
    soft: ['Strategic Communication', 'Analytical Thinking', 'Problem-solving', 'Cross-functional Collaboration', 'Fast Learning', 'Creativity']
  },
  languages: ['Arabic — Native', 'English — Full Professional Proficiency']
};

// ================== Videos Data ==================
export const videosData: Video[] = [
  {
    id: '1',
    title: 'The city on which the end of the world fell | Hiroshima',
    description: 'A look back at Hiroshima, the city forever changed by the atomic bomb.',
    timeSpent: '2 Weeks',
    videoUrl: 'https://www.youtube.com/embed/o1UAt6iBEFE',  // Correct embed URL
    thumbnail: heroshimaThumbnail,
    scriptUrl: '/scripts/heroshima-script.pdf',           // Put your PDF inside public/scripts/
    scriptPreview: `Imagine a 19-year-old young man, sick and depressed, sitting in a small cafe eating a sandwich and drinking coffee. 
Suddenly, a royal procession appears in front of him, featuring the heir of Austria and his wife. Shocked, the young man makes a drastic decision: he fires two shots, killing both, which triggers a global conflict, resulting in 17 million deaths. Discover the full story in this video.`,
    platform: 'youtube'
  },
  {
    id: '2',
    title: 'World War I | The Event That Changed the World',
    description: 'An overview of World War I and how it reshaped nations, politics, and the course of history.',
    timeSpent: '3 Days',
    videoUrl: 'https://www.youtube.com/embed/M7u-Irpp53k',
    thumbnail: worldwar1Thumbnail,
    scriptUrl: '/scripts/worldwar1-script.pdf',
    scriptPreview: `Explore the man responsible for igniting World War I. Learn how his actions caused 17 million deaths, spread disease, and reshaped the world map. This pivotal event also laid the foundation for World War II. Watch the full story in this video.`,
    platform: 'youtube'
  }
];
//tt