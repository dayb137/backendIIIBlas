import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export const generateMockUser = () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),  
        password: bcrypt.hashSync("coder123", 10), 
        age: faker.number.int({ min: 18, max: 80 }),
        role: faker.helpers.arrayElement(["user", "admin"]),
        pets: [] 
    };
};

export const generateMockUsers = (count = 10) => {
    return Array.from({ length: count }, () => generateMockUser());
};
