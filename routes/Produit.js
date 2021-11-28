//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/Produit');

//CREATE
router.post("/Produit", (req, res) => {
        controller.create(req, res);
});

//READ
router.get("/Produits", (req, res) => {
    controller.reads(req, res);
});

router.get("/Produit/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/Produit", (req, res) => {
    res.json({"msg": "Update a Produit"});
});

//DELETE
router.delete("/Produit", (req, res) => {
    res.json({"msg": "Delete a Produit"});
});

//COMPLETED
router.post("/Produit/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/Produit/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;