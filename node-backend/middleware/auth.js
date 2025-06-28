const adminAuth = (req, res, next) => {
    console.log("Admin auth is checking");
    const token = "xyz";
    const isAdminAuth = token === "xyz"
    if (!isAdminAuth) {
        res.status(400).send("Unathorized user");
    } else {
        next();
    }
} // middleware route handler

const userAuth = (req, res, next) => {
    const token = "xyz";
    const isUserAuth = token === "xyz";
    if (!isUserAuth) {
        res.status(400).send("unauthorised user");
    } else {
        next();
    }
}

module.exports = {adminAuth, userAuth};