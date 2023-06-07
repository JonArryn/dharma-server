import { SeedCountry, SeedCountryDivision } from '../src/type/seedTypes';

const getSeededCountries = (): SeedCountry[] => {
	return [
		{
			id: 1,
			name: 'United States of America',
			abbreviation_2: 'US',
			abbreviation_3: 'USA',
		},
	];
};

const getSeededUsCountryDivisions = (): SeedCountryDivision[] => {
	return [
		{ id: 1, name: 'Alabama', postal_abbreviation: 'AL', country_id: 1 },
		{ id: 2, name: 'Alaska', postal_abbreviation: 'AK', country_id: 1 },
		{ id: 3, name: 'Arizona', postal_abbreviation: 'AZ', country_id: 1 },
		{ id: 4, name: 'Arkansas', postal_abbreviation: 'AR', country_id: 1 },
		{ id: 5, name: 'California', postal_abbreviation: 'CA', country_id: 1 },
		{ id: 6, name: 'Colorado', postal_abbreviation: 'CO', country_id: 1 },
		{ id: 7, name: 'Connecticut', postal_abbreviation: 'CT', country_id: 1 },
		{ id: 8, name: 'Delaware', postal_abbreviation: 'DE', country_id: 1 },
		{ id: 9, name: 'Florida', postal_abbreviation: 'FL', country_id: 1 },
		{ id: 10, name: 'Georgia', postal_abbreviation: 'GA', country_id: 1 },
		{ id: 11, name: 'Hawaii', postal_abbreviation: 'HI', country_id: 1 },
		{ id: 12, name: 'Idaho', postal_abbreviation: 'ID', country_id: 1 },
		{ id: 13, name: 'Illinois', postal_abbreviation: 'IL', country_id: 1 },
		{ id: 14, name: 'Indiana', postal_abbreviation: 'IN', country_id: 1 },
		{ id: 15, name: 'Iowa', postal_abbreviation: 'IA', country_id: 1 },
		{ id: 16, name: 'Kansas', postal_abbreviation: 'KS', country_id: 1 },
		{ id: 17, name: 'Kentucky', postal_abbreviation: 'KY', country_id: 1 },
		{ id: 18, name: 'Louisiana', postal_abbreviation: 'LA', country_id: 1 },
		{ id: 19, name: 'Maine', postal_abbreviation: 'ME', country_id: 1 },
		{ id: 20, name: 'Maryland', postal_abbreviation: 'MD', country_id: 1 },
		{ id: 21, name: 'Massachusetts', postal_abbreviation: 'MA', country_id: 1 },
		{ id: 22, name: 'Michigan', postal_abbreviation: 'MI', country_id: 1 },
		{ id: 23, name: 'Minnesota', postal_abbreviation: 'MN', country_id: 1 },
		{ id: 24, name: 'Mississippi', postal_abbreviation: 'MS', country_id: 1 },
		{ id: 25, name: 'Missouri', postal_abbreviation: 'MO', country_id: 1 },
		{ id: 26, name: 'Montana', postal_abbreviation: 'MT', country_id: 1 },
		{ id: 27, name: 'Nebraska', postal_abbreviation: 'NE', country_id: 1 },
		{ id: 28, name: 'Nevada', postal_abbreviation: 'NV', country_id: 1 },
		{ id: 29, name: 'New Hampshire', postal_abbreviation: 'NH', country_id: 1 },
		{ id: 30, name: 'New Jersey', postal_abbreviation: 'NJ', country_id: 1 },
		{ id: 31, name: 'New Mexico', postal_abbreviation: 'NM', country_id: 1 },
		{ id: 32, name: 'New York', postal_abbreviation: 'NY', country_id: 1 },
		{ id: 33, name: 'North Carolina', postal_abbreviation: 'NC', country_id: 1 },
		{ id: 34, name: 'North Dakota', postal_abbreviation: 'ND', country_id: 1 },
		{ id: 35, name: 'Ohio', postal_abbreviation: 'OH', country_id: 1 },
		{ id: 36, name: 'Oklahoma', postal_abbreviation: 'OK', country_id: 1 },
		{ id: 37, name: 'Oregon', postal_abbreviation: 'OR', country_id: 1 },
		{ id: 38, name: 'Pennsylvania', postal_abbreviation: 'PA', country_id: 1 },
		{ id: 39, name: 'Rhode Island', postal_abbreviation: 'RI', country_id: 1 },
		{ id: 40, name: 'South Carolina', postal_abbreviation: 'SC', country_id: 1 },
		{ id: 41, name: 'South Dakota', postal_abbreviation: 'SD', country_id: 1 },
		{ id: 42, name: 'Tennessee', postal_abbreviation: 'TN', country_id: 1 },
		{ id: 43, name: 'Texas', postal_abbreviation: 'TX', country_id: 1 },
		{ id: 44, name: 'Utah', postal_abbreviation: 'UT', country_id: 1 },
		{ id: 45, name: 'Vermont', postal_abbreviation: 'VT', country_id: 1 },
		{ id: 46, name: 'Virginia', postal_abbreviation: 'VA', country_id: 1 },
		{ id: 47, name: 'Washington', postal_abbreviation: 'WA', country_id: 1 },
		{ id: 48, name: 'West Virginia', postal_abbreviation: 'WV', country_id: 1 },
		{ id: 49, name: 'Wisconsin', postal_abbreviation: 'WI', country_id: 1 },
		{ id: 50, name: 'Wyoming', postal_abbreviation: 'WY', country_id: 1 },
	];
};

export { getSeededCountries, getSeededUsCountryDivisions };
