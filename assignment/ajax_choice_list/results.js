'usestric'
$(function(){
    $('#chooseList').change(function(){
        var path = '../ajax_choice_list/src/' + $("#chooseList").val();
        $.get(path).done($("#output").val(data)).fail(ajaxFailure);
    });
});

function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}