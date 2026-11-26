// Unpublished (under review) studies are not listed.
// In "versions", an entry with the project's own id inherits every project field and lists only what its tab shows differently.
const PROJECTS = [
  {
    "links": [
      {
        "label": "Project page",
        "href": "https://moheat-evo.github.io/"
      }
    ],
    "video": "../assets/projects/moheat-evo.mp4",
    "image": "../assets/projects/moheat-evo.jpg",
    "venue": "SIGGRAPH Asia 2026 E-Tech (accepted) · CES 2026",
    "title": "MoHeat Evo",
    "summary": "Thermal headphones let you feel the direction and texture of spatial audio.",
    "detail": [
      "Independent warm and cool feedback around each ear adds a physical dimension to spatial audio—from a nearby whisper to a passing cold breeze.",
      "Joint research with Suntory; exhibited at CES 2026 and featured on NHK WORLD."
    ],
    "id": "moheat-evo",
    "patent": {"short": "2 patents filed", "full": "2 patents filed: JP applications 2025-181183 and 2025-062761"},
    "year": 2026,
    "selected": true,
    "shortVenue": "SIGGRAPH Asia · CES",
    "status": "Accepted",
    "source": "Original project video",
    "alt": "MoHeat Evo research demonstration",
    "rank": 0
  },
  {
    "links": [
      {
        "label": "Paper",
        "href": "../assets/papers/2026_TVCG_ChillFactor_author-version.pdf"
      }
    ],
    "video": "../assets/projects/chillfactor.mp4",
    "image": "../assets/projects/chillfactor.jpg",
    "venue": "IEEE TVCG · IEEE VR 2026",
    "title": "ChillFactor",
    "summary": "Rapid, non-contact cooling brings the chill of virtual environments to your face.",
    "detail": [
      "Compact headset modules use evaporating alcohol mist to deliver rapid cooling without a contact pad. A user study found an average sensation onset of about 0.66 seconds.",
      "Adds responsive cold cues to VR while keeping the interface compact."
    ],
    "id": "chillfactor",
    "year": 2026,
    "selected": true,
    "shortVenue": "IEEE TVCG · IEEE VR",
    "source": "Original project video",
    "alt": "ChillFactor research demonstration",
    "rank": 4
  },
  {
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1145/3757373.3763768"
      }
    ],
    "video": "../assets/projects/feel-what-you-see.mp4",
    "image": "../assets/projects/feel-what-you-see.jpg",
    "venue": "SIGGRAPH Asia 2025 E-Tech",
    "title": "Feel What You See",
    "summary": "A vision-language model turns heat cues in ordinary videos into warm and cool sensations.",
    "detail": [
      "A vision-language model recognizes cues such as fire, ice and sunlight, then drives non-contact heating and cooling to match what appears on screen.",
      "Explores thermal feedback generated from existing videos without manually authoring every cue."
    ],
    "id": "feel-what-you-see",
    "year": 2025,
    "selected": true,
    "shortVenue": "SIGGRAPH Asia",
    "source": "Original project video",
    "alt": "Feel What You See research demonstration",
    "rank": 5
  },
  {
    "links": [],
    "video": "../assets/projects/armonii-sway.mp4",
    "image": "../assets/projects/armonii-sway.jpg",
    "venue": "SIGGRAPH Asia 2026 Emerging Technologies · Accepted",
    "title": "Armonii / Armonii Sway",
    "summary": "Coordinated wearable robotic arms move with the body while reducing the wearer’s burden.",
    "detail": [
      "Shifts in the wearer’s center of pressure guide one robotic arm at a time, leaving the hands free. The inactive arm performs supportive motion to reduce the torque transmitted to the body.",
      "The demonstration combines natural whole-body control with coordinated movement that makes additional limbs feel lighter and more intuitive to operate."
    ],
    "id": "armonii-sway",
    "year": 2026,
    "selected": true,
    "shortVenue": "ACM UIST · SIGGRAPH Asia",
    "status": "Accepted",
    "source": "Original project video",
    "alt": "Armonii Sway research demonstration",
    "rank": 1,
    "versions": [
      {
        "id": "armonii-sway",
        "title": "Armonii Sway",
        "summary": "Natural shifts of body weight guide extra robotic arms with supportive coordination.",
        "shortVenue": "SIGGRAPH Asia"
      },
      {
        "id": "armonii",
        "title": "Armonii",
        "year": 2026,
        "venue": "ACM UIST 2026 · Accepted",
        "shortVenue": "ACM UIST",
        "summary": "Coordinated robotic-arm motion reduces the burden of wearing extra limbs.",
        "detail": [
          "Armonii assigns low-intensity supportive movement to the robotic arm not currently under active control, regulating motion-induced loads within perceptually acceptable bounds.",
          "User studies found that prioritizing gravity compensation reduced perceived burden while preserving embodiment."
        ],
        "image": "../assets/projects/armonii.jpg",
        "alt": "Armonii — original research illustration",
        "source": "Original paper · Fig. 1",
        "selected": false,
        "links": [
          {
            "label": "Paper",
            "href": "https://doi.org/10.1145/3830398.3830501"
          }
        ],
        "status": "Accepted",
        "rank": 100,
        "detailImage": "../assets/projects/armonii-detail.jpg"
      }
    ]
  },
  {
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1145/3795011.3795050"
      }
    ],
    "video": "../assets/projects/adaptivefly.mp4",
    "image": "../assets/projects/adaptivefly.jpg",
    "venue": "Augmented Humans 2026 · SIGGRAPH Asia 2026 E-Tech (accepted)",
    "title": "AdaptiveFly",
    "summary": "Adaptive body-based controls make 3D flight and drone navigation feel more natural.",
    "detail": [
      "Leaning and head motion steer through 3D space. The system adapts steering to speed, allowing free looking during slow exploration and tighter control during fast flight.",
      "Evaluated in VR, with a proof-of-concept extension to physical drone control."
    ],
    "id": "adaptivefly",
    "year": 2026,
    "selected": true,
    "shortVenue": "Augmented Humans · SIGGRAPH Asia",
    "source": "Original project video",
    "alt": "AdaptiveFly research demonstration",
    "rank": 2
  },
  {
    "links": [
      {
        "label": "Method",
        "href": "https://arxiv.org/abs/2506.04748"
      }
    ],
    "video": "../assets/projects/synchro-thermography.mp4",
    "image": "../assets/projects/synchro-thermography.jpg",
    "alt": "Thermal imaging and heartbeat signals combined to reveal small changes in facial temperature",
    "source": "Cover and figures from the paper (SICE Annual Conference 2025, arXiv preprint) · Explainer animation based on the original publication · Music: “Electrodoodle” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/synchro-thermography-paper-1.jpg", "w": 1939, "h": 766, "alt": "Fig. 1 of the paper: thermal frames resampled at heartbeats and averaged synchronously to reveal temperature changes"},
      {"src": "../assets/projects/synchro-thermography-paper-2.jpg", "w": 1400, "h": 598, "alt": "Fig. 2 of the paper: experimental environment with thermography camera, chin rest and biosignal amplifier"}
    ],
    "paperCaption": "From the paper: Fig. 1, method · Fig. 2, experimental setup. SICE Annual Conference 2025 (arXiv preprint).",
    "venue": "SICE Annual Conference 2025",
    "title": "Synchro-Thermography",
    "summary": "Heartbeat-referenced facial thermography reveals subtle physiological changes, including responses to alcohol.",
    "detail": [
      "Thermal frames are aligned to heartbeat timing and averaged to recover weak, pulse-related changes in facial skin temperature.",
      "Experiments with eight participants captured changes of around 10 mK and improved temperature resolution by a factor of two or more, establishing a method for physiological sensing."
    ],
    "id": "synchro-thermography",
    "year": 2025,
    "selected": false,
    "shortVenue": "SICE",
    "rank": 100,
    "detailImage": "../assets/projects/synchro-thermography-detail.jpg",
    "versions": [
      {
        "id": "synchro-thermography",
        "summary": "Heartbeat-referenced thermal imaging reveals facial temperature changes as small as 0.01 °C."
      },
      {
        "id": "alcohol-thermography",
        "title": "Alcohol Effects in Facial Thermography",
        "year": 2025,
        "venue": "Scientific Reports 2025",
        "shortVenue": "Scientific Reports",
        "summary": "Facial heat–heartbeat synchrony offers a window into early physiological effects of drinking.",
        "detail": [
          "The study applies synchronized thermal imaging to monitor changes following alcohol intake, comparing facial temperature fluctuations with heartbeat timing.",
          "Synchrony weakened within 10–30 minutes after drinking, including in participants without visible flushing; these preliminary findings concern physiological monitoring rather than a validated sobriety test."
        ],
        "image": "../assets/projects/alcohol-thermography.jpg",
        "alt": "Alcohol Effects in Facial Thermography — original research illustration",
        "source": "Original paper · Fig. 1",
        "selected": false,
        "links": [
          {
            "label": "Paper",
            "href": "https://doi.org/10.1038/s41598-025-17801-9"
          }
        ],
        "rank": 100,
        "detailImage": "../assets/projects/alcohol-thermography-detail.jpg"
      }
    ]
  },
  {
    "links": [],
    "video": "../assets/projects/thermotune.mp4",
    "image": "../assets/projects/thermotune.jpg",
    "venue": "AsiaHaptics 2026 (accepted)",
    "title": "ThermoTune",
    "summary": "Thermal headphones translate musical emotion and your physiological responses into warmth and coolness.",
    "detail": [
      "Thermal headphones translate estimated musical emotion—or the listener’s measured heart rate and skin conductance—into changing warm and cool sensations.",
      "Makes both musical expression and the listener’s physiological response available as bodily feedback."
    ],
    "id": "thermotune",
    "year": 2026,
    "selected": true,
    "shortVenue": "AsiaHaptics",
    "status": "Accepted",
    "source": "Original project video",
    "alt": "ThermoTune research demonstration",
    "rank": 3,
    "versions": [
      {
        "id": "thermotune"
      },
      {
        "id": "thermotune-vrsj",
        "title": "Music-Evoked Emotion with Rapid Thermal Feedback",
        "year": 2026,
        "venue": "VRSJ Annual Conference 2026 · Japanese technical report",
        "summary": "Thermal headphones translate musical emotion and your physiological responses into warmth and coolness.",
        "detail": [
          "A Valence–Arousal model maps changes in musical emotion to rapid warming and cooling during headphone listening.",
          "Alongside automatic thermal rendering, listeners can adjust the stimuli themselves, enabling investigation of how intervention changes the music experience."
        ],
        "image": "../assets/projects/thermotune.jpg",
        "alt": "ThermoTune research demonstration",
        "source": "English description translated from the original Japanese paper; illustration from the same project’s Original project video",
        "links": [
          {
            "label": "Paper (Japanese)",
            "href": "https://conference.vrsj.org/ac2026/program/doc/2A2-11.pdf"
          }
        ]
      }
    ]
  },
  {
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1007/978-3-032-32230-2_8"
      }
    ],
    "video": "../assets/projects/facial-thermal-remapping.mp4",
    "image": "../assets/projects/facial-thermal-remapping.jpg",
    "alt": "Explainer animation: a headset-mounted LED array maps local facial heat cues to virtual hands and feet",
    "source": "Cover and figures from the paper (EuroHaptics 2026, © Springer) · Explainer animation from the EuroHaptics paper and talk · Music: “Digital Lemonade” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/facial-thermal-remapping-paper-1.jpg", "w": 1400, "h": 703, "alt": "Fig. 1 of the paper: virtual hand and foot contact mapped to facial heat points, and the 5 × 6 LED array"},
      {"src": "../assets/projects/facial-thermal-remapping-paper-2.jpg", "w": 1400, "h": 1022, "alt": "Fig. 5 of the paper: remapping pipeline and the VR campfire scene, regional versus full mode"}
    ],
    "paperCaption": "From the paper: Fig. 1, mapping and hardware · Fig. 5, pipeline and scenario. EuroHaptics 2026, © Springer.",
    "venue": "EuroHaptics 2026",
    "title": "Facial Thermal Remapping",
    "summary": "Localized facial heat cues evoke richer thermal experiences across the virtual body.",
    "detail": [
      "An LED mask maps virtual hand and foot interactions to specific regions of the face. In a VR campfire study, spatially matched cues improved immersion and sensory fidelity over uniform heating.",
      "Explores richer body-wide thermal experiences using localized facial feedback."
    ],
    "id": "facial-thermal-remapping",
    "year": 2026,
    "selected": false,
    "shortVenue": "EuroHaptics",
    "rank": 100,
    "detailImage": "../assets/projects/facial-thermal-remapping-detail.jpg"
  },
  {
    "links": [
      {
        "label": "Paper",
        "href": "https://arxiv.org/abs/2411.05103"
      }
    ],
    "video": "../assets/projects/moheat.mp4",
    "image": "../assets/projects/moheat.jpg",
    "venue": "AsiaHaptics 2024",
    "title": "MoHeat",
    "summary": "A modular platform makes rapid, non-contact warmth and cooling available for interactive experiences.",
    "detail": [
      "A modular platform combines rapid LED heating and mist-based cooling to deliver non-contact thermal feedback that can be coordinated with interactive content.",
      "The platform behind later video-driven interfaces and thermal headphones."
    ],
    "id": "moheat",
    "awards": [{"short": "Honorable Mention", "full": "Honorable Mention Award, AsiaHaptics 2024"}],
    "year": 2024,
    "selected": true,
    "shortVenue": "AsiaHaptics",
    "source": "Original project video",
    "alt": "MoHeat research demonstration",
    "rank": 6
  },
  {
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1109/TOH.2023.3324754"
      }
    ],
    "video": "../assets/projects/low-residual-cold.mp4",
    "videos": [
      {"src": "../assets/projects/low-residual-cold.mp4", "label": "Explainer"},
      {"src": "../assets/projects/low-residual-cold-principle.mp4", "poster": "../assets/projects/low-residual-cold-principle.jpg", "loop": true, "label": "Principle"}
    ],
    "image": "../assets/projects/low-residual-cold.jpg",
    "alt": "Alternating cold airflow and light-based heating produces persistent cold while keeping skin temperature near its starting point",
    "source": "Cover photo from the VRSJ 2022 report; figures from the paper (IEEE Transactions on Haptics 2023, © IEEE) · Explainer animation based on the original publication · Music: “Overcast” by Kevin MacLeod (incompetech.com), CC BY 4.0 · Principle animation from the author’s lecture (character illustration: irasutoya)",
    "paperFigures": [
      {"src": "../assets/projects/low-residual-cold-paper-1.jpg", "w": 1400, "h": 1154, "alt": "Fig. 3 of the paper: system configuration and the prototype with vortex tube, solenoid valve and LED display part"},
      {"src": "../assets/projects/low-residual-cold-paper-2.jpg", "w": 1134, "h": 1200, "alt": "Fig. 1 of the paper: cold air and LED light on the same skin area keep skin temperature near its start while cold is felt continuously"}
    ],
    "paperCaption": "From the paper: Fig. 3, system and prototype · Fig. 1, principle. IEEE Transactions on Haptics 2023, © IEEE.",
    "venue": "IEEE Transactions on Haptics 2023",
    "title": "Low-Residual Cold Feedback",
    "summary": "Alternating cold air and radiant heat sustains cold sensations with little net change in skin temperature.",
    "detail": [
      "Rapidly alternating perceptible cooling and imperceptible warming produces persistent cold sensations while keeping skin temperature nearly constant.",
      "Addresses residual heat, a key obstacle to repeated and sustained thermal feedback."
    ],
    "id": "low-residual-cold",
    "patent": {"short": "Patent granted", "full": "Patent granted: JP Patent No. 7709781 (PCT/JP2022/021922; US application 18/564,538 pending)"},
    "awards": [{"short": "VRSJ Academic Encouragement Award", "full": "Academic Encouragement Award, 27th VRSJ Annual Conference (2023)"}, {"short": "Excellent Presentation Award", "full": "Excellent Presentation Award, Human Interface Cyber Colloquium 2020"}],
    "year": 2023,
    "selected": false,
    "shortVenue": "IEEE ToH",
    "rank": 100,
    "detailImage": "../assets/projects/low-residual-cold-detail.jpg",
    "versions": [
      {
        "id": "low-residual-cold"
      },
      {
        "id": "cold-continuity-vrsj",
        "title": "Continuous Cold through Discontinuous Temperature Changes",
        "year": 2021,
        "venue": "VRSJ Annual Conference 2021 · Japanese technical report",
        "summary": "Alternating cold air and radiant heat sustains cold sensations with little net change in skin temperature.",
        "detail": [
          "Rapid cooling alternates with slower warming on the same skin region to investigate a continuous cold sensation with little net temperature change.",
          "The Japanese report describes the non-contact airflow-and-light prototype and evaluates the continuity of cold perception."
        ],
        "image": "../assets/projects/low-residual-cold.jpg",
        "alt": "Alternating cold airflow and light-based heating produces persistent cold while keeping skin temperature near its starting point",
        "source": "English description translated from the original Japanese paper; illustration from the same project’s IEEE ToH paper · Fig. 1",
        "links": [],
        "detailImage": "../assets/projects/low-residual-cold-detail.jpg"
      },
      {
        "id": "zero-skin-temperature-vrsj",
        "title": "Persistent Cold with Near-Zero Net Skin-Temperature Change",
        "year": 2022,
        "venue": "VRSJ Annual Conference 2022 · Japanese technical report",
        "summary": "Alternating cold air and radiant heat sustains cold sensations with little net change in skin temperature.",
        "detail": [
          "Perceptible temperature decreases alternate with imperceptible increases to sustain a cold sensation while keeping skin temperature nearly unchanged.",
          "This domestic demonstration presents the approach later developed in the IEEE Transactions on Haptics study."
        ],
        "image": "../assets/projects/low-residual-cold.jpg",
        "alt": "Alternating cold airflow and light-based heating produces persistent cold while keeping skin temperature near its starting point",
        "source": "English description translated from the original Japanese paper; illustration from the same project’s IEEE ToH paper · Fig. 1",
        "links": [
          {
            "label": "Paper (Japanese)",
            "href": "https://conference.vrsj.org/ac2022/program/doc/2G-22.pdf"
          }
        ],
        "detailImage": "../assets/projects/low-residual-cold-detail.jpg"
      }
    ]
  },
  {
    "links": [],
    "video": "../assets/projects/heatmagic.mp4",
    "image": "../assets/projects/heatmagic.jpg",
    "venue": "AsiaHaptics 2022",
    "title": "HeatMagic / Vortex Cooling",
    "summary": "Adjustable cold air and radiant heat bring virtual ice and fire to bare skin.",
    "detail": [
      "Vortex-generated cold air and LED-based radiant heating deliver three levels of thermal feedback to bare skin. A VR game synchronizes these cues with a wizard’s ice and fire attacks.",
      "This interactive demonstration translates adjustable non-contact thermal stimulation into a working immersive experience."
    ],
    "id": "heatmagic",
    "awards": [{"short": "Best Demo Award (Bronze)", "full": "Best Demonstration Award, Bronze, AsiaHaptics 2022 Tokyo Satellite"}, {"short": "EDGE-NEXT Grand Prize", "full": "Grand Prize, University of Tsukuba EDGE-NEXT 2021 (entrepreneurship program)"}],
    "year": 2022,
    "selected": false,
    "shortVenue": "IEEE ToH · AsiaHaptics",
    "source": "Original project video",
    "alt": "HeatMagic research demonstration",
    "rank": 100,
    "versions": [
      {
        "id": "heatmagic",
        "title": "HeatMagic",
        "summary": "Non-contact thermal feedback lets bare skin feel a virtual wizard’s ice and fire.",
        "shortVenue": "AsiaHaptics"
      },
      {
        "id": "vortex-cooling",
        "title": "Intensity-Adjustable Vortex Cooling",
        "year": 2022,
        "venue": "IEEE Transactions on Haptics 2022",
        "shortVenue": "IEEE ToH",
        "summary": "A perceptual cooling model makes non-contact cold feedback quantitatively adjustable.",
        "detail": [
          "Cold air generated by the vortex effect is controlled through flow rate and distance to the skin, linking hardware settings to skin-temperature changes and distinguishable sensation levels.",
          "The model estimated skin-temperature changes with an RMSE of 0.16 °C, providing a design basis for graded thermal feedback; this develops earlier vortex-tube work presented at WHC 2019."
        ],
        "image": "../assets/projects/vortex-cooling.jpg",
        "alt": "Intensity-Adjustable Vortex Cooling — original research illustration",
        "source": "Original paper · Fig. 1",
        "selected": false,
        "links": [
          {
            "label": "Paper",
            "href": "https://doi.org/10.1109/TOH.2022.3187759"
          }
        ],
        "rank": 100,
        "detailImage": "../assets/projects/vortex-cooling-detail.jpg"
      }
    ]
  },
  {
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1109/ACCESS.2024.3479165"
      },
      {
        "label": "Code",
        "href": "https://github.com/ChenKaiXuSan/Skeleton_ASD_PyTorch"
      }
    ],
    "video": "../assets/projects/phasemix.mp4",
    "image": "../assets/projects/phasemix.jpg",
    "alt": "Video-based gait analysis pipeline from person detection and segmentation to movement classification",
    "source": "Cover and figures: whole original figures from the paper, unmodified (IEEE Access 2024, CC BY-NC-ND 4.0) · Explainer animation based on the original publication · Music: “EDM Detection Mode” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/phasemix-paper-1.jpg", "w": 1400, "h": 762, "alt": "Fig. 1 of the paper: flowchart from person detection and segmentation to gait-cycle extraction and disease prediction"},
      {"src": "../assets/projects/phasemix-paper-2.jpg", "w": 1400, "h": 790, "alt": "Fig. 3 of the paper: the PhaseMix idea, fusing the two halves of a gait cycle into one frame"}
    ],
    "paperCaption": "From the paper: Fig. 1, flowchart · Fig. 3, PhaseMix. IEEE Access 2024, CC BY-NC-ND 4.0 (whole figures, unmodified).",
    "venue": "IEEE Access 2024",
    "title": "PhaseMix",
    "summary": "Gait timing and left–right symmetry help video models classify spinal and related disorders.",
    "detail": [
      "A video-analysis method combines gait-cycle timing and left–right motion symmetry to classify adult spinal deformity and related conditions. It outperformed baseline methods on a dataset of 81 patients.",
      "Shows how movement structure can improve learning from limited clinical video data."
    ],
    "id": "phasemix",
    "year": 2024,
    "selected": false,
    "shortVenue": "IEEE Access",
    "rank": 100,
    "detailImage": "../assets/projects/phasemix-detail.jpg"
  },
  {
    "id": "nailshear",
    "awards": [{"short": "Outstanding Demo Award", "full": "Outstanding Demo in Technology & Application, AsiaHaptics 2026"}],
    "title": "NailShear",
    "year": 2026,
    "venue": "AsiaHaptics 2026 · Accepted",
    "shortVenue": "AsiaHaptics",
    "summary": "A nail-mounted wearable provides directional touch cues while leaving the fingerpad free.",
    "detail": [
      "Four motor-driven tethers stretch the skin around the nail folds, producing directional traction in a 6.1 g prototype that leaves the fingerpad available for pinching and touching real objects.",
      "Four-direction recognition reached 81.9%, showing a haptic channel compatible with natural fingertip contact."
    ],
    "video": "../assets/projects/nailshear.mp4",
    "image": "../assets/projects/nailshear.jpg",
    "alt": "NailShear — demo video",
    "source": "Original project video",
    "selected": false,
    "links": [],
    "status": "Accepted",
    "rank": 100,
    "detailImage": "../assets/projects/nailshear-detail.jpg"
  },
  {
    "id": "dynapain",
    "title": "DynaPain",
    "year": 2024,
    "venue": "AsiaHaptics 2024",
    "shortVenue": "AsiaHaptics",
    "summary": "A moving thermal illusion makes a virtual flame beetle feel as if it travels along the arm.",
    "detail": [
      "Cold airflow and optical heating create a non-contact thermal grill illusion; switching its location produces apparent movement synchronized with a virtual beetle.",
      "The demonstration explores moving heat and pain-like sensations as a dynamic medium for virtual interactions."
    ],
    "image": "../assets/projects/dynapain.jpg",
    "alt": "VR demo: a burning flame beetle crawls along a virtual forearm in a forest",
    "source": "Cover and VR demo video from the AsiaHaptics 2024 demonstration (VR scene uses 3D data produced by ©JMC); figures from the AsiaHaptics 2024 paper (arXiv preprint) · Explainer animation based on the AsiaHaptics paper and the VRSJ 2023/2024 reports, with the original VR demo footage · Music: “Rhinoceros” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/dynapain-paper-1.jpg", "w": 1400, "h": 716, "alt": "Fig. 1 of the paper: a participant with the arm in the device, the VR beetle and the moving pain sensation"},
      {"src": "../assets/projects/dynapain-paper-2.jpg", "w": 1400, "h": 645, "alt": "Fig. 2 of the paper: LED and airflow units over two forearm areas with warm and cool stimuli"}
    ],
    "paperCaption": "From the paper: Fig. 1, demonstration · Fig. 2, system configuration. AsiaHaptics 2024 (arXiv preprint).",
    "selected": false,
    "links": [
      {
        "label": "Paper",
        "href": "https://arxiv.org/abs/2411.05155"
      }
    ],
    "video": "../assets/projects/dynapain.mp4",
    "videos": [
      {"src": "../assets/projects/dynapain.mp4", "label": "VR demo"},
      {"src": "../assets/projects/dynapain-explainer.mp4", "poster": "../assets/projects/dynapain-explainer.jpg", "label": "Explainer"}
    ],
    "rank": 100,
    "versions": [
      {
        "id": "dynapain"
      },
      {
        "id": "dynapain-vrsj2023",
        "title": "Non-Contact Thermal-Grill Illusion",
        "year": 2023,
        "venue": "VRSJ Annual Conference 2023 · Japanese technical report",
        "summary": "A moving thermal illusion makes a virtual flame beetle feel as if it travels along the arm.",
        "detail": [
          "Cold airflow and optical heating create spatial patterns of warm and cool stimulation without a contact pad.",
          "The prototype enables investigation of how stimulus intensity and distribution affect the thermal grill illusion, forming the foundation for the later moving-pain demonstration."
        ],
        "image": "../assets/projects/dynapain.jpg",
        "alt": "DynaPain — original research illustration",
        "source": "English description translated from the original Japanese paper; illustration from the same project’s AsiaHaptics 2024 paper · Fig. 2",
        "links": [
          {
            "label": "Paper (Japanese)",
            "href": "https://conference.vrsj.org/ac2023/program/doc/2A2-01.pdf"
          }
        ]
      },
      {
        "id": "dynapain-vrsj2024",
        "title": "Moving Pain Illusions through Apparent Motion",
        "year": 2024,
        "venue": "VRSJ Annual Conference 2024 · Japanese technical report",
        "summary": "A moving thermal illusion makes a virtual flame beetle feel as if it travels along the arm.",
        "detail": [
          "Apparent motion is applied to a non-contact thermal-grill interface to move the perceived location of a pain-like thermal illusion.",
          "The report investigates how the time interval between presentations affects the continuity of the moving sensation."
        ],
        "image": "../assets/projects/dynapain.jpg",
        "alt": "DynaPain — original research illustration",
        "source": "English description translated from the original Japanese paper; illustration from the same project’s AsiaHaptics 2024 paper · Fig. 2",
        "links": [
          {
            "label": "Paper (Japanese)",
            "href": "https://conference.vrsj.org/ac2024/program/doc/1D2-08.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "haptic-guidance",
    "title": "Spatial Haptic Guidance",
    "year": 2026,
    "venue": "Augmented Humans 2026",
    "shortVenue": "Augmented Humans",
    "summary": "A moving tactile gauge around the arm communicates how far your movement is from its target.",
    "detail": [
      "An armband encodes error magnitude through the location of vibration rather than intensity alone, using Slider and Bar patterns.",
      "Compared with intensity-based feedback, spatial cues produced a more linear magnitude scale and reduced task completion time by 10.8–17.2% in a grip-force guidance task."
    ],
    "video": "../assets/projects/haptic-guidance.mp4",
    "image": "../assets/projects/haptic-guidance.jpg",
    "alt": "Spatial Haptic Guidance — original research illustration",
    "source": "Cover and figures from the paper (Augmented Humans 2026, CC BY 4.0) · Explainer animation based on the original publication · Music: “Rhinoceros” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/haptic-guidance-paper-1.jpg", "w": 2000, "h": 558, "alt": "Fig. 1 of the paper: motion error mapped to a haptic magnitude indicator on the forearm, as Slider or Bar"},
      {"src": "../assets/projects/haptic-guidance-paper-2.jpg", "w": 1400, "h": 584, "alt": "Fig. 2 of the paper: armband with eight vibration motors around the forearm"}
    ],
    "paperCaption": "From the paper: Fig. 1, concept · Fig. 2, motor placement. Augmented Humans 2026, CC BY 4.0.",
    "selected": false,
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1145/3795011.3795049"
      }
    ],
    "rank": 100,
    "detailImage": "../assets/projects/haptic-guidance-detail.jpg"
  },
  {
    "id": "spectral-space",
    "awards": [{"short": "Best Student Paper Honorable Mention", "full": "Best Student Paper Honorable Mention, Augmented Humans 2026"}],
    "title": "Spectral Space",
    "year": 2026,
    "venue": "Augmented Humans 2026",
    "shortVenue": "Augmented Humans",
    "summary": "An extra perceptual dimension lets multiple virtual worlds coexist and blend in one place.",
    "detail": [
      "Objects are assigned visibility functions along an additional non-spatial frequency axis, allowing users to move through continuous overlaps between virtual scenes.",
      "The framework offers an alternative to discrete portals and scene switches for designing layered, subjective virtual spaces."
    ],
    "video": "../assets/projects/spectral-space.mp4",
    "image": "../assets/projects/spectral-space.jpg?v=20261126c",
    "alt": "Spectral Space — original research illustration",
    "source": "Cover and figure from the paper (Augmented Humans 2026, CC BY 4.0) · Explainer animation based on the original publication · Music: “Wholesome” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/spectral-space-paper-1.jpg", "w": 1400, "h": 652, "alt": "Fig. 1 of the paper: overview of the Spectral Space design, worlds layered along a frequency axis"}
    ],
    "paperCaption": "From the paper: Fig. 1, overview of the design. Augmented Humans 2026, CC BY 4.0.",
    "selected": false,
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1145/3795011.3795060"
      }
    ],
    "rank": 100,
    "detailImage": "../assets/projects/spectral-space-detail.jpg"
  },
  {
    "id": "coanda-cold",
    "title": "360° Cold with Encircling Airflow",
    "year": 2025,
    "venue": "IEEE World Haptics Conference 2025",
    "shortVenue": "IEEE WHC",
    "summary": "Airflow that follows the curve of the neck creates surrounding cold with fewer nozzles.",
    "detail": [
      "The interface uses the Coandă effect to guide cold jets around a curved body surface, testing nozzle arrangements with a silicone phantom and human participants.",
      "It investigates how airflow geometry can reduce the hardware needed for broad-area thermal sensations."
    ],
    "video": "../assets/projects/coanda-cold.mp4",
    "image": "../assets/projects/coanda-cold.jpg",
    "alt": "360° Cold with Encircling Airflow — original research illustration",
    "source": "Cover and figures from the paper (IEEE World Haptics Conference 2025, © IEEE) · Explainer animation based on the original publication · Music: “Digital Lemonade” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/coanda-cold-paper-1.jpg", "w": 1400, "h": 1132, "alt": "Fig. 7 of the paper: experiment environment with head positioning unit, vortex tube and branched air tubes"},
      {"src": "../assets/projects/coanda-cold-paper-2.jpg", "w": 1278, "h": 1200, "alt": "Fig. 2 of the paper: cold airflow adhering around the neck reaches target points at the front and back"}
    ],
    "paperCaption": "From the paper: Fig. 7, experiment environment · Fig. 2, airflow around the neck. IEEE WHC 2025, © IEEE.",
    "selected": false,
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1109/WHC64065.2025.11123245"
      }
    ],
    "rank": 100,
    "detailImage": "../assets/projects/coanda-cold-detail.jpg",
    "versions": [
      {
        "id": "coanda-cold"
      },
      {
        "id": "neck-cold-vrsj",
        "title": "Non-Contact Neck Cooling with Airflow Arrays",
        "year": 2023,
        "venue": "VRSJ Annual Conference 2023 · Japanese technical report",
        "summary": "Airflow that follows the curve of the neck creates surrounding cold with fewer nozzles.",
        "detail": [
          "An airflow-array display is designed to produce a unified cold sensation around the neck.",
          "The Japanese presentation reports the design of an accessible neck-focused device for thermal environmental feedback in VR."
        ],
        "image": "../assets/projects/coanda-cold.jpg",
        "alt": "360° Cold with Encircling Airflow — original research illustration",
        "source": "English description translated from the original Japanese paper; illustration from the same project’s Original paper · Fig. 1",
        "links": [
          {
            "label": "Paper (Japanese)",
            "href": "https://conference.vrsj.org/ac2023/program/doc/2A2-03.pdf"
          }
        ],
        "detailImage": "../assets/projects/coanda-cold-detail.jpg"
      },
      {
        "id": "coanda-vrsj",
        "title": "Unified Cold Sensations through the Coandă Effect",
        "year": 2024,
        "venue": "VRSJ Annual Conference 2024 · Japanese technical report",
        "summary": "Airflow that follows the curve of the neck creates surrounding cold with fewer nozzles.",
        "detail": [
          "Jets that follow a curved surface are used to investigate how local cooling can be perceived as a unified stimulus.",
          "Temperature measurements and simulations examine the contributions of temperature-change rate and pressure to this perceptual continuity."
        ],
        "image": "../assets/projects/coanda-cold.jpg",
        "alt": "360° Cold with Encircling Airflow — original research illustration",
        "source": "English description translated from the original Japanese paper; illustration from the same project’s Original paper · Fig. 1",
        "links": [
          {
            "label": "Paper (Japanese)",
            "href": "https://conference.vrsj.org/ac2024/program/doc/1D1-12.pdf"
          }
        ],
        "detailImage": "../assets/projects/coanda-cold-detail.jpg"
      }
    ]
  },
  {
    "id": "soft-object",
    "title": "Learning to Grasp Soft Objects",
    "year": 2024,
    "venue": "IEEE AMC 2024",
    "shortVenue": "IEEE AMC",
    "summary": "A learned force–deformation model helps predict how soft objects change shape during grasping.",
    "detail": [
      "Measurements at selected positions train a model to predict force and deformation responses at other positions on a sponge and a plastic bottle.",
      "Deformation estimation errors stayed within ±0.67 mm for tested deformations up to 10 mm, supporting more informed gripping-force selection."
    ],
    "video": "../assets/projects/soft-object.mp4",
    "image": "../assets/projects/soft-object.jpg",
    "alt": "Illustration (AI-generated): a two-finger gripper squeezes a dotted plastic bottle from the sides",
    "source": "Cover: an AI-generated illustration; figures below from the paper (IEEE AMC 2024, © IEEE) · Explainer animation based on the original publication · Music: “Werq” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/soft-object-paper-1.jpg", "w": 1400, "h": 927, "alt": "Fig. 1 of the paper: measured and predicted positions on a bottle and the force–deformation response"},
      {"src": "../assets/projects/soft-object-paper-2.jpg", "w": 1295, "h": 1200, "alt": "Fig. 6 of the paper: predicted versus actual deformation across positions and forces"}
    ],
    "paperCaption": "From the paper: Fig. 1, overview · Fig. 6, predicted vs. measured deformation. IEEE AMC 2024, © IEEE.",
    "selected": false,
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.1109/AMC58169.2024.10505694"
      }
    ],
    "rank": 100,
    "detailImage": "../assets/projects/soft-object-detail.jpg"
  },
  {
    "id": "humidity",
    "awards": [{"short": "Best Paper Finalist", "full": "Best Paper Award Finalist, ICAT-EGVE 2024"}],
    "title": "Localized Humidity Feedback",
    "year": 2024,
    "venue": "ICAT-EGVE 2024",
    "shortVenue": "ICAT-EGVE",
    "summary": "Local heating and mist create a feeling of humidity with a compact skin-area display.",
    "detail": [
      "The device combines LED heating with mist and dry-air generation to manipulate humidity near a small region of the skin.",
      "User studies found stronger humid sensations with heating and suggested that time-divided stimulation reduced variability."
    ],
    "video": "../assets/projects/humidity.mp4",
    "image": "../assets/projects/humidity.jpg",
    "alt": "Localized Humidity Feedback — original research illustration",
    "source": "Cover and figures from the paper (ICAT-EGVE 2024, CC BY 4.0) · Explainer animation based on the original publication · Music: “Pixelland” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/humidity-paper-1.jpg", "w": 1400, "h": 625, "alt": "Fig. 8 of the paper: a participant places a hand in the humidity display during the user study"},
      {"src": "../assets/projects/humidity-paper-2.jpg", "w": 1290, "h": 1200, "alt": "Fig. 9 of the paper: humid-sensation ratings with the LED light off and on"}
    ],
    "paperCaption": "From the paper: Fig. 8, user-study setup · Fig. 9, LED light raised the humid sensation. Kuroda et al., ICAT-EGVE 2024, CC BY 4.0.",
    "selected": false,
    "links": [
      {
        "label": "Paper",
        "href": "https://doi.org/10.2312/egve.20241353"
      }
    ],
    "rank": 100,
    "detailImage": "../assets/projects/humidity-detail.jpg"
  },
  {
    "id": "thermal-control",
    "awards": [{"short": "Paper Award", "full": "26th Paper Award, Human Interface Society (2026)"}],
    "title": "Timing Thermal Perception",
    "year": 2025,
    "venue": "Human Interface Society Transactions 2025",
    "shortVenue": "HIS Transactions",
    "summary": "Feedback control helps warmth arrive at the intended moment and intensity.",
    "detail": [
      "The method models thermal sensation onset using the time integral of skin-temperature change and adjusts the heating stimulus using real-time temperature measurements.",
      "Experiments reported onset timing accuracy ranging from 0.59 to 1.54 seconds, addressing synchronization between thermal feedback and virtual events."
    ],
    "video": "../assets/projects/thermal-control.mp4",
    "image": "../assets/projects/thermal-control.jpg",
    "alt": "Timing Thermal Perception — original research illustration",
    "source": "Cover and figures from the paper (Human Interface Society Transactions 2025, © Human Interface Society) · Explainer animation based on the original publication · Music: “Inspired” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/thermal-control-paper-1.jpg", "w": 1397, "h": 1200, "alt": "Fig. 5 of the paper: experiment device with hotplate, temperature sensor and LED arrangement"},
      {"src": "../assets/projects/thermal-control-paper-2.jpg", "w": 1400, "h": 770, "alt": "Fig. 1 of the paper: a model of skin temperature change sets the stimulus so warmth is felt without delay"}
    ],
    "paperCaption": "From the paper: Fig. 5, experiment device · Fig. 1, proposal. HIS Transactions 2025, © Human Interface Society.",
    "selected": false,
    "links": [],
    "rank": 100,
    "detailImage": "../assets/projects/thermal-control-detail.jpg",
    "versions": [
      {
        "id": "thermal-control"
      },
      {
        "id": "feedback-warmth-his",
        "title": "Non-Contact Warmth with Feedback Control",
        "year": 2023,
        "venue": "Human Interface Symposium 2023 · Japanese paper",
        "summary": "Feedback control helps warmth arrive at the intended moment and intensity.",
        "detail": [
          "A small non-contact temperature sensor measures skin temperature in real time, allowing feedback control of LED heating toward a target temperature profile.",
          "The study examines how skin-temperature change rate affects sensation onset and how the time integral of temperature relates to warmth intensity."
        ],
        "image": "../assets/projects/thermal-control.jpg",
        "alt": "Timing Thermal Perception — original research illustration",
        "source": "English description translated from the original Japanese paper; illustration from the same project’s Original paper · Fig. 1",
        "links": [],
        "detailImage": "../assets/projects/thermal-control-detail.jpg"
      }
    ]
  },
  {
    "id": "spatial-cold",
    "patent": {"short": "Patent granted", "full": "Patent granted: JP Patent No. 7840052 (application 2022-142263)"},
    "title": "Spatially Continuous Cold",
    "year": 2023,
    "venue": "IEEE World Haptics Conference 2023",
    "shortVenue": "IEEE WHC",
    "summary": "Carefully spaced cold air jets merge into a continuous thermal sensation.",
    "detail": [
      "The research measures the separation at which cold stimuli are felt as distinct and relates this threshold to the heat-transfer capability of airflow.",
      "It provides a perceptual basis for covering larger skin regions with an economical number of cold-air outlets."
    ],
    "video": "../assets/projects/spatial-cold.mp4",
    "videos": [
      {"src": "../assets/projects/spatial-cold.mp4", "label": "Explainer"},
      {"src": "../assets/projects/spatial-cold-demo.mp4", "poster": "../assets/projects/spatial-cold-demo.jpg", "label": "VR demo"}
    ],
    "image": "../assets/projects/spatial-cold.jpg",
    "alt": "Spatially Continuous Cold — original research illustration",
    "source": "Cover and figures from the paper (IEEE World Haptics Conference 2023, © IEEE) · Explainer animation based on the original publication · Music: “Blue Sizzle” by Kevin MacLeod (incompetech.com), CC BY 4.0 · VR demo video: the VR view (left) and the cold-air nozzle rail in use (right)",
    "paperFigures": [
      {"src": "../assets/projects/spatial-cold-paper-1.jpg", "w": 1400, "h": 996, "alt": "Fig. 7 of the paper: system with vortex tube, solenoid valve, nozzles and adjustable distance between them"},
      {"src": "../assets/projects/spatial-cold-paper-2.jpg", "w": 1400, "h": 1021, "alt": "Fig. 2 of the paper: hypothesis of the distance at which two cold airflows are felt as one"}
    ],
    "paperCaption": "From the paper: Fig. 7, system · Fig. 2, hypothesis. IEEE WHC 2023, © IEEE.",
    "selected": false,
    "links": [],
    "rank": 100,
    "detailImage": "../assets/projects/spatial-cold-detail.jpg",
    "versions": [
      {
        "id": "spatial-cold"
      },
      {
        "id": "cold-vr-space-vrsj",
        "title": "A Continuous Cold-Space VR System",
        "year": 2022,
        "venue": "VRSJ Annual Conference 2022 · Japanese technical report",
        "summary": "Carefully spaced cold air jets merge into a continuous thermal sensation.",
        "detail": [
          "An array of cold-air outlets recreates the feeling of placing an arm into a cold region such as a virtual waterfall.",
          "The prototype uses measured cold two-point discrimination thresholds to choose nozzle spacing so separate air jets can be perceived as one continuous cold region."
        ],
        "image": "../assets/projects/spatial-cold.jpg",
        "alt": "Spatially Continuous Cold — original research illustration",
        "source": "English description translated from the original Japanese paper; illustration from the same project’s Original paper · Fig. 1",
        "links": [],
        "detailImage": "../assets/projects/spatial-cold-detail.jpg"
      }
    ]
  },
  {
    "id": "drinking-thermal",
    "title": "Thermal Feedback for Drinking",
    "year": 2025,
    "venue": "VRSJ Annual Conference 2025 · Japanese technical report",
    "shortVenue": "VRSJ",
    "selected": false,
    "rank": 100,
    "summary": "Warmth synchronized with drinking explores a new way to shape the subjective experience of a beverage.",
    "detail": [
      "A camera- or sensor-based drinking event triggers controlled LED heating near the back of the neck, with adjustable timing and intensity. The system connects drinking detection, thermal stimulation and subjective ratings in one experimental workflow.",
      "The Japanese report presents the prototype and stimulus design for studying impressions such as warmth, flavor and relaxation; evaluation of perceptual effects is ongoing."
    ],
    "video": "../assets/projects/drinking-thermal.mp4",
    "image": "../assets/projects/drinking-thermal.jpg?v=20261126c",
    "detailImage": "../assets/projects/drinking-thermal-detail.jpg",
    "alt": "Original system diagram showing drinking-triggered thermal feedback",
    "source": "Cover and figures from the original Japanese paper (VRSJ Annual Conference 2025) · Explainer animation based on the original Japanese publication; English description translated from the Japanese source · Music: “Life of Riley” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "paperFigures": [
      {"src": "../assets/projects/drinking-thermal-paper-1.jpg", "w": 1400, "h": 720, "alt": "Fig. 1 of the paper: drinking detection, thermal stimulus and change of drink impression"},
      {"src": "../assets/projects/drinking-thermal-paper-2.jpg?v=20261126c", "w": 1013, "h": 1200, "alt": "Fig. 2 of the paper (labels translated): a participant drinking with the thermal stimulator at the neck, light-shield glasses, sound-isolating headphones and a recording and display laptop"}
    ],
    "paperCaption": "From the paper: Fig. 1, proposed system · Fig. 2, setup (labels translated into English). VRSJ Annual Conference 2025.",
    "links": [
      {
        "label": "Paper (Japanese)",
        "href": "https://conference.vrsj.org/ac2025/program/doc/2A2-02.pdf"
      }
    ]
  },
  {
    "id": "airflow-alertness",
    "title": "Modulated Airflow for Alertness",
    "year": 2024,
    "venue": "23rd Annual Meeting of the Japanese Society for Medical Virtual Reality · 2024",
    "shortVenue": "JSMVR",
    "selected": false,
    "rank": 100,
    "summary": "Time-varying airflow explores a gentle way to support alertness during ongoing tasks.",
    "detail": [
      "The Japanese presentation investigates an airflow display intended to counter declining alertness during work. Its stimulus design varies the frequency or amplitude of the airflow over time.",
      "The accompanying lecture material contrasts a regular sinusoidal stimulus with frequency- and amplitude-modulated patterns, exploring modulation as a way to reduce sensory adaptation."
    ],
    "video": "../assets/projects/airflow-alertness.mp4",
    "image": "../assets/projects/airflow-alertness.jpg",
    "detailImage": "../assets/projects/airflow-alertness-detail.jpg",
    "alt": "Original lecture figure comparing frequency-modulated and amplitude-modulated airflow",
    "source": "Explainer animation based on the original Japanese publication; English description translated from the Japanese source · Music: “Wholesome” by Kevin MacLeod (incompetech.com), CC BY 4.0",
    "links": []
  }
];
