function validateForm() {
	var x = document.forms["contact-us-form"]["fname"].value;
	if (x == "") {
	//   alert("'First Name' can not be empty!!");
        asAlertMsg({
            type: "error",
            title: "Empty Field",
            message: "'First Name' can not be empty!!",

            button: {
                title: "Close Button",
                bg: "Cancel Button"
              }
        });
	  return false;
	}

	var x = document.forms["contact-us-form"]["lname"].value;
	if (x == "") {
	//   alert("'Last Name' can not be empty!!");
      asAlertMsg({
        type: "error",
        title: "Empty Field",
        message: "'Last Name' can not be empty!!",

        button: {
            title: "Close Button",
            bg: "Cancel Button"
          }
    });
	  return false;
	}

    var x = document.forms["contact-us-form"]["email"].value;
	if (x == "") {
	//   alert("'Email' can not be empty!!");
      asAlertMsg({
        type: "error",
        title: "Empty Field",
        message: "'E-mail' can not be empty!!",

        button: {
            title: "Close Button",
            bg: "Cancel Button"
          }
    });
	  return false;
	}

    var x = document.forms["contact-us-form"]["m-num"].value;
	if (x == "") {
	//   alert("'Mobile Number' can not be empty!!");
      asAlertMsg({
        type: "error",
        title: "Empty Field",
        message: "'Mobile Number' can not be empty!!",

        button: {
            title: "Close Button",
            bg: "Cancel Button"
          }
    });
	  return false;
	}
    // else if (isNaN(x)){
    //     alert("'Mobile Number' must be NUMERICAL!!");
	//     return false;
    // }

    var x = document.forms["contact-us-form"]["msg"].value;
	if (x == "") {
	//   alert("'Message' can not be empty!!");
      asAlertMsg({
        type: "error",
        title: "Empty Field",
        message: "'Message' can not be empty!!",

        button: {
            title: "Close Button",
            bg: "Cancel Button"
          }
    });
	  return false;
	}else{
    asAlertMsg({
      type: "success",
      title: "Submitted",
      message: "Request submitted successfully!!",

      button: {
          title: "Close Button",
          bg: "Cancel Button"
        }
  });
  return true;
  }
  } 