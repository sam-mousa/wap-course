'usestric'
$(function(){
    $('#chooseList').change(function(){
        var path = '../ajax_choice_list/src/' + $("#chooseList").val();
        $.get(path).done(ajaxSuccess).fail(ajaxFailure);
    });
});
function ajaxSuccess(data) {
    $("#output").val(data);
}

function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}