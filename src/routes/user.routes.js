const express = require("express");
const { getAllUser, login, signup } = require ("../controllers/user-controllers");

const router = express.Router();

router.get("/",getAllUser);
router.post("/signup",signup)
router.post("/login", login)



//const userRoutes= express.Model("user.routes",getAllUser,signup,login);
module.exports = router;    