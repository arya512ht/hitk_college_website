// user-controller.js
import User from "../schema/user-schema.js";

export const getUsersData = async (req, res) => {
    try {
        const user = await User.findOne({ uname: req.body.uname });
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getUsers = async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}


