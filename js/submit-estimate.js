$("form").on( "submit", function (e) {
    // prevent page from refreshing
    e.preventDefault();

    // hide form and display loading scroll
    $(this).hide();
    $('#sending-form').show();

    // validate required inputs
});
