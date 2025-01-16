const User = require("../model/user")
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, role });

        res.status(201).json({ msg: 'User registered successfully', user });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};