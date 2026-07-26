// ============================================================================
//  全站内容都集中在这个文件里。改这里就够了，不用动组件。
//  内容来自《彭梓轩简历.pdf》(2026-02)。
//  注意：简历里的手机号没有放上来 —— 公开网页挂手机号会被爬虫抓去做骚扰电话，
//        想让人联系你，邮箱足够了。真要加，自己在 socials 里补。
// ============================================================================

export const profile = {
  // ---- 顶部导航 & 站点标识 --------------------------------------------------
  nameEn: 'Zixuan Peng',
  nameZh: '彭梓轩',
  // Header 里会给这个字母加一颗旋转的 ✦
  fancyLetter: 'i',

  // ---- 左侧个人卡片 ---------------------------------------------------------
  quote:
    '📡 A signal is never just a waveform — it carries the shape of the channel it passed through, the noise it survived, and the hardware that read it. Understanding any one of these means understanding the other three. Engineering, to me, is exactly that kind of listening.',

  avatar: '/face.jpg', // 换成自己的照片：把图片放进 public/，再改成 '/face.jpg'
  taglines: [
    '🎓 B.Eng. Electronic Science & Technology · Class of 2026',
    '🔧 Embedded Software · Communication Algorithms',
  ],

  buttons: [
    { label: 'Blog', url: 'https://pengzixuan.me' },
    { label: 'CV', url: '' }, // 把简历导出成 PDF 放进 public/cv.pdf，然后写 '/cv.pdf'
  ],

  socials: {
    email: 'zixuanpeng681@gmail.com',
    github: 'https://github.com/Windsor-Andrew',
    scholar: '',
    linkedin: '',
    blog: 'https://pengzixuan.me',
  },

  lastUpdated: '2026/07/26',

  // ---- About ---------------------------------------------------------------
  about: {
    intro: `Hi, I'm <strong>Zixuan Peng</strong> (彭梓轩), a final-year undergraduate in
      <a href="#education">Electronic Science and Technology</a> at
      <a href="https://www.wh.sdu.edu.cn/" target="_blank" rel="noopener noreferrer">Shandong University (Weihai)</a>,
      graduating in <strong>June 2026</strong>.
      I work at the layer where <strong>signals meet silicon</strong>: writing C/C++ close to the metal,
      putting communication algorithms onto real radios, and getting vision models to run on
      hardware that has no room to spare.
      I'm currently based in Suzhou, and I also keep a long-running writing archive at
      <a href="https://pengzixuan.me" target="_blank" rel="noopener noreferrer">pengzixuan.me</a>.`,

    interestsTitle: 'What I Work On',
    interests: [
      {
        title: 'Embedded Software',
        body: 'C/C++ on STM32 and 8051 — low-level drivers, memory management, and the peripheral protocols (UART / I²C / SPI) that everything else sits on. I care about code that still behaves when the board is the constraint.',
      },
      {
        title: 'Communication Systems',
        body: 'PCM coding, QPSK modulation and BER analysis — built end to end on a USRP software-defined radio, not just simulated. Comfortable moving between MATLAB verification and hardware bring-up.',
      },
      {
        title: 'Algorithm Engineering',
        body: 'Taking models that work in Python and making them work on an edge device: cross-compilation, dependency wrangling, profiling, and cutting the redundant work that a training script can afford but a deployment cannot.',
      },
    ],

    callout:
      'I am currently looking for full-time roles as an <strong>Embedded Software</strong>, <strong>Communication Algorithm</strong>, or <strong>Electronics Engineer</strong>, starting mid-2026. Feel free to reach out by email <strong>: )</strong>',
  },

  // ---- News ----------------------------------------------------------------
  news: [
    { time: '2026.07', content: 'Launched this personal homepage.' },
    { time: '2025.07', content: 'Joined the <b>Xiaomi × SDU Campus Engineer Summer Camp</b> in Qingdao.' },
    { time: '2025.05', content: 'Wrapped up the remote-sensing object detection research project.' },
    { time: '2024.04', content: 'Won <b>Second Prize</b> at the SDU (Weihai) Energy Saving &amp; Emission Reduction Competition.' },
  ],

  // ---- Skills --------------------------------------------------------------
  skills: [
    {
      group: 'Programming',
      items: [
        'C / C++ — low-level drivers, memory management',
        'MATLAB — signal processing simulation',
        'Java — Android development',
      ],
    },
    {
      group: 'Hardware',
      items: ['STM32 / 8051 MCU', 'FPGA (Verilog)', 'PCB layout'],
    },
    {
      group: 'Communications & Instruments',
      items: [
        'UART / I²C / SPI',
        'QPSK / PCM modulation, BER analysis',
        'Oscilloscope, signal generator, logic analyzer',
        'LabVIEW / USRP',
      ],
    },
    {
      group: 'Languages',
      items: ['English — CET-6', 'Mandarin — Level 2-A'],
    },
  ],

  // ---- Projects ------------------------------------------------------------
  publicationsTitle: 'Projects',
  publications: [
    {
      id: 'yolo-remote-sensing',
      year: 2025,
      title: 'Pose-Aware Remote Sensing Object Detection with YOLO',
      authors: [{ name: 'Zixuan Peng', role: 'first' }],
      venues: [
        { name: 'Undergraduate Research Program', type: 'project' },
        { name: 'Core Developer', type: 'wip' },
      ],
      period: '2024.06 - 2025.05',
      abstract:
        'A high-accuracy detection system for oil-tank targets in remote sensing imagery, built to run on resource-constrained embedded platforms. I owned the C++ productionization of the vision pipeline — porting Python-trained models into the embedded environment and solving the cross-compilation and dependency-adaptation problems that came with it. I then unit-tested and memory-checked the core modules, and lifted their runtime efficiency by 15% by tightening loop logic and data structures to cut redundant memory copies, which is what made the algorithm viable in real time on an edge device.',
      links: { code: '', paper: '', msg: '' },
      tags: ['Selected', 'Embedded', 'Computer Vision', 'C++'],
    },
    {
      id: 'qpsk-sdr',
      year: 2025,
      title: 'QPSK Passband Communication System on a Software-Defined Radio Platform',
      authors: [{ name: 'Zixuan Peng', role: 'first' }],
      venues: [
        { name: 'Course Project', type: 'project' },
        { name: 'Project Lead', type: 'wip' },
      ],
      period: '2024.12 - 2025.01',
      abstract:
        'A complete passband communication chain — PCM encoding/decoding plus QPSK modulation and demodulation — designed and implemented on LabVIEW and a USRP software-defined radio. I implemented 13-segment PCM quantization in MATLAB and verified the baseband logic by comparing input/output waveforms against constellation diagrams. I then took the transmitter and receiver through hardware integration, sweeping transmit attenuation from 0 to 90 dB against receive gain to characterize bit error rate under an AWGN channel and confirm the system held up.',
      links: { code: '', paper: '', msg: '' },
      tags: ['Selected', 'Communications', 'SDR', 'MATLAB'],
    },
    {
      id: 'radiative-cooling-rig',
      year: 2024,
      title: 'Standardized Indoor Measurement Rig for Radiative-Cooling Film Power',
      authors: [{ name: 'Zixuan Peng', role: 'first' }],
      venues: [
        { name: 'Energy Saving Competition — 2nd Prize', type: 'conference' },
        { name: 'Hardware Control Lead', type: 'wip' },
      ],
      period: '2023.09 - 2024.04',
      abstract:
        'A measurement rig using liquid nitrogen as the cold source, built to standardize how the cooling power of radiative films is tested. I designed and wired the PLC control system, driving the mechanical transmission and temperature sensors precisely enough for repeatable measurements. The rig gave sky radiative cooling research a workable standardized test method, and took Second Prize at the 2024 SDU (Weihai) Energy Saving & Emission Reduction Competition.',
      links: { code: '', paper: '', msg: '' },
      tags: ['Hardware', 'PLC', 'Measurement'],
    },
  ],

  // ---- Experience ----------------------------------------------------------
  experiences: [
    {
      type: 'Internship',
      organization: {
        name: 'Xiaomi × Shandong University',
        link: 'https://www.mi.com/',
        short: 'MI',
      },
      period: '2025.07',
      role: 'Software Development Trainee — 2025 Campus Engineer Summer Camp',
      location: 'Qingdao, China',
      projects: [
        {
          name: 'Studied the Android development framework and analyzed Framework-layer source, covering multithreading and network communication.',
          roles: [],
        },
        {
          name: 'Owned a graphics module end to end — refactored its logic and optimized memory management at the C++ layer to resolve UI jank under complex scenes.',
          roles: ['Performance'],
        },
      ],
    },
  ],

  // ---- Education -----------------------------------------------------------
  education: [
    {
      university: 'Shandong University (Weihai)',
      degree: 'B.Eng. in Electronic Science and Technology · GPA 3.05 / 4.0',
      period: '2022.09 - 2026.06',
      location: 'Weihai, China',
      courses: [
        { name: 'Embedded Systems', grade: null },
        { name: 'Signals & Systems', grade: null },
        { name: 'Principles of Communications', grade: null },
        { name: 'Microprocessors & Interfacing', grade: null },
        { name: 'Electromagnetic Fields & Microwave Technology', grade: null },
        { name: 'Analog / Digital Circuits', grade: null },
        { name: 'Java Programming', grade: null },
      ],
    },
  ],

  // ---- Selected Awards -----------------------------------------------------
  awards: [
    {
      text: 'Second Prize, SDU (Weihai) Energy Saving & Emission Reduction Competition',
      highlight: '2024',
    },
    { text: 'Shandong University Special Talent Scholarship, Second Class', highlight: '2024' },
    { text: 'Outstanding Social Practice Team Member, University Level', highlight: '2023' },
    { text: 'NCRE Level 2 Certificate', highlight: '' },
  ],

  // ---- Something more ------------------------------------------------------
  more: [
    '📚 I read and write a lot outside of engineering — essays, film, photography, and a long-running personal archive I have kept for years.',
    '🪨 I play Go, and I keep a review journal of my own games. Losing well is its own skill.',
  ],
};

export default profile;
