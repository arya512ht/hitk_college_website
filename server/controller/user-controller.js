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

export const checkUsernameAvailability = async (req, res) => {
    try {
        const existingUser = await User.findOne({ uname: req.body.uname });
        if (existingUser) {
            res.json({ available: false });
        } else {
            res.json({ available: true });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        res.status(404).json({ message: "User not found." });
    }
};

export const editUser = async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "Error while updating user." });
    }
};



export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: "User not found." });
    }
  };
  

  