// first name
//<input type="submit" value="fName" class="btn" onClick="login()" />

let nameValidation = (fName) => {
  let re = /[A-Za-z]/;
  let reP = /[A-Za-z0-9]{}/;
  return fName.length < 1 || fName.length > 15
    ? "to short to long"
    : !re.test(fName)
    ? "lower and upper"
    : "ok";
};

console.log(nameValidation("12345678912346"));

// function nameValidation() {
//     let fName = document.getElementById("#").value;
//     let Lname = document.getElementById("#").value;
//     let re = /[A-Z][a-z]/;

//     return fName.length < 1 || fName.length > 15 ? "The First Name entered is either too short or too long"
//        : !re.test(fName)? ""
//     : "ok";
//     }
