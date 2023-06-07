import {
	type Book,
	type Author,
	type Checkout,
	type Country,
	type Countrydivision,
	type Address,
	type User,
	type Library,
} from '@prisma/client';

import { DbDefaults } from './utilTypes';

type InsertUser = Omit<User, DbDefaults>;

type InsertBook = Omit<Book, DbDefaults | 'author_id'>;

type InsertAuthor = Omit<Author, DbDefaults>;

type InsertCheckout = Omit<Checkout, DbDefaults | 'checkout_date'>;

type InsertCountry = Omit<Country, DbDefaults>;

type InsertCountryDivision = Omit<Countrydivision, DbDefaults>;

type InsertAddress = Omit<Address, DbDefaults>;

type InsertLibrary = Omit<Library, DbDefaults>;

export type {
	InsertUser,
	InsertBook,
	InsertAuthor,
	InsertCheckout,
	InsertCountry,
	InsertCountryDivision,
	InsertAddress,
	InsertLibrary,
};
