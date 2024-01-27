const express = require("express");

// wyciągam z expresa router - docieram do metod
const router = express.Router();

// zabezpieczenie routów
const chechAuth = require("../middleware/checkAuth");

// dodaje import kontrollera żeby metody nowe po zmianie działały
const flashcardController = require("../controller/flashcard");

router.post("/", flashcardController.flashcard_add_new);

router.get("/", flashcardController.flashcard_get_all);

router.get("/:id", flashcardController.flashcard_get_by_id);

router.put("/:id", flashcardController.flashcard_change);

router.delete("/:id", flashcardController.flashcard_delete);

module.exports = router;
