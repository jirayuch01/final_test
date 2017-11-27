$('#post').click(function () {
    createNewPost();
});

$('#photo').change(function () {
    previewPhoto($('#photo').val());
});

function createNewPost() {
    var username = $('#username').val();
    var title = $('#title').val();
    var comment = $('#comment').val();
    var image_url = $('#photo').val();
    var create_date = $('#date').val();
    console.log(image_url);

    var newpost = {
        // POINT 8. Use jQuery to get form data and create an object for new post
        username: username,
        title: title,
        comment: comment,
        image_url: image_url,
        // create_date: date
        create_date: moment().format('LLLL')
    };
    console.log(newpost);

    var url = 'http://localhost:8080/api/posts';
    // POINT 9. Insert data to REST API with axios
    axios.post(url, newpost)
        .then(function (response) {
            console.log(response);
            // POINT 10. After data is inserted redirect user to index.html
            window.location.href = "http://localhost:8080/";            
        })
        .catch(function (err) {
            console.log(err);
            document.getElementById('posts').innerHTML = '<center><h1>' + err.message + '</h1></center>';
        });
}

function previewPhoto(src) {
    $('#preview').attr('src', src);
}