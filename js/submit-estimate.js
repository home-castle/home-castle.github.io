let totalErrors = 0;
$("form").on( "submit", function (e) {
    // prevent page from refreshing
    e.preventDefault();

    // disable submit button
    $("#submit-button").attr("disabled", "disabled");
    $("#submit-button-default-style").hide();
    $("#submitting-button-style").show();

    // hide all submit results before attempting to submit
    $("#submit-error-text").hide();
    $("#submit-validation-error-text").hide();
    $("#submit-success-text").hide();

    let containsError = false;

    // basic contact info
    let name = $("#name");
    let phone = $("#phone-number");
    let email = $("#email");
    let emailPreferred = $("#email-radio-button").is(":checked");

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
        totalErrors++;
    }

    // check if phone left blank
    if (phone.val() === "") {
        phone.addClass("is-invalid");
        $("#phone-number-text").hide();
        containsError = true;
        totalErrors++;
    }

    // check if user wants to be contacted through email but didn't insert email
    if (emailPreferred && email.val() === "") {
        email.addClass("is-invalid");
        $("#email-regex-error").hide();
        containsError = true;
        totalErrors++;
    }

    // check if street address field is empty
    if (address1.val() === "") {
        address1.addClass("is-invalid");
        $("#street-address-text").hide();
        containsError = true;
        totalErrors++;
    }

    // check if city field is empty
    if (city.val() === "") {
        city.addClass("is-invalid");
        $("#city-text").hide();
        containsError = true;
        totalErrors++;
    }

    // check if zip code is empty
    if (zip.val() === "") {
        zip.addClass("is-invalid");
        $("#zip-code-text").hide();
        containsError = true;
        totalErrors++;
    }

    // don't send request if it contains error
    if (containsError) {
        $("#submit-validation-error-text").show();
        $("#submit-button").removeAttr("disabled")
            .removeClass("btn-success")
            .addClass("button-default")
            .text("Submit");
        $("#submit-button-default-style").show();
        $("#submitting-button-style").hide();
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

    // send data to aws lambda function
    fetch("https://sl7yfoc57irh5vd6rawzbxuni40luxjb.lambda-url.us-east-2.on.aws/", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataToSend)
    }).then(res => {
        // successfully created estimate
        if (res.status === 200) {
            $("#submit-success-text").show();
            $("#submit-button").removeClass("button-default")
                .addClass("btn-success")
                .text("Success");
            resetFields();
        } else {
            // error occurred when creating estimate
            $("#submit-error-text").show();
        }

    });

    // enable submit button
    $("#submit-button").removeAttr("disabled")
        .removeClass("btn-success")
        .addClass("button-default")
        .text("Submit");
    $("#submit-button-default-style").show();
    $("#submitting-button-style").hide();
});

$("input").change(function (e) {
    // remove validation error attribute from current field if it has one
    if ($(this).hasClass("is-invalid")) {
        $(this).removeClass("is-invalid");

        // restore default text
        $("#"+ $(this).attr("id") + "-text").show();

        // decrement total validation error count
        totalErrors--;
    }

    // hide validation error text if all error fields have been resolved
    if (totalErrors === 0) {
        $("#submit-validation-error-text").hide();
    }
});


function resetFields() {
    // contact info
    $("#name").val("");
    $("#phone-number").val("");
    $("#email").val("");
    $("#email-contact").val("");
    $("#phone-radio-button")[0].checked = true;
    $("#email-radio-button")[0].checked = false;

    // address fields
    $("#street-address").val("");
    $("#address-line-2").val("");
    $("#city").val("");
    $("#zip-code").val("");

    // project type fields
    $("#exterior-painting")[0].checked = false;
    $("#interior-painting")[0].checked = false;
    $("#cabinets")[0].checked = false;
    $("#fence-gate")[0].checked = false;
    $("#other")[0].checked = false;

    // heard from fields
    $("#repeat-client")[0].checked = false;
    $("#referral")[0].checked = false;
    $("#email-hear")[0].checked = false;
    $("#internet-ad")[0].checked = false;
    $("#van-wrap")[0].checked = false;
    $("#none")[0].checked = false;

    // project details field
    $("#project-details").val("");
}
