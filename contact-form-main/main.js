  // identify
  messageSent = document.getElementById("messageSent")
  inputFirstName = document.getElementById("inputFirstName")
  inputLastName = document.getElementById("inputLastName")
  inputEmailAdress = document.getElementById("inputEmailAdress")
  submitform = document.getElementById("submitform")
  box_of_first_name = document.getElementById("box_of_first_name")
  box_of_last_name = document.getElementById("box_of_last_name")
  box_of_email = document.getElementById("box_of_email")
  inputTextarea = document.getElementById("inputTextarea")
  box_of_textarea = document.getElementById("box_of_textarea")
  inputagreement = document.getElementById("inputagreement")
  iconInputagreement = document.getElementById("fa_ckeck")
  box_of_agreement = document.getElementById("box_of_agreement")
  container_query = document.getElementById("container_query")
  boxesQuery = document.querySelectorAll(".container_boxes_query .box")
  inputsQuery = document.querySelectorAll("input[type ='radio']")
  generally_enquiry = document.getElementById("generally_enquiry")
  support_request = document.getElementById("support_request")
  

  // start email
  function emailMAtch() {
    f = inputEmailAdress.value
    emailRe = /\w@\w.\w/
    console.log(f.match(emailRe))
  }
  // end email

  /* start query */
  Array.prototype.forEach.call(boxesQuery, boxQuery => {
    boxQuery.onclick = _ => {

      // remove style selected
      Array.prototype.forEach.call(boxesQuery, boxQuery => {
        boxQuery.removeAttribute("id")
      })

      // add style selected
      boxQuery.setAttribute("id","selected")
      boxQuery.querySelector("input").checked = true
      /*
      لا افهم سبب تكرار الطباعة، باحدى المحاولات اختفت 
      المشكلة دون ان اعلم كيف حصل ذلك        
      ممكن التكرار السبب بس نا حسنت اثبت هالشي
      */
      // console.log(boxQuery.querySelector("input"))
    }
  })
  /* end query */

  /* start message sent */
  function funcMessageSent() {
    counterErrors == 0 ? messageSent.style.display = "block" : ""
  } 
  /* end message sent */


counterErrors = 0
function errorMessages() {
    This_field_is_required = document.createElement("div")
    This_field_is_required.innerHTML = " This field is required "
    This_field_is_required.className = "errorMessage"

    if(inputFirstName.value == "") {
      counterErrors++
      error = This_field_is_required.cloneNode(true)
      box_of_first_name.appendChild(error)
      inputFirstName.style = "border-color: var(--border-color-for-error);"
    }
    if(inputLastName.value == "") {
      counterErrors++
      error = This_field_is_required.cloneNode(true)
      box_of_last_name.appendChild(error)
      inputLastName.style = "border-color: var(--border-color-for-error);"
    }
    if(inputEmailAdress.value == "") {
      counterErrors++
      errorEmail = document.createElement("div")
      errorEmail.innerHTML = "Please enter a valid email address"
      errorEmail.className = "errorMessage"
      error = errorEmail.cloneNode(true)

      box_of_email.appendChild(error)
      inputEmailAdress.style = "border-color: var(--border-color-for-error);"
    }

    if(generally_enquiry.checked == false & support_request.checked == false) {
      counterErrors++  
      errorqueryType = document.createElement("div")
      errorqueryType.innerHTML = "Please select a query type"
      errorqueryType.className = "errorMessage"

      container_query.appendChild(errorqueryType)
    }

    if(inputTextarea.value == "") {
      counterErrors++
      error = This_field_is_required.cloneNode(true)
      box_of_textarea.appendChild(error)
      inputTextarea.style = "border-color: var(--border-color-for-error);"
    }
    if(inputagreement.checked == false) {
      counterErrors++
      error = This_field_is_required.cloneNode(true)
      box_of_agreement.appendChild(error)
      box_of_agreement.style = "position: relative"
      error.style = "margin-top: 3px" // there are 9px with label, so it's
    }
  }

// start agreement
// iconInputagreement.onclick = _ => {
//   iconInputagreement.style.display = "none"
//   console.log("ee")
// }
// inputagreement.checked = _ => {
//   console.log("Ddd")
// }


inputagreement.onclick = _ => {
  if(inputagreement.checked == true) {
    iconInputagreement.style.display = "block"
    inputagreement.style = "background-color: var(--seconday-color);"
  } else {
    iconInputagreement.style.display = "none"
    inputagreement.style = "background-color: #ffffff"
  }
}
// this code for if i click <i> input become uncheck
iconInputagreement.onclick =  _ => {
  iconInputagreement.style.display = "none"
  inputagreement.style = "background-color: #ffffff"
}
// end agreement

// start submit
function subimtOnceTime() {
   hasBeenCalled = false;

  return function() {
    if(!hasBeenCalled) {
      submitform.onclick = _ => {
        errorMessages()
        funcMessageSent()
        console.log(hasBeenCalled)
      }
      hasBeenCalled = true;
    }
    else {
      console.log("a")
    }
  } 
}
/*
  حطيتها برا الدالة، وما فهمت لبش ما شتغلت الا بهي الطريقة، كتب هذا الكود لحتى تعرف انه هالكود بدو  تعمق اكترhasBeenCalled = false;هاد الكود عدلت عليه انو ال 
*/
hasBeenCalled = false;
function submitclick() {
  return function() {
    if(!hasBeenCalled) {
      errorMessages()
      funcMessageSent()
      hasBeenCalled = true
    }
  }
}

submitform.onclick = _ => {
  callOnceTime = submitclick()
  callOnceTime()
  emailMAtch()
}
// end submit