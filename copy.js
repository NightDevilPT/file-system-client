const fs = require("fs");
const path = require("path");

// Get the source path from command line arguments or use a default
const sourcePath = process.argv[2] || "C:\\Users\\Pawan\\Desktop\\FullStackProject\\file-system\\client\\src\\redux\\signup";
const output = "reduxOutput.txt";

// Ensure the path is properly formatted
const resolvedSourcePath = path.resolve(sourcePath);

if (!fs.existsSync(resolvedSourcePath)) {
    console.error("❌ Error: Invalid source path. Please provide a valid folder.");
    process.exit(1);
}

// Output file path
const outputFilePath = path.join(__dirname, output);

// Function to recursively get all files
const getAllFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath)); // Recurse into subdirectories
        } else {
            results.push(filePath); // Collect file paths
        }
    });

    return results;
};

// Read files and write to output.txt
const generateFileData = (source) => {
    try {
        const allFiles = getAllFiles(source);
        let outputContent = `📁 Scanned Folder: ${source}\n\n`;

        allFiles.forEach((file) => {
            try {
                const content = fs.readFileSync(file, "utf8");
                outputContent += `\n==== FILE: ${file} ====\n${content}\n\n`;
            } catch (err) {
                console.error(`⚠️ Failed to read ${file}:`, err);
            }
        });

        // Write to output.txt
        fs.writeFileSync(outputFilePath, outputContent, "utf8");
        console.log(`✅ Successfully saved file contents to ${outputFilePath}`);
    } catch (err) {
        console.error("❌ Error processing files:", err);
    }
};

// Run the function
generateFileData(resolvedSourcePath);
