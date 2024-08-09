import express from "express";
import { User } from "../models/user.models.js";

const router = express.Router();

router.post("/customerData", async(req, res) => {
    try {
      const user = await User.create({
            fullName: req.body.fullName,
            age: req.body.age,
            gender: req.body.gender,
            salary: req.body.salary
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send("error registering user data")
    }
});

router.get("/userData", async (req, res) => {
    try {
        const response = await User.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send("error getting user data")
    }
})

export default router;