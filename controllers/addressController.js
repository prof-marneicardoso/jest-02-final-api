const { Address } = require('../models');

const getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAddressById = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findByPk(id);
    if (address) {
      res.status(200).json(address);
    } else {
      res.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAddress = async (req, res) => {
  try {
    const address = await Address.create(req.body);
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Address.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedAddress = await Address.findByPk(id);
      res.status(200).json(updatedAddress);
    } else {
      res.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Address.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress
};
