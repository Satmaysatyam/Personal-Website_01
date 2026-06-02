document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Particle Canvas Setup (Floating Organic Leaves)
  // ==========================================================================
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: -1000, y: -1000, radius: 100 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Leaf class representing drifting particles
  class Leaf {
    constructor() {
      this.reset();
      this.y = Math.random() * height; // Start at random height initially
    }

    reset() {
      this.x = Math.random() * width;
      this.y = -20 - Math.random() * 50;
      this.size = 8 + Math.random() * 14;
      this.speedX = -0.5 + Math.random() * 1.0;
      this.speedY = 0.4 + Math.random() * 0.8;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = -0.01 + Math.random() * 0.02;
      this.color = `rgba(${70 + Math.random() * 30}, ${110 + Math.random() * 40}, ${75 + Math.random() * 30}, ${0.15 + Math.random() * 0.2})`;
      this.swayWidth = 10 + Math.random() * 20;
      this.swaySpeed = 0.005 + Math.random() * 0.01;
      this.swayAngle = Math.random() * Math.PI;
    }

    update() {
      this.y += this.speedY;
      this.swayAngle += this.swaySpeed;
      this.x += this.speedX + Math.sin(this.swayAngle) * 0.2;
      this.rotation += this.rotationSpeed;

      // Mouse repulsion physics
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x += Math.cos(angle) * force * 5;
        this.y += Math.sin(angle) * force * 5;
      }

      // Reset when off bounds
      if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;
      
      // Draw simple organic leaf shape using quadratic curves
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.quadraticCurveTo(this.size * 0.6, 0, 0, this.size);
      ctx.quadraticCurveTo(-this.size * 0.6, 0, 0, -this.size);
      ctx.fill();
      ctx.restore();
    }
  }

  const particles = [];
  const particleCount = Math.min(25, Math.floor((width * height) / 60000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Leaf());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();

  // ==========================================================================
  // 2. Ambient Soundscape Control (with Waveform Synchronization)
  // ==========================================================================
  const ambientToggle = document.getElementById('ambientToggle');
  const heroWaveform = document.querySelector('.hero-waveform');
  let ambientAudio = null;

  if (ambientToggle && heroWaveform) {
    ambientToggle.addEventListener('click', () => {
      // Lazy load audio context/object to respect browser autoplay policy
      if (!ambientAudio) {
        ambientAudio = new Audio('Audio Bank/Soundscape.wav');
        ambientAudio.loop = true;
        ambientAudio.volume = 0.35;
      }

      if (ambientAudio.paused) {
        ambientAudio.play().then(() => {
          ambientToggle.classList.add('active');
          ambientToggle.querySelector('.audio-btn-text').textContent = '🔊 Mute Soundscape';
          heroWaveform.classList.add('playing');
        }).catch(err => {
          console.error("Audio playback error: ", err);
        });
      } else {
        ambientAudio.pause();
        ambientToggle.classList.remove('active');
        ambientToggle.querySelector('.audio-btn-text').textContent = 'Listen to wild India';
        heroWaveform.classList.remove('playing');
      }
    });
  }

  // ==========================================================================
  // 3. Interactive Leaflet Fieldwork Map
  // ==========================================================================
  const mapElement = document.getElementById('field-map');
  if (mapElement) {
    // Center of India, zoom level 4
    const map = L.map('field-map', {
      center: [21.5, 78.5],
      zoom: 4,
      zoomControl: false,
      scrollWheelZoom: false
    });

    // Add high-end CartoDB Voyager tiles (clean, light, perfect for nature site theme)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      maxZoom: 10
    }).addTo(map);

    // Custom marker icon design based on studied Taxa
    const getCustomIcon = (emoji) => L.divIcon({
      className: 'custom-map-pin',
      html: `<div style="
        width: 26px; 
        height: 26px; 
        background: rgba(255, 255, 255, 0.95); 
        border: 2px solid #0b5d43; 
        border-radius: 50%; 
        box-shadow: 0 4px 10px rgba(13,33,25,0.2);
        display: grid;
        place-items: center;
        font-size: 15px;
        animation: pulse-pin 1.5s infinite alternate;
      ">${emoji}</div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13]
    });

    // CSS Keyframe injected dynamically for marker animation
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes pulse-pin {
        0% { transform: scale(1); box-shadow: 0 0 6px rgba(11,93,67,0.4); }
        100% { transform: scale(1.15); box-shadow: 0 0 12px rgba(11,93,67,0.7); }
      }
    `;
    document.head.appendChild(styleSheet);

    // Research sites data matching Satyam's CV
    const sites = [
      {
        coords: [27.150, 92.400],
        title: "Eaglenest Wildlife Sanctuary",
        emoji: "🐦",
        desc: "Avian Bioacoustics: Researching vocal species centrality, social networks, and community dynamics of mixed-species bird flocks in selectively logged forests."
      },
      {
        coords: [22.464, 78.182],
        title: "Satpura Tiger Reserve",
        emoji: "🐯",
        desc: "Landscape Conservation: Mammal occupancy modeling, transect surveys, and camera trap monitoring in central Indian dry-deciduous forests."
      },
      {
        coords: [21.468, 77.142],
        title: "Melghat Tiger Reserve",
        emoji: "🐯",
        desc: "Landscape Conservation: Camera trapping exercises and large mammal corridor connectivity surveys."
      },
      {
        coords: [24.636, 79.988],
        title: "Panna Tiger Reserve",
        emoji: "🐯",
        desc: "Landscape Conservation: Camera trap grid deployment and carnivore prey-base occupancy monitoring."
      },
      {
        coords: [22.250, 80.600],
        title: "Kanha Tiger Reserve",
        emoji: "🐯",
        desc: "Landscape Conservation: Bioacoustic canopy recording and mammalian occupancy surveys."
      },
      {
        coords: [22.484, 81.761],
        title: "Achanakmar Tiger Reserve",
        emoji: "🐯",
        desc: "Landscape Conservation: Species occupancy mapping, camera trap logistics, and prey-base counting."
      },
      {
        coords: [12.115, 79.843],
        title: "Kazhuveli Wildlife Sanctuary",
        emoji: "🐦",
        desc: "Avian Ecology: Migratory waterbird surveys, species richness monitoring, and wetland habitat mapping."
      },
      {
        coords: [14.619, 74.844],
        title: "Sirsi, Karnataka",
        emoji: "🐸",
        desc: "Amphibian Ecology: Herpetological profiling, microhabitat breeding counts, and bioacoustic profiling of tree frogs in Western Ghats."
      },
      {
        coords: [28.148, 77.332],
        title: "Palwal, Haryana",
        emoji: "🐦",
        desc: "Avian Ecology: Sarus Crane breeding biology and nesting surveys within agricultural and wetland ecosystems."
      },
      {
        coords: [22.466, 69.066],
        title: "Okha, Gulf of Kutch",
        emoji: "🐬",
        desc: "Marine Conservation: Seagrass habitat mapping and dugong surveys for the WII CAMPA Dugong Project, alongside marine reptile research."
      },
      {
        coords: [10.285, 79.851],
        title: "Point Calimere",
        emoji: "🐦",
        desc: "Avian Ecology: Migratory shorebird population monitoring, bird banding surveys, and coastal wetland studies."
      }
    ];

    // Add markers to the map
    sites.forEach(site => {
      const popupContent = `
        <div>
          <h5>${site.emoji} ${site.title}</h5>
          <p>${site.desc}</p>
        </div>
      `;
      L.marker(site.coords, { icon: getCustomIcon(site.emoji) })
        .addTo(map)
        .bindPopup(popupContent, {
          closeButton: false,
          minWidth: 200,
          maxWidth: 240
        });
    });
  }

  // ==========================================================================
  // 4. Scroll-Reveal Animation Trigger
  // ==========================================================================
  // Add reveal classes dynamically to avoid cluttering HTML
  const sectionsToReveal = [
    document.querySelector('.home-split-layout'),
    document.querySelector('.hero-gallery'),
    document.querySelector('.hero-panel'),
    document.querySelector('.section-title')
  ];

  sectionsToReveal.forEach(el => {
    if (el) el.classList.add('reveal-on-scroll');
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  const targets = document.querySelectorAll('.reveal-on-scroll');
  targets.forEach(t => revealObserver.observe(t));
});
