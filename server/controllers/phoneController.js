const Phone = require('../models/phones');

// Obtener todos los teléfonos
exports.getPhones = async (req, res) => {
    try {
        const phones = await Phone.find();
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los datos", error });
    }
};