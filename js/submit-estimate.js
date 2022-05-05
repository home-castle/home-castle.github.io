$("form").on( "submit", function (e) {
    // prevent page from refreshing
    e.preventDefault();

    let formFeedback = $("#sending-form");

    // hide form and display loading scroll
    formFeedback.show();

    // retrieve form values
    let name = $("#name");
    let phone = $("#phone-number");
    let email = $("#email");
    let emailPreferred = $("#email-contact").is(":checked");
    let phonePreferred = $("#phone-contact").is(":checked");
    let address1 = $("#street-address");
    let address2 = $("#address-line-2");
    let jobTypeIsExteriorPainting = $("#exterior-painting").is(":checked");
    let jobTypeIsInteriorPainting = $("#interior-painting").is(":checked");
    let jobTypeIsFenceGate = $("#fence-gate").is(":checked");
    let jobTypeIsOther = $("#other").is(":checked");
    let city = $("#city");
    let zip = $("#zip-code");
    let projectDetails = $("#project-details");

    // check if name left blank
    if (name.val() === "") {
        name.addClass("is-invalid");
        $("#name-text").hide();
    }

    // check if phone left blank
    if (phone.val() === "") {
        phone.addClass("is-invalid");
        $("#phone-number-text").hide();
    } else if (phone.val().match("^(1-)?\d{3}-\d{3}-\d{4}$")) {
        window.alert("pattern satisfied");
    }

    // check if user wants to be contacted through email but didn't insert email
    if (emailPreferred && email.val() === "") {
        email.addClass("is-invalid");
        $("#email-regex-error").hide();
    }

    // check if street address field is empty
    if (address1.val() === "") {
        address1.addClass("is-invalid");
        $("#street-address-text").hide();
    }

    // check if city field is empty
    if (city.val() === "") {
        city.addClass("is-invalid");
        $("#city-text").hide();
    }

    // check if zip code is empty
    if (zip.val() === "") {
        zip.addClass("is-invalid");
        $("#zip-code-text").hide();
    }

    formFeedback.hide();
});

$("input").change(function (e) {
    $(this).removeClass("is-invalid");
    $("#"+ $(this).attr("id") + "-text").show();
});


