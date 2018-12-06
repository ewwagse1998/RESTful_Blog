//RESTful_Blog

const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
let posts = require('./routes/posts.js')
let comments = require('./routes/comments.js')

let store = {}
store.posts =[]

let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.set('store', store)

app.route('/posts')
    .get(posts.getPost)
    .post(posts.addPost);

app.route('/posts/:postId')
    .put(posts.updatePost)
    .delete(posts.removePost)

app.route('/posts/:postId/comments')
    .get(comments.getComment)
    .post(comments.addComment);

app.route('/posts/:postId/comments/:commentId')
    .put(comments.updateComment)
    .delete(comments.removeComment)

app.listen(3000)