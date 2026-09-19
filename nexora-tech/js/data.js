// Base de datos de productos para NEXORA TECH
const PRODUCTS_DATA = [
  // --- SMARTPHONES ---
  {
    id: "sp-01",
    name: "Nova X1 Pro",
    brand: "NovaTech",
    category: "Smartphones",
    price: 949.99,
    oldPrice: 1099.99,
    discount: 14,
    rating: 4.8,
    reviewsCount: 142,
    stock: 15,
    featured: true,
    isDeal: true,
    description: "Smartphone de alta gama con procesador Octa-Core de 4nm, pantalla OLED de 6.7 pulgadas a 120Hz y sistema de triple cámara con sensor principal de 108MP.",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Pantalla": "6.7\" OLED FHD+ (120Hz)",
      "Procesador": "Octa-Core 4nm Flagship",
      "Memoria RAM": "12 GB LPDDR5",
      "Almacenamiento": "256 GB UFS 3.1",
      "Batería": "5000 mAh (Carga rápida 65W)",
      "Cámaras": "108MP + 12MP Ultra-wide + 8MP Telephoto"
    },
    reviews: [
      { user: "Martín R.", rating: 5, date: "2026-08-12", comment: "Velocidad absoluta y la pantalla se ve increíble bajo el sol." },
      { user: "Laura V.", rating: 4.5, date: "2026-08-01", comment: "Excelente autonomía, la batería dura más de un día completo." }
    ]
  },
  {
    id: "sp-02",
    name: "Nova Lite 5G",
    brand: "NovaTech",
    category: "Smartphones",
    price: 489.00,
    oldPrice: 549.00,
    discount: 11,
    rating: 4.6,
    reviewsCount: 88,
    stock: 22,
    featured: false,
    isDeal: false,
    description: "Equilibrio perfecto entre autonomía, conectividad 5G ultrarrápida y un diseño ergonómico ultradelgado.",
    images: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Pantalla": "6.5\" IPS 90Hz",
      "Procesador": "Hexa-Core 5G",
      "Memoria RAM": "6 GB",
      "Almacenamiento": "128 GB",
      "Batería": "4500 mAh"
    },
    reviews: [
      { user: "Carlos G.", rating: 4, date: "2026-07-20", comment: "Muy buen rendimiento por el precio." }
    ]
  },
  {
    id: "sp-03",
    name: "Aero Phone Ultra",
    brand: "AeroMobile",
    category: "Smartphones",
    price: 1199.00,
    oldPrice: 1299.00,
    discount: 8,
    rating: 4.9,
    reviewsCount: 205,
    stock: 8,
    featured: true,
    isDeal: false,
    description: "Construcción en titanio aeroespacial, estabilización óptica de grado cinematográfico y display de brillo extremo.",
    images: [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Pantalla": "6.8\" LTPO AMOLED 1-120Hz",
      "Procesador": "Titanium Gen 3",
      "Memoria RAM": "16 GB",
      "Almacenamiento": "512 GB",
      "Cámaras": "200MP Quad Cam"
    },
    reviews: [
      { user: "Ignacio P.", rating: 5, date: "2026-08-30", comment: "La cámara nocturna supera cualquier expectativa." }
    ]
  },

  // --- NOTEBOOKS ---
  {
    id: "nb-01",
    name: "Vertex Pro 14",
    brand: "Vertex",
    category: "Notebooks",
    price: 1450.00,
    oldPrice: 1650.00,
    discount: 12,
    rating: 4.9,
    reviewsCount: 95,
    stock: 10,
    featured: true,
    isDeal: true,
    description: "Estación de trabajo portátil con chasis unibody de aluminio, panel 2.8K calibrado para diseño y refrigeración por cámara de vapor.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Procesador": "14-Core High Performance",
      "Memoria RAM": "32 GB DDR5 6400MHz",
      "Almacenamiento": "1 TB NVMe Gen4",
      "Pantalla": "14.2\" Liquid Retina 120Hz",
      "Peso": "1.38 kg",
      "Puertos": "Thunderbolt 4 x 3, HDMI 2.1, SD UHS-II"
    },
    reviews: [
      { user: "Elena F.", rating: 5, date: "2026-08-15", comment: "Para renderizar y compilar código vuela. El teclado es comodísimo." }
    ]
  },
  {
    id: "nb-02",
    name: "AeroBook 15 Air",
    brand: "AeroMobile",
    category: "Notebooks",
    price: 890.00,
    oldPrice: 990.00,
    discount: 10,
    rating: 4.7,
    reviewsCount: 64,
    stock: 14,
    featured: false,
    isDeal: false,
    description: "Portátil ultraliviano con hasta 18 horas de autonomía real, teclado retroiluminado y silencioso.",
    images: [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Procesador": "8-Core Eco-Power",
      "Memoria RAM": "16 GB Unificada",
      "Almacenamiento": "512 GB SSD",
      "Pantalla": "15.3\" IPS Antirreflejo",
      "Peso": "1.24 kg"
    },
    reviews: [
      { user: "Gonzalo M.", rating: 5, date: "2026-07-28", comment: "Batería infinita. Ideal para llevar a la facultad o trabajo." }
    ]
  },
  {
    id: "nb-03",
    name: "Forge Studio Max",
    brand: "Forge",
    category: "Notebooks",
    price: 2199.00,
    oldPrice: 2499.00,
    discount: 12,
    rating: 4.9,
    reviewsCount: 42,
    stock: 6,
    featured: true,
    isDeal: false,
    description: "Diseñada para creadores 3D y edición de video 8K con gráfica dedicada de 16GB VRAM y pantalla Mini-LED.",
    images: [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Procesador": "24-Core Studio Tier",
      "Gráficos": "Dedicated GPU 16GB VRAM",
      "RAM": "64 GB DDR5",
      "Almacenamiento": "2 TB PCIe Gen4",
      "Pantalla": "16\" Mini-LED 4K 120Hz"
    },
    reviews: [
      { user: "Facundo S.", rating: 5, date: "2026-08-04", comment: "Una bestia gráfica. Renders en tiempo récord." }
    ]
  },

  // --- MONITORES ---
  {
    id: "mn-01",
    name: "Orbit Display 27 Pro",
    brand: "Orbit",
    category: "Monitores",
    price: 499.99,
    oldPrice: 599.99,
    discount: 17,
    rating: 4.8,
    reviewsCount: 77,
    stock: 18,
    featured: true,
    isDeal: true,
    description: "Monitor profesional para diseño y programación con resolución 4K UHD, cobertura 99% DCI-P3 y base regulable en altura y rotación.",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Tamaño": "27 pulgadas",
      "Resolución": "3840 x 2160 (4K UHD)",
      "Tasa de refresco": "75 Hz",
      "Conectividad": "USB-C (Power Delivery 90W), HDMI 2.0 x 2, DP 1.4",
      "Espacio de color": "99% DCI-P3 / 100% sRGB Delta E < 1"
    },
    reviews: [
      { user: "Lucía B.", rating: 5, date: "2026-08-25", comment: "El hub USB-C carga mi notebook mientras transmite video. Impecable." }
    ]
  },
  {
    id: "mn-02",
    name: "Orbit Curved UltraWide 34",
    brand: "Orbit",
    category: "Monitores",
    price: 680.00,
    oldPrice: 790.00,
    discount: 14,
    rating: 4.7,
    reviewsCount: 51,
    stock: 11,
    featured: false,
    isDeal: false,
    description: "Inmersión total para multitarea y gaming fluido con curvatura 1500R y formato panorámico 21:9.",
    images: [
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Tamaño": "34 pulgadas Curvo",
      "Resolución": "3440 x 1440 (UWQHD)",
      "Tasa de refresco": "165 Hz",
      "Tiempo de respuesta": "1 ms MPRT"
    },
    reviews: [
      { user: "Matías E.", rating: 5, date: "2026-07-14", comment: "Excelente para trabajar con 3 ventanas abiertas a la vez." }
    ]
  },

  // --- AUDIO ---
  {
    id: "au-01",
    name: "Pulse Air ANC",
    brand: "Pulse",
    category: "Audio",
    price: 249.00,
    oldPrice: 299.00,
    discount: 17,
    rating: 4.8,
    reviewsCount: 189,
    stock: 25,
    featured: true,
    isDeal: true,
    description: "Auriculares inalámbricos over-ear con cancelación activa de ruido híbrida de 42dB, drivers de neodimio de 40mm y 45 horas de autonomía.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Cancelación de Ruido": "Híbrida Adaptativa (-42dB)",
      "Drivers": "40 mm Neodimio de alta resolución",
      "Batería": "45 horas (ANC activado)",
      "Conectividad": "Bluetooth 5.3 + Jack 3.5mm analógico",
      "Códecs": "LDAC, AAC, SBC"
    },
    reviews: [
      { user: "Tomás K.", rating: 5, date: "2026-08-11", comment: "La cancelación aísla por completo el ruido del tránsito y oficinas." }
    ]
  },
  {
    id: "au-02",
    name: "Pulse Pods Pro",
    brand: "Pulse",
    category: "Audio",
    price: 139.99,
    oldPrice: 169.99,
    discount: 18,
    rating: 4.6,
    reviewsCount: 110,
    stock: 30,
    featured: false,
    isDeal: true,
    description: "Auriculares in-ear compactos con resistencia al agua IPX5, carga inalámbrica Qi y micrófonos beamforming.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Protección": "IPX5 Resistente a salpicaduras y sudor",
      "Autonomía": "7h (28h con estuche)",
      "Carga": "USB-C e Inalámbrica Qi"
    },
    reviews: [
      { user: "Carla D.", rating: 4.5, date: "2026-06-30", comment: "Muy cómodos para salir a correr, no se mueven." }
    ]
  },
  {
    id: "au-03",
    name: "Acoustic Bar 300",
    brand: "Pulse",
    category: "Audio",
    price: 199.00,
    oldPrice: 230.00,
    discount: 13,
    rating: 4.5,
    reviewsCount: 38,
    stock: 9,
    featured: false,
    isDeal: false,
    description: "Barra de sonido estéreo de alta fidelidad con subwoofer pasivo integrado y conexión HDMI eARC.",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Potencia": "120W RMS",
      "Audio": "Dolby Atmos Compatible",
      "Conexiones": "HDMI eARC, Óptico, Bluetooth 5.2"
    },
    reviews: [
      { user: "Rodrigo T.", rating: 5, date: "2026-08-02", comment: "Graves profundos y diálogo muy claro en películas." }
    ]
  },

  // --- GAMING ---
  {
    id: "gm-01",
    name: "Flux Mech RGB 75%",
    brand: "Flux",
    category: "Gaming",
    price: 119.00,
    oldPrice: 149.00,
    discount: 20,
    rating: 4.9,
    reviewsCount: 220,
    stock: 20,
    featured: true,
    isDeal: true,
    description: "Teclado mecánico hot-swappable en formato compacto 75%, switches lineales lubricados de fábrica y doble capa de insonorización.",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Formato": "75% compacto con perilla de volumen",
      "Switches": "Linear Red Custom (Lubed)",
      "Keycaps": "PBT Doble Inyección Perfil Cherry",
      "Conectividad": "Tri-Mode (Cable USB-C, 2.4GHz Wireless, Bluetooth 5.0)"
    },
    reviews: [
      { user: "Damián S.", rating: 5, date: "2026-08-20", comment: "El sonido es super suave, nada de ruidos metálicos." }
    ]
  },
  {
    id: "gm-02",
    name: "Vector Pro Wireless",
    brand: "Flux",
    category: "Gaming",
    price: 89.99,
    oldPrice: 109.99,
    discount: 18,
    rating: 4.8,
    reviewsCount: 160,
    stock: 25,
    featured: false,
    isDeal: false,
    description: "Mouse ultraligero de 54 gramos, sensor óptico de 26.000 DPI reales y switches ópticos sin retraso.",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Peso": "54 gramos",
      "Sensor": "Optic Max 26K DPI",
      "Autonomía": "Hasta 80 horas de juego continuo",
      "Polling Rate": "1000 Hz / 1ms"
    },
    reviews: [
      { user: "Nicolás B.", rating: 5, date: "2026-07-29", comment: "No pesa nada, el deslizamiento sobre el pad de tela es una seda." }
    ]
  },
  {
    id: "gm-03",
    name: "Nexus Apex Controller",
    brand: "Flux",
    category: "Gaming",
    price: 75.00,
    oldPrice: 90.00,
    discount: 16,
    rating: 4.7,
    reviewsCount: 84,
    stock: 17,
    featured: false,
    isDeal: false,
    description: "Mando inalámbrico para PC y consolas con palancas magnéticas efecto Hall para evitar drifting permanente.",
    images: [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Tecnología": "Hall Effect Joysticks & Triggers",
      "Batería": "1200 mAh recargable",
      "Compatibilidad": "PC, Consola, Android, iOS"
    },
    reviews: [
      { user: "Joaquín C.", rating: 4.5, date: "2026-08-14", comment: "Cero drift garantizado, los gatillos son muy precisos." }
    ]
  },

  // --- TABLETS ---
  {
    id: "tb-01",
    name: "VisionTab 11 Stylus",
    brand: "VisionTech",
    category: "Tablets",
    price: 599.00,
    oldPrice: 699.00,
    discount: 14,
    rating: 4.8,
    reviewsCount: 92,
    stock: 12,
    featured: true,
    isDeal: false,
    description: "Tablet para ilustración y productividad con stylus activo incluido de 4096 niveles de presión y panel 120Hz.",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Pantalla": "11\" 2K 120Hz IPS",
      "Lápiz": "Active Stylus con rechazo de palma incluido",
      "Almacenamiento": "256 GB ampliables",
      "RAM": "8 GB"
    },
    reviews: [
      { user: "Mariana L.", rating: 5, date: "2026-08-22", comment: "Excelente precisión para dibujar y tomar apuntes digitales." }
    ]
  },
  {
    id: "tb-02",
    name: "VisionTab 13 Max",
    brand: "VisionTech",
    category: "Tablets",
    price: 850.00,
    oldPrice: 950.00,
    discount: 10,
    rating: 4.9,
    reviewsCount: 56,
    stock: 7,
    featured: false,
    isDeal: false,
    description: "Pantalla generosa de 13 pulgadas AMOLED, soporte para teclado magnético y modo escritorio multitarea.",
    images: [
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Pantalla": "13.1\" Super AMOLED HDR10+",
      "Procesador": "Octa-Core Pro",
      "Almacenamiento": "512 GB",
      "Batería": "10.000 mAh"
    },
    reviews: [
      { user: "Andrés V.", rating: 5, date: "2026-07-19", comment: "Reemplazó mi notebook para viajes de trabajo." }
    ]
  },

  // --- SMARTWATCHES ---
  {
    id: "sw-01",
    name: "PulseWatch Ultra",
    brand: "Pulse",
    category: "Smartwatches",
    price: 299.99,
    oldPrice: 349.99,
    discount: 14,
    rating: 4.8,
    reviewsCount: 135,
    stock: 19,
    featured: true,
    isDeal: true,
    description: "Reloj inteligente con caja de aleación de titanio, cristal de zafiro irrayable, GPS de doble frecuencia y ECG.",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Caja": "49mm Titanio con Cristal Zafiro",
      "Sensores": "Frecuencia Cardíaca, SpO2, Temperatura, ECG",
      "Resistencia al Agua": "10 ATM / 100 metros",
      "Batería": "Hasta 7 días de uso normal"
    },
    reviews: [
      { user: "Sebastián G.", rating: 5, date: "2026-08-16", comment: "Resistente a todo. El GPS clava el recorrido a la perfección." }
    ]
  },
  {
    id: "sw-02",
    name: "PulseWatch Active",
    brand: "Pulse",
    category: "Smartwatches",
    price: 169.00,
    oldPrice: 199.00,
    discount: 15,
    rating: 4.6,
    reviewsCount: 98,
    stock: 28,
    featured: false,
    isDeal: false,
    description: "Ultraliviano y estilizado para seguimiento de salud integral, control de sueño y más de 100 modos deportivos.",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3f40f2f01f74?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Pantalla": "1.4\" AMOLED Always-On",
      "Peso": "32 gramos sin correa",
      "Autonomía": "10 días"
    },
    reviews: [
      { user: "Camila N.", rating: 4.5, date: "2026-07-25", comment: "Ideal para monitorear pasos, sueño y entrenamientos diarios." }
    ]
  },

  // --- CÁMARAS ---
  {
    id: "cm-01",
    name: "Lumina Cine X",
    brand: "Lumina",
    category: "Cámaras",
    price: 1799.00,
    oldPrice: 1999.00,
    discount: 10,
    rating: 4.9,
    reviewsCount: 45,
    stock: 5,
    featured: true,
    isDeal: false,
    description: "Cámara mirrorless de fotograma completo con grabación 4K a 120fps en color 10-bit 4:2:2 sin recorte.",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502982720700-befe97b25521?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Sensor": "Full-Frame Exmor R 24.2 MP",
      "Video": "4K UHD 120fps / FHD 240fps",
      "Enfoque": "Autoenfoque híbrido con seguimiento de ojos por IA",
      "Estabilización": "IBIS de 5 ejes integrada (6.5 stops)"
    },
    reviews: [
      { user: "Federico L.", rating: 5, date: "2026-08-10", comment: "Calidad de cine en un cuerpo portátil. Una maravilla." }
    ]
  },
  {
    id: "cm-02",
    name: "Lumina Creator V",
    brand: "Lumina",
    category: "Cámaras",
    price: 799.00,
    oldPrice: 899.00,
    discount: 11,
    rating: 4.7,
    reviewsCount: 68,
    stock: 10,
    featured: false,
    isDeal: true,
    description: "Cámara compacta para creadores de contenido con pantalla abatible 180°, micrófono direccional y autofoco al rostro.",
    images: [
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Sensor": "APS-C 20.1 MP",
      "Pantalla": "Táctil articulada 3.0\"",
      "Video": "4K a 30fps sin límite de grabación"
    },
    reviews: [
      { user: "Sol M.", rating: 5, date: "2026-07-31", comment: "El enfoque al ojo es instantáneo, perfecta para videoblogs." }
    ]
  },

  // --- ACCESORIOS & COMPUTACIÓN ---
  {
    id: "ac-01",
    name: "CoreDock 12-en-1 Pro",
    brand: "NovaTech",
    category: "Accesorios",
    price: 129.00,
    oldPrice: 159.00,
    discount: 18,
    rating: 4.8,
    reviewsCount: 115,
    stock: 35,
    featured: false,
    isDeal: true,
    description: "Estación de acoplamiento USB-C con doble salida 4K HDMI, Gigabit Ethernet, lector SD y 100W Power Delivery.",
    images: [
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Conexiones": "2x HDMI 4K@60Hz, 1x DP, 1x RJ45 Gigabit, 3x USB 3.2, Lector SD/TF",
      "Alimentación": "USB-C PD 100W Pass-through",
      "Material": "Cuerpo en aleación de aluminio disipador"
    },
    reviews: [
      { user: "Gabriel H.", rating: 5, date: "2026-08-05", comment: "Con un solo cable conecto mis dos monitores y todos los periféricos." }
    ]
  },
  {
    id: "ac-02",
    name: "PowerMag 10.000 mAh",
    brand: "NovaTech",
    category: "Accesorios",
    price: 55.00,
    oldPrice: 69.00,
    discount: 20,
    rating: 4.7,
    reviewsCount: 89,
    stock: 40,
    featured: false,
    isDeal: false,
    description: "Batería portátil magnética inalámbrica de 15W con soporte metálico plegable y puerto bidireccional PD de 20W.",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Capacidad": "10.000 mAh Li-Polymer",
      "Carga Inalámbrica": "Magnética 15W Fast Charge",
      "Puerto": "USB-C In/Out 20W"
    },
    reviews: [
      { user: "Marina R.", rating: 4.5, date: "2026-08-18", comment: "El imán es muy fuerte y la patita para apoyar el celu viene genial." }
    ]
  },
  {
    id: "ac-03",
    name: "ErgoLift Stand de Aluminio",
    brand: "Orbit",
    category: "Accesorios",
    price: 42.00,
    oldPrice: 49.00,
    discount: 14,
    rating: 4.9,
    reviewsCount: 140,
    stock: 50,
    featured: false,
    isDeal: false,
    description: "Soporte ergonómico plegable para notebooks de hasta 17 pulgadas con almohadillas de silicona antideslizante.",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Compatibilidad": "Notebooks de 10 a 17 pulgadas",
      "Regulación": "6 ángulos ergonómicos",
      "Material": "Aluminio anodizado premium"
    },
    reviews: [
      { user: "Javier M.", rating: 5, date: "2026-07-12", comment: "Me solucionó el dolor de cuello en la oficina." }
    ]
  },
  {
    id: "cp-01",
    name: "Vertex Workstation Cube",
    brand: "Vertex",
    category: "Computación",
    price: 1890.00,
    oldPrice: 2100.00,
    discount: 10,
    rating: 4.9,
    reviewsCount: 33,
    stock: 7,
    featured: true,
    isDeal: false,
    description: "Computadora compacta de escritorio para desarrollo de software intensivo, renderizado y servidores locales silenciosos.",
    images: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      "Procesador": "16-Core 32-Threads 5.4GHz",
      "RAM": "64 GB DDR5",
      "Almacenamiento": "2 TB PCIe Gen4 SSD",
      "Chasis": "Minimalista en acero y aluminio anodizado"
    },
    reviews: [
      { user: "Esteban Z.", rating: 5, date: "2026-08-27", comment: "Rendimiento monstruoso en un tamaño que apenas ocupa espacio." }
    ]
  }
];

const CATEGORIES_DATA = [
  { name: "Smartphones", count: 3, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80" },
  { name: "Notebooks", count: 3, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80" },
  { name: "Monitores", count: 2, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80" },
  { name: "Audio", count: 3, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
  { name: "Gaming", count: 3, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80" },
  { name: "Tablets", count: 2, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80" },
  { name: "Smartwatches", count: 2, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80" },
  { name: "Cámaras", count: 2, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" },
  { name: "Accesorios", count: 3, image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Computación", count: 1, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" }
];

const BRANDS_DATA = ["NovaTech", "Vertex", "Pulse", "Flux", "VisionTech", "Lumina", "Orbit", "AeroMobile", "Forge"];

const ACTIVE_COUPONS = {
  "NEXORA10": { type: "percentage", value: 10, description: "10% de descuento en el total de productos" },
  "ENVIOGRATIS": { type: "shipping", value: 100, description: "Envío 100% bonificado en tu compra" }
};
