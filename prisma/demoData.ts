import {
	InsertAuthor,
	InsertBook,
	InsertAddress,
	InsertCheckout,
	InsertUser,
} from '../src/type/insertTypes';

import { DemoLibrary } from '../src/type/demoTypes';

const getDemoUsers = (): InsertUser[] => {
	return [
		{
			username: 'JonArryn',
			first_name: 'Jon',
			last_name: 'Arryn',
			email: 'jonarryn@lordofthevale.com',
			password: 'abc123',
			password_confirm: 'abc123',
			is_admin: false,
		},
		{
			username: 'SallyPants',
			first_name: 'Sally',
			last_name: 'Pants',
			email: 'sally@pants.com',
			password: 'abc123',
			password_confirm: 'abc123',
			is_admin: false,
		},
		{
			username: 'BobTheBuilder',
			first_name: 'Bob',
			last_name: 'Builder',
			email: 'bob@builder.com',
			password: 'abc123',
			password_confirm: 'abc123',
			is_admin: false,
		},
	];
};

const getDemoAddress = (): InsertAddress[] => {
	return [
		{
			line_1: '12345 Get Lost Dr.',
			line_2: null,
			line_3: null,
			country_division_id: 4,
			country_id: 1,
			postal_code: '92688',
		},
		{
			line_1: '8281 Dharma Rd',
			line_2: null,
			line_3: null,
			country_division_id: 10,
			country_id: 1,
			postal_code: '90210',
		},
	];
};

const getDemoLibraries = (): DemoLibrary[] => {
	return [
		{
			name: 'CCM',
		},
		{
			name: 'Plum Village',
		},
	];
};

const getDemoAuthors = (): InsertAuthor[] => {
	return [
		{
			first_name: 'Thich',
			middle_name: 'Nhat',
			last_name: 'Hanh',
		},
	];
};

const getDemoBooks = (): InsertBook[] => {
	return [
		{
			title: "The Heart of the Buddha's Teaching",
		},
		{
			title: 'Peace is Every Step',
		},
		{
			title: 'Chanting From the Heart',
		},
	];
};

const getDemoCheckout = (): InsertCheckout[] => {
	return [
		{
			user_id: 1,
			book_id: 1,
		},
	];
};

export {
	getDemoAuthors,
	getDemoBooks,
	getDemoLibraries,
	getDemoUsers,
	getDemoAddress,
	getDemoCheckout,
};
