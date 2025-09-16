import { Router } from "express";
import PetModel from "../dao/models/pet.model.js"

const router = Router();

router.get("/", async (req, res) => {
    try {
        const pets = await PetModel.find();
        res.json({ status: "success", payload: pets});
    } catch (error) {
        res.status(500).json({ error: " Error al obtener mascotas"})
        
    }
});

router.get("/:pid", async (req, res) =>{
    try {
        const pet = await PetModel.findById(req.params.pid);
        if(!pet) return res.status(404).json({ error: "Mascota no encontrada"});
        res.json({ status: "success", payload: pet});
    } catch (error) {
        res.status(500).json({ error: "Error al obtener mascota"})
    }
});

export default router;
