// HOMEPAGE FEATURED CHANNELS MANAGEMENT

// Funcție pentru a obține canalele featured pentru prima pagină
function getHomepageFeaturedChannels() {
  const featuredIds = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  const allChannels = getChannels();
  
  // Dacă nu sunt setate canale featured, returnează primele 6
  if (featuredIds.length === 0) {
    return allChannels.slice(0, 6);
  }
  
  // Returnează canalele featured în ordinea setată
  const featuredChannels = [];
  for (let id of featuredIds) {
    const channel = allChannels.find(c => c.title === id);
    if (channel) {
      featuredChannels.push(channel);
    }
  }
  
  // Dacă nu avem 6, completează cu alte canale
  if (featuredChannels.length < 6) {
    const remainingChannels = allChannels.filter(c => !featuredIds.includes(c.title));
    featuredChannels.push(...remainingChannels.slice(0, 6 - featuredChannels.length));
  }
  
  return featuredChannels.slice(0, 6);
}

// Funcție pentru a seta canalele featured pentru prima pagină
function setHomepageFeaturedChannels(channelTitles) {
  localStorage.setItem('homepage_featured', JSON.stringify(channelTitles));
  // Refresh prima pagină
  if (currentCategory === 'all') {
    showCategory('all');
  }
}

// Funcție pentru admin să gestioneze canalele de pe prima pagină
function showHomepageManager() {
  const allChannels = getChannels();
  const currentFeatured = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  
  if (allChannels.length === 0) {
    alert('❌ Nu există canale disponibile!');
    return;
  }
  
  let modalHTML = `
    <div id="homepage-manager-modal" class="modal" style="display: flex;">
      <div class="modal-content" style="max-width: 600px; width: 90%;">
        <h3>🏠 Gestionare Prima Pagină</h3>
        <p style="color: #666; margin-bottom: 1rem;">Selectează 6 canale care vor apărea pe prima pagină (înainte de login):</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <h4>📋 Canale Disponibile:</h4>
            <div id="available-channels" style="max-height: 300px; overflow-y: auto; border: 1px solid #ddd; padding: 0.5rem; border-radius: 0.5rem;">
              ${allChannels.map(channel => `
                <div class="channel-select-item" data-title="${channel.title}" style="padding: 0.5rem; border-bottom: 1px solid #eee; cursor: pointer; ${currentFeatured.includes(channel.title) ? 'background: #e3f2fd;' : ''}">
                  <strong>${channel.title}</strong><br>
                  <small style="color: #666;">${channel.desc}</small>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div>
            <h4>⭐ Prima Pagină (${currentFeatured.length}/6):</h4>
            <div id="featured-channels" style="min-height: 300px; border: 1px solid #ddd; padding: 0.5rem; border-radius: 0.5rem; background: #f8f9fa;">
              ${currentFeatured.map((title, index) => {
                const channel = allChannels.find(c => c.title === title);
                return channel ? `
                  <div class="featured-item" data-title="${title}" style="padding: 0.5rem; margin-bottom: 0.5rem; background: white; border-radius: 0.3rem; border-left: 3px solid #4caf50;">
                    <div style="display: flex; justify-content: between; align-items: center;">
                      <div style="flex: 1;">
                        <strong>${index + 1}. ${channel.title}</strong><br>
                        <small style="color: #666;">${channel.desc}</small>
                      </div>
                      <button onclick="removeFeaturedChannel('${title}')" style="background: #f44336; color: white; border: none; padding: 0.2rem 0.5rem; border-radius: 0.2rem; cursor: pointer;">✕</button>
                    </div>
                  </div>
                ` : '';
              }).join('')}
            </div>
          </div>
        </div>
        
        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button onclick="closeHomepageManager()" style="background: #95a5a6; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer;">Anulează</button>
          <button onclick="saveHomepageFeatured()" style="background: #4caf50; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer;">💾 Salvează</button>
        </div>
      </div>
    </div>
  `;
  
  // Remove existing modal if any
  const existingModal = document.getElementById('homepage-manager-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // Add modal to body
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Add click handlers for available channels
  document.querySelectorAll('.channel-select-item').forEach(item => {
    item.addEventListener('click', function() {
      const title = this.dataset.title;
      addToFeatured(title);
    });
  });
}

function addToFeatured(title) {
  const currentFeatured = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  
  if (currentFeatured.includes(title)) {
    alert('❌ Canalul este deja pe prima pagină!');
    return;
  }
  
  if (currentFeatured.length >= 6) {
    alert('❌ Poți avea maximum 6 canale pe prima pagină!');
    return;
  }
  
  currentFeatured.push(title);
  localStorage.setItem('homepage_featured', JSON.stringify(currentFeatured));
  
  // Refresh modal
  showHomepageManager();
}

function removeFeaturedChannel(title) {
  let currentFeatured = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  currentFeatured = currentFeatured.filter(t => t !== title);
  localStorage.setItem('homepage_featured', JSON.stringify(currentFeatured));
  
  // Refresh modal
  showHomepageManager();
}

function saveHomepageFeatured() {
  closeHomepageManager();
  showCategory('all'); // Refresh prima pagină
  alert('✅ Prima pagină a fost actualizată cu success!');
}

function closeHomepageManager() {
  const modal = document.getElementById('homepage-manager-modal');
  if (modal) {
    modal.remove();
  }
}