// Portfolio records: edit here to update homepage and archive.
window.PORTFOLIO_PROJECTS = [
  {
    "id": "arduino-uno-case",
    "title": "Arduino UNO R3 Clone Case",
    "category": "Personal",
    "year": "2026",
    "date": "2026-01-04",
    "sort": 20260104,
    "status": "Completed",
    "summary": "A practical remix of an Arduino case, adding USB-C clearance and an M3 heat-set insert.",
    "topics": [
      "3D printing",
      "CAD",
      "Arduino"
    ],
    "tools": [
      "Orca Slicer",
      "SolidWorks"
    ],
    "body": [],
    "links": [
      {
        "label": "View on Printables",
        "url": "https://www.printables.com/model/1535591-arduino-uno-case-usb-c-heat-insert-mod"
      },
      {
        "label": "Original case remix",
        "url": "https://www.printables.com/model/458669-arduino-uno-case-w-breadborad-insert"
      },
      {
        "label": "Original design",
        "url": "https://www.printables.com/model/306737-arduino-case"
      }
    ],
    "image": "images/arduino-uno-case-01.webp",
    "published": true,
    "sections": [
      {
        "title": "Overview",
        "paragraphs": [
          "This is a remix of [**Arduino Uno Case w/ Breadborad Insert**](https://www.printables.com/model/458669-arduino-uno-case-w-breadborad-insert) by ItzAsila, which is a remix of [**Arduino Case**](https://www.printables.com/model/306737-arduino-case) by 3DP.",
          "I've modified the bottom shell of the Arduino Uno case to have relief for a USB-C connector housing as the original was designed with the larger USB Type-B in mind. This could be further refined but I just needed a quick fix. I've also increased the diameter of the female thread holes to 4.0mm in order to receive an M3 head-set threaded insert."
        ],
        "bullets": [],
        "images": []
      },
      {
        "title": "Manufacturing / Printing",
        "paragraphs": [],
        "bullets": [
          "Printer: Elegoo Centauri Carbon",
          "Material: Flashforge HS PLA Burnt Titanium",
          "Settings: 210**°C Nozzle, 60°C Bed**"
        ],
        "images": [
          {
            "src": "images/arduino-uno-case-01.webp",
            "alt": "Arduino UNO R3 Clone Case — img 0618.webp"
          },
          {
            "src": "images/arduino-uno-case-02.webp",
            "alt": "Arduino UNO R3 Clone Case — img 0616.webp"
          }
        ]
      },
      {
        "title": "Future Improvements",
        "paragraphs": [],
        "bullets": [
          "One day I’ll redesign both the top and bottom halves of this shell specifically to fit the USB-C port and to leave no gaps. These photos show the original (USB-B) top shell."
        ],
        "images": []
      }
    ]
  },
  {
    "id": "uav-preliminary-design",
    "title": "UAV preliminary design",
    "category": "University",
    "year": "2026",
    "date": "",
    "sort": 20250000,
    "status": "Completed",
    "summary": "Preliminary design and performance analysis of a small unmanned aircraft.",
    "topics": [
      "Aircraft design",
      "Aerodynamics",
      "Performance"
    ],
    "tools": [],
    "body": [
      "Preliminary design of a small unmanned aircraft, including aerodynamic sizing, take-off performance, endurance and range estimates.",
      "The work covered design trade-offs and the predicted flight characteristics of the proposed aircraft."
    ],
    "links": [],
    "image": "",
    "published": true
  },
  {
    "id": "wind-tunnel-testing",
    "title": "Wind-tunnel testing",
    "category": "University",
    "year": "2026",
    "date": "",
    "sort": 20249999,
    "status": "Completed",
    "summary": "An experimental study of the NACA 0012 aerofoil at different airspeeds and angles of attack.",
    "topics": [
      "Aerodynamics",
      "Testing",
      "Data analysis"
    ],
    "tools": [
      "Wind tunnel"
    ],
    "body": [
      "A wind-tunnel investigation into the aerodynamic behaviour of the NACA 0012 aerofoil.",
      "Measurements were taken across different airspeeds and angles of attack, then processed to investigate aerodynamic trends."
    ],
    "links": [],
    "image": "",
    "published": true
  },
  {
    "id": "aircraft-climb-analysis",
    "title": "Aircraft climb analysis",
    "category": "University",
    "year": "2026",
    "date": "",
    "sort": 20249998,
    "status": "Completed",
    "summary": "MATLAB-based analysis of climb performance data and comparison against aircraft performance information.",
    "topics": [
      "Flight mechanics",
      "Data analysis",
      "Performance"
    ],
    "tools": [
      "MATLAB"
    ],
    "body": [
      "A flight-performance analysis using MATLAB to process climb data and evaluate rate of climb and speed-related performance.",
      "The results were compared with published aircraft performance information."
    ],
    "links": [],
    "image": "",
    "published": true
  },
  {
    "id": "xperia-controller-enclosure",
    "title": "Sony Xperia XA2 Emulator Handheld Enclosure",
    "category": "Personal",
    "year": "2026",
    "date": "2026-01-04",
    "sort": 20260104,
    "status": "Prototype",
    "summary": "A custom FDM-printed enclosure fitting a Sony Xperia XA2 into an iPega PG-9087S controller.",
    "topics": [
      "3D printing",
      "CAD"
    ],
    "tools": [
      "Orca Slicer",
      "SolidWorks"
    ],
    "body": [],
    "links": [
      {
        "label": "View on Printables",
        "url": "https://www.printables.com/model/1542535-sony-xperia-xa2-emulator-handheld-ipega-pg-9087s-e"
      }
    ],
    "sections": [
      {
        "title": "Overview",
        "paragraphs": [
          "This project involved designing and 3D printing a custom enclosure to securely mount a Sony Xperia XA2 into an iPega PG-9087S controller, filling the gaps around the phone to create a clean, uniform, console-like appearance. The phone runs LineageOS 23 with the ES-DE frontend, using RetroArch, PPSSPP, and M64Plus FZ for emulation.",
          "The enclosure is intentionally non-permanent, allowing full access to the phone’s power and volume buttons, though charging is not possible while installed. A key challenge of the project was the complete lack of technical drawings for the controller; all CAD work was produced in SolidWorks using hand measurements, iterative prototyping, and careful tracing of the controller’s extending arm curvature to achieve a precise fit."
        ],
        "bullets": [],
        "images": [
          {
            "src": "images/xperia-controller-enclosure-01.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — IMG 0630.jpg"
          },
          {
            "src": "images/xperia-controller-enclosure-02.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — IMG 0632.jpg"
          },
          {
            "src": "images/xperia-controller-enclosure-03.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — 1a90e3e2-598d-4956-8e6f-ea64e192c97b.png"
          },
          {
            "src": "images/xperia-controller-enclosure-04.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — Untitled Project.png"
          },
          {
            "src": "images/xperia-controller-enclosure-05.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — Untitled Project (3).png"
          },
          {
            "src": "images/xperia-controller-enclosure-06.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — Untitled Project (5).png"
          },
          {
            "src": "images/xperia-controller-enclosure-07.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — Untitled Project (4).png"
          }
        ]
      },
      {
        "title": "Design & CAD",
        "paragraphs": [],
        "bullets": [],
        "images": [
          {
            "src": "images/xperia-controller-enclosure-08.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — 0dd819fb-4ad1-48aa-8ed7-e59053d41b40.png"
          },
          {
            "src": "images/xperia-controller-enclosure-09.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — a74b8498-d54b-491e-8e59-fdaf9c6c445f.png"
          },
          {
            "src": "images/xperia-controller-enclosure-10.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — 90f5ab56-728d-470b-9df5-ec7151d46518.png"
          },
          {
            "src": "images/xperia-controller-enclosure-11.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — 08deedbb-397c-435f-aa63-d5073ecb0b07.png"
          },
          {
            "src": "images/xperia-controller-enclosure-12.webp",
            "alt": "Sony Xperia XA2 Emulator Handheld Enclosure — IMG 0645.jpg"
          }
        ]
      },
      {
        "title": "Manufacturing / Printing",
        "paragraphs": [],
        "bullets": [
          "Printer: Elegoo Centauri Carbon",
          "Material: Flashforge HS PLA Burnt Titanium",
          "Settings: 210°C Nozzle, 60°C Bed"
        ],
        "images": []
      },
      {
        "title": "Future Improvements",
        "paragraphs": [],
        "bullets": [
          "The potential evolution of this design is to teardown both the mobile phone and the controller and design a complete shell around them, this would allow for tighter packaging however USB/Headphone jack would need to be moved + SD card access figured out."
        ],
        "images": []
      }
    ],
    "published": true,
    "image": "images/xperia-controller-enclosure-01.webp"
  },
  {
    "id": "xperia-teardown",
    "title": "Xperia XA2 Teardown & Handheld Emulator Conversion",
    "category": "Personal",
    "year": "2026",
    "date": "2026-01-06",
    "sort": 20260106,
    "status": "In progress",
    "summary": "Further development based on previous project.",
    "topics": [
      "3D printing",
      "CAD"
    ],
    "tools": [
      "Orca Slicer",
      "SolidWorks"
    ],
    "body": [],
    "links": [],
    "sections": [],
    "published": true,
    "image": ""
  }
];
