export type { Chapter, Project, PlaygroundItem } from "./types";
import type { Project, PlaygroundItem } from "./types";

export const projects: Project[] = [
  {
    slug: "kato-8-studios",
    name: "Kato.8 Studios",
    emoji: "🐙",
    logo: "/kato8/kato8logo.png",
    subtitle: "Designing the studio, then running its voice",
    thumbnail: "/kato8/kato8thumbnailwide.png",
    caseImage: "/kato8/kato8squarethumbnail.png",
    tagline:
      "Building the digital presence for an indie game studio from short-form social content to community infrastructure.",
    overview:
      "I joined Kato.8 as a graphic design intern and ended up doing two jobs: I designed their website from wireframe to hi-fi, and I became the only person running their social media.",
    timeline: "March 2026 - June 2026",
    role: "Graphic Designer · Social Media Lead",
    stack: "Figma · Webflow · CapCut · Canva",
    client: "Kato.8 Studios",
    chapters: [
      {
        id: "overview",
        label: "Overview",
        heading: "Overview",
        sections: [
          {
            body: [
              "I joined Kato.8 as a graphic design intern and ended up doing two jobs: I designed their website from wireframe to hi-fi, and I became the only person running their social media. Thus, this case study is two stories under one roof. One is about translating a brand into a working interface. The other is about translating that same brand into something people actually stop and watch.",
            ],
          },
        ],
      },
      {
        id: "context",
        label: "Context",
        heading: "What is this studio?",
        sections: [
          {
            body: [
              "Kato.8 is an indie game studio with a pretty simple thesis: put creative work back in the hands of creatives. Human-first, not corporate. The founder, Terry, is also the face of it, which matters a lot for everything that came after.",
              "I came in for graphic design, but filled in the gaps for social media, eventually leading it. These two halves feed each other. The website is the brand standing still. The content is the brand moving.",
            ],
          },
        ],
      },
      {
        id: "design",
        label: "Design",
        heading: "Translating The Website To Hi-Fi",
        sections: [
          {
            body: [
              "A fellow member of the team and I translated low-fidelity prototypes to high-fidelity.",
              { photo: "/kato8/lofihifi.png" },
            ],
          },
        ],
      },
      {
        id: "problem",
        label: "Problem",
        heading: "Zero Presence",
        sections: [
          {
            body: [
              "The studio needed a real web presence, not a placeholder. It had to do a few things at once: explain what Kato.8 is to people who'd never heard of it, and introduce the team in a way that didn't feel like a corporate \"About\" page.",
              "There also wasn't an existing system to lean on. So before I could design pages, I basically had to decide what the brand looked like when it stood still.",
            ],
          },
        ],
      },
      {
        id: "social-media",
        label: "Social Media",
        heading: "How I Led The Marketing",
        sections: [
          {
            body: [
              "This is the half that wasn't in the original job description, and it's the half that grew the fastest.",
              "I took over the social media editing completely. I'm the only one editing it, which I'm fine with, because it means the feed actually stays consistent. I cut around three short-form vertical videos a week across TikTok and Instagram.",
              "The thing I had to figure out wasn't editing speed, it was **voice**.",
              "As @kqtei I'd built an audience of 2M on TikTok across 8 years of dance content, and more recently started teaching what I'd learned: hook theory, relatability vs. personality, specificity over generality, the pivot. At Kato.8, I had to translate those principles, a faceless indie studio with a founder who talks like he's texting a friend, not pitching investors.",
              "The frameworks I brought from my own channel had to be adapted, not copy-pasted. Relatability works differently for a game studio than for a dancer.",
              "Personal = follows is still true, but \"personal\" for Terry means founder vulnerability and studio behind-the-scenes, not day-in-my-life content. I had to find the version of that formula that fit his voice. Terry doesn't talk like a press release, he talks like he's updating a friend. So the edits had to protect that. Fast enough to hold a scroll, but never so over-produced that it stopped sounding like a real person.",
              { photo: "/kato8/kato8strat.png" },
              { photo: "/kato8/kato8timeline.png" },
            ],
          },
        ],
      },
      {
        id: "result",
        label: "The Result",
        heading: "Kato.8’s Name Is Out",
        sections: [
          {
            body: [
              "Since March 2026, the studio's TikTok went from under 100 followers to 1,000. Not a viral-overnight number, but a real, earned curve for an account that started from basically nothing, posting consistently with a clear voice. For an indie studio where attention is the whole game before the game even ships, that's the metric that matters.",
              { video: "/kato8/kato8followergrowth.mp4", freezeAt: 209 },
            ],
          },
        ],
      },
      {
        id: "reflection",
        label: "Reflection",
        heading: "Things I’m Learning",
        sections: [
          {
            body: [
              "The biggest thing is that I stopped seeing \"design\" and \"content\" as two separate skills. They're the same job pointed at two different surfaces. The website is the brand holding still long enough for someone to understand it. The content is the brand in motion, proving it's alive. Doing both for the same studio at the same time made me a lot sharper at keeping a brand consistent across formats, which is exactly the kind of integrated thinking I'm taking into my master's at USC.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ao-dai-festival",
    name: "Áo Dài Festival VIII Website Redesign & UX Support",
    emoji: "👘",
    logo: "/adf8/adf8logo.png",
    thumbnail: "/adf8/adfthumbnail.png",
    thumbnailHeight: "h-[80%]",
    thumbnailScale: 1,
    caseImage: "/adf8/adfthumbnail.png",
    tagline:
      "Redesigning a cultural festival's web presence to build credibility and streamline volunteer operations.",
    overview:
      "Áo Dài Festival in San Jose is an annual celebration of Vietnamese heritage and culture. My role in this project covered improving the content structure, volunteer onboarding and navigation within Wix constraints.",
    timeline: "Dec 2025 - Feb 2026",
    role: "Web Design · Content Architecture · Volunteer Systems",
    client: "Áo Dài Festival Organization",
    chapters: [
      {
        id: "overview",
        label: "Overview",
        heading: "Overview",
        sections: [
          {
            body: [
              "Áo Dài Festival in San Jose is an annual celebration of Vietnamese heritage and culture. My role in this project covered improving the content structure, volunteer onboarding and navigation within Wix constraints.",
            ],
          },
        ],
      },
      {
        id: "context",
        label: "Context",
        heading: "The Problem: Credibility",
        sections: [
          {
            body: [
              "Cindy Phan, one of the festival founders, brought me on with a simple goal, “Let’s get more eyes on ADF8 and convert them to ticket buyers.”",
              "As I first skimmed the website, I found that the real problem wasn't traffic: it was credibility.",
              "The homepage looked like a collage of competing fonts. The volunteer sign-up? A Google Form link.",
              "If someone landed on the site, especially a first-time volunteer or attendee, they wouldn't trust it enough to take action. My job wasn't just to highlight ADF8. It was to make the entire site feel cohesive and reliable.",
            ],
          },
        ],
      },
      {
        id: "content-audit",
        label: "Content Audit",
        heading: "What I Found (And Why It Mattered)",
        sections: [
          {
            body: [
              "I started with a content audit, looking at the site through the eyes of three key users: first-time attendees, potential volunteers, and festival organizers managing updates.",
              "The volunteer form was an external Google Form link. It looked unprofessional and didn't integrate with the festival's contact system. For a volunteer-driven event, this created unnecessary friction for both sides. Volunteers are the backbone of the festival.",
              "One of the organization's designers had created a brand font system, but it wasn't being used consistently across the site. There were multiple fonts competing onscreen.",
              { photo: "/adf8/adf-prob.png", scale: 0.8},
            ],
          },
        ],
      },
      {
        id: "decisions",
        label: "Design Decisions",
        heading: "Design Decisions",
        sections: [
          {
            subtitle: "Move Volunteer Sign-Up Into Wix",
            body: [
              "I replaced the external Google Form with a native Wix intake form, keeping the same fields but now feeding responses directly into the organization's contact system. Organizers were spending more time than needed, adding volunteer emails to their mailing list. They’d copy-paste data repeatedly just to send a welcome email or event update.",
              "It also solved a credibility problem.",
              "An external Google Form was informal, as if you were filling out a survey, not officially joining a team. The Wix embedded form ensured a sense of reliability. However, Wix forms aren't as flexible as Google Forms. I couldn't add conditional logic or advanced features. But for this use case, simplicity was more valuable than functionality.",
              { photo: "/adf8/adf-volunteer.png", scale: 0.8 },
            ],
          },
          {
            subtitle: "Standardized Typography",
            body: [
              "When I told organizers \"the fonts make the website look scattered,\" they understood much faster. Fixing typography wasn't just about making the site pretty, it was about making the site feel intentional.",
              "This was especially critical for elders in the Vietnamese community. A messy site might signal that it's unsafe or \"fake.\"",
              "Wix didn't have the brand fonts in its library, so I had to source and upload them manually to the platform. The site then matched the quality of the event itself.",
              { photo: "/adf8/adf-typography.png" },
            ],
          },
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        heading: "A More Reliable Site",
        sections: [
          {
            body: [
              "The updated site cleared the initial mission: make the festival feel reliable.",
              {
                list: [
                  "Volunteer sign-ups were streamlined.",
                  "Marketing emails go out directly from the system.",
                  "Visual consistency established.",
                  "Positive user feedback: Volunteers and attendees said the site was \"easy to navigate.\"",
                  "Organizers empowered: Cindy and the team can make basic updates independently.",
                ],
              },
              { photo: "/adf8/adf-signups.png", scale: 0.8 },
            ],
          },
        ],
      },
      {
        id: "reflection",
        label: "Reflection",
        heading: "What I learned",
        sections: [
          {
            body: [
              "Community design is about structure and reliability, not just pretty interfaces.",
              "Maintenance is design work.",
              "Updating flyers and fixing photo alignment might not seem like \"real\" design, but it's what keeps a community site alive. If I'd built something pretty but unmaintainable, I would have failed. Ongoing support is what makes the system sustainable.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "stepsync",
    name: "StepSync: Dance Portfolio & Audition Tracking App",
    emoji: "💃",
    logo: "/stepsync/stepsynclogo.png",
    thumbnail: "/stepsync/stepsync_thumbnail.png",
    caseImage: "/stepsync/stepsyncthumbnail.png",
    tagline:
      "Designing a credible, mobile-first platform for dancers to own their portfolio, track auditions, and get verified; built from lived experience in the dance community.",
    overview:
      "StepSync is an independent UX/UI project aimed to address the major gap in the dance community: the absence of a credible, centralized platform for dancers. As the sole designer, I drew from my personal experience as a dancer and envisioned a mobile-first platform where dancers can build portfolios, track auditions, and receive team-verified credentials.",
    timeline: "June 2026 - Aug 2025",
    role: "Product Design · UX Research · Branding",
    client: "Self-initiated",
    chapters: [
      {
        id: "overview",
        label: "Overview",
        heading: "Overview",
        sections: [
          {
            body: [
              "StepSync is an independent UX/UI project aimed to address the major gap in the dance community: the absence of a credible, centralized platform for dancers. As the sole designer, I drew from my personal experience as a dancer and envisioned a mobile-first platform where dancers can build portfolios, track auditions, and receive team-verified credentials.",
            ],
          },
        ],
      },
      {
        id: "problem",
        label: "The Problem",
        heading: "A Community with No Home",
        sections: [
          {
            body: [
              "The dance community lacks a professional platform for portfolio-building, credentialing, and audition tracking. Dancers rely on scattered tools (Instagram, Google Drive, or DMs) that don’t present their resume and credits cohesively.",
              "I set out to design a platform that would bridge this gap and empower dancers to own their narrative.",
            ],
          },
        ],
      },
      {
        id: "research",
        label: "User Research",
        heading: "Struggle in Seeking Dance Profession",
        sections: [
          {
            body: [
              "I interviewed professional dancers in the LA dance community. I came to learn that the dance community struggles across three main issues: showcasing portfolios, verifying team credentials, and tracking their auditions.",
              { photo: "/stepsync/redssaffinitymapping.png" },
              "I conducted interviews and collected stories from dancers across different college and competitive teams. Their anecdotes revealed that while social media offers visibility, it lacks structure and trust, which pushes a widespread uncertainty.",
              {
                quote:
                  "“Only easy dances go viral. Most are influencers. I’m a dancer, and I can’t get those views. My videos aren’t flashy, they’re professional and to compete.”",
              },
              { photo: "/stepsync/redssissues.png", scale: 0.8},
            ],
          },
        ],
      },
      {
        id: "ideation",
        label: "Ideation",
        heading: "Ideation",
        sections: [
          {
            body: [
              "I leveraged these points to guide my design decisions.",
              { photo: "/stepsync/redssdesigndecisions.png" },
            ],
          },
        ],
      },
      {
        id: "structured-user-flow",
        label: "Structured User Flow",
        heading: "Structured User Flow",
        sections: [
          {
            body: [
              "During my design process, I wanted to prioritize some key points:",
              {
                list: [
                  "Centralized/Standardized Profiles",
                  "Verification Flow",
                  "Audition Tracking",
                  "Inclusive Design",
                  "Simplify the user interface",
                ],
              },
              { photo: "/stepsync/ssreduserflow.png" },
            ],
          },
        ],
      },
      {
        id: "wireframing",
        label: "Wireframing",
        heading: "Wireframing",
        sections: [
          {
            body: [
              "I focused on showcasing credibility, reducing scattered tools, and creating clear paths for auditions and verification.",
              "Because dancers and organizers primarily share and consume media on mobile, StepSync was designed with a mobile-first approach.",
              { photo: "/stepsync/redsswireframe1.png" },
            ],
          },
        ],
      },
      {
        id: "iteration",
        label: "Iteration",
        heading: "Iteration",
        sections: [
          {
            body: [
              "I developed low-fidelity prototypes to explore different approaches to the layout of StepSync.",
              { photo: "/stepsync/sslofi.png" },
            ],
          },
        ],
      },
      {
        id: "final-design",
        label: "Final Design",
        heading: "Final Design",
        sections: [
          {
            body: [
              "StepSync: Dance Progress and Auditions Localized! After a quick sign-up, dancers select their goals, availability, and interests. This powers a tailored feed from audition opportunities to community events, ensuring that every dancer immediately sees content relevant to their career path and aspirations.",
              { photo: "/stepsync/sshifi1.png" },
              { photo: "/stepsync/sshifi2.png" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "feng-cha",
    name: "Feng Cha Mobile App UX Cleanup & Ordering Flow",
    emoji: "🧋",
    logo: "/fengcha/fengchalogo.png",
    thumbnail: "/fengcha/fengcha_thumbnail.png",
    caseImage: "/fengcha/fengcha_square_pic.png",
    tagline:
      "A quick 4 hour redesign project of Feng Cha's Mobile App UI. Goal: Reducing cognitive load, accelerating ordering.",
    overview:
      "A quick 4 hour redesign project of Feng Cha's Mobile App UI. Goal: Reducing cognitive load, accelerating ordering.",
    timeline: "October 2025",
    role: "Marketing Design · Gaming · Social Media",
    client: "Feng Cha",
    stack: "Figma · Framer Motion · Next.js · Vercel",
    chapters: [
      {
        id: "overview",
        label: "Overview",
        heading: "Overview",
        sections: [
          {
            body: [
              "A quick 4 hour redesign project of Feng Cha's Mobile App UI. Goal: Reducing cognitive load, accelerating ordering.",
            ],
          },
        ],
      },
      {
        id: "context",
        label: "Context",
        heading: "Good branding, Heavy UI",
        sections: [
          {
            body: [
              "The app's visual identity (blue/white, mascot) is friendly, but dense text and identical font sizes slowed scanning. I approached this project as a respectful cleanup: improve readability and flow without changing brand DNA.",
            ],
          },
        ],
      },
      {
        id: "content-audit",
        label: "Content Audit",
        heading: "Light-weight Research",
        sections: [
          {
            body: [
              "For a sprint, I leaned on in-app observation, heuristic review, and pattern parity with common food apps. I kept constraints in mind: iOS safe areas, tap target sizes, color contrast, and system type scaling.",
            ],
          },
        ],
      },
      {
        id: "redesign",
        label: "Redesign",
        heading: "Read Less, Do more",
        sections: [
          {
            body: [
              "For my points of redesign, I wanted to focus on a couple of principles.",
              { photo: "/fengcha/readlessnotmore.png" },
            ],
          },
        ],
      },
      {
        id: "what-changed",
        label: "What Changed + Why",
        heading: "What Changed + Why",
        sections: [
          {
            subtitle: "Home now drives ordering",
            body: [
              "Added a centered “Order Now” CTA below the logo and tightened the hero spacing. Rewards remain visible, but copy styling creates clear contrast between tier name, threshold, and remaining points. The progress bar now implies a destination (goal icon) to visually anchor the reward.",
              { photo: "/fengcha/homeafterexplained_NEW.png" },
            ],
          },
          {
            subtitle: "Persistent “Your order is ready!” bar",
            body: [
              "Introduced a status bar that surfaces order state even on the Home tab for quick access to pickup details. Users returning to the app don't have to hunt for their order. One tap reopens Order Details.",
              { photo: "/fengcha/statusbar.png" },
            ],
          },
          {
            subtitle: "Store list: compact, scannable cards",
            body: [
              "I wanted to improve the store location selection experience by making each location easier to understand and compare at a glance. This new card layout creates a clear visual hierarchy(bold), with the store name emphasized and supporting information grouped logically.",
              "This allows users to make quicker decisions. The addition of clear call, directions, and info icons shifts the interaction model from recall to recognition, reducing effort and aligning with common mobile mental models (Jakob's Law).",
              { photo: "/fengcha/locationsafter_NEW.png" },
            ],
          },
          {
            subtitle: "Vertical Menu Rail",
            body: [
              "Switched to a vertical category rail for quick thumb scrubbing. The selected category stays pinned while the product grid scrolls, reducing disorientation. This pattern mirrors high-performing food apps and supports long menus.",
              { gif: "/fengcha/menu_rail.gif" },
            ],
          },
          {
            subtitle: "PDP: cleaner options and sticky cart",
            body: [
              "Rewrote content blocks to create a strong type stack (title → description → price) and grouped modifiers into distinct cards. The cart becomes a sticky bottom bar with price + quantity, so users can commit without scrolling.",
              { photo: "/fengcha/pdpafter.png" },
            ],
          },
          {
            subtitle: "Checkout: Dine-in vs. Take-away moved to the end",
            body: [
              "Users often decide where they'll consume the drink after building the order, so I moved this choice to Checkout. That keeps early screens focused on selection and speeds up first-decision friction.",
              { photo: "/fengcha/checkoutmode_NEW.png" },
            ],
          },
        ],
      },
      {
        id: "outcome",
        label: "The Outcome",
        heading: "The Outcome",
        sections: [
          {
            body: [
              "This redesign emphasizes action and comprehension. Users spend less time parsing text and more time ordering.",
              {
                italic:
                  "Next steps: usability test with 5–7 local customers (menu discovery, PDP options, repeat ordering), then iterate based on time-to-add-to-cart and checkout completion metrics.",
              },
              { photo: "/fengcha/hifibefore_NEW.png" },
              { photo: "/fengcha/hifiafter_NEW.png" },
              { photo: "/fengcha/hifiafter1.png" },
            ],
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}

export const playgroundItems: PlaygroundItem[] = [
  {
    category: "Rive · Procreate · Animation · Web Development",
    title: "Rive Basics: My 3-Hour Character Animation Sprint",
    year: "July 2026",
    media: [
      { type: "rive", src: "/charactermodel_07222026.riv" },
      { type: "image", src: "/playground/rive2026/procreate.png" },
      { type: "video", src: "/playground/rive2026/rivetimeline.mov" },
    ],
    description:
      "I gave myself 3 hours to learn Rive from zero, starting with a sketch of myself as a character and ending with that character animated and interactive on a real website. First I drew myself out as a little character in Procreate, then brought it into Rive and got hands on with the basics: setting up keyframes, building out a timeline, figuring out how transitions and easing work. Once the animation itself felt good, I moved into Rive's State Machine to make it interactive, so instead of just looping on repeat, the character actually looks when someone moves their mouse with it on the site. By the end of the sprint I had a working, interactive version of myself live on a webpage, which felt like a solid win for one afternoon.",
    tools: ["Rive", "Procreate", "Animation", "Web Development"],
  },
  {
    category: "Marketing Design",
    title: "Demon Slayer Personality Quiz",
    year: "October 2025",
    image: "/playground/demonslayer.png",
    description:
      "I built a Demon Slayer–inspired personality quiz that let fans discover their own character archetype through MBTI-style questions, custom pixel art, and shareable result cards. As a longtime fan of personality quizzes and anime, I wanted to create something fun that people would naturally want to screenshot and share with friends. The project combined game-inspired UI design, pixel character creation, and social media strategy, reaching over 1,000 quiz completions within the first 24 hours through organic sharing on TikTok and Instagram.",
    tools: ["Marketing Design", "Gaming", "Social Media"],
    link: { label: "Try it here!", url: "https://corpsquiz.vercel.app/" },
  },
  {
    category: "Game Development · Blender · Programming",
    title: "Swim for Admin: Roblox Game Development",
    year: "March 2015",
    image: "/playground/sfathumb1.png",
    images: ["/playground/sfathumb2.png", "/playground/sfarblxstudio.png"],
    description:
      "When I was 13, I wanted to create a game that would be popular on the rising platform: ROBLOX. Through YouTube tutorials, I learned to code basic Lua, learned to export avatar models into Blender to pose limbs (pre-R15). I learned the basics of photo editing in order to create thumbnails and images for my game. The game accumulated 580,000+ visits from players in 2016.",
    tools: ["Game Development", "Blender", "Programming"],
  },
  {
    category: "Graphic Design · Thumbnails",
    title: "KAT ROBLOX Game Thumbnail Design",
    year: "May 2017",
    image: "/playground/kat-thumb-1.png",
    images: ["/playground/kat-thumb-2.png"],
    description:
      "In 2017, I created custom graphic thumbnails for KAT (Knife Ability Test), a massively popular Roblox PvP deathmatch by Fierzaa. My work was featured in-game during its peak years and exposed to a huge player base—KAT has reached 1.4 billion+ visits. While the thumbnails are no longer in use today, this side project helped to refine my digital art skills and deliver fast, engaging visuals that stood out on Roblox's Game Catalog.",
    tools: ["Graphic Design", "Thumbnails"],
  },
  // Temporarily hidden until these projects are filled in:
  // { category: "Animation", title: "Project Title", year: "2025" },
  // { category: "Digital Art", title: "Project Title", year: "2025" },
  // { category: "Marketing Design", title: "Project Title", year: "2024" },
];

export const aboutPhotoCount = 6;
