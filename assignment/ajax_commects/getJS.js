$(function(){
    $("#get").click(function() {
        var url = "http://jsonplaceholder.typicode.com/users/" + $("#userId").val();
        $.get(url).done(createInfo).fail(err);
    });
});

function createInfo(data) {
    $("#output").empty();
    let info =
        "Name: " +
        data.name +
        "\n" +
        "Email: " +
        data.email +
        "\n" +
        "Address: " +
        (data.address.street +" " + data.address.suite + " " + data.address.city + " " + data.address.zipcode + " " + data.address.geo.lat + " " + data.address.geo.lng + " ");
    $("#output").append(info);
    getPosts(data.id);
}

function getPosts(id){
    var url = "http://jsonplaceholder.typicode.com/posts?userId=" + id;
        $.get(url).done(createPosts).fail(err);
}

function createPosts(data) {
    $("#posts").empty();
    for (let i = 0; i < data.length; ++i) {
        $("<li>").text(data[i].body).attr("id", data[i].id).appendTo("#posts");
        let id = "#" + data[i].id;
        $('<button id="show'+id+'"></button>').text("Comments").click(getComment).appendTo(id);
    }
}
function getComment() {
    let id = $(this).parent("li").attr("id");
    $(this).attr('disabled', true);
    var url = "http://jsonplaceholder.typicode.com/comments?postId=" + id;
    $.get(url).done(showComments).fail(err);
}
function showComments(data) {
    for (let i = 0; i < data.length; ++i) {
        let id = "#" + data[i].postId;
        $("<div>").text(i + 1 + ". " + data[i].body).appendTo(id);
    }
}
function err(xhr, status, exception) {
    console.log(xhr, status, exception);
}