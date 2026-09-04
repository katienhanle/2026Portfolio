export type ChapterBlock =
  | string
  | { italic: string }
  | { photo: true | string; scale?: number }
  | { gif: string }
  | { list: string[] }
  | { quote: string }
  | { video: string; freezeAt: number };

export type ChapterSection = {
  subtitle?: string;
  body: ChapterBlock[];
};

export type Chapter = {
  id: string;
  label: string;
  heading: string;
  sections: ChapterSection[];
};

export type Project = {
  slug: string;
  name: string;
  emoji: string;
  logo?: string;
  subtitle?: string;
  thumbnail?: string;
  thumbnailHeight?: string;
  thumbnailScale?: number;
  caseImage?: string;
  tagline: string;
  overview: string;
  timeline: string;
  role: string;
  client: string;
  stack?: string;
  chapters: Chapter[];
};

export type PlaygroundMediaSlide =
  | { type: "image"; src: string }
  | { type: "video"; src: string }
  | { type: "rive"; src: string; stateMachine?: string };

export type PlaygroundItem = {
  category: string;
  title: string;
  year: string;
  image?: string;
  images?: string[];
  media?: PlaygroundMediaSlide[];
  description?: string;
  tools?: string[];
  link?: { label: string; url: string };
};
