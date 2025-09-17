import { Router } from "express";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

const router = Router();

router.get("/mockingpets", (req, res) => {
    const pets = [];
    for (let i = 0; i < 10; i++) {
        pets.push({
            name: faker.animal.petName(),
            type: faker.animal.type(),
            age: faker.number.int({ min: 1, max: 15 }),
        });
    }
    res.json(pets);
});
            

router.get("/mockingusers", (req, res) => {
    const users = [];
    for (let i = 0; i < 50; i++) {
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: bcrypt.hashSync("coder123", 10),
            role: faker.helpers.arrayElement(["user", "admin"]),
            pets: [],
        });
    }
    res.json(users);
});
    
router.post("/generateData", async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.body;
        const mockUsers = [];
        for (let i = 0; i < users; i++) {
            mockUsers.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: bcrypt.hashSync("coder123", 10),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: [],

            });
        }

        const mockPets = [];
        for (let i = 0; i < pets; i++) {
            mockPets.push({
                name: faker.animal.petName(),
                type: faker.animal.type(),
                age: faker.number.int({ min: 1, max: 15 }),
            });
        }

        res.json({
            status: "success",
            inserted: { users: mockUsers.length, pets: mockPets.length },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

export default router;
