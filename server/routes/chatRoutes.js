import express from 'express';
import { createChat, deleteChat, getChats } from '../controllers/chatController.js';
import { protect } from '../middlewares/auth.js';

const chatRoute = express.Router();

chatRoute.get('/create', protect, createChat);
chatRoute.get('/get', protect, getChats);
chatRoute.post('/delete', protect, deleteChat);

export default chatRoute;