const express = require('express');
const router = express.Router();

const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController  = require('../Controllers/commentController');
const messageController  = require('../Controllers/messageController');
const portfolioController  = require('../Controllers/portfolioController');
const productController  = require('../Controllers/productController');
const profitController  = require('../Controllers/profitController');
const projectController  = require('../Controllers/projectController');
const serviceController  = require('../Controllers/serviceController');
const titleController  = require('../Controllers/titleController');

router.get('/blogController_read',    blogController.read);
router.get('/blogController_create', blogController.create);
router.get('/blogController_update', blogController.update);
router.get('/blogController_delete', blogController.delete);
 
router.get('/blogDetailsController_read',   blogDetailsController.read);
router.get('/blogDetailsController_create', blogDetailsController.create);
router.get('/blogDetailsController_update)', blogDetailsController.update);
router.get('blogDetailsController_delete', blogDetailsController.delete);

router.get('/commentController_read',     commentController.read);
router.get('/commentController_create', commentController.create);
router.get('/commentController_update', commentController.update);
router.get('/commentController_delete', commentController.delete);

router.get('/messageController_read',     messageController.read);
router.get('/messageController_create', messageController.create);
router.get('/messageController_update', messageController.update);
router.get('/messageController_delete', messageController.delete);

router.get('/portfolioController_read',     portfolioController.read);
router.get('/portfolioController_create', portfolioController.create);
router.get('/portfolioController_update', portfolioController.update);
router.get('/portfolioController_delete', portfolioController.delete);

router.get('/productController_read',     productController.read);
router.get('/productController_create', productController.create);
router.get('/productController_update', productController.update);
router.get('/productController_delete', productController.delete);

router.get('/profitController_read',     profitController.read);
router.get('/profitController_create', profitController.create);
router.get('/profitController_update', profitController.update);
router.get('/profitController_delete', profitController.delete);

router.get('/projectController_read',     projectController.read);
router.get('/projectController_create', projectController.create);
router.get('/projectController_update', projectController.update);
router.get('/projectController_delete', projectController.delete);

router.get('/serviceController_read',     serviceController.read);
router.get('/serviceController_create', serviceController.create);
router.get('/serviceController_update', serviceController.update);
router.get('/serviceController_delete', serviceController.delete);

router.get('/titleController_read',   titleController.read);
router.get('/titleController_create', titleController.create);
router.get('/titleController_update', titleController.update);
router.get('/titleController_delete', titleController.delete);

module.exports = router;
