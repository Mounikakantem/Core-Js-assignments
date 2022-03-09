
function validation() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var MobNmbr = document.getElementById('mobile-nmbr').value;
    var age = document.getElementById('age').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('Address').value;

    //========first name==========

    if (fname == "") {
        document.getElementById('firstname').innerHTML = "Please fill the first name ";
        return false;
    }
    if (fname.length < 2 || fname.length > 12) {
        document.getElementById('firstname').innerHTML = "Name should have minimum of 2 character and not more than 12 ";
        return false;

    }
    if (!isNaN(fname)) {
        document.getElementById('firstname').innerHTML = "first name should not be a number ";
        return false;
    }

    //==========last name=========

    if (lname == "") {
        document.getElementById('lastname').innerHTML = "please fill the lastname";
        return false;
    }
    if (lname.length < 2 || lname.length > 12) {
        document.getElementById('lastname').innerHTML = "Name should have minimum 2 character and not more than 12 ";
        return false;

    }
    if (!isNaN(lname)) {
        document.getElementById('lastname').innerHTML = "last name should not be number";
        return false;
    }

    //========email=======

    if (email == "") {
        document.getElementById('mail').innerHTML = "please fill the email";
        return false;
    }
    //=========mobile number========
    if (MobNmbr == "") {
        document.getElementById('mobile').innerHTML = "please fill the mobile number";
        return false;
    }
    if (MobNmbr.length < 10 || MobNmbr.length > 10) {
        document.getElementById('mobile').innerHTML = "there should be 10 digits ";
        return false;

    }
    if (isNaN(MobNmbr)) {
        document.getElementById('mobile').innerHTML = "it should be digits only ";
        return false;
    }


    //============age===========
    if (age == "") {
        document.getElementById('ag').innerHTML = "please fill the age";
        return false;
    }
    //========dob===================
    if (dob == "") {
        document.getElementById('birth').innerHTML = "please fill the date of birth";
        return false;
    }
    //===========address===============
    if (address = "") {
        document.getElementById('address').innerHTML = "please fill the address";
        return false;
    }

}
     
