const User = require("../models/User.js");

const userController = {
  index: (req, res) => {
    User.find()
      .then(users => {
        // Find all of the users from the database
        console.log(users);
        res.json(users);
      })
      .catch(err => {
        console.log(err); // If there is any error, tell the client something went wrong on the server
      });
  },
  create: async (req, res) => {
    try {
      const newUser = req.body; // create a new User, let Mongoose give the default values
      const savedUser = await User.create(newUser);
      res.json(savedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
    }
  },
  show: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      res.json(user); // Show the information requested
    } catch (err) {
      console.log(err);
      res.json(err); // If there is any error, tell the client something went wrong on the server
    }
  },
  update: async (req, res) => {
    try {
      const userId = req.params.userId;
      const updatedUser = req.body;
      const savedUser = await User.findByIdAndUpdate(userId, updatedUser);
      res.json(savedUser); // Send the updated information back to the client
    } catch (err) {
      console.log(err);
      res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
    }
  },
  delete: async (req, res) => {
    try {
      const userId = req.params.userId;
      await User.findByIdAndRemove(userId); // Delete the information from the database
      res.json({
        msg: `Successfully Deleted ${userId}`
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
    }
  }
};

module.exports = userController;
