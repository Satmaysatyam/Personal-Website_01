const site = {
  pages: [
    { id: 'home', label: 'Home', url: 'index.html' },
    { id: 'research', label: 'Research', url: 'research.html' },
    { id: 'publications', label: 'Publications', url: 'publications.html' },
    { id: 'audio', label: 'Audio Bank', url: 'audio.html' },
    { id: 'photography', label: 'Photography', url: 'photography.html' },
    { id: 'art', label: 'Art', url: 'art.html' },
    { id: 'cv', label: 'CV and Anti-CV', url: 'cv.html' },
    { id: 'contact', label: 'Contact', url: 'contact.html' },
    { id: 'giving', label: 'Giving Back', url: 'giving.html' }
  ],
  researchTabs: [
    {
      id: 'avian',
      title: 'Avian Bioacoustics',
      emoji: '🐦',
      intro: 'Showcase the Symphony of Survival project as your flagship research story.',
      points: [
        'Mixed-species bird flocks in the Eastern Himalayas',
        'Vocal species centrality and network analysis',
        'Field recordings, call structure, and ecological interpretation'
      ],
      footer: 'Best for a visual mix of sound spectrograms, flock diagrams, and thesis figures.'
    },
    {
      id: 'amphibian',
      title: 'Amphibian Ecology',
      emoji: '🐸',
      intro: 'A separate section for field acoustic monitoring and breeding ecology.',
      points: [
        'Winter breeding ecology',
        'Audiomoth deployment and calling intensity',
        'Field photos and habitat context'
      ],
      footer: 'Use a darker palette and rain/forest textures to make this section feel distinct.'
    },
    {
      id: 'landscape',
      title: 'Landscape Conservation',
      emoji: '🗺️',
      intro: 'Use this as a map-based overview of your wider conservation work.',
      points: [
        'Kanha, Satpura-Pench, Melghat, Achanakmar, and Marine National Park',
        'Occupancy surveys, camera trapping, biodiversity documentation',
        'Connect the ecological scale across taxa and landscapes'
      ],
      footer: 'A timeline or map works especially well here.'
    }
  ],
  publications: [
    {
      title: 'Vocal species are more central in Eastern Himalayan Mixed-Species Bird Flocks',
      meta: 'S. Gupta et al. • 2024 • BioRxiv preprint; revision submitted to Ornithology',
      note: 'Highlight this as your flagship bioacoustics output.'
    },
    {
      title: 'From Genes to Ecosystems: A Multidisciplinary Approach to Understanding and Conservation Challenges for the Short-Tailed Sea Snake Hydrophis curtus (Shaw, 1802) in India',
      meta: 'P. Hatkar, S. Gupta, R. Chinnasamy • 2025 • Journal of Marine Sciences',
      note: 'This shows your range beyond birds and demonstrates collaborative breadth.'
    }
  ],
  sounds: [
    {
      id: 'gcw',
      name: 'Green-crowned Warbler',
      scientific: 'Seicercus burkii',
      habitat: 'Eastern Himalayas',
      voice: 'chirp',
      emoji: '🐦',
      bio: 'Real field recording of the Green-crowned Warbler calling, recorded in high canopy mixed flocks.',
      src: 'Audio Bank/GCW.wav'
    },
    {
      id: 'ghcf',
      name: 'Grey-headed Canary-flycatcher',
      scientific: 'Culicicapa ceylonensis',
      habitat: 'Eastern Himalayas',
      voice: 'whistle',
      emoji: '🐦',
      bio: 'High canopy flycatcher active vocalizations, recorded during Eastern Himalayas surveys.',
      src: 'Audio Bank/GHCF.wav'
    },
    {
      id: 'rtm',
      name: 'Red-tailed Minla',
      scientific: 'Minla ignotincta',
      habitat: 'Eastern Himalayas',
      voice: 'call',
      emoji: '🐦',
      bio: 'Rapid calling patterns, recorded from mixed-species flocks in Sikkim.',
      src: 'Audio Bank/RTM.wav'
    },
    {
      id: 'hylarana',
      name: 'Indian Golden-backed Frog',
      scientific: 'Hylarana indica',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      bio: 'Monsoon advertisement call of the Indian Golden-backed Frog, recorded near wet torrents.',
      src: 'Audio Bank/Hylarana_indica.wav'
    },
    {
      id: 'hydrophylax',
      name: 'Intermediate Golden-backed Frog',
      scientific: 'Hydrophylax intermedius',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      bio: 'Field recording of Rao\'s Intermediate Golden-backed Frog, endemic to the Western Ghats wet forests.',
      src: 'Audio Bank/H.intermedius_Ind_07.WAV'
    },
    {
      id: 'malabaricus_frog',
      name: 'Malabar Gliding Frog',
      scientific: 'Rhacophorus malabaricus',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      bio: 'Advertisement call of the Malabar Gliding Frog, recorded during night surveys in Kerala.',
      src: 'Audio Bank/R.malabaricus_Ind_08.WAV'
    },
    {
      id: 'soundscape',
      name: 'Mixed Forest Soundscape',
      scientific: 'Biophony / Ambient',
      habitat: 'Any Ecosystem',
      voice: 'wind',
      emoji: '🌿',
      bio: 'A composite outdoor field soundscape containing forest ambience, insects, and distant biophony.',
      src: 'Audio Bank/Soundscape.wav'
    }
  ],
  photos: [
    // --- Amphibians ---
    {
      id: 'mgf',
      title: 'Malabar Gliding Frog',
      scientific: 'Rhacophorus malabaricus',
      group: 'Amphibians',
      srcs: ['Photography/MGF1.png', 'Photography/MGF2.png'],
      captions: [
        'A vivid green tree frog known for its incredible ability to glide between tree canopies using its large orange-red webbed feet.',
        'Perched high in the Western Ghats rain forest canopy, preparing for a glide.'
      ],
      emoji: '🐸'
    },
    {
      id: 'mtt',
      title: 'Malabar Tree Toad',
      scientific: 'Pedostibes tuberculosus',
      group: 'Amphibians',
      srcs: ['Photography/MTT1.png', 'Photography/MTT2.png'],
      captions: [
        'An endangered and highly elusive arboreal toad, endemic to the wet forest zones of the Western Ghats.',
        'Captured during the monsoon breeding season on a tree branch near a rushing torrent.'
      ],
      emoji: '🐸'
    },
    {
      id: 'abf',
      title: 'Amboli Bush Frog',
      scientific: 'Pseudophilautus amboli',
      group: 'Amphibians',
      srcs: ['Photography/ABF1.png', 'Photography/ABF2.png'],
      captions: [
        'A critically endangered shrub frog endemic to Amboli, Maharashtra. Known for skipping the tadpole stage entirely.',
        'Active on low vegetation during monsoon nights, broadcasting its advertisement call.'
      ],
      emoji: '🐸'
    },
    {
      id: 'beyb',
      title: 'Blue-eyed Yellow Bush Frog',
      scientific: 'Raorchestes luteolus',
      group: 'Amphibians',
      srcs: ['Photography/BEYB1.png', 'Photography/BEYB2.png'],
      captions: [
        'A tiny bush frog endemic to Karnataka, easily recognized by its bright golden body and striking blue ring around the eyes.',
        'Blending seamlessly with coffee leaves and wet vegetation in the Coorg hills.'
      ],
      emoji: '🐸'
    },
    {
      id: 'wtf',
      title: 'Wayanad Torrent Frog',
      scientific: 'Micrixalus wynaadensis',
      group: 'Amphibians',
      srcs: ['Photography/WTF1.png', 'Photography/WTF2.png'],
      captions: [
        'A dancing frog species that performs foot-flagging displays to communicate over the roar of rushing streams.',
        'Positioned on a mossy boulder in the splash zone of a forest torrent.'
      ],
      emoji: '🐸'
    },
    {
      id: 'bcf',
      title: 'Bicolored Frog',
      scientific: 'Clinotarsus curtipes',
      group: 'Amphibians',
      srcs: ['Photography/BCF2.png'],
      captions: [
        'A distinct forest-floor dweller of the Western Ghats, sporting a sharp contrast between its upper and lower body coloration.'
      ],
      emoji: '🐸'
    },
    {
      id: 'idf',
      title: 'Indian Drip Frog',
      scientific: 'Indirana semipalmata',
      group: 'Amphibians',
      srcs: ['Photography/IDF1.png', 'Photography/IDF2.png'],
      captions: [
        'A specialized leap frog adapted to moist, vertical rock surfaces trickling with water.',
        'Concealed near a dripping stream seep, blending in with wet leaf debris.'
      ],
      emoji: '🐸'
    },

    // --- Reptiles ---
    {
      id: 'mpv',
      title: 'Malabar Pit Viper',
      scientific: 'Craspedocephalus malabaricus',
      group: 'Reptiles',
      srcs: [
        'Photography/Malabar_Pit_Viper.png',
        'Photography/Malabar_Pit_Viper2.png',
        'Photography/MPV1.png',
        'Photography/MPV2.png',
        'Photography/MPV4.png'
      ],
      captions: [
        'A magnificent venomous snake endemic to the Western Ghats forests, showcasing beautiful green scaling.',
        'An ambush predator resting on a wet forest twig, perfectly camouflaged in the understory.',
        'A striking color morph displaying complex blotched patterns that mimic decaying leaves.',
        'A brilliant green variation of the species, commonly found waiting near streams.',
        'One of the rarest color variations, sporting vibrant golden-yellow scales.'
      ],
      emoji: '🐍'
    },
    {
      id: 'monitor_lizard',
      title: 'Bengal Monitor Lizard',
      scientific: 'Varanus bengalensis',
      group: 'Reptiles',
      srcs: ['Photography/Monitor_lizard (1 of 1).jpg'],
      captions: [
        'A large, powerful monitor lizard photographed while foraging in a dry deciduous habitat.'
      ],
      emoji: '🦎'
    },

    // --- Birds ---
    {
      id: 'tragopan',
      title: 'Western Tragopan',
      scientific: 'Tragopan melanocephalus',
      group: 'Birds',
      srcs: ['Photography/Tragopan2-0857.png'],
      captions: [
        'An incredibly rare and brightly patterned pheasant species, highlighting Himalayan high-altitude forest biodiversity.'
      ],
      emoji: '🪶'
    },
    {
      id: 'woodpecker_rufous',
      title: 'Rufous Woodpecker',
      scientific: 'Micropternus brachyurus',
      group: 'Birds',
      srcs: ['Photography/Woodpecker_rufous1-0647.png'],
      captions: [
        'A unique rufous-colored woodpecker known to lay its eggs inside the active nests of stinging acrobat ants (*Crematogaster*).'
      ],
      emoji: '🪶'
    },
    {
      id: 'nepal_lt',
      title: 'Nepal Laughingthrush',
      scientific: 'Trochalopteron lineatum',
      group: 'Birds',
      srcs: ['Photography/Nepal_LT-0009.png'],
      captions: [
        'An active flocking bird of the Eastern Himalayas, recorded during mixed-species bird flock bioacoustic surveys.'
      ],
      emoji: '🪶'
    },

    // --- Mammals ---
    {
      id: 'elephant',
      title: 'Asian Elephant',
      scientific: 'Elephas maximus',
      group: 'Mammals',
      srcs: ['Photography/Elephant1-0927.jpg'],
      captions: [
        'A majestic bull elephant photographed in a forest corridor, emphasizing the need for landscape-scale conservation.'
      ],
      emoji: '🐘'
    },
    {
      id: 'leopard',
      title: 'Indian Leopard',
      scientific: 'Panthera pardus fusca',
      group: 'Mammals',
      srcs: ['Photography/Leopard1-0435.jpg'],
      captions: [
        'An elusive big cat captured using camera traps during occupancy surveys in Central India.'
      ],
      emoji: '🐆'
    },
    {
      id: 'serow',
      title: 'Himalayan Serow',
      scientific: 'Capricornis sumatraensis thar',
      group: 'Mammals',
      srcs: ['Photography/Serow1-0074.png'],
      captions: [
        'A goat-like mammal found in rugged Himalayan woodlands, representing the fragile alpine ecosystem.'
      ],
      emoji: '🐐'
    },
    {
      id: 'buffalo',
      title: 'Wild Water Buffalo',
      scientific: 'Bubalus arnee',
      group: 'Mammals',
      srcs: ['Photography/buffalo1-0017.png', 'Photography/buffalo3-0419.png'],
      captions: [
        'An endangered bovid photographed wallowing in the wetlands of Central Indian grasslands.',
        'A small family group keeping watch in a high-grass wetland habitat.'
      ],
      emoji: '🐃'
    },
    {
      id: 'spotted_deer',
      title: 'Spotted Deer',
      scientific: 'Axis axis',
      group: 'Mammals',
      srcs: ['Photography/spotted_deer1-1006.png', 'Photography/spotted_deer2-0140.png'],
      captions: [
        'A mature male with impressive antlers, representing the core prey base in tropical dry forests.',
        'Foraging along the edge of a deciduous forest meadow in the early morning.'
      ],
      emoji: '🦌'
    },

    // --- Habitats & Fieldwork ---
    {
      id: 'dsc_scenic',
      title: 'Evergreen Forest Canopy',
      scientific: 'Western Ghats Wet Zone',
      group: 'Habitats & Fieldwork',
      srcs: ['Photography/_DSC0328.png'],
      captions: [
        'A view of the complex, multi-layered canopy structures where bioacoustic monitoring is conducted.'
      ],
      emoji: '🌿'
    }
  ],
  art: [
    { title: 'Field sketch series', medium: 'Ink + graphite', emoji: '✏️', note: 'Reserve one card per artwork.' },
    { title: 'Spectrogram studies', medium: 'Digital art', emoji: '📈', note: 'Great if you want science and art to blend.' },
    { title: 'Landscape studies', medium: 'Mixed media', emoji: '🖌️', note: 'Use larger scans for a richer visual feel.' }
  ]
};
