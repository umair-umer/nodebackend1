const express = require("express");
const router = express.Router();
const Person = require("../persondata");
const passport = require("passport");


router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newperson = new Person(data);
    // const existingPerson = await Person.findOne({ email });
    // if (existingPerson) {
    //   return res.status(409).json({ error: "Email already exists" });
    // }
    const response = await newperson.save();
    console.log("dtata saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error --->" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();

    console.log("persondata");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server erro" });
  }
});

router.get("/:statustype", async (req, res) => {
  try {
    const statustype = req.params.statustype;
    if (
      statustype == "chef" ||
      statustype == "owner" ||
      statustype == "waiter"
    ) {
      const response = await Person.find({ designation: statustype });
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(404).json({ error: "invaid type" });
  }
});
router.put("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const updateuser = req.body;
    const response = await Person.findByIdAndUpdate(userId, updateuser, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: "user not found" });
    }
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});
router.delete("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const response = await Person.findByIdAndDelete(userId);
    if (!response) {
      return res.status(404).json({ error: "user not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "data deleted" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
