const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    async register(req, res) {
        try {
            const { full_name, email, password } = req.body;
            const user = await User.create({ full_name, email, password });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });

            if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.status(401).json({ message: 'Credencias inválidas' });
            }

            const token = jwt.sign({ id: user.id, name: user.full_name, createdAt: user.createdAt }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = authController;
