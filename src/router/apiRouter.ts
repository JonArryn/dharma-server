import express from 'express';
import { signupUser } from '../app/auth/authController';
// import { authRouter } from '../app/auth/authRoutes';
const apiRouter = express.Router();

apiRouter.route('/signup').post(signupUser);

export default apiRouter;
