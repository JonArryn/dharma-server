import express from 'express';
import * as authController from '../auth/authController';

const authRouter = express.Router();

authRouter.post('/api/signup', authController.signupUser);

export { authRouter };
