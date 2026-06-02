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
      intro: 'Symphony of Survival: Bioacoustics in the Eastern Himalayas',
      desc: 'Investigating vocal species centrality in mixed-species bird flocks (MSFs) to understand how vocalizations maintain flock cohesion during the dawn chorus.',
      points: [
        'Modeled social network centrality based on vocal behavior of species in Mixed-Species Flocks (MSFs)',
        'Analyzed dawn chorus vocal activity as acoustic beacons that maintain group cohesion',
        'Elevational acoustic monitoring of bird communities in rugged Himalayan woodlands'
      ],
      images: [
        { src: 'Photography/bird_network_plot.png', caption: 'Vocal Centrality Network Plot representing social structure' },
        { src: 'Photography/Field photos/bioacoustic_recording.jpg', caption: 'Conducting bioacoustic recordings in Eaglenest Wildlife Sanctuary' }
      ]
    },
    {
      id: 'amphibian',
      title: 'Amphibian Ecology',
      emoji: '🐸',
      intro: 'Amphibian Bioacoustics & Breeding Ecology in the Western Ghats',
      desc: 'Deploying passive acoustic monitoring (Audiomoth) to document calling intensity, microhabitat associations, and winter breeding ecology of endemic amphibians.',
      points: [
        'Passive Acoustic Monitoring (PAM) utilizing Audiomoth recorders to track vocal active times',
        'Field documentation of breeding phenology and microhabitat parameters',
        'Endemic bush frog call structural analysis in the evergreen forests of Sirsi'
      ],
      images: [
        { src: 'Photography/Field photos/frog_measurement.jpg', caption: 'Taking morphometric measurements (SVL and weight) of a bush frog' },
        { src: 'Photography/Field photos/herp_fieldwork.jpg', caption: 'Nocturnal survey and snake capture during herpetological indexing' }
      ]
    },
    {
      id: 'landscape',
      title: 'Landscape Conservation',
      emoji: '🗺️',
      intro: 'Landscape-Scale Connectivity and Carnivore Occupancy',
      desc: 'Designing occupancy frameworks, camera trap grids, and line transects to study mammal migration and habitat corridors across central Indian dry forests.',
      points: [
        'Grid-based camera trap deployment for tiger, leopard, and prey base occupancy modeling',
        'Corridor mapping and connectivity studies across Kanha, Satpura, and Melghat Reserves',
        'Compiling People’s Biodiversity Registers (PBRs) in collaboration with local communities'
      ],
      images: [
        { src: 'Photography/Leopard1-0435.jpg', caption: 'Indian Leopard (Panthera pardus fusca) captured in central India camera traps' },
        { src: 'Photography/_DSC0328.png', caption: 'Evergreen Forest Canopy: assessing canopy cover and habitat complexity' }
      ]
    }
  ],
  publications: [
    {
      id: 'bird_flocks',
      title: 'Vocal species are more central in Eastern Himalayan mixed-species bird flocks',
      authors: 'Satyam Gupta, Akshay Bharadwaj, Akshiti Bhat, Aiti Thapa, Aman Biswakarma, Bharat Tamang, Binod Munda, Biren Biswakarma, Dema Tamang, Dambar Pradhan, Mangal K. Rai, Rohit Rai, Shambhu Rai, Umesh Srinivasan',
      journal: 'Ornithology',
      volume: '115(2)',
      pages: 'ukag021',
      year: '2026',
      doi: '10.1093/ornithology/ukag021',
      url: 'https://doi.org/10.1093/ornithology/ukag021',
      note: 'Investigates how vocal activity during the dawn chorus acts as an acoustic beacon, influencing the social centrality and cohesion of mixed-species understory bird flocks.',
      speciesName: 'Vocal Centrality Network Plot',
      img: 'Photography/bird_network_plot.png',
      citations: {
        apa: 'Gupta, S., Bharadwaj, A., Bhat, A., Thapa, A., Biswakarma, A., Tamang, B., Munda, B., Biswakarma, B., Tamang, D., Pradhan, D., Rai, M. K., Rai, R., Rai, S., & Srinivasan, U. (2026). Vocal species are more central in Eastern Himalayan mixed-species bird flocks. Ornithology, 115(2), ukag021. https://doi.org/10.1093/ornithology/ukag021',
        mla: 'Gupta, Satyam, et al. "Vocal Species Are More Central in Eastern Himalayan Mixed-Species Bird Flocks." Ornithology, vol. 115, no. 2, 2026, ukag021, https://doi.org/10.1093/ornithology/ukag021.',
        chicago: 'Gupta, Satyam, Akshay Bharadwaj, Akshiti Bhat, Aiti Thapa, Aman Biswakarma, Bharat Tamang, Binod Munda, Biren Biswakarma, Dema Tamang, Dambar Pradhan, Mangal K. Rai, Rohit Rai, Shambhu Rai, and Umesh Srinivasan. "Vocal Species Are More Central in Eastern Himalayan Mixed-Species Bird Flocks." Ornithology 115, no. 2 (2026): ukag021. https://doi.org/10.1093/ornithology/ukag021.',
        bibtex: `@article{gupta2026vocal,\n  title={Vocal species are more central in Eastern Himalayan mixed-species bird flocks},\n  author={Gupta, Satyam and Bharadwaj, Akshay and Bhat, Akshiti and Thapa, Aiti and Biswakarma, Aman and Tamang, Bharat and Munda, Binod and Biswakarma, Biren and Tamang, Dema and Pradhan, Dambar and Rai, Mangal K and Rai, Rohit and Rai, Shambhu and Srinivasan, Umesh},\n  journal={Ornithology},\n  volume={115},\n  number={2},\n  pages={ukag021},\n  year={2026},\n  publisher={Oxford University Press},\n  doi={10.1093/ornithology/ukag021},\n  url={https://doi.org/10.1093/ornithology/ukag021}\n}`
      }
    },
    {
      id: 'sea_snake',
      title: 'From genes to ecosystems: A multidisciplinary approach to understanding and conservation challenges for the short-tailed sea snake Hydrophis curtus (Shaw, 1802) in India',
      authors: 'Prachi Hatkar, Satyam Gupta, Chinnasamy Ramesh',
      journal: 'Journal of Marine Studies',
      volume: '2(3)',
      pages: '21664',
      year: '2025',
      doi: '10.29103/joms.v2i3.21664',
      url: 'https://doi.org/10.29103/joms.v2i3.21664',
      note: 'A comprehensive study combining genetics, ecological niche modeling, and field surveys to identify threat zones and propose critical conservation management plans for the short-tailed sea snake along the Indian coast.',
      speciesName: 'Short-tailed Sea Snake (Hydrophis curtus)',
      img: 'Photography/Hydrophis_curtus_350251401.jpg',
      imgCredit: 'Svetlana Tsarakhova / iNaturalist (CC0)',
      citations: {
        apa: 'Hatkar, P., Gupta, S., & Ramesh, C. (2025). From genes to ecosystems: A multidisciplinary approach to understanding and conservation challenges for the short-tailed sea snake Hydrophis curtus (Shaw, 1802) in India. Journal of Marine Studies, 2(3), 21664. https://doi.org/10.29103/joms.v2i3.21664',
        mla: 'Hatkar, Prachi, Satyam Gupta, and Chinnasamy Ramesh. "From Genes to Ecosystems: A Multidisciplinary Approach to Understanding and Conservation Challenges for the Short-Tailed Sea Snake Hydrophis curtus (Shaw, 1802) in India." Journal of Marine Studies, vol. 2, no. 3, 2025, 21664, https://doi.org/10.29103/joms.v2i3.21664.',
        chicago: 'Hatkar, Prachi, Satyam Gupta, and Chinnasamy Ramesh. "From Genes to Ecosystems: A Multidisciplinary Approach to Understanding and Conservation Challenges for the Short-Tailed Sea Snake Hydrophis curtus (Shaw, 1802) in India." Journal of Marine Studies 2, no. 3 (2025): 21664. https://doi.org/10.29103/joms.v2i3.21664.',
        bibtex: `@article{hatkar2025genes,\n  title={From genes to ecosystems: A multidisciplinary approach to understanding and conservation challenges for the short-tailed sea snake Hydrophis curtus (Shaw, 1802) in India},\n  author={Hatkar, Prachi and Gupta, Satyam and Ramesh, Chinnasamy},\n  journal={Journal of Marine Studies},\n  volume={2},\n  number={3},\n  pages={21664},\n  year={2025},\n  doi={10.29103/joms.v2i3.21664},\n  url={https://doi.org/10.29103/joms.v2i3.21664}\n}`
      }
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
      src: 'Audio Bank/GCW.wav',
      img: 'Audio Bank/GCW.jpg',
      imgCredit: 'Shishir Bhat / Wikimedia Commons',
      audioCredit: 'Satyam Gupta'
    },
    {
      id: 'ghcf',
      name: 'Grey-headed Canary-flycatcher',
      scientific: 'Culicicapa ceylonensis',
      habitat: 'Eastern Himalayas',
      voice: 'whistle',
      emoji: '🐦',
      src: 'Audio Bank/GHCF.wav',
      img: 'Audio Bank/GHCF.jpg',
      imgCredit: 'L. Shyamal / Wikimedia Commons',
      audioCredit: 'Satyam Gupta'
    },
    {
      id: 'rtm',
      name: 'Red-tailed Minla',
      scientific: 'Minla ignotincta',
      habitat: 'Eastern Himalayas',
      voice: 'call',
      emoji: '🐦',
      src: 'Audio Bank/RTM.wav',
      img: 'Audio Bank/RTM.jpg',
      imgCredit: 'L. Shyamal / Wikimedia Commons',
      audioCredit: 'Satyam Gupta'
    },
    {
      id: 'hylarana',
      name: 'Indian Golden-backed Frog',
      scientific: 'Hylarana indica',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/Hylarana_indica.wav',
      img: 'Audio Bank/Hylarana_indica.jpg',
      imgCredit: 'Shreeram MV / Wikimedia Commons',
      audioCredit: 'Satyam Gupta'
    },
    {
      id: 'hydrophylax',
      name: 'Intermediate Golden-backed Frog',
      scientific: 'Hydrophylax intermedius',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/H.intermedius_Ind_07.WAV',
      img: 'Audio Bank/H_intermedius.jpg',
      imgCredit: 'Shreeram MV / Wikimedia Commons',
      audioCredit: 'Satyam Gupta'
    },
    {
      id: 'malabaricus_frog',
      name: 'Malabar Gliding Frog',
      scientific: 'Rhacophorus malabaricus',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/R.malabaricus_Ind_08.WAV',
      img: 'Audio Bank/R_malabaricus.jpg',
      imgCredit: 'Kalyan Varma / Wikimedia Commons',
      audioCredit: 'Satyam Gupta'
    },
    {
      id: 'soundscape',
      name: 'Mixed Forest Soundscape',
      scientific: 'Biophony / Ambient',
      habitat: 'Any Ecosystem',
      voice: 'wind',
      emoji: '🌿',
      src: 'Audio Bank/Soundscape.wav',
      img: 'Audio Bank/Soundscape.jpg',
      imgCredit: 'Hans-Peter Scholz / Wikimedia Commons',
      audioCredit: 'Satyam Gupta'
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
      id: 'indian_tent_turtle',
      title: 'Indian Tent Turtle',
      scientific: 'Pangshura tentoria',
      group: 'Reptiles',
      srcs: ['Photography/_DSC0792.JPG'],
      captions: [
        'A group of Indian Tent Turtles (Pangshura tentoria) basking in a line on a log in their riverine habitat.'
      ],
      emoji: '🐢'
    },
    {
      id: 'collared_cat_snake',
      title: 'Collared Cat Snake',
      scientific: 'Boiga nuchalis',
      group: 'Reptiles',
      srcs: [
        'Photography/Collared_Cat_Snake.png',
        'Photography/Collared_Cat_Snake2.png'
      ],
      captions: [
        'A nocturnal, tree-dwelling collared cat snake (Boiga nuchalis) photographed during nocturnal search surveys in the Western Ghats.',
        'Close-up showing the distinct collar markings and large eyes adapted for night foraging.'
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
      id: 'white_throated_kingfisher',
      title: 'White-throated Kingfisher',
      scientific: 'Halcyon smyrnensis',
      group: 'Birds',
      srcs: ['Photography/DSC_0064.JPG'],
      captions: [
        'A White-throated Kingfisher perched on a branch, displaying its rich chocolate-brown body, bright blue back, and vibrant red bill.'
      ],
      emoji: '🪶'
    },
    {
      id: 'indian_paradise_flycatcher',
      title: 'Indian Paradise Flycatcher',
      scientific: 'Terpsiphone paradisi',
      group: 'Birds',
      srcs: ['Photography/DSC_0755.JPG'],
      captions: [
        'A stunning male Indian Paradise Flycatcher (white morph) with its signature long tail streamers, photographed in central India.'
      ],
      emoji: '🪶'
    },
    {
      id: 'jungle_owlet',
      title: 'Jungle Owlet',
      scientific: 'Glaucidium radiatum',
      group: 'Birds',
      srcs: ['Photography/DSC_0420.JPG'],
      captions: [
        'A Jungle Owlet camouflaged among the lush green foliage, looking forward with its distinctive golden eyes.'
      ],
      emoji: '🪶'
    },
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
    {
      id: 'great_hornbill',
      title: 'Great Hornbill',
      scientific: 'Buceros bicornis',
      group: 'Birds',
      srcs: ['Photography/_DSC0774.JPG'],
      captions: [
        'A close view of the majestic Great Hornbill, showcasing its massive bill and yellow casque.'
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
    {
      id: 'hog_deer',
      title: 'Hog Deer',
      scientific: 'Axis porcinus',
      group: 'Mammals',
      srcs: ['Photography/_DSC0310.JPG'],
      captions: [
        'An adult Hog Deer (Axis porcinus) observed in a grassland clearing during biodiversity occupancy surveys.'
      ],
      emoji: '🦌'
    },
    {
      id: 'black_giant_squirrel',
      title: 'Black Giant Squirrel',
      scientific: 'Ratufa bicolor',
      group: 'Mammals',
      srcs: ['Photography/_DSC0479.JPG'],
      captions: [
        'An arboreal Black Giant Squirrel (Ratufa bicolor) foraging high in the canopy of a broadleaf forest.'
      ],
      emoji: '🐿️'
    },
    {
      id: 'indian_muntjac',
      title: 'Indian Muntjac / Barking Deer',
      scientific: 'Muntiacus muntjak',
      group: 'Mammals',
      srcs: ['Photography/_DSC0525.JPG'],
      captions: [
        'An Indian Muntjac or Barking Deer (Muntiacus muntjak) scaling a steep, mossy slope in a dense forested ravine.'
      ],
      emoji: '🦌'
    },

    // --- Invertebrates ---
    {
      id: 'indian_earth_tiger',
      title: 'Indian Earth Tiger',
      scientific: 'Chilobrachys species',
      group: 'Invertebrates',
      srcs: ['Photography/_DSC0131.JPG', 'Photography/_DSC0138.JPG'],
      captions: [
        'An Indian Earth Tiger tarantula (Chilobrachys species) photographed on tree bark during arthropod elevational surveys in the Eastern Himalayas.',
        'Close-up showing the characteristic stout legs and thick hairy body adapted for burrowing and bark dwelling.'
      ],
      emoji: '🕷️'
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
    },
    {
      id: 'fieldwork_satyam',
      title: 'Field Research and Acoustic Monitoring',
      scientific: 'Eastern Himalayas / Western Ghats',
      group: 'Habitats & Fieldwork',
      srcs: ['personal photos/_DSC0620.JPG'],
      captions: [
        'Conducting bioacoustic monitoring and documentation of species diversity in their natural environments.'
      ],
      emoji: '🎙️'
    }
  ],
  art: [
    { title: 'Field sketch series', medium: 'Ink + graphite', emoji: '✏️', note: 'Reserve one card per artwork.' },
    { title: 'Spectrogram studies', medium: 'Digital art', emoji: '📈', note: 'Great if you want science and art to blend.' },
    { title: 'Landscape studies', medium: 'Mixed media', emoji: '🖌️', note: 'Use larger scans for a richer visual feel.' }
  ]
};
