const mongoose = require('mongoose');

// Define the Campaign schema
const campaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  goal: Number,
  balance: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Campaign', campaignSchema);
