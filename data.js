const site = {
  pages: [
    { id: 'home', label: 'Home', url: 'index.html' },
    { id: 'research', label: 'Research', url: 'research.html' },
    { id: 'audio', label: 'Audio Bank', url: 'audio.html' },
    { id: 'photography', label: 'Photography', url: 'photography.html' },
    { id: 'art', label: 'Art', url: 'art.html' },
    { id: 'cv', label: 'CV', url: 'cv.html' },
    { id: 'contact', label: 'Contact', url: 'contact.html' },
    { id: 'giving', label: 'Giving Back', url: 'giving.html' }
  ],
  researchTabs: [
    {
      id: 'lemur',
      title: 'Lemur Collective Movement',
      date: 'Starting Oct 2026',
      emoji: '🐒',
      intro: 'Multimodal Communication & Social Dynamics in the Coordination of Collective Movement',
      desc: 'To understand how individual decisions scale into coordinated group action, our research investigates the collective movement of ring-tailed lemurs (<i>Lemur catta</i>) at Affenwald Park, Germany. While group travel offers vital survival benefits like reduced predation and shared resource knowledge, it requires complex, continuous negotiation over when, where, and whom to follow. By equipping entire lemur groups with multi-sensor collars that synchronously record GPS, inertial movement, proximity, and on-animal acoustics, we capture a real-time, comprehensive picture of their behavior. This data allows us to explore exactly how multimodal communication—combining acoustic and visual cues—interacts with existing social relationships to drive and coordinate collective movement.',
      points: [],
      images: [
        { src: 'Research/lemur_multimodal_diagram.jpg', caption: 'Diagram demonstrating the role of visual and acoustic cues in coordinating collective movement' }
      ],
      logos: [
        { name: 'Deutsches Primatenzentrum', abbr: 'DPZ', color: '#1a5c78', bg: '#f0f5f8', logoUrl: 'logos/dpz.png' },
        { name: 'Deutscher Akademischer Austauschdienst', abbr: 'DAAD', color: '#005b82', bg: '#f0f5f8', logoUrl: 'logos/daad.png' }
      ]
    },
    {
      id: 'breeding',
      title: 'Amphibian Breeding Ecology',
      date: '2024 - 2026',
      emoji: '🐸',
      intro: 'Amphibian Bioacoustics & Breeding Ecology in the Western Ghats',
      desc: 'Investigating acoustic communication, calling phenology, and microhabitat associations of endemic frogs in the evergreen forests of Sirsi, Western Ghats. Recipient of the ATBC Seed Research Grant (2025).',
      points: [
        'Deploying passive acoustic monitoring (PAM) using Audiomoth recorders to track vocal active times.',
        'Studying acoustic eavesdropping by mosquitoes on anuran calls in the Western Ghats.',
        'Analyzing call structural variations of endemic tree and bush frogs relative to microclimate.'
      ],
      images: [
        { src: 'Research/Amphibian1.jpg', caption: 'Taking morphometric measurements (SVL and weight) of a bush frog' },
        { src: 'Research/Amphibian2.jpg', caption: 'Nocturnal survey and snake capture during herpetological indexing' },
        { src: 'Research/Amphibian3.jpg', caption: 'Observing amphibians in their natural habitat' },
        { src: 'Research/Amphibian4.jpeg', caption: 'Dense forest stream habitat for amphibian surveys' },
        { src: 'Research/Amphibian5.jpeg', caption: 'Searching for vocalizing amphibians in the undergrowth' },
        { src: 'Research/Amphibian6.jpeg', caption: 'Documenting amphibian microhabitats' },
        { src: 'Research/Amphibian7.jpeg', caption: 'Field observations during monsoon surveys' },
        { src: 'Research/Amphibian8.jpeg', caption: 'Recording acoustic data in natural amphibian habitats' }
      ],
      logos: [
        { name: 'Ashoka University', abbr: 'Ashoka', color: '#b91c21', bg: '#fdf2f2', logoUrl: 'logos/ashoka.png' },
        { name: 'Association for Tropical Biology & Conservation', abbr: 'ATBC', color: '#d9a441', bg: '#f6f2ea', logoUrl: 'logos/atbc.png' }
      ]
    },
    {
      id: 'flock',
      title: 'MSF Flock Ecology',
      date: 'Jan 2024 - May 2024',
      emoji: '🐦',
      intro: 'Symphony of Survival: Bioacoustics & Prey Dynamics in the Eastern Himalayas',
      desc: 'My Master\'s thesis research investigated vocal species centrality in mixed-species bird flocks (MSFs) in Eaglenest Wildlife Sanctuary, Arunachal Pradesh, India. This study combined bioacoustic network modeling of the dawn chorus with field sampling of insect/arthropod prey availability to examine how acoustic beacons and resource density influence group cohesion and foraging dynamics.',
      points: [
        'Conducted bioacoustic recordings of mixed-species understory bird flocks during the dawn chorus in the Eastern Himalayas.',
        'Modeled social network centrality to demonstrate how highly vocal species act as acoustic beacons to maintain flock cohesion.',
        'Estimated insect/arthropod prey availability across an elevational gradient to analyze how understory bird prey biomass affects flock movement and species composition.',
        'Conducted extensive understory arthropod sampling using foliage-sweeping and trunk-bark search methods.'
      ],
      images: [
        { src: 'Research/MSF1.JPG', caption: 'Vocal Centrality Network Plot representing social structure' },
        { src: 'Research/MSF2.JPG', caption: 'Conducting bioacoustic recordings in Eaglenest Wildlife Sanctuary' },
        { src: 'Research/MSF3.JPG', caption: 'Fieldwork in the Eastern Himalayas' },
        { src: 'Research/MSF4.JPG', caption: 'Mixed-Species Flock Observations' }
      ],
      logos: [
        { name: 'Pondicherry University', abbr: 'PU', color: '#0b5d43', bg: '#f6f2ea', logoUrl: 'logos/pu.png' },
        { name: 'Indian Institute of Science', abbr: 'IISc', color: '#143559', bg: '#eef3ed', logoUrl: 'logos/iisc.png' }
      ]
    },
    {
      id: 'intern',
      title: 'Research Intern & Field Assistant',
      date: '2020 - 2022',
      emoji: '🔬',
      intro: 'Field Assistantships & Professional Research Internships',
      desc: 'Professional research roles spanning marine biology, People’s Biodiversity Registers (PBR) documentation, spatial modeling, and elevational bird prey surveys across India.',
      points: [
        '<b>Field Assistant (Jan 2021 - Feb 2021)</b>: Worked with the Wildlife Institute of India (WII) on the CAMPA Dugong Conservation Project at Marine National Park, Gulf of Kutch, Gujarat. Conducted seagrass habitat mapping, awareness programs, and sorted seagrass-associated macrobenthic fauna.',
        '<b>Research Intern (Jan 2021)</b>: Documented Rural People’s Biodiversity Registers (PBR) in the Core region of the Achanakmar Tiger Reserve, Chhattisgarh, with the Forest Department and FRLHT.',
        '<b>Research Intern (March 2020 - Sept 2020)</b>: Prepared Rural and Urban PBR documentation for three districts in Haryana with the Forest Department and FRLHT.',
        '<b>Summer Intern (April 2022 - July 2022)</b>: Worked with Dr. Umesh Srinivasan (IISc) to estimate arthropod prey availability for insectivorous birds along an elevational gradient in Eaglenest Wildlife Sanctuary.',
        '<b>GIS Intern (May 2021)</b>: Completed training in GIS and Remote Sensing applications for biodiversity conservation at WALMI, Bhopal.'
      ],
      imageGroups: [
        {
          groupName: 'Wildlife Institute of India',
          images: [
            { src: 'Research/WII1.jpeg', caption: 'Sunset view over the estuary and mangrove habitats' },
            { src: 'Research/WII2.jpeg', caption: 'Surveying sandy shorelines adjacent to mangrove forests' },
            { src: 'Research/WII3.jpeg', caption: 'Mangrove pneumatophores exposed during low tide' },
            { src: 'Research/WII4.jpeg', caption: 'Collection and sorting of marine gastropod shells' },
            { src: 'Research/WII5.jpeg', caption: 'Coastal landscape during evening surveys' }
          ]
        },
        {
          groupName: 'Achanakmar Tiger Reserve',
          images: [
            { src: 'Research/Achanakmar1.jpeg', caption: 'Documenting biodiversity in Achanakmar Tiger Reserve' },
            { src: 'Research/Achanakmar2.jpeg', caption: 'Forest trails used for wildlife surveys' },
            { src: 'Research/Achanakmar3.jpeg', caption: 'Observing flora and fauna for the People\'s Biodiversity Register' },
            { src: 'Research/Achanakmar4.jpeg', caption: 'Habitat assessment in the core forest areas' },
            { src: 'Research/Achanakmar5.jpeg', caption: 'Interaction with local communities for traditional knowledge' },
            { src: 'Research/Achanakmar6.jpeg', caption: 'Field data collection in dense deciduous forests' }
          ]
        }
      ],
      logos: [
        { name: 'Wildlife Institute of India', abbr: 'WII', color: '#0b5d43', bg: '#f6f2ea', logoUrl: 'logos/wii.png' },
        { name: 'Indian Institute of Science', abbr: 'IISc', color: '#143559', bg: '#eef3ed', logoUrl: 'logos/iisc.png' },
        { name: 'Foundation for Revitalisation of Local Health Traditions', abbr: 'FRLHT', color: '#688c3a', bg: '#f4f8f6', logoUrl: 'logos/frlht.png' },
        { name: 'WALMI Bhopal', abbr: 'WALMI', color: '#174f7b', bg: '#f0f5fa', logoUrl: 'logos/walmi.png' }
      ]
    },
    {
      id: 'volunteer',
      title: 'Volunteership',
      date: '2020 - 2022',
      emoji: '🤝',
      intro: 'Wildlife Conservation Volunteerships',
      desc: 'Active participation in conservation-led field surveys, large-mammal occupancy camera-trapping, and wildlife census drives in collaboration with NGOs and State Forest Departments.',
      points: [
        '<b>Kanha Bird Survey (Feb 2022)</b>: Participated in the annual bird count at Kanha Tiger Reserve with the Wildlife and Nature Conservancy (WNC) Indore.',
        '<b>Camera Trapping & Occupancy Survey (July 2021 - Aug 2021)</b>: Worked with WWF-India in the Satpura-Pench Corridor, setting up camera trap grids and collecting occupancy data.',
        '<b>Occupancy Survey (June 2021 & Oct 2020)</b>: Volunteered with the Wildlife Research and Conservation Society (WRCS) Pune for Phase II of the tiger, co-predator, and prey occupancy surveys in the Satpura-Melghat Corridor.',
        '<b>Wildlife Tourism Volunteer (March 2021)</b>: Collected data for the Centre for Wildlife Sciences (CWS) project examining nature-viewing preferences of tourists in Kanha Tiger Reserve.',
        '<b>Vulture Census (March 2021)</b>: Assisted the Madhya Pradesh Forest Department in conducting the Vulture Census at Anuppur.'
      ],
      imageGroups: [
        {
          groupName: 'WWF-India',
          images: [
            { src: 'Research/WWf1.jpeg', caption: 'Setting up camera traps for tiger occupancy surveys' },
            { src: 'Research/WWf2.jpeg', caption: 'Checking camera trap data in central Indian landscapes' },
            { src: 'Research/WWf3.jpeg', caption: 'Tracking animal signs and pugmarks' },
            { src: 'Research/WWf4.jpeg', caption: 'Fieldwork in the Kanha-Pench corridor' }
          ]
        },
        {
          groupName: 'Wildlife Research & Conservation Society (WRCS)',
          images: [
            { src: 'Research/WRCS1.jpeg', caption: 'Monitoring forest plots for conservation research' },
            { src: 'Research/WRCS2.jpeg', caption: 'Data collection on habitat usage' },
            { src: 'Research/WRCS3.jpeg', caption: 'Field surveys in mixed forest patches' },
            { src: 'Research/WRCS4.jpeg', caption: 'Assessing human-wildlife interaction zones' },
            { src: 'Research/WRCS5.jpeg', caption: 'Documenting species presence via tracks and signs' },
            { src: 'Research/WRCS6.jpeg', caption: 'Landscape level ecological surveys' }
          ]
        },
        {
          groupName: 'Centre for Wildlife Studies (CWS)',
          images: [
            { src: 'Research/CWS1.jpg', caption: 'Nature viewing surveys with tourists' },
            { src: 'Research/CWS2.jpeg', caption: 'Briefing volunteers before field assignments' },
            { src: 'Research/CWS3.jpeg', caption: 'Conducting surveys in protected areas' },
            { src: 'Research/CWS4.jpeg', caption: 'Coordinating with forest department staff' }
          ]
        },
        {
          groupName: 'Vulture Census',
          images: [
            { src: 'Research/Vulture1.jpeg', caption: 'Monitoring vulture nesting sites' },
            { src: 'Research/Vulture2.jpeg', caption: 'Vantage point surveys during the Vulture Census' },
            { src: 'Research/Vulture3.jpeg', caption: 'Identifying vulture species in flight' },
            { src: 'Research/Vulture4.jpeg', caption: 'Collaborating with Forest Department staff for census' }
          ]
        }
      ],
      logos: [
        { name: 'Wildlife and Nature Conservancy', abbr: 'WNC', color: '#174f7b', bg: '#f0f5fa', logoUrl: 'logos/wnc.png' },
        { name: 'Wildlife Research & Conservation Society', abbr: 'WRCS', color: '#8d5d3b', bg: '#f6f2ea', logoUrl: 'logos/wrcs.png' },
        { name: 'Centre for Wildlife Studies', abbr: 'CWS', color: '#0b5d43', bg: '#f6f2ea', logoUrl: 'logos/cws.png' },
        { name: 'Madhya Pradesh Forest Department', abbr: 'MP-FD', color: '#163126', bg: '#f4f8f6', logoUrl: 'logos/mpfd.png' }
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
      id: 'ccw',
      name: 'Chestnut-crowned Warbler',
      scientific: 'Phylloscopus castaniceps',
      habitat: 'Eastern Himalayas',
      voice: 'call',
      emoji: '🐦',
      src: 'Audio Bank/Chestnut-crowned Warbler.wav',
      img: 'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/389668901/1200',
      imgCredit: 'Macaulay Library',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
    },
    {
      id: 'gcw',
      name: 'Grey-cheeked Warbler',
      scientific: 'Phylloscopus poliogenys',
      habitat: 'Eastern Himalayas',
      voice: 'call',
      emoji: '🐦',
      src: 'Audio Bank/GCW.wav',
      img: 'Audio Bank/GCW.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
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
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
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
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
    },
    {
      id: 'hylarana',
      name: 'Indian Golden-backed Frog',
      scientific: 'Hylarana indica',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/H.indica_Ind_01 (mp3cut.net).wav',
      img: 'Audio Bank/Hylarana_indica.jpg',
      imgCredit: 'Shreeram MV / Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'hydrophylax',
      name: 'Intermediate Golden-backed Frog',
      scientific: 'Hydrophylax intermedius',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/H.intermedius_Ind_14 (mp3cut.net).wav',
      img: 'Audio Bank/H_intermedius.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'malabaricus_frog',
      name: 'Malabar Gliding Frog',
      scientific: 'Rhacophorus malabaricus',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/R.malabaricus_Ind_11 (mp3cut.net).wav',
      img: 'Photography/MGF1.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'curtipes',
      name: 'Bicolored Frog',
      scientific: 'Clinotarsus curtipes',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/C.curtipes_Ind_01 (mp3cut.net).wav',
      img: 'Photography/BCF2.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'cyanophlyctis',
      name: 'Indian Skittering Frog',
      scientific: 'Euphlyctis cyanophlyctis',
      habitat: 'Western Ghats / Wetlands',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/E.cyanophlyctis_Ind_08 (mp3cut.net).wav',
      img: 'Audio Bank/E_cyanophlyctis.jpg',
      imgCredit: 'iNaturalist',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'bahuvistara',
      name: 'Widespread Fungoid Frog',
      scientific: 'Hydrophylax bahuvistara',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/H.bahuvistara_Ind_10 (mp3cut.net).wav',
      img: 'Audio Bank/H_bahuvistara.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'syhadrensis',
      name: 'Syhadri Pygmy Frog',
      scientific: 'Minervarya syhadrensis',
      habitat: 'Western Ghats / Grasslands',
      voice: 'chirp',
      emoji: '🐸',
      src: 'Audio Bank/M.syhadrensis_Ind_18 (mp3cut.net).wav',
      img: 'Audio Bank/M_syhadrensis.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'amboli',
      name: 'Amboli Bush Frog',
      scientific: 'Pseudophilautus amboli',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/P.amboli_Ind_19 (mp3cut.net).wav',
      img: 'Photography/ABF1.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'maculatus',
      name: 'Indian Tree Frog',
      scientific: 'Polypedates maculatus',
      habitat: 'Western Ghats',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/P.maculatus_Ind_19 (mp3cut.net).wav',
      img: 'Audio Bank/P_maculatus.jpg',
      imgCredit: 'Wikimedia Commons',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'tuberculosus',
      name: 'Malabar Tree Toad',
      scientific: 'Pedostibes tuberculosus',
      habitat: 'Western Ghats / Canopy',
      voice: 'croak',
      emoji: '🐸',
      src: 'Audio Bank/P.tuberculosus_Ind_15 (mp3cut.net).wav',
      img: 'Photography/MTT1.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'luteolus',
      name: 'Coorg Yellow Bush Frog',
      scientific: 'Raorchestes luteolus',
      habitat: 'Western Ghats',
      voice: 'whistle',
      emoji: '🐸',
      src: 'Audio Bank/R.luteolus_Ind_14 (mp3cut.net).wav',
      img: 'Photography/BEYB1.png',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Amphibians'
    },
    {
      id: 'soundscape',
      name: 'Canopy Mixed-Species Flock (MSF)',
      scientific: 'Dawn Chorus / Bioacoustics',
      habitat: 'Eaglenest Wildlife Sanctuary',
      voice: 'dawn chorus',
      emoji: '🐦',
      src: 'Audio Bank/Soundscape.wav',
      img: 'Audio Bank/Soundscape.jpg',
      imgCredit: 'Satyam Gupta',
      audioCredit: 'Satyam Gupta',
      group: 'Birds'
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
      id: 'amboli_purple_crab',
      title: 'Amboli Purple Forest Crab',
      scientific: 'Ghatiana atropurpurea',
      group: 'Invertebrates',
      srcs: ['Photography/_DSC0328.png'],
      captions: [
        'An Amboli purple forest crab (Ghatiana atropurpurea) observed in the Western Ghats.'
      ],
      emoji: '🦀'
    }
  ],
  art: [
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.34.22 PM (1)-fotor-20260607114633.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.34.22 PM-fotor-20260607114811.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.44 PM-fotor-20260607114913.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.45 PM (1)-fotor-20260607115034.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.45 PM (2)-fotor-20260607115122.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.45 PM-fotor-2026060711528.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.46 PM (1)-fotor-20260607115254.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.46 PM (2)-fotor-20260607115344.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.46 PM-fotor-2026060711556.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.47 PM (1)-fotor-20260607115623.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.47 PM (2)-fotor-20260607115728.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.47 PM (3)-fotor-20260607115835.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.47 PM-fotor-20260607115940.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.48 PM (1)-fotor-2026060712043.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.48 PM (2)-fotor-2026060712140.png' },
    { src: 'Art/WhatsApp Image 2026-06-03 at 1.35.48 PM-fotor-2026060712230.png' }
  ],
  grants: [
    {
      title: 'DAAD Doctoral Scholarship',
      agency: 'Deutscher Akademischer Austauschdienst (DAAD)',
      amount: '€1,400 / month',
      year: '2026-29',
      note: 'Highly prestigious research grant awarded for pursuing doctoral research in Germany, supporting international academic exchange and scientific cooperation.',
      logo: 'logos/daad.png'
    },
    {
      title: 'ASAB Conference Attendance Grant',
      agency: 'Association for the Study of Animal Behaviour',
      amount: '£500',
      year: '2025',
      note: 'Travel grant awarded for attending the ASAB Winter Conference in Edinburgh, Scotland.',
      logo: ''
    },
    {
      title: 'IEC Conference Attendance Grant',
      agency: 'Koita Centre for Digital Health, Ashoka University',
      amount: '₹35,000',
      year: '2025',
      note: 'Travel grant awarded for attending the International Ethological Congress in Kolkata, India.',
      logo: 'logos/ashoka.png'
    },
    {
      title: 'ATBC Seed Research Grant',
      agency: 'Association for Tropical Biology and Conservation',
      amount: '$1,000',
      year: '2025',
      note: 'Awarded for the ongoing Amphibian Ecology project in the Western Ghats.',
      logo: ''
    },
    {
      title: 'DST INSPIRE Scholarship',
      agency: 'Department of Science and Technology',
      amount: '₹4,00,000',
      year: '2019 - 2024',
      note: 'Five-year national scholarship awarded for pursuing basic sciences.',
      logo: 'logos/dst.png'
    }
  ]
};
