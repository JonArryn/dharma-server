import {
	type Book,
	type Author,
	type Checkout,
	type Country,
	type CountryDivision,
	type Address,
} from '@prisma/client';

type DbDefaults = 'id' | 'created_at' | 'updated_at' | 'deleted_at';

type InsertBook = Omit<Book, DbDefaults | 'author_id'>;

type InsertAuthor = Omit<Author, DbDefaults>;

type InsertCheckout = Omit<Checkout, DbDefaults>;

type InsertCountry = Omit<Country, DbDefaults>;

type InsertCountryDivision = Omit<CountryDivision, DbDefaults>;

type InsertAddress = Omit<Address, DbDefaults>;

export type {
	InsertBook,
	InsertAuthor,
	InsertCheckout,
	InsertCountry,
	InsertCountryDivision,
	InsertAddress,
};
