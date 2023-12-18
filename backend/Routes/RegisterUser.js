const express = require("express");
const router = express.Router();
const user = require("../model/userModel");
const { body, validationResult } = require("express-validator");

router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password", "Minimum 5 needed").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);

module.exports = router;
