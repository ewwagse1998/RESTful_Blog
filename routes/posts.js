//RESTful_Blog posts

module.exports = {
    getPost(req, res) {
        let store = req.app.get('store');
        res.status(200).send(store.posts)  
    },
    addPost(req, res) {
        //let newPost = req.body
        let store = req.app.get('store');
        let id = store.length
        store.posts.push(req.body)
        res.status(201).send({id: id})
    },
    updatePost(req, res) {
        //let newPost = req.body
        let store = req.app.get('store');
        store.posts[req.params.postId] = req.body
        res.status(200).send(store.posts[req.params.postId])
    },
    removePost(req, res) {
        //let newPost = req.body
        let store = req.app.get('store');
        store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
  }

