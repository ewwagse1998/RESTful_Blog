//RESTful_Blog posts

module.exports = {
    getComment(req, res) {
        let store = req.app.get('store');
        res.status(200).send(store.posts[req.params.postId].comments)  
    },
    addComment(req, res) {
        let store = req.app.get('store');
        let commentId = 0
        if (store.posts[req.params.postId].comments === undefined){
            let comments=[]
            comments.push(req.body)
            store.posts[req.params.postId]['comments'] = comments
        }else{
            store.posts[req.params.postId].comments.push(req.body)
            commentId = store.posts[req.params.postId].comments.length
        }
        res.status(201).send({commentId: commentId})
    },
    updateComment(req, res) {
        let store = req.app.get('store');
        store.posts[req.params.postId].comments[req.params.commentId] = req.body
        res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
    },
    removeComment(req, res) {
        let store = req.app.get('store');
        store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }
  }