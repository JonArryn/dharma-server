import { db } from '../../util/db.server';
import { InsertUser } from '../../type/insertTypes';
import { CustomRequest } from '../../type/customExpress';

import { Response } from 'express';
import catchAsync from '../../util/catchAsync';
// import AppError from '../../util/appError';

const signupUser = catchAsync(
	async (req: CustomRequest<InsertUser>, res: Response) => {
		const {
			username,
			first_name,
			last_name,
			email,
			password,
			password_confirm,
			is_admin,
		} = req.body;

		const newUser = await db.user.create({
			data: {
				username,
				first_name,
				last_name,
				email,
				password,
				password_confirm,
				is_admin,
			},
		});
		res.status(201).json({
			status: 'success',
			data: {
				user: newUser,
			},
		});
	}
);
export { signupUser };
