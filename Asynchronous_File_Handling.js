import fs from "fs/promises";

async function countWordsInFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const words = data.split(/\s+/).filter((word) => word.trim() !== "");
    const wordCount = words.length;
    console.log("Total word count:", wordCount);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}


countWordsInFile("data.txt"); 
