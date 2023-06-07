import express, { NextFunction, Request, Response } from 'express';
import AppError from './util/appError';
import * as dotenv from 'dotenv';
import globalErrorHandler from './controller/errorController';
// import apiRouter from './router/apiRouter';
import { authRouter } from './app/auth/authRoutes';

const app = express();
dotenv.config();
const port = process.env.PORT ?? 8081;
app.use(express.json());

// > ROUTES
app.use(authRouter);

// Auth

// > Error route must remain on bottom
app.all('*', (req: Request, _: Response, next: NextFunction) => {
	const error = new AppError(`${req.originalUrl} is not a valid route`, 404);
	next(error);
});

app.use(globalErrorHandler);

app.listen(port, () => {
	//eslint-disable-next-line
	console.log(`🚀 server started at http://localhost:${port}`);
});
