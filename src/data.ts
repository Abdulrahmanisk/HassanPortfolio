export interface Video {
  id: string;
  title: string;
  description: string;
  timeSpent: string;
  videoUrl: string;
  thumbnail: string;
  scriptUrl: string;
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

export const resumeData: ResumeData = {
  name: 'Hassan Ahmed Bakry',
  title: 'Content Creator & Network Engineer',
  email: 'Hasanbakry86@gmail.com',
  youtubeSubscribers: '135K+',
  tiktokFollowers: '200K+',
  summary: 'Content Creator and Senior Network Field Engineer skilled in delivering high-quality digital content and managing mission-critical network operations. Known for creativity, technical precision, and strong problem-solving under pressure.',
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
      period: 'Jan 2020 – Aug 2024',
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

export const videosData: Video[] = [
  {
    id: '1',
    title: 'Amazing Content Creation Journey',
    description: 'A comprehensive guide on how I started my content creation journey and the lessons learned along the way.',
    timeSpent: '2 weeks',
    videoUrl: 'https://www.youtube.com/embed/M7u-Irpp53k',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    scriptUrl: '#script1.pdf',
    platform: 'youtube'
  },
  {
    id: '2',
    title: 'Quick TikTok Trend Tutorial',
    description: 'A fast-paced short-form video showing a trending technique that can help boost engagement on social media platforms.',
    timeSpent: '3 days',
    videoUrl: 'https://www.tiktok.com/embed/7484629383211126023',
    thumbnail: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
    scriptUrl: '#script2.pdf',
    platform: 'tiktok'
  }
];
