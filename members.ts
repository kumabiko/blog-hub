import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "nousbear",
    name: "kuma",
    role: "Frontend Developer",
    bio: "フロントエンド見習い。デザインとアイデアを考える事が好き。",
    avatarSrc: "/avatars/bear_icon.png",
    sources: [
      "https://zenn.dev/nousbear/feed",
      "https://note.com/nousbear/rss",
    ],
    includeUrlRegex: "note.com|zenn.dev",
    twitterUsername: "nousbear",
    githubUsername: "nousbear",
    websiteUrl: "/",
  },
];
