const express = require("express");
const bodyParser = require("body-parser");
const db = require("../models");

const UserRouter = express.Router();

UserRouter.use(bodyParser.json());

// Create user
UserRouter.post("/create", async (req, res, next) => {
    try {
        const { gmail, password, name, phone, address, role } = req.body;
        const newUser = await db.User.create({ gmail, password, name, phone, address, role });

        //Insert one
        await newUser.save().then(newDoc => {
            res.status(201).json({
                message: "User created successfully",
                result: {
                    userCode: newDoc._id,
                    gmail: newDoc.gmail,
                    password: newDoc.password,
                    name: newDoc.name,
                    phone: newDoc.phone,
                    address: newDoc.address,
                    role: newDoc.role
                }
            });
        });
    } catch (err) {
        next(err);
    }
});

module.exports = UserRouter;
