// Fișier temporar pentru actualizarea main.js cu funcționalitatea featured

// Găsesc și înlocuiesc secțiunea pentru categoria 'all'
const fs = require('fs');
const mainJsContent = fs.readFileSync('public/scripts/main.js', 'utf8');

const oldPattern = `  // For 'all' display first 6 channels directly from defaultChannels
  if (currentCategory === 'all') {
    const grid = document.createElement('div');
    grid.className = 'channels-grid';
    const toShow = defaultChannels.slice(0, 6);`;

const newPattern = `  // For 'all' display featured channels set by admin
  if (currentCategory === 'all') {
    const grid = document.createElement('div');
    grid.className = 'channels-grid';
    const toShow = getHomepageFeaturedChannels(); // Use featured channels function`;

const updatedContent = mainJsContent.replace(oldPattern, newPattern);
fs.writeFileSync('public/scripts/main.js', updatedContent, 'utf8');

console.log('✅ main.js updated successfully!');