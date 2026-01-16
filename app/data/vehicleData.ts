export const vehicleData = {
  Acura: {
    models: ["MDX", "RDX", "TLX", "Integra"],
    trims: {
      MDX: ["Base", "Technology", "A-Spec", "Advance"],
      RDX: ["Base", "Technology", "A-Spec"],
      TLX: ["Base", "Technology", "Type S"],
      Integra: ["Base", "A-Spec", "A-Spec Technology"],
    },
    tireSizes: {
      MDX: ["255/55R19", "255/50R20"],
      RDX: ["235/55R19", "255/45R20"],
      TLX: ["235/50R18", "255/35R20"],
      Integra: ["215/50R17", "235/40R18"],
    },
  },
  "Alfa Romeo": {
    models: ["Giulia", "Stelvio", "Tonale"],
    trims: {
      Giulia: ["Sprint", "Ti", "Veloce", "Quadrifoglio"],
      Stelvio: ["Sprint", "Ti", "Veloce"],
      Tonale: ["Ti", "Veloce"],
    },
    tireSizes: {
      Giulia: ["225/45R18", "225/40R19"],
      Stelvio: ["235/60R18", "255/45R20"],
      Tonale: ["235/45R19", "235/40R20"],
    },
  },
  Audi: {
    models: ["A4", "Q5", "A3", "Q7", "A6"],
    trims: {
      A4: ["Premium", "Premium Plus", "Prestige"],
      Q5: ["Premium", "Premium Plus", "Prestige"],
      A3: ["Premium", "Premium Plus"],
      Q7: ["Premium", "Premium Plus", "Prestige"],
    },
    tireSizes: {
      A4: ["245/40R18", "245/35R19"],
      Q5: ["235/60R18", "255/45R20"],
      A3: ["225/45R17", "225/40R18"],
      Q7: ["255/55R19", "285/45R20"],
    },
  },
  BMW: {
    models: ["3 Series", "5 Series", "X3", "X5", "X7"],
    trims: {
      "3 Series": ["330i", "M340i", "330e"],
      "5 Series": ["530i", "540i", "M550i"],
      X3: ["sDrive30i", "xDrive30i", "M40i"],
      X5: ["sDrive40i", "xDrive45e", "M50i"],
    },
    tireSizes: {
      "3 Series": ["225/45R18", "225/40R19"],
      "5 Series": ["245/45R18", "245/40R19"],
      X3: ["245/50R19", "245/45R20"],
      X5: ["265/50R19", "275/45R20"],
    },
  },
  Chevrolet: {
    models: ["Silverado 1500", "Equinox", "Tahoe", "Malibu", "Colorado"],
    trims: {
      "Silverado 1500": ["WT", "Custom", "LT", "RST", "High Country"],
      Equinox: ["LS", "LT", "RS", "Premier"],
      Tahoe: ["LS", "LT", "Z71", "Premier", "High Country"],
      Malibu: ["LS", "RS", "LT"],
    },
    tireSizes: {
      "Silverado 1500": ["265/70R17", "275/60R20"],
      Equinox: ["225/65R17", "235/50R19"],
      Tahoe: ["265/65R18", "275/50R22"],
      Malibu: ["205/65R16", "245/45R18"],
    },
  },
  Hyundai: {
    models: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade"],
    trims: {
      Elantra: ["SE", "SEL", "Limited", "N Line"],
      Sonata: ["SE", "SEL", "Limited", "N Line"],
      Tucson: ["SE", "SEL", "XRT", "Limited"],
      Palisade: ["SE", "SEL", "Limited", "Calligraphy"],
    },
    tireSizes: {
      Elantra: ["195/65R15", "225/45R17"],
      Sonata: ["205/65R16", "235/45R18"],
      Tucson: ["225/65R17", "235/55R19"],
      Palisade: ["245/60R18", "245/50R20"],
    },
  },
  Jeep: {
    models: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Gladiator"],
    trims: {
      Wrangler: ["Sport", "Sahara", "Rubicon", "Willys"],
      "Grand Cherokee": ["Laredo", "Limited", "Overland", "Summit"],
      Compass: ["Sport", "Latitude", "Limited", "Trailhawk"],
      Gladiator: ["Sport", "Overland", "Rubicon", "Mojave"],
    },
    tireSizes: {
      Wrangler: ["245/75R17", "285/70R17", "255/70R18"],
      "Grand Cherokee": ["245/70R17", "265/50R20"],
      Compass: ["215/65R16", "225/55R18"],
      Gladiator: ["245/75R17", "285/70R17"],
    },
  },
  Kia: {
    models: ["Sportage", "Sorento", "Telluride", "Forte", "Soul"],
    trims: {
      Sportage: ["LX", "EX", "SX", "X-Line"],
      Sorento: ["LX", "S", "EX", "SX"],
      Telluride: ["LX", "S", "EX", "SX"],
      Forte: ["FE", "LXS", "GT-Line", "GT"],
    },
    tireSizes: {
      Sportage: ["235/65R17", "235/55R19"],
      Sorento: ["235/65R17", "235/55R19"],
      Telluride: ["245/60R18", "245/50R20"],
      Forte: ["195/65R15", "225/45R17"],
    },
  },
  Lexus: {
    models: ["RX", "NX", "ES", "IS", "GX"],
    trims: {
      RX: ["350", "350h", "500h F Sport"],
      NX: ["250", "350", "350h", "450h+"],
      ES: ["250", "350", "300h"],
      IS: ["300", "350 F Sport", "500"],
    },
    tireSizes: {
      RX: ["235/65R18", "235/50R21"],
      NX: ["235/60R18", "235/50R20"],
      ES: ["215/55R17", "235/45R18"],
      IS: ["235/45R18", "235/40R19"],
    },
  },
  "Mercedes-Benz": {
    models: ["C-Class", "E-Class", "GLC", "GLE", "S-Class"],
    trims: {
      "C-Class": ["C300", "AMG C43", "AMG C63"],
      GLC: ["GLC300", "AMG GLC43"],
      GLE: ["GLE350", "GLE450", "GLE53"],
    },
    tireSizes: {
      "C-Class": ["225/50R17", "225/45R18"],
      GLC: ["235/60R18", "235/55R19"],
      GLE: ["255/50R19", "275/50R20"],
    },
  },
  Nissan: {
    models: ["Altima", "Rogue", "Sentra", "Frontier", "Pathfinder"],
    trims: {
      Altima: ["S", "SV", "SR", "SL", "Platinum"],
      Rogue: ["S", "SV", "SL", "Platinum"],
      Sentra: ["S", "SV", "SR"],
      Frontier: ["S", "SV", "PRO-X", "PRO-4X"],
    },
    tireSizes: {
      Altima: ["215/60R16", "235/40R19"],
      Rogue: ["225/65R17", "235/55R19"],
      Sentra: ["205/60R16", "215/50R17"],
      Frontier: ["265/70R16", "265/65R17"],
    },
  },
  Porsche: {
    models: ["911", "Cayenne", "Macan", "Taycan", "Panamera"],
    trims: {
      911: ["Carrera", "Targa", "Turbo", "GT3"],
      Cayenne: ["Base", "S", "GTS", "Turbo"],
      Macan: ["Base", "S", "GTS"],
    },
    tireSizes: {
      911: ["235/40R19", "245/35R20"],
      Cayenne: ["255/55R19", "285/40R21"],
      Macan: ["235/60R18", "265/45R20"],
    },
  },
  Tesla: {
    models: ["Model 3", "Model Y", "Model S", "Model X"],
    trims: {
      "Model 3": ["RWD", "Long Range", "Performance"],
      "Model Y": ["Long Range", "Performance"],
      "Model S": ["Long Range", "Plaid"],
      "Model X": ["Long Range", "Plaid"],
    },
    tireSizes: {
      "Model 3": ["235/45R18", "235/40R19"],
      "Model Y": ["255/45R19", "255/40R20"],
      "Model S": ["255/45R19", "285/30R21"],
      "Model X": ["265/45R20", "265/35R22"],
    },
  },
  Volkswagen: {
    models: ["Jetta", "Tiguan", "Atlas", "Golf", "ID.4"],
    trims: {
      Jetta: ["S", "Sport", "SE", "SEL", "GLI"],
      Tiguan: ["S", "SE", "SEL R-Line"],
      Atlas: ["SE", "SEL", "SEL Premium"],
      "ID.4": ["Standard", "Pro", "Pro S"],
    },
    tireSizes: {
      Jetta: ["205/60R16", "225/45R18"],
      Tiguan: ["215/65R17", "255/40R20"],
      Atlas: ["245/60R18", "255/50R20"],
      "ID.4": ["235/55R19", "235/50R20"],
    },
  },
  Toyota: {
    models: [
      "RAV4",
      "Camry",
      "Tacoma",
      "Highlander",
      "Corolla",
      "4Runner",
      "Tundra",
      "Prius",
    ],
    trims: {
      RAV4: ["LE", "XLE", "Adventure", "Limited", "TRD Off-Road"],
      Camry: ["LE", "SE", "XLE", "XSE", "TRD"],
      Tacoma: ["SR", "SR5", "TRD Sport", "TRD Off-Road", "Limited"],
      Highlander: ["L", "LE", "XLE", "Limited", "Platinum"],
      Corolla: ["L", "LE", "SE", "XLE", "XSE"],
      "4Runner": ["SR5", "TRD Off-Road", "TRD Pro", "Limited"],
      Tundra: ["SR", "SR5", "Limited", "Platinum", "TRD Pro"],
      Prius: ["LE", "XLE", "Limited"],
    },
    tireSizes: {
      RAV4: ["225/65R17", "235/55R19", "225/60R18"],
      Camry: ["205/65R16", "235/45R18", "215/55R17"],
      Tacoma: ["265/70R16", "265/65R17", "265/70R17"],
      Highlander: ["245/60R18", "235/55R20"],
      Corolla: ["195/65R15", "205/55R16", "225/40R18"],
      "4Runner": ["265/70R17", "275/5520"],
      Tundra: ["275/65R18", "275/55R20"],
      Prius: ["195/65R15", "215/45R17"],
    },
  },
  Honda: {
    models: ["Civic", "Accord", "CR-V", "Pilot", "HR-V", "Odyssey"],
    trims: {
      Civic: ["LX", "Sport", "EX", "Touring"],
      Accord: ["LX", "Sport", "EX-L", "Touring"],
      "CR-V": ["LX", "EX", "EX-L", "Touring"],
      Pilot: ["LX", "EX", "EX-L", "Touring", "Elite"],
      "HR-V": ["LX", "Sport", "EX-L"],
      Odyssey: ["LX", "EX", "EX-L", "Touring", "Elite"],
    },
    tireSizes: {
      Civic: ["215/55R16", "235/40R18", "215/50R17"],
      Accord: ["225/50R17", "235/45R18", "235/40R19"],
      "CR-V": ["235/60R18", "235/55R19"],
      Pilot: ["245/60R18", "245/50R20"],
      "HR-V": ["215/55R17", "215/50R18"],
      Odyssey: ["235/60R18", "235/55R19"],
    },
  },
  Ford: {
    models: ["F-150", "Escape", "Explorer", "Mustang", "Edge", "Bronco"],
    trims: {
      "F-150": ["XL", "XLT", "Lariat", "King Ranch", "Platinum", "Limited"],
      Escape: ["S", "SE", "SEL", "Titanium"],
      Explorer: ["Base", "XLT", "Limited", "ST", "Platinum"],
      Mustang: ["EcoBoost", "GT", "Mach 1"],
      Edge: ["SE", "SEL", "ST", "Titanium"],
      Bronco: ["Base", "Big Bend", "Black Diamond", "Outer Banks", "Wildtrak"],
    },
    tireSizes: {
      "F-150": ["275/65R18", "275/55R20", "265/70R17"],
      Escape: ["225/60R18", "225/55R19"],
      Explorer: ["255/55R20", "265/45R21"],
      Mustang: ["235/55R17", "255/40R19", "275/40R19"],
      Edge: ["245/60R18", "245/50R20"],
      Bronco: ["255/70R16", "285/70R17", "315/70R17"],
    },
  },

  "Aston Martin": {
    models: ["DB11", "Vantage", "DBX"],
    trims: {
      DB11: ["V8", "V12"],
      Vantage: ["Base", "AMR"],
      DBX: ["Base", "707"],
    },
    tireSizes: {
      DB11: ["255/40R20", "295/35R20"],
      Vantage: ["245/40R20", "295/35R20"],
      DBX: ["285/40R22", "325/35R22"],
    },
  },

  Bentley: {
    models: ["Bentayga", "Continental GT"],
    trims: {
      Bentayga: ["V8", "Speed"],
      "Continental GT": ["V8", "Speed"],
    },
    tireSizes: {
      Bentayga: ["285/45R21", "285/40R22"],
      "Continental GT": ["275/35R21", "315/30R21"],
    },
  },

  Buick: {
    models: ["Encore", "Envision", "Enclave"],
    trims: {
      Encore: ["Preferred", "GX"],
      Envision: ["Preferred", "Essence"],
      Enclave: ["Essence", "Avenir"],
    },
    tireSizes: {
      Encore: ["215/55R18"],
      Envision: ["225/60R18", "245/45R20"],
      Enclave: ["255/60R18", "255/55R20"],
    },
  },

  Cadillac: {
    models: ["Escalade", "XT5", "CT5"],
    trims: {
      Escalade: ["Luxury", "Premium Luxury", "Sport"],
      XT5: ["Luxury", "Premium Luxury"],
      CT5: ["Luxury", "Sport"],
    },
    tireSizes: {
      Escalade: ["275/50R22"],
      XT5: ["235/65R18", "255/45R20"],
      CT5: ["245/45R18", "245/40R19"],
    },
  },

  Chrysler: {
    models: ["300", "Pacifica"],
    trims: {
      300: ["Touring", "Limited", "S"],
      Pacifica: ["Touring", "Limited", "Pinnacle"],
    },
    tireSizes: {
      300: ["245/45R20"],
      Pacifica: ["235/65R17", "245/50R20"],
    },
  },

  Dodge: {
    models: ["Charger", "Challenger", "Durango"],
    trims: {
      Charger: ["SXT", "R/T", "Scat Pack"],
      Challenger: ["SXT", "R/T", "Scat Pack"],
      Durango: ["SXT", "R/T", "Citadel"],
    },
    tireSizes: {
      Charger: ["245/45R20"],
      Challenger: ["245/45R20", "275/40R20"],
      Durango: ["265/50R20"],
    },
  },

  Ferrari: {
    models: ["Roma", "F8", "SF90"],
    trims: {
      Roma: ["Base"],
      F8: ["Tributo"],
      SF90: ["Stradale"],
    },
    tireSizes: {
      Roma: ["245/35R20", "285/35R20"],
      F8: ["245/35R20", "305/30R20"],
      SF90: ["255/35R20", "315/30R20"],
    },
  },

  Genesis: {
    models: ["G70", "G80", "GV80"],
    trims: {
      G70: ["Base", "Sport"],
      G80: ["Base", "Sport"],
      GV80: ["Advanced", "Prestige"],
    },
    tireSizes: {
      G70: ["225/45R18", "255/35R19"],
      G80: ["245/45R18", "275/35R20"],
      GV80: ["265/55R19", "275/45R21"],
    },
  },

  GMC: {
    models: ["Sierra 1500", "Yukon", "Terrain"],
    trims: {
      "Sierra 1500": ["Base", "SLT", "Denali"],
      Yukon: ["SLE", "SLT", "Denali"],
      Terrain: ["SLE", "SLT"],
    },
    tireSizes: {
      "Sierra 1500": ["265/70R17", "275/60R20"],
      Yukon: ["265/65R18", "275/50R22"],
      Terrain: ["225/60R17"],
    },
  },

  INEOS: {
    models: ["Grenadier"],
    trims: {
      Grenadier: ["Base", "Fieldmaster", "Trialmaster"],
    },
    tireSizes: {
      Grenadier: ["265/70R17", "275/65R18"],
    },
  },

  INFINITI: {
    models: ["Q50", "QX60"],
    trims: {
      Q50: ["Pure", "Luxe", "Red Sport"],
      QX60: ["Pure", "Luxe"],
    },
    tireSizes: {
      Q50: ["225/55R17", "245/40R19"],
      QX60: ["235/65R18", "255/50R20"],
    },
  },

  Jaguar: {
    models: ["XE", "XF", "F-Pace"],
    trims: {
      XE: ["Base", "R-Dynamic"],
      XF: ["Base", "R-Dynamic"],
      "F-Pace": ["Base", "R-Dynamic"],
    },
    tireSizes: {
      XE: ["225/45R18"],
      XF: ["245/45R18"],
      "F-Pace": ["255/55R19", "265/40R22"],
    },
  },

  Lamborghini: {
    models: ["Huracan", "Urus"],
    trims: {
      Huracan: ["EVO"],
      Urus: ["Base"],
    },
    tireSizes: {
      Huracan: ["245/30R20", "305/30R20"],
      Urus: ["285/45R21", "325/40R22"],
    },
  },

  "Land Rover": {
    models: ["Range Rover", "Discovery", "Defender"],
    trims: {
      "Range Rover": ["SE", "HSE"],
      Discovery: ["S", "SE"],
      Defender: ["S", "X"],
    },
    tireSizes: {
      "Range Rover": ["255/55R20", "285/45R22"],
      Discovery: ["255/60R19"],
      Defender: ["255/65R18", "285/45R22"],
    },
  },

  Lincoln: {
    models: ["Navigator", "Aviator"],
    trims: {
      Navigator: ["Reserve", "Black Label"],
      Aviator: ["Reserve", "Grand Touring"],
    },
    tireSizes: {
      Navigator: ["275/55R20", "285/45R22"],
      Aviator: ["255/55R20"],
    },
  },

  Lotus: {
    models: ["Emira"],
    trims: {
      Emira: ["Base"],
    },
    tireSizes: {
      Emira: ["245/35R20", "295/30R20"],
    },
  },

  Lucid: {
    models: ["Air"],
    trims: {
      Air: ["Pure", "Touring", "Grand Touring"],
    },
    tireSizes: {
      Air: ["245/45R19", "245/40R20"],
    },
  },

  Maserati: {
    models: ["Ghibli", "Levante"],
    trims: {
      Ghibli: ["Base", "Trofeo"],
      Levante: ["Base", "Trofeo"],
    },
    tireSizes: {
      Ghibli: ["245/40R19", "285/35R19"],
      Levante: ["265/50R19", "295/45R20"],
    },
  },

  Mazda: {
    models: ["Mazda3", "CX-5", "CX-9"],
    trims: {
      Mazda3: ["Base", "Select"],
      "CX-5": ["Sport", "Touring"],
      "CX-9": ["Touring", "Grand Touring"],
    },
    tireSizes: {
      Mazda3: ["205/60R16", "215/45R18"],
      "CX-5": ["225/65R17", "225/55R19"],
      "CX-9": ["255/60R18", "255/50R20"],
    },
  },

  McLaren: {
    models: ["720S", "Artura"],
    trims: {
      "720S": ["Base"],
      Artura: ["Base"],
    },
    tireSizes: {
      "720S": ["245/35R19", "305/30R20"],
      Artura: ["245/35R19", "305/30R20"],
    },
  },

  Mini: {
    models: ["Cooper", "Countryman"],
    trims: {
      Cooper: ["Base", "S"],
      Countryman: ["Base", "S"],
    },
    tireSizes: {
      Cooper: ["195/55R16", "205/45R17"],
      Countryman: ["225/55R18"],
    },
  },

  Mitsubishi: {
    models: ["Outlander", "Eclipse Cross"],
    trims: {
      Outlander: ["ES", "SE", "SEL"],
      "Eclipse Cross": ["ES", "SE"],
    },
    tireSizes: {
      Outlander: ["225/60R18"],
      "Eclipse Cross": ["225/55R18"],
    },
  },

  Polestar: {
    models: ["Polestar 2"],
    trims: {
      "Polestar 2": ["Single Motor", "Dual Motor"],
    },
    tireSizes: {
      "Polestar 2": ["245/45R19", "245/40R20"],
    },
  },

  Ram: {
    models: ["1500"],
    trims: {
      "1500": ["Tradesman", "Big Horn", "Laramie"],
    },
    tireSizes: {
      "1500": ["275/65R18", "275/55R20"],
    },
  },

  Rivian: {
    models: ["R1T", "R1S"],
    trims: {
      R1T: ["Explore", "Adventure"],
      R1S: ["Explore", "Adventure"],
    },
    tireSizes: {
      R1T: ["275/65R20", "275/55R21"],
      R1S: ["275/65R20", "275/55R21"],
    },
  },

  "Rolls-Royce": {
    models: ["Cullinan", "Ghost"],
    trims: {
      Cullinan: ["Base"],
      Ghost: ["Base"],
    },
    tireSizes: {
      Cullinan: ["255/50R21", "285/45R22"],
      Ghost: ["255/45R20"],
    },
  },

  Subaru: {
    models: ["Outback", "Forester", "Impreza"],
    trims: {
      Outback: ["Base", "Limited"],
      Forester: ["Base", "Sport"],
      Impreza: ["Base", "Sport"],
    },
    tireSizes: {
      Outback: ["225/65R17", "225/60R18"],
      Forester: ["225/60R17"],
      Impreza: ["205/55R16", "225/40R18"],
    },
  },

  VinFast: {
    models: ["VF8", "VF9"],
    trims: {
      VF8: ["Eco", "Plus"],
      VF9: ["Eco", "Plus"],
    },
    tireSizes: {
      VF8: ["255/50R20"],
      VF9: ["265/45R21"],
    },
  },

  Volvo: {
    models: ["XC60", "XC90", "S60"],
    trims: {
      XC60: ["Core", "Plus"],
      XC90: ["Core", "Ultimate"],
      S60: ["Core", "Recharge"],
    },
    tireSizes: {
      XC60: ["235/60R18", "255/45R20"],
      XC90: ["275/45R20", "275/40R21"],
      S60: ["235/45R18", "235/40R19"],
    },
  },
};

export const tireAttributeData = {
  widths: ["435", "315", "305", "295", "285", "275", "265", "255"],
  profiles: ["30", "35", "40", "45", "50", "55", "60"],
  wheelSizes: ['18"', '19"', '19.5"', '20"', '22"'],
  seasons: ["Summer", "Winter", "All-Season", "All-Weather"],
  speedRatings: [
    "A1 5kmh / 3mph",
    "A2 10kmh / 6mph",
    "A3 15kmh / 9mph",
    "A4 20kmh / 12mph",
    "A5 25kmh / 16mph",
    "A6 30kmh / 19mph",
    "A7 35kmh / 22mph",
    "A8 40kmh / 25mph",
    "B 50kmh / 31mph",
    "C 60kmh / 37mph",
    "D 65kmh / 40mph",
    "E 70kmh / 43mph",
    "F 80kmh / 50mph",
    "G 90kmh / 56mph",
    "J 100kmh / 62mph",
    "K 110kmh / 68mph",
    "L 120kmh / 75mph",
    "M 130kmh / 81mph",
    "N 140kmh / 87mph",
    "P 150kmh / 94mph",
    "Q 160kmh / 100mph",
    "R 170kmh / 106mph",
    "S 180kmh / 112mph",
    "T 190kmh / 118mph",
    "U 200kmh / 124mph",
    "H 210kmh / 130mph",
    "V 240kmh / 149mph",
    "Z over 240kmh / over 149mph",
    "W 270kmh / 168mph",
    "(W) over 270kmh / over 168mph",
    "Y 300kmh / 186mph",
  ],
  loadIndexes: Array.from({ length: 250 }, (_, i) => (i + 1).toString()),
};
