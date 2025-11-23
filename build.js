import esbuild from "esbuild";
import fs from "fs/promises";
import path from "path";

const distDir = "dist";

async function build() {
    try {
        // Create dist directory if it doesn't exist
        await fs.mkdir(distDir, { recursive: true });

        // Build JavaScript
        await esbuild.build({
            entryPoints: ["scripts/index.js"],
            bundle: true,
            outfile: path.join(distDir, "bundle.js"),
            minify: true,
            format: "esm",
            target: "esnext",
        });

        // Read index.html
        let indexHtml = await fs.readFile("index.html", "utf-8");

        // Update script tag
        indexHtml = indexHtml.replace(
            '<script src="./scripts/index.js" type="module"></script>',
            '<script src="bundle.js" type="module"></script>'
        );

        // Write updated index.html to dist
        await fs.writeFile(path.join(distDir, "index.html"), indexHtml);

        // Copy other assets (styles, images)
        await fs.cp("styles", path.join(distDir, "styles"), { recursive: true });
        await fs.cp("images", path.join(distDir, "images"), { recursive: true });

        console.log("Build successful!");

    } catch (error) {
        console.error("Build failed:", error);
        process.exit(1);
    }
}

build();
