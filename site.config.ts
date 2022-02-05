export const config = {
  siteMeta: {
    title: "Blog Hub",
    teamName: "nousbear",
    description: "RSS based blog",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "GitHub",
      href: "https://github.com/nousbear/blog-hub",
    },
    {
      title: "Thanks",
      href: "https://github.com/catnose99/team-blog-hub",
    },
  ],
};
