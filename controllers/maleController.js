const Male = require('../models/Male.js');


const maleController = {
   index: (req, res) => {
		Male.find()
			.then((males) => {
				console.log(males); // Find all of the males from the database
				res.json(males);
			})
			.catch((err) => {
				console.log(err);  // If there is any error, tell the client something went wrong on the server
			});
	},
	create: async (req, res) => {
		try {
			const newMale = req.body;
			const savedMale = await Male.create(newMale);  // create a new Male, let Mongoose give the default values
			res.json(savedMale);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	show: async (req, res) => {
		try {
			const maleId = req.params.maleId;
			const male = await Male.findById(maleId);
			res.json(male); // Show the information requested
		} catch (err) {
			console.log(err);
			res.json(err);  // If there is any error, tell the client something went wrong on the server
				
	}
},
	update: async (req, res) => {
		try {
			const maleId = req.params.maleId;
			const updatedMale = req.body;
			const savedMale = await Male.findByIdAndUpdate(maleId, updatedMale);
			res.json(savedMale);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	delete: async (req, res) => {
		try {
			const maleId = req.params.maleId;
			await Male.findByIdAndRemove(maleId); // Delete the information from the database
			res.json({
				msg: `Successfully Deleted ${maleId}`
			});
		} catch (err) {
			console.log(err); 
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	}
};
    
module.exports = maleController;






	