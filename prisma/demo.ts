import { db } from '../src/util/db.server';
import { Author, Address } from '@prisma/client';
import {
	getDemoAddress,
	getDemoAuthors,
	getDemoBooks,
	getDemoLibraries,
	getDemoUsers,
} from './demoData';

const seedDemoUser = async () => {
	await Promise.all(
		getDemoUsers().map((user) => {
			const {
				username,
				first_name,
				last_name,
				email,
				is_admin,
				password,
				password_confirm,
			} = user;
			return db.user.create({
				data: {
					username,
					first_name,
					last_name,
					password,
					password_confirm,
					email,
					is_admin,
				},
			});
		})
	);
};

const seedDemoAddress = async () => {
	await Promise.all(
		getDemoAddress().map((address) => {
			const { line_1, line_2, line_3, country_division_id, country_id, postal_code } =
				address;
			return db.address.create({
				data: {
					line_1,
					line_2,
					line_3,
					country_division_id,
					country_id,
					postal_code,
				},
			});
		})
	);
};

const seedDemoLibrary = async () => {
	const address = (await db.address.findFirstOrThrow()) as Address;
	await Promise.all(
		getDemoLibraries().map((library) => {
			return db.library.create({
				data: {
					name: library.name,
					address_id: address.id,
				},
			});
		})
	);
};

const seedDemoBookAuthor = async () => {
	await Promise.all(
		getDemoAuthors().map((author) => {
			return db.author.create({
				data: {
					first_name: author.first_name,
					middle_name: author.middle_name,
					last_name: author.last_name,
				},
			});
		})
	);
	const author = (await db.author.findFirst({
		where: {
			first_name: 'Thich',
		},
	})) as Author;

	await Promise.all(
		getDemoBooks().map((book) => {
			return db.book.create({
				data: {
					title: book.title,
					author_id: author.id,
				},
			});
		})
	);
};

export { seedDemoUser, seedDemoAddress, seedDemoLibrary, seedDemoBookAuthor };
