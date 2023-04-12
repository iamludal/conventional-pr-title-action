module.exports = {
  preset: "conventionalcommits",
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/exec", {
      prepareCmd: "npm run build",
    }],
    ["@semantic-release/npm", {
      npmPublish: false,
    }],
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};
