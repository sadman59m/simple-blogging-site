const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const feedController = require("../controllers/feed");
const routeCheck = require("../middleware/is_auth");

router.get("/posts", routeCheck.isAuth, feedController.getPosts);

router.post("/post", [
  body("title").trim().isLength({ min: 5 }),
  body("content").trim().isLength({ min: 5 }),
]);

router.get("/post/:postId", feedController.getPost);

router.put(
  "/post/:postId",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);

router.delete("/post/:postId", feedController.deletePost);

module.exports = router;
