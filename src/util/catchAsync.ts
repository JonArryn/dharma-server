import { Request, Response, NextFunction } from 'express';
import { AsyncRequestHandler } from '../type/customExpress';

const catchAsync = (controllerFn: AsyncRequestHandler) => {
	return (req: Request, res: Response, next: NextFunction) => {
		controllerFn(req, res, next).catch(next);
	};
};

export { catchAsync as default };
