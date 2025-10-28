// Channel Priority/Featured Management Functions

function toggleChannelPriority(title) {
  const channels = getChannels();
  const channelIndex = channels.findIndex(ch => ch.title === title);
  
  if (channelIndex === -1) {
    alert('❌ Canalul nu a fost găsit!');
    return;
  }
  
  const channel = channels[channelIndex];
  const isPriority = channel.priority || false;
  
  // Toggle priority status
  channels[channelIndex].priority = !isPriority;
  channels[channelIndex].priorityDate = new Date().toISOString();
  
  // Save to localStorage
  localStorage.setItem('channels', JSON.stringify(channels));
  
  // Show confirmation
  const status = !isPriority ? '⭐ PRIORITAR' : '📍 NORMAL';
  alert(`✅ Canalul "${title}" este acum ${status}!`);
  
  // Refresh displays
  showCategory(currentCategory || 'all');
  if (document.getElementById('admin-panel').style.display !== 'none') {
    loadAdminChannels();
  }
}

function setChannelPosition(title, position) {
  const channels = getChannels();
  const channelIndex = channels.findIndex(ch => ch.title === title);
  
  if (channelIndex === -1) {
    alert('❌ Canalul nu a fost găsit!');
    return;
  }
  
  const validPosition = Math.max(1, Math.min(position, channels.length));
  
  // Set custom position
  channels[channelIndex].customPosition = validPosition;
  channels[channelIndex].positionDate = new Date().toISOString();
  
  // Save to localStorage
  localStorage.setItem('channels', JSON.stringify(channels));
  
  alert(`✅ Canalul "${title}" va fi afișat pe poziția ${validPosition}!`);
  
  // Refresh displays
  showCategory(currentCategory || 'all');
  if (document.getElementById('admin-panel').style.display !== 'none') {
    loadAdminChannels();
  }
}

function showChannelPositionModal(title) {
  const channels = getChannels();
  const position = prompt(
    `🔢 Introduceți poziția pentru canalul "${title}":\n\n` +
    `Poziții disponibile: 1 - ${channels.length}\n` +
    `1 = Prima poziție (cel mai vizibil)\n` +
    `${channels.length} = Ultima poziție`,
    '1'
  );
  
  if (position === null) return; // Cancel
  
  const numPosition = parseInt(position);
  if (isNaN(numPosition) || numPosition < 1) {
    alert('❌ Introduceți un număr valid mai mare ca 0!');
    return;
  }
  
  setChannelPosition(title, numPosition);
}

// Enhanced sorting function with priority and custom positions
function getSortedChannels(channels, category) {
  let filtered = channels;
  
  // Filter by category if not 'all'
  if (category !== 'all') {
    filtered = channels.filter(channel => channel.category.includes(category));
  }
  
  // Sort channels with priority system
  return filtered.sort((a, b) => {
    // 1. Priority channels first
    const aPriority = a.priority || false;
    const bPriority = b.priority || false;
    
    if (aPriority && !bPriority) return -1;
    if (!aPriority && bPriority) return 1;
    
    // 2. Custom positions
    const aPos = a.customPosition || 999;
    const bPos = b.customPosition || 999;
    
    if (aPos !== bPos) return aPos - bPos;
    
    // 3. User's own channels first (within same priority/position)
    const logged = localStorage.getItem('logged_user');
    const aOwned = logged && a.owner === logged;
    const bOwned = logged && b.owner === logged;
    
    if (aOwned && !bOwned) return -1;
    if (!aOwned && bOwned) return 1;
    
    // 4. By priority date (newest first)
    if (a.priorityDate && b.priorityDate) {
      return new Date(b.priorityDate) - new Date(a.priorityDate);
    }
    
    // 5. Default: keep original order
    return 0;
  });
}