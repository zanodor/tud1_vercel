function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  
  // Safety Net: Allow extensionless permalinks to prevent build failures if 
  // notes.11tydata.js is overwritten by a template update.
  // This restores behavior similar to Eleventy v2.
  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
