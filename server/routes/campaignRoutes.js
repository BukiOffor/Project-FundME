// server/routes/campaignRoutes.js

const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply authMiddleware to all campaign routes
router.use(authMiddleware);

// Route for creating a campaign
router.post('/campaigns', campaignController.createCampaign);

// Route for getting all campaigns
router.get('/campaigns', campaignController.getCampaigns);

// Route for getting a campaign by ID
router.get('/campaigns/:id', campaignController.getCampaignById);

// Route for updating a campaign by ID
router.put('/campaigns/:id', campaignController.updateCampaignById);

// Route for deleting a campaign by ID
router.delete('/campaigns/:id', campaignController.deleteCampaignById);

module.exports = router;
