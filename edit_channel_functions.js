// Global variable to store the channel being edited
let currentEditingChannel = null;

function editChannel(title) {
  const channels = getChannels();
  const channel = channels.find(ch => ch.title === title);
  
  if (!channel) {
    alert('❌ Canalul nu a fost găsit!');
    return;
  }
  
  // Store the channel being edited
  currentEditingChannel = channel;
  
  // Populate the edit form
  document.getElementById('edit-channel-title').value = channel.title;
  document.getElementById('edit-channel-desc').value = channel.desc;
  document.getElementById('edit-channel-url').value = channel.url;
  document.getElementById('edit-channel-logo').value = channel.logo || '';
  
  // Select the categories
  const categorySelect = document.getElementById('edit-channel-category');
  for (let option of categorySelect.options) {
    option.selected = channel.category.includes(option.value);
  }
  
  // Show the modal
  document.getElementById('edit-channel-modal').style.display = 'flex';
}

function closeEditChannelModal() {
  document.getElementById('edit-channel-modal').style.display = 'none';
  currentEditingChannel = null;
}

function saveChannelEdit() {
  if (!currentEditingChannel) {
    alert('❌ Eroare: Nu există canal selectat pentru editare!');
    return;
  }
  
  const title = document.getElementById('edit-channel-title').value.trim();
  const desc = document.getElementById('edit-channel-desc').value.trim();
  const url = document.getElementById('edit-channel-url').value.trim();
  const logo = document.getElementById('edit-channel-logo').value.trim();
  const categorySelect = document.getElementById('edit-channel-category');
  const selectedCategories = Array.from(categorySelect.selectedOptions).map(opt => opt.value);
  
  // Validation
  if (!title || !desc || !url) {
    alert('❌ Completează toate câmpurile obligatorii!');
    return;
  }
  
  if (!url.includes('t.me/')) {
    alert('❌ Link-ul trebuie să fie un link Telegram valid (t.me/...)!');
    return;
  }
  
  if (selectedCategories.length === 0) {
    alert('❌ Selectează cel puțin o categorie!');
    return;
  }
  
  // Get all channels
  const channels = getChannels();
  const channelIndex = channels.findIndex(ch => ch.title === currentEditingChannel.title);
  
  if (channelIndex === -1) {
    alert('❌ Canalul nu a fost găsit în baza de date!');
    return;
  }
  
  // Update the channel
  channels[channelIndex] = {
    ...channels[channelIndex],
    title: title,
    desc: desc,
    url: url,
    logo: logo || channels[channelIndex].logo,
    category: selectedCategories
  };
  
  // Save to localStorage
  localStorage.setItem('channels', JSON.stringify(channels));
  
  // Close modal and refresh view
  closeEditChannelModal();
  
  // Refresh the channels display
  showCategory(currentCategory || 'all');
  
  // If admin panel is open, refresh it too
  if (document.getElementById('admin-panel').style.display !== 'none') {
    loadAdminChannels();
  }
  
  alert('✅ Canalul a fost actualizat cu succes!');
}