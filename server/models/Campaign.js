// server/models/Campaign.js

const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  goalAmount: {
    type: Number,
    required: true,
  },
  totalFunds: {
    type: Number,
    required: true,
    default: 0, // Default totalFunds to 0
  },
  isOpen: {
    type: Boolean,
    required: true,
    default: true, // Default isOpen to true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;

/*
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
*/