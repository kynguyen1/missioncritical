import express from 'express';
import { registerUser, loginUser } from '../utils/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
