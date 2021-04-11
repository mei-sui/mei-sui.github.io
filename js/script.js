$(document).ready(function () {
    let $name = $("#name");
    let $mail = $("#mail");
    let $content = $("#content");
    
    $("#submit").on("click", function(){
        let name = $name.val();
        let mail = $mail.val();
        let content = $content.val();
        if (name && mail && content) {

        } else {
            return;
        }
        return;
    });
});
