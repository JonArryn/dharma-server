import { db } from '../src/util/db.server';
import { Author } from '@prisma/client';
import {
  InsertBook,
  InsertAuthor,
  InsertCheckout,
  InsertCountry,
  InsertCountryDivision,
  InsertAddress,
} from '../src/type/insert.types';

const getAuthors = (): InsertAuthor[] => {
  return [
    {
      first_name: 'Thich',
      middle_name: 'Nhat',
      last_name: 'Hanh',
    },
  ];
};

const getBooks = (): InsertBook[] => {
  return [
    {
      title: "The Heart of Buddha's Teaching",
    },
    {
      title: 'Peace is Every Step',
    },
    { title: 'Chanting From the Heart' },
  ];
};

const seed = async () => {
  await Promise.all(
    getAuthors().map((author) => {
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
    getBooks().map((book) => {
      return db.book.create({
        data: {
          title: book.title,
          author_id: author.id,
        },
      });
    })
  );
};
