const fs = require('fs').promises;
const marked = require('marked');
const path = require('path');
const express = require('express');
const app = express();

app.use(async (req, res, next) => {
    let mdPath = await markdownPath(req.path);

    if (!mdPath) { next(); return; }

    try {
        let markdown = await fs.readFile(mdPath, "utf8");

        // strip frontmatter
        if (markdown.startsWith("---")) {
            markdown = markdown.replace(/---\n([\s\S]*?)---\n/, "");
        }
        
        let html = await marked.parse(markdown);
        res.end("<!doctype html>\n" + html);
    } catch (e) {
        next();
    }
});

async function markdownPath(pth) {
    let fullPath = path.normalize(path.join(process.cwd(), pth));

    if (fullPath.endsWith(".md")) {
        try {
            let s = await fs.lstat(fullPath);
            if (s.isFile()) {
                return fullPath;
            }
        } catch (e) {}
    }

    for (let pathToTry of [fullPath+".md", path.join(fullPath, "index.md")]) {
        try {
            let s = await fs.lstat(pathToTry);
            if (s.isFile()) return pathToTry;
        } catch (e) {}
    }

    return false;
}


app.use(express.static(process.cwd()));
app.listen(3000, () => {
    console.log("Serving markdown on port 3000");
});
