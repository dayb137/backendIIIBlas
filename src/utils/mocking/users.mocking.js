import { faker } from "@faker-js/faker";

export const generateMockUser = () => {
    return{
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        emial: faker.person.emial(),
        password: faker.internet.password(),
        age: faker.number.int({min: 18, max: 80}),
    };
};

export const generateMockUsers = (conutn = 10) => {
    return Array.from({ length: count }, generateMockUser);
}