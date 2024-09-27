const express = require('express');
const newsController = require('../controllers/newsController');
const techAnalysisController = require('../controllers/techAnalysisController');
const fundAnalysisController = require('../controllers/fundAnalysisController');
const predictionController = require('../controllers/predictionController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/news', newsController.getTradingNews);
router.get('/analysis/technical', techAnalysisController.getTechnicalAnalysis);
router.get('/analysis/fundamental', fundAnalysisController.getFundamentalAnalysis);
router.post('/prediction', predictionController.predictStockPrice);

module.exports = router;
