import { Router } from "express";
import UserModel from "../dao/models/user.model.js";

const router  = Router();

router.get("/", async (req, res) =>{
    try {
        const users = await UserModel.find().populate("pets");
        res.json({ status: "Success", payload: users});
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuario"})
    }
});

router.get("/:uid", async (req, res) => {
    try {
        const user = await  UserModel.findById(req.params.uid).populate("pets");
        if(!user) return res.status(404).json({ error: "Usuario no encontrado"});
        res.json({ status: "success", payload: user});
    } catch (error) {
        res.status(500).json({ error: "Error al obtener ususario"})
        
    }
});

export default router;

