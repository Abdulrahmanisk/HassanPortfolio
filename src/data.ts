// src/data.ts
import heroshimaThumbnail from './thumbnails/JAPAN.png';
import worldwar1Thumbnail from './thumbnails/firstworldwar.png';
import ufcthumbnail from './thumbnails/ufc.png';


export interface Video {
  id: string;
  title: string;
  description: string;
  timeSpent: string;
  videoUrl: string;         // Embed-ready URL
  thumbnail: string;        // Imported image
  scriptUrl: string;        // PDF path in /public/scripts/
  scriptPreview: string;    // Short preview text for modal
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
  summary: 'Multifaceted professional skilled in creating engaging content and delivering advanced network engineering solutions in the field.',
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
    title: 'المدينة التي سقطت عليها نهاية العالم | هيروشيما',
    description: 'في أقل من ثانية، تبخّرت مدينة، واحترق كل شيء… ظلال على الجدران، وجثث بلا ملامح. هذه ليست قصة خيال… هذه هيروشيما',
    timeSpent: '5 Days - Part-Time',
    videoUrl: 'https://www.youtube.com/embed/o1UAt6iBEFE', // Embed-ready
    thumbnail: heroshimaThumbnail,
    scriptUrl: '/heroshima.docx',           // Place PDF in public/scripts/
    scriptPreview: `عام 1945، وفي صباح هادئ فوق سماء هيروشيما، سقط جسم معدني واحد وفتح أبواب الجحيم على مدينة كاملة. في ثوانٍ تبخّر الآلاف، وفي الساعات التالية بدأ جحيم لا يُرى اسمه الإشعاع النووي. مطر أسود، أجساد محترقة، ومدينة اختفت من الوجود بلا أي إنذار.هذه ليست قصة انفجار فقط… هذه قصة أسوأ يوم عاشته البشرية`,
    platform: 'youtube'
  },
  {
    id: '2',
    title: 'الحرب العالمية الاولى | الحدث الذي غير العالم',
    description: 'رصاصة واحدة في سراييفو أشعلت حربًا غيرت العالم! في هذه الحلقة، نكشف كيف بدأت الحرب العالمية الأولى ومن أشعل فتيلها وكيف انتهت',
    timeSpent: '8 Days - Part-Time',
    videoUrl: 'https://www.youtube.com/embed/M7u-Irpp53k',
    thumbnail: worldwar1Thumbnail,
    scriptUrl: '/scripts/worldwar1-script.pdf',
    scriptPreview: `Explore the man responsible for igniting World War I. Learn how his actions caused 17 million deaths, spread disease, and reshaped the world map. This pivotal event also laid the foundation for World War II. Watch the full story in this video.`,
    platform: 'youtube'
  },
    {
    id: '2',
    title:'حبيب ضد كونر | عداوة لاتنتهي',
    description:'القصة الحقيقية لأعنف عداوة في تاريخ اليو إف سي… من الشرارة الأولى إلى الليلة التي تغيّر فيها كل شيء',
    timeSpent: '5 Days Part-Time',
    videoUrl: 'https://www.youtube.com/embed/WatAx0G_hpY',
    thumbnail: ufcthumbnail,
    scriptUrl: '/scripts/worldwar1-script.pdf',
    scriptPreview: 'كانت عداوة حبيب وكونور حرب مو نزال: سبّ للدين والأهل، واستفزازات كسرت كل الخطوط الحمراء… لين وصل الموضوع لاعتداء الباص وانفجار الكراهية. كونور أخذ الألقاب بالضجة والهروب، وحبيب كان ينزف إصابات ويحارب عشان بس يحصل فرصة عادلة. لما سحبوا اللقب من كونور، حبيب أخذ الحزام وصار هو البطل… ووقتها بدأ كونور يحرق الدنيا بكلامه وإهاناته قدّام العالم. ليلة 6 أكتوبر، دخلوا القفص وكل اللي انقال صار حقيقة: سيطرة حبيب، خنق، واستسلام مذل خلّى كونور يطيح قبل يطيح رسميّاً. وبعد الجرس ما انتهت القصة… القفص صار ساحة فوضى، وحبيب خرج بطلًا بلا خسارة، ثم اعتزل بعد وفاة أبوه وهو يحمل أكبر انتصار وأكبر وجع'
    platform: 'youtube'
  }
];
