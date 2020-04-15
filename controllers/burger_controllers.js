var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerData = {
            burger: data
        };
        console.log(burgerData);

        res.render("index", burgerData);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var burgerId = "Burger id = " + req.params.id;
    console.log(burgerId);
    burger.update(true, req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        console.log(req.body.burger_name + " has been added to the burger list!");

        res.json({ id: result.insertId });
    });
});


module.exports = router;