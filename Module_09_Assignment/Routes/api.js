const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const postController = require('../Controllers/postController');
const subAdminController = require('../Controllers/subAdminController');
const AdminController = require('../Controllers/adminController');

router.get('/users', userController.read);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

router.get('/users', postController.read);
router.post('/users', postController.create);
router.put('/users/:id', postController.update);
router.delete('/users/:id', postController.delete);

router.get('/users', subAdminController.read);
router.post('/users', subAdminController.create);
router.put('/users/:id', subAdminController.update);
router.delete('/users/:id', subAdminController.delete);

router.get('/users', AdminController.read);
router.post('/users', AdminController.create);
router.put('/users/:id', AdminController.update);
router.delete('/users/:id', AdminController.delete);

module.exports = router;
