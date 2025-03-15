const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require("../controller/user.controller");

router.post("/registerUser", createUser);
router.get("/getAllUsers", getAllUsers);


module.exports = router;