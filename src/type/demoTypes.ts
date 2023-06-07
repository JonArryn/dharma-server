import { User, Book, Library } from '@prisma/client';
import { DbDefaults, DbDefaultsWithId } from './utilTypes';

type DemoUser = Omit<User, DbDefaultsWithId>;
type DemoBook = Omit<Book, DbDefaultsWithId>;
type DemoLibrary = Omit<Library, DbDefaults | 'address_id'>;

export { DemoUser, DemoBook, DemoLibrary };
