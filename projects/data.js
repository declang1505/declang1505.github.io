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
          "Settings: 210°C nozzle, 60°C bed"
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
    "summary": "A custom 3D-printed enclosure to mount a Sony Xperia XA2 within an iPega PG-9087S controller.",
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
          "The enclosure is intentionally non-permanent, allowing full access to the phone’s power and volume buttons, though charging is not possible while installed. A key challenge was the lack of technical drawings for the controller: the CAD model was developed in SolidWorks using hand measurements, iterative prototypes and careful tracing of the extending arm curvature to achieve a precise fit."
        ],
        "bullets": [],
        "images": [
          {
            "src": "images/xa2-01-prototype-workbench.jpg",
            "alt": "Handheld enclosure prototype beside digital calipers and soldering iron",
            "caption": "Prototype enclosure and measurements"
          },
          {
            "src": "images/xa2-04-rear-assembly.jpg",
            "alt": "Rear of the assembled handheld showing controller and central enclosure",
            "caption": "Rear mounting arrangement"
          },
          {
            "src": "images/xa2-02-front-view.png",
            "alt": "Front view of Xperia XA2 mounted inside iPega controller",
            "caption": "Completed prototype, front view"
          },
          {
            "src": "images/xa2-03-running-emulator.png",
            "alt": "Handheld powered on and showing Nintendo 64 games in emulator frontend",
            "caption": "Emulation frontend running on the Xperia XA2"
          }
        ]
      },
      {
        "title": "Design & CAD",
        "paragraphs": [],
        "bullets": [],
        "images": [
          {
            "src": "images/xa2-07-cad-design.png",
            "alt": "SolidWorks model of the phone mounting frame",
            "caption": "CAD development in SolidWorks"
          },
          {
            "src": "images/xa2-08-slicer-preview.png",
            "alt": "Green 3D slicing preview of the printed frame",
            "caption": "Print preparation in Orca Slicer"
          },
          {
            "src": "images/xa2-09-render-front-clean.jpg",
            "alt": "Front view of the rendered Xperia enclosure",
            "caption": "Front CAD rendering"
          },
          {
            "src": "images/xa2-10-render-perspective-clean.jpg",
            "alt": "Oblique CAD render of enclosure fitted around the Xperia",
            "caption": "Perspective CAD rendering"
          },
          {
            "src": "images/xa2-11-render-opposite-clean.jpg",
            "alt": "Alternative perspective CAD rendering of the enclosure",
            "caption": "Alternative CAD view"
          }
        ]
      },
      {
        "title": "Manufacturing / Printing",
        "paragraphs": [],
        "bullets": [
          "Printer: Elegoo Centauri Carbon",
          "Material: Flashforge HS PLA Burnt Titanium",
          "Settings: 210°C nozzle, 60°C bed"
        ],
        "images": [
          {
            "src": "images/xa2-05-printed-iterations.png",
            "alt": "Four iterations of the 3D printed enclosure frames",
            "caption": "Printed design iterations"
          },
          {
            "src": "images/xa2-06-detail-of-fit.jpg",
            "alt": "Close-up of fitted printed enclosure beside controller buttons",
            "caption": "Surface finish and fit around the controls"
          }
        ]
      },
      {
        "title": "Future Improvements",
        "paragraphs": [
          "A potential next step is to disassemble both the phone and controller and design a complete shell around their components. This could allow tighter packaging, although the USB port, headphone jack and SD-card access would need to be addressed."
        ],
        "bullets": [],
        "images": []
      }
    ],
    "published": true,
    "image": "images/xa2-cover.webp"
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
