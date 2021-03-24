const express = require('express');
const router = express.Router();
const {getComments, addComment} = require('../controllers/comments')
const {getUsers, addUser} = require('../controllers/users')

router.route('/')
    .get(getComments)
    .post(addComment)

module.exports = router;