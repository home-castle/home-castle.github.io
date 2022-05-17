$("form").on( "submit", function (e) {
    // prevent page from refreshing
    e.preventDefault();

    let formFeedback = $("#sending-form");
    let containsError = false;

    // hide form and display loading scroll
    formFeedback.show();

    // basic contact info
    let name = $("#name");
    let phone = $("#phone-number");
    let email = $("#email");
    let emailPreferred = $("#email-contact").is(":checked");

    // address fields
    let address1 = $("#street-address");
    let address2 = $("#address-line-2");
    let city = $("#city");
    let zip = $("#zip-code");


    // check if name left blank
    if (name.val() === "") {
        name.addClass("is-invalid");
        $("#name-text").hide();
        containsError = true;
    }

    // check if phone left blank
    if (phone.val() === "") {
        phone.addClass("is-invalid");
        $("#phone-number-text").hide();
        containsError = true;
    } else if (phone.val().match("^(1-)?\d{3}-\d{3}-\d{4}$")) {
        window.alert("pattern satisfied");
    }

    // check if user wants to be contacted through email but didn't insert email
    if (emailPreferred && email.val() === "") {
        email.addClass("is-invalid");
        $("#email-regex-error").hide();
        containsError = true;
    }

    // check if street address field is empty
    if (address1.val() === "") {
        address1.addClass("is-invalid");
        $("#street-address-text").hide();
        containsError = true;
    }

    // check if city field is empty
    if (city.val() === "") {
        city.addClass("is-invalid");
        $("#city-text").hide();
        containsError = true;
    }

    // check if zip code is empty
    if (zip.val() === "") {
        zip.addClass("is-invalid");
        $("#zip-code-text").hide();
        containsError = true;
    }

    // don't send request if it contains error
    if (containsError) {
        formFeedback.hide();
        return;
    }

    // format data to send to request
    let dataToSend = {
        name: name.val(),
        phone: phone.val(),
        email: email.val(),
        emailPreferred: emailPreferred,
        address1: address1.val(),
        address2: address2.val(),
        city: city.val(),
        zip: zip.val(),
        projectType: {
            exterior: $("#exterior-painting").is(":checked"),
            interior: $("#interior-painting").is(":checked"),
            cabinets: $("#cabinets").is(":checked"),
            fencegate: $("#fence-gate").is(":checked"),
            other: $("#other").is(":checked")
        },
        heardFrom: {
            repeatClient: $("#repeat-client").is(":checked"),
            referral: $("#referral").is(":checked"),
            email: $("#email-hear").is(":checked"),
            internetAd: $("#internet-ad").is(":checked"),
            vanWrap: $("#van-wrap").is(":checked"),
            noneOfAbove: $("#none").is(":checked")
        },
        projectDetails: $("#project-details").val()
    };

    console.log("about to call aws function...");
    // send data to aws lambda function
    fetch("https://sl7yfoc57irh5vd6rawzbxuni40luxjb.lambda-url.us-east-2.on.aws/", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataToSend)
    }).then(res => {
        console.log("Request complete! response:", res);
    });

    formFeedback.hide();
});

$("input").change(function (e) {
    $(this).removeClass("is-invalid");
    $("#"+ $(this).attr("id") + "-text").show();
});


