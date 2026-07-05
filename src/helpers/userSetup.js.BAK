const slugify = require("@sindresorhus/slugify");
const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");
const { headerToId } = require("./utils");

// Copy of getAnchorLink logic from .eleventy.js (since it's not exported)
function getAnchorLink(filePath, linkTitle) {
    let fileName = filePath.replaceAll("&amp;", "&");
    let header = "";
    let headerLinkPath = "";
    if (filePath.includes("#")) {
        const parts = filePath.split("#");
        fileName = parts[0];
        header = parts[1];
        headerLinkPath = `#${headerToId(header)}`;
    }

    let noteIcon = process.env.NOTE_ICON_DEFAULT;
    const title = linkTitle ? linkTitle : fileName;
    let permalink = `/notes/${slugify(filePath)}`;
    let deadLink = false;
    
    try {
        const startPath = "./src/site/notes/";
        const fullPath = fileName.endsWith(".md")
            ? `${startPath}${fileName}`
            : `${startPath}${fileName}.md`;
        
        if (fs.existsSync(fullPath)) {
            const file = fs.readFileSync(fullPath, "utf8");
            const frontMatter = matter(file);
            if (frontMatter.data.permalink) {
                permalink = frontMatter.data.permalink;
            }
            if (
                frontMatter.data.tags &&
                frontMatter.data.tags.indexOf("gardenEntry") != -1
            ) {
                permalink = "/";
            }
            if (frontMatter.data.noteIcon) {
                noteIcon = frontMatter.data.noteIcon;
            }
        } else {
            deadLink = true;
        }
    } catch (e) {
        deadLink = true;
    }

    if (deadLink) {
        return `<a class="internal-link is-unresolved" href="/404" target="">${title}</a>`;
    }
    
    return `<a class="internal-link" target="" data-note-icon="${noteIcon}" href="${permalink}${headerLinkPath}">${title}</a>`;
}

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}

function userEleventySetup(eleventyConfig) {
  // Overwrite the link filter to support pipe-less wikilinks and Obsidian images
  eleventyConfig.addFilter("link", function (str) {
    if (!str) return str;
    
    // Attempt to get page context for path resolution
    let pagePath = "";
    if (this && this.page && this.page.filePathStem) {
        pagePath = this.page.filePathStem;
    } else if (this && this.ctx && this.ctx.page && this.ctx.page.filePathStem) {
        pagePath = this.ctx.page.filePathStem;
    } else if (this && this.context && this.context.environments && this.context.environments.page && this.context.environments.page.filePathStem) {
        pagePath = this.context.environments.page.filePathStem;
    }

    // Strip Obsidian comments %% ... %%
    // This regex matches %% ... %% blocks, including newlines/br tags
    // We assume markdown-it renders %% as text.
    let content = str.replace(/%%[\s\S]*?%%/g, "");
    
    // Remove empty paragraphs that might result from stripping comments
    content = content.replace(/<p>\s*<\/p>/g, "");

    // Replace wikilinks and images
    return content.replace(/(!?)\[\[(.*?)\]\]/g, function (match, isImage, linkContent) {
        // Handle Images: ![[...]]
        if (isImage) {
            const parts = linkContent.split("|");
            const fileName = parts[0];
            const alt = parts.slice(1).join(" "); // Join remaining parts with space for alt
            
            // Resolve image path
            let src = fileName;
            
            // Heuristic: Map /notes/X/... to /img/user/X/...
            if (pagePath && pagePath.startsWith("/notes/")) {
                const dirPath = path.dirname(pagePath).replace(/^\/notes($|\/)/, "/img/user$1");
                // Ensure dirPath ends with / if not empty and not root
                const prefix = dirPath.endsWith("/") ? dirPath : dirPath + "/";
                
                const urlPrefix = prefix.replaceAll("\\", "/");
                
                // Check if file exists at default location
                const localBase = "./src/site";
                const defaultPath = localBase + urlPrefix + fileName;
                const assetsPath = localBase + urlPrefix + "assets/" + fileName;

                // Check if file exists in default path, if not check assets path
                // This handles cases where Obsidian puts images in an assets subfolder
                if (!fs.existsSync(defaultPath) && fs.existsSync(assetsPath)) {
                     src = urlPrefix + "assets/" + fileName;
                } else {
                     src = urlPrefix + fileName;
                }
            } else {
                 // Fallback
                 if (fileName.startsWith("assets/")) {
                     // Assume relative?
                 }
            }

            return `<img src="${encodeURI(src)}" alt="${alt}" />`;
        }
        
        // Handle Links: [[...]]
        const parts = linkContent.split("|");
        const fileName = parts[0];
        const title = parts.length > 1 ? parts.slice(1).join("|") : fileName;
        
        return getAnchorLink(fileName, title);
    });
  });
  
  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
