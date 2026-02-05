require('dotenv').config();
const mongoose = require('mongoose');
const Phone = require('./models/phones'); // Asegúrate de haber creado el modelo antes

const phones = [
  {
    model: "GRP2615",
    category: "Carrier-Grade",
    sipAccounts: 10,
    wifi: true,
    poe: true,
    bluetooth: true,
    screenType: "multicolor",
    imageUrl: "https://www.grandstream.com/hubfs/Product%20Images/GRP/GRP2615/GRP2615-front.png",
    description: "High-end IP phone with a sleek design and integrated Wi-Fi/Bluetooth."
  },
  {
    model: "GRP2601P",
    category: "Essential",
    sipAccounts: 2,
    wifi: false,
    poe: true,
    bluetooth: false,
    screenType: "monocromatica",
    imageUrl: "https://www.grandstream.com/hubfs/GRP2610_1.png",
    description: "Essential 2-line IP phone with built-in PoE."
  },
  {
    model: "GXV3370",
    category: "Video Phone",
    sipAccounts: 16,
    wifi: true,
    poe: true,
    bluetooth: true,
    screenType: "multicolor",
    imageUrl: "https://www.grandstream.com/hubfs/Product%20Images/GXV/gxv3370_front.png",
    description: "Powerful desktop video phone for enterprise users."
  },
  {
    model: "GRP2602W",
    category: "Essential",
    sipAccounts: 4,
    wifi: true,
    poe: false,
    bluetooth: false,
    screenType: "monocromatica",
    imageUrl: "https://www.grandstream.com/hubfs/Product%20Images/GRP/grp2602_front_web.png",
    description: "Essential IP phone with dual-band Wi-Fi support."
  },
  {
    model: "GXP2135",
    category: "High-End",
    sipAccounts: 8,
    wifi: false,
    poe: true,
    bluetooth: true,
    screenType: "multicolor",
    imageUrl: "https://www.grandstream.com/hubfs/Product%20Images/GXP/gxp2135_front_web.png",
    description: "Workhorse for busy users with 32 digital BLF/speed-dial keys."
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Phone.deleteMany({}); // Limpia la base de datos antes de cargar
    await Phone.insertMany(phones);
    console.log("Base de datos cargada");
    process.exit();
  } catch (err) {
    console.error("Error al cargar DB", err);
    process.exit(1);
  }
};

seedDB();