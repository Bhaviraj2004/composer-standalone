const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.ts') && !fullPath.includes('prisma.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We want to replace these specific lines
      const importRegex = /import\s*{\s*PrismaClient\s*}\s*from\s*["']@prisma\/client(\/index\.js)?["'];?\r?\n/g;
      const initRegex = /const\s+prisma\s*=\s*new\s+PrismaClient\(\s*\);?\r?\n/g;
      
      if (importRegex.test(content)) {
        content = content.replace(importRegex, 'import prisma from "@/prisma";\n');
        content = content.replace(initRegex, ''); // Remove the instantiation
        
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
