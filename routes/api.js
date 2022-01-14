//import student controller
const StudentController = require("../controllers/StudentController")

//import express
const express = require("express");

//buat object router
const router = express.Router();

//buat routing
router.get('/', (req, res) => {
    res.send('Hello express');
  })

//routing student
router.get("/students", StudentController.index);
router.put("/students/:id", StudentController.update);
router.post("/students", StudentController.store);
router.delete("/students/:id", StudentController.destroy);
  
//export routing
module.exports = router;