const router = require("express").Router();
const UserRoute = require("./user.routes");
const AdminRoute = require("./admin.routes");

router.use("/user", UserRoute);
router.use("/admin", AdminRoute);

module.exports = router;