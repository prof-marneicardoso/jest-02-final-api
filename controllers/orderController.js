const { Order } = require('../models');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Pedido não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Order.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedOrder = await Order.findByPk(id);
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Pedido não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Order.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Pedido não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
};
