const express = require("express");
const router = express.Router();

const userController = require('./../controller/users')

router.get("/", userController.getAllUsers);
router.post("/", userController.createNewUsers);
router.patch("/:idUser", userController.updateUser)
router.delete("/:idUser", userController.deleteUser)

module.exports = router;
