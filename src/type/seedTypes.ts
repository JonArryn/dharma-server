import { type Country, Countrydivision } from '@prisma/client';
import { DbDefaultsWithId } from './utilTypes';

type SeedCountry = Omit<Country, DbDefaultsWithId>;
type SeedCountryDivision = Omit<
	Countrydivision,
	DbDefaultsWithId | 'abbreviation_3'
>;

export { SeedCountry, SeedCountryDivision };
