"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post('/createuser', userController_1.createUser);
router.get('/getusers', userController_1.getAllUsers);
router.get('/getuserstatus', userController_1.getUserStatus);
router.delete('/deleteuser', userController_1.deleteUser);
router.post('/signup', userController_1.signUp);
router.post('/signin', userController_1.signIn);
router.put('/block', userController_1.toggleBlock);
router.put('/unblock', userController_1.toggleUnblock);
exports.default = router;