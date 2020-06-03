'usestric'
$(document).ready(function(){
    $('#chooseList').change(function(){
        var path = '../ajax_choice_list/src/' + $("#hw").val();
        alert($("#hw").val());
        $.ajax({
            url: '../ajax_choice_list/src/song.text',
            type: "GET",
            success: ajaxSuccess,
            error: ajaxFailure
        });
    });
});
function ajaxSuccess(data) {
    $("#output").val(data);
}

function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}

$.get("https://www.google.com/images/branding/product/ico/googleg_lodp.ico");