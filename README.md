# RESTful_Blog
EDX-Intro to NodeJS Lab 2 assignment

1.  I created my server.js file and used npm modules Express, Morgan, Body-Parser, and errorhandler.  In my routes directory I created posts module and my comments module.  The posts module handled logic for posts GET, POST, PUT, DELETE.  The comments module handled logic for comments GET, POST, PUT, DELETE.  I designed this project in order to modularize my project and keep the server.js file as simple as possible.  My two largest issues I ran into was figuring out how to pass my store object to and from the routes files and then figuring out how to add and the comments array in the store object properly.

2.  I tested the file using the curl commands that are saved in the test curl.txt file in the directory.  I called the POST for the first POST and then did a GET.  I then posted more posts to by in order to have more then one in the array.  I then added used the PUT to change one of the posts.  I then add comments to one of the posts using the comments routes.  I then did a GET on the comment to be sure it stored properly.  I then did a GET on the post to see both the post and the comments.  I then added 2 more comments.  Then I used PUT command to change the second comment on the comments route.  I then did a DELETE to delete a comment.  Then I did a DELETE on the post with comments to be sure the comments were deleted with the POST>

I believe everything is working as intended based on the project description.
