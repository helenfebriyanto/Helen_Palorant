// Element
const thumbnails = document.querySelectorAll(".thumbnail-slider img");
const mainImage = document.getElementById("mainMapImage");
const mainName = document.getElementById("mainMapName");
const overlay = document.getElementById("overlay");
const overlayImage = document.getElementById("overlayImage");
const overlayDescription = document.getElementById("overlayDescription");
const galleryContainer = document.getElementById("overlayGallery");
const closeOverlay = document.getElementById("closeOverlay");

const mapData = {
  "Heaven": {
    overlay: "/Assets/haven mini map.png",
    description: `Heaven stands out as the only map in Palorant with three bomb sites — A, B, and C. 
      Set in a tranquil monastery located in Bhutan, the map challenges defenders to split their 
      attention across more ground, making rotations and communication critical.`,
  },

  "Snowbox": {
    overlay: "/Assets/icebox mini map.png",
    description: `Snowbox features vertical gameplay with ziplines and tight corridors. 
      Its multi-level design promotes close-quarter fights and rapid movement, making it a dynamic 
      battlefield for agile players.`,
   
  },
  "Sunrise": {
    overlay: "/Assets/sunset mini map.png",
    description: `Sunrise is a two-site map with strong mid-control emphasis. It’s set in a colorful 
      urban environment, blending wide streets with tight alleyways. Great for balanced attackers 
      and defenders.`,
    
  },
  "Breezy": {
    overlay: "/Assets/breeze mini map.png",
    description: `Breezy offers massive open spaces and long sightlines. This map is perfect for snipers 
      and long-range encounters. Timing, map control, and flanking are key.`,
    
  },
  "Orchid": {
    overlay: "/Assets/lotus mini map.png",
    description: `Orchid introduces rotating doors, silent drops, and three sites. It encourages 
      creativity in strategies and rewards teams with good coordination and adaptation.`,
  }
};

// Handle thumbnail click
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const newSrc = thumb.getAttribute("src");
    const name = thumb.getAttribute("data-name");

    mainImage.src = newSrc;
    mainName.textContent = name;

    // Highlight thumbnail
    thumbnails.forEach(t => t.classList.remove("clicked"));
    thumb.classList.add("clicked");
  });
});

// Handle click on main image → show overlay
mainImage.addEventListener("click", () => {
  const mapName = mainName.textContent;
  const data = mapData[mapName];

  if (!data) return;

  overlayImage.src = data.overlay;
  overlayDescription.textContent = data.description;

  overlay.style.display = "flex";
});

// Close overlay
closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
