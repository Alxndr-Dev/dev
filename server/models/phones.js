const mongoose = require('mongoose')
const PhoneSchema = new mongoose.Schema({
    model: { type: String, required: true },
    category: String,
    screenType: String, // <--- Cambia "display" por "screenType"
    lines: Number,
    sipAccounts: Number,
    wifi: Boolean,
    bluetooth: Boolean,
    poe: Boolean,
    ethernetPorts: String,
    imageUrl: String,
    description: String // <--- Asegúrate de añadir este también para que no salga "undefined"
});

module.exports = mongoose.model('Phone', PhoneSchema);