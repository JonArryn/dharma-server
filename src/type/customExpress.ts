import { Request, RequestHandler } from 'express';

// extends the RequestHandler type but replaces the return type with Generic
type CustomRequestHandler<T extends RequestHandler, TNewReturn> = (
	...a: Parameters<T>
) => TNewReturn;
// this hardcodes the types using the extended type above to be assigned to async route handlers
type AsyncRequestHandler = CustomRequestHandler<RequestHandler, Promise<void>>;

interface CustomRequest<T> extends Request {
	body: T;
}

export { CustomRequest, AsyncRequestHandler };
