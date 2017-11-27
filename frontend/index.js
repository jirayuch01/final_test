$(function () {
    loadAllPost();
});

$('#search').click(function () {
    loadPostByUser();
});

function loadAllPost() {
    $('#posts').empty();
    //Get all posts
    var url = 'http://localhost:8080/api/posts/';

    // POINT 6. Call REST APIs with Axios
    axios.get(url)
        .then(function (response) {

            // POINT 7. User Mustache render template(post.mst) with json data from the API        
            $.get('post.mst', function (template) {
                console.log(response);
                console.log(response.data[0]);
                var size = response.data.length;
                for (var i = 0; i < size; i++) {
                    var items = response.data[i];
                    console.log(items.title);
                    var rendered = Mustache.render(template, items);
                    $('#posts').append(rendered);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
            document.getElementById('posts').innerHTML = '<center><h1>' + err.message + '</h1></center>';
        });
}

function loadPostByUser() {
    // Additional 1.
    $('#posts').empty();
    var url = 'http://localhost:8080/api/posts/user';
    axios.get(url)
        .then(function (response) {
            $.get('post.mst', function (template) {
                console.log(response);
                console.log(response.data[0]);
                var size = response.data.length;
                for (var i = 0; i < size; i++) {
                    var items = response.data[i];
                    console.log(items.title);
                    var rendered = Mustache.render(template, items);
                    $('#posts').append(rendered);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
            document.getElementById('posts').innerHTML = '<center><h1>' + err.message + '</h1></center>';
        });
}


