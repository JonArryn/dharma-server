import { db } from '../src/util/db.server';

import { getSeededCountries, getSeededUsCountryDivisions } from './seedData';

import {
	seedDemoUser,
	seedDemoAddress,
	seedDemoLibrary,
	seedDemoBookAuthor,
} from './demo';

const seedCountries = async () => {
	await Promise.all(
		getSeededCountries().map((country) => {
			const { id, name, abbreviation_2, abbreviation_3 } = country;
			return db.country.create({
				data: {
					id,
					name,
					abbreviation_2,
					abbreviation_3,
				},
			});
		})
	);
};

const seedUsCountryDivisions = async () => {
	await Promise.all(
		getSeededUsCountryDivisions().map((countrydivision) => {
			const { name, postal_abbreviation, country_id } = countrydivision;
			return db.countrydivision.create({
				data: { name, postal_abbreviation, country_id },
			});
		})
	);
};

const seedDatabase = async () => {
	await seedCountries();
	await seedUsCountryDivisions();
	await seedDemoUser();
	await seedDemoAddress();
	await seedDemoLibrary();
	await seedDemoBookAuthor();
};

seedDatabase();
