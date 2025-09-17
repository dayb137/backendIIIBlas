import { faker } from "@faker-js/faker";

export const generateMockPet = () => {
    return{
        name: faker.animal.cat(),
        age: faker.number.int({ min: 1, max: 15}),
        adopted: faker.datatype.boolean()

    }
};

export const generateMockPets = (count = 10)=> {
    return Array.from({ length: count }, generateMockPet);
}