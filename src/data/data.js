const data = [
  {
    hour: "07:00",
    image: "sun-cloud",
    temp: 6,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 4],
    pressure: 1019
  },
  {
    hour: "08:00",
    image: "sun",
    temp: 8,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1019
  },
  {
    hour: "09:00",
    image: "sun-cloud",
    temp: 11,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1019
  },
  {
    hour: "10:00",
    image: "sun-cloud",
    temp: 13,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1019
  },
  {
    hour: "11:00",
    image: "sun-cloud",
    temp: 14,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1018
  },
  {
    hour: "12:00",
    image: "sun-cloud",
    temp: 15,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1018
  },
  {
    hour: "13:00",
    image: "sun-cloud",
    temp: 15,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1017
  },
  {
    hour: "14:00",
    image: "sun-cloud",
    temp: 16,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 11],
    pressure: 1017
  },
  {
    hour: "15:00",
    image: "sun-cloud",
    temp: 16,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 11],
    pressure: 1017
  },
  {
    hour: "16:00",
    image: "sun-cloud",
    temp: 16,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 11],
    pressure: 1016
  },
  {
    hour: "17:00",
    image: "sun-cloud",
    temp: 16,
    rain: 0,
    windDir: "Pd.-zach.",
    wind: ["Słaby", 11],
    pressure: 1016
  },
  {
    hour: "18:00",
    image: "sun-cloud",
    temp: 16,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 11],
    pressure: 1015
  },
  {
    hour: "19:00",
    image: "sun-cloud",
    temp: 15,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1015
  },
  {
    hour: "20:00",
    image: "sun-cloud",
    temp: 13,
    rain: 0,
    windDir: "Pd.-zach.",
    wind: ["Słaby", 4],
    pressure: 1015
  },
  {
    hour: "21:00",
    image: "moon-cloud",
    temp: 11,
    rain: 0,
    windDir: "Pd.-zach.",
    wind: ["Słaby", 4],
    pressure: 1015
  },
  {
    hour: "22:00",
    image: "moon-cloud",
    temp: 10,
    rain: 0,
    windDir: "Południowy",
    wind: ["Słaby", 4],
    pressure: 1015
  },
  {
    hour: "23:00",
    image: "moon-cloud",
    temp: 9,
    rain: 0,
    windDir: "Południowy",
    wind: ["Słaby", 4],
    pressure: 1014
  },
  {
    hour: "00:00",
    image: "moon-cloud",
    temp: 8,
    rain: 0,
    windDir: "Pd.-wsch.",
    wind: ["Słaby", 4],
    pressure: 1014
  },
  {
    hour: "01:00",
    image: "cloud",
    temp: 7,
    rain: 0,
    windDir: "Pd.-wsch.",
    wind: ["Słaby", 4],
    pressure: 1014
  },
  {
    hour: "02:00",
    image: "rain",
    temp: 7,
    rain: 0.2,
    windDir: "Południowy",
    wind: ["Słaby", 4],
    pressure: 1013
  },
  {
    hour: "03:00",
    image: "rain",
    temp: 7,
    rain: 0.4,
    windDir: "Pd.-zach.",
    wind: ["Słaby", 4],
    pressure: 1013
  },
  {
    hour: "04:00",
    image: "rain",
    temp: 7,
    rain: 0.9,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1012
  },
  {
    hour: "05:00",
    image: "rain",
    temp: 7,
    rain: 0.9,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1012
  },
  {
    hour: "06:00",
    image: "rain",
    temp: 6,
    rain: 0.8,
    windDir: "Zachodni",
    wind: ["Słaby", 11],
    pressure: 1012
  },
  {
    hour: "07:00",
    image: "rain",
    temp: 7,
    rain: 0.4,
    windDir: "Zachodni",
    wind: ["Słaby", 11],
    pressure: 1012
  },
  {
    hour: "08:00",
    image: "rain",
    temp: 8,
    rain: 0.2,
    windDir: "Pn.-zach.",
    wind: ["Słaby", 14],
    pressure: 1013
  },
  {
    hour: "09:00",
    image: "rain",
    temp: 9,
    rain: 0.3,
    windDir: "Pn.-zach.",
    wind: ["Słaby", 14],
    pressure: 1013
  },
  {
    hour: "10:00",
    image: "rain",
    temp: 10,
    rain: 0.2,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 18],
    pressure: 1014
  },
  {
    hour: "11:00",
    image: "rain",
    temp: 10,
    rain: 0.2,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 22],
    pressure: 1014
  },
  {
    hour: "12:00",
    image: "sun-cloud",
    temp: 11,
    rain: 0,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 25],
    pressure: 1014
  },
  {
    hour: "13:00",
    image: "sun-cloud",
    temp: 12,
    rain: 0,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 22],
    pressure: 1014
  },
  {
    hour: "14:00",
    image: "sun-cloud",
    temp: 12,
    rain: 0,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 25],
    pressure: 1014
  },
  {
    hour: "15:00",
    image: "sun-cloud",
    temp: 12,
    rain: 0,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 22],
    pressure: 1014
  },
  {
    hour: "16:00",
    image: "sun-cloud",
    temp: 13,
    rain: 0,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 25],
    pressure: 1014
  },
  {
    hour: "17:00",
    image: "sun-cloud",
    temp: 12,
    rain: 0,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 25],
    pressure: 1014
  },
  {
    hour: "18:00",
    image: "sun-cloud",
    temp: 12,
    rain: 0,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 22],
    pressure: 1014
  },
  {
    hour: "19:00",
    image: "sun-cloud",
    temp: 12,
    rain: 0,
    windDir: "Pn.-zach.",
    wind: ["Umiar.", 18],
    pressure: 1015
  },
  {
    hour: "20:00",
    image: "sun-cloud",
    temp: 11,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 14],
    pressure: 1015
  },
  {
    hour: "21:00",
    image: "moon-cloud",
    temp: 10,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 8],
    pressure: 1015
  },
  {
    hour: "22:00",
    image: "moon-cloud",
    temp: 9,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 7],
    pressure: 1015
  },
  {
    hour: "23:00",
    image: "moon-cloud",
    temp: 7,
    rain: 0,
    windDir: "Zachodni",
    wind: ["Słaby", 8],
    pressure: 1015
  }
];
