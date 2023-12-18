const express = require("express");
const router = express.Router();
const user = require("../model/userModel");

router.post("/register", async (req, res) => {
  try {
    await user.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    });
    res.json({ success: true });
  } catch (error) {
    console.log("Error", error);
    res.json({ success: false });
  }
});

module.exports = router;
