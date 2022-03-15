module.exports = {
  images: {
    domains: ["image.tmdb.org"],
    loader: "akamai",
    path: "",
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
  future: { webpack5: true },
};
