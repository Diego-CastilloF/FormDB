const router = require("express").Router();

const { sendForm } = require("../controllers/form.controllers");

router.post("/sendform", sendForm);

module.exports = router;
