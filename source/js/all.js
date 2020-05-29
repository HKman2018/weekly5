$(document).ready(function() {
    // $('.writeBoard').hide();
    $('.replyForBtn').click(function(e) {
        e.preventDefault();
        $('.writeBoard').removeClass('moveDown')
        $('.writeBoard').addClass('moveUp')
        $('.writeBoard').show();

    });
    $('.cancelBtn').click(function(e) {
        e.preventDefault();
        $('.writeBoard').removeClass('moveUp')
        $('.writeBoard').addClass('moveDown').hide()

    })
});