class AppError extends Error {
	public statusCode: number;
	public status: string;
	public isOperational: boolean;

	constructor(message: string, statusCode = 500) {
		super(message);
		this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
		this.statusCode = statusCode;
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

export { AppError as default };
