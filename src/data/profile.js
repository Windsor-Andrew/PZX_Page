// ============================================================================
//  全站内容都集中在这个文件里。改这里就够了，不用动组件。
//  【TODO】标记的地方是我不确定的信息，请你自己核对/替换。
// ============================================================================

export const profile = {
  // ---- 顶部导航 & 站点标识 --------------------------------------------------
  nameEn: 'Zixuan Peng',
  nameZh: '彭梓轩',
  // Header 里会给这个字母加一颗旋转的 ✦，挑名字里你喜欢的一个字母
  fancyLetter: 'i',

  // ---- 左侧个人卡片 ---------------------------------------------------------
  quote:
    '📡 A signal is never just a waveform — it carries the shape of the channel it passed through, the noise it survived, and the hardware that read it. Understanding any one of these means understanding the other three. Engineering, to me, is exactly that kind of listening.',

  avatar: '/avatar.svg', // 换成自己的照片：把图片放进 public/，再改成 '/face.jpg'
  taglines: ['🎓 Undergraduate Student', '📡 mmWave · RIS · Embedded Systems'],

  buttons: [
    { label: 'Blog', url: 'https://pengzixuan.me' },
    { label: 'CV', url: '' }, // 【TODO】把 CV 传到 public/cv.pdf，然后写 '/cv.pdf'
  ],

  socials: {
    email: 'zixuanpeng681@gmail.com',
    github: 'https://github.com/Windsor-Andrew',
    scholar: '', // 【TODO】有 Google Scholar 再填
    linkedin: '', // 【TODO】
    blog: 'https://pengzixuan.me',
  },

  lastUpdated: '2026/07/26',

  // ---- About ---------------------------------------------------------------
  // 支持 HTML 字符串，方便加链接。
  about: {
    // 【TODO】学校 / 导师 / 年级，全部换成真实信息
    intro: `Hi, I'm <strong>Zixuan Peng</strong> (彭梓轩), an undergraduate student in
      <a href="#education">Electronic Science &amp; Technology</a> at
      <a href="#education">Your University</a>.
      My work sits where <strong>wireless systems</strong> meet <strong>real hardware</strong>:
      millimeter-wave links, reconfigurable intelligent surfaces (RIS), signal processing,
      and the embedded firmware that has to make all of it actually run on a board.
      I also write regularly at <a href="https://pengzixuan.me" target="_blank" rel="noopener noreferrer">pengzixuan.me</a>,
      where I keep a long-running archive of technical notes and essays.`,

    interests: [
      {
        title: 'Millimeter-Wave & RIS',
        body: 'Channel modeling and beam management for mmWave links, and how reconfigurable intelligent surfaces can reshape coverage in environments where line-of-sight simply is not available.',
      },
      {
        title: 'Signal Processing for Communications',
        body: 'Estimation, detection and synchronization — with a bias toward algorithms that survive fixed-point arithmetic and a real clock budget, not just a MATLAB script.',
      },
      {
        title: 'Embedded Systems Engineering',
        body: 'Turning the above into working hardware: MCU/FPGA firmware, real-time constraints, and the unglamorous debugging that decides whether a system ships.',
      },
    ],

    callout:
      'I am currently looking for graduate research opportunities. If our interests overlap, please feel free to reach out by email <strong>: )</strong>',
  },

  // ---- News ----------------------------------------------------------------
  // 【TODO】换成真实动态。留空数组会自动隐藏整个板块。
  news: [
    { time: '2026.07', content: 'Launched this academic homepage.' },
    { time: '2026.01', content: 'Rebuilt <b>pengzixuan.me</b> as a long-form personal archive.' },
  ],

  // ---- Publications & Projects --------------------------------------------
  // 【TODO】没有论文就先只留 project，type: 'project' 会显示成项目卡片。
  publications: [
    {
      id: 'placeholder-mmwave',
      year: 2026,
      type: 'project',
      title: 'Your mmWave / RIS Project Title Here',
      authors: [{ name: 'Zixuan Peng', role: 'first' }, { name: 'Advisor Name', role: 'corresponding' }],
      venues: [{ name: 'Undergraduate Research Project', type: 'wip' }],
      abstract:
        'Replace this with a short description of what the project does, what you built, and what the result was. Two to four sentences is plenty — the reader clicks through if they want detail.',
      links: { code: '', paper: '', msg: '' },
      tags: ['Selected', 'mmWave', 'Signal Processing'],
    },
    {
      id: 'placeholder-embedded',
      year: 2025,
      type: 'project',
      title: 'Your Embedded Systems Project Title Here',
      authors: [{ name: 'Zixuan Peng', role: 'first' }],
      venues: [{ name: 'Course / Competition Project', type: 'project' }],
      abstract:
        'Replace this with what you built, on what hardware, and what the hard part was.',
      links: { code: '', paper: '', msg: '' },
      tags: ['Embedded', 'FPGA'],
    },
  ],

  // ---- Experience ----------------------------------------------------------
  // 【TODO】换成真实经历；type 用于筛选，可选 'Research' / 'Work' / 'Project'
  experiences: [
    {
      type: 'Research',
      organization: { name: 'Your Lab / Group Name', link: '', short: 'LAB' },
      period: '2025.09 - Present',
      role: 'Undergraduate Research Assistant',
      location: 'China',
      projects: [{ name: 'Research details to be updated.', roles: [] }],
    },
  ],

  // ---- Education -----------------------------------------------------------
  // 【TODO】学校、专业、时间、课程分数全部换成真实的
  education: [
    {
      university: 'Your University',
      degree: 'B.Eng. in Electronic Science and Technology',
      period: '2023.09 - 2027.06',
      location: 'China',
      courses: [
        { name: 'Signals & Systems', grade: null },
        { name: 'Principles of Communications', grade: null },
        { name: 'Digital Signal Processing', grade: null },
        { name: 'Electromagnetic Fields & Waves', grade: null },
        { name: 'Microprocessors & Embedded Systems', grade: null },
        { name: 'RF Circuit Design', grade: null },
      ],
    },
  ],

  // ---- Selected Awards -----------------------------------------------------
  // 【TODO】换成真实奖项
  awards: [
    { text: 'Your Scholarship / Competition Award', highlight: '2025' },
    { text: 'Another Award Worth Listing', highlight: '2024' },
  ],

  // ---- Something more ------------------------------------------------------
  more: [
    '📚 I read and write a lot outside of engineering — essays, film, photography, and a long-running personal archive I have maintained for years.',
    '🪨 I play Go, and I keep a review journal of my own games. Losing well is its own skill.',
  ],
};

export default profile;
