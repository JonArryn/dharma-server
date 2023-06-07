import { APP_ERRORS } from '../constant/ERROR';
import type {
	ErrorRequestHandler,
	NextFunction,
	Request,
	Response,
} from 'express';
import AppError from '../util/appError';

const sendDevError = (err: AppError, origErr: Error, res: Response) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		stack: err.stack,
		error: err,
		origError: origErr,
	});
};
const sendProdError = (err: AppError, origErr: Error, res: Response) => {
	if (err.isOperational) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
			origError: origErr,
		});
	} else {
		// log error

		// eslint-disable-next-line
		console.error('ERROR', err);
		// send generic error response
		res.status(500).json({
			status: 'error',
			message: APP_ERRORS.UNHANDLED,
		});
	}
};

const globalErrorHandler: ErrorRequestHandler = (
	err: AppError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(err);
	const error = new AppError(err.message, err.statusCode);
	if (error instanceof AppError) {
		if (process.env.NODE_ENV === 'development') {
			sendDevError(error, err, res);
		}
		if (process.env.NODE_ENV === 'production') {
			sendProdError(error, err, res);
		}
	}
	next();
};

export { globalErrorHandler as default };
