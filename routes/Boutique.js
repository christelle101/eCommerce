//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/Boutique');

//CREATE
router.post("/Boutique", (req, res) => {
        controller.create(req, res);
});

//READ
router.get("/Boutiques", (req, res) => {
    controller.reads(req, res);
});

router.get("/Boutique/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/Boutique", (req, res) => {
    res.json({"msg": "Update a Boutique"});
});

//DELETE
router.delete("/Boutique", (req, res) => {
    res.json({"msg": "Delete a Boutique"});
});

//COMPLETED
router.post("/Boutique/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/Boutique/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;