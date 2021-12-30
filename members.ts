import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "coolbruin",
    name: "coolbruin",
    role: "Frontend Developer",
    bio: "フロントエンド見習い。デザインとアイデアを考える事が好き。",
    avatarSrc: "/avatars/bear_icon.png",
    sources: [
      "https://zenn.dev/coolbruin/feed",
      "https://note.com/coolbruin/rss",
    ],
    includeUrlRegex: "note.com|zenn.dev",
    twitterUsername: "coolbruin",
    githubUsername: "coolbruin",
    websiteUrl: "/",
  },
];
