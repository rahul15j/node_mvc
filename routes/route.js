const express = require('express');
const router = express.Router();
const { getApp, createApp, updateApp,deleteApp } = require('../controller/controllers');
 



router.post("/", createApp);
router.get("/GetApp", getApp);
router.put("/UpdateApp/:crudID", updateApp);
router.delete("/DeleteApp/:crudID", deleteApp);


module.exports = router;