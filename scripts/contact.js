function openGmail() {
  const firstName = document.querySelector("#firstname").value;
  const additionalName = document.querySelector("#additional-name").value;
  const lastName = document.querySelector("#lastname").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const contactPreference = document.querySelector("#contact-preference").value;
  const messageType = document.querySelector("#message-type").value;
  const message = document.querySelector("#message").value;

  const subject = encodeURIComponent(
    `Support Request from ${firstName}_${additionalName}_${lastName} - Email: ${email} - Phone: ${phone} - Contact Preference: ${contactPreference} - Message Type: ${messageType}`
  );
  const body = encodeURIComponent(
    `Hello FNB App Academy,\n\n${message}\n\nKind Regards,\n${firstName} ${additionalName} ${lastName}`
  );

  const gmailURL = `mailto:fnbappacademyinfo@gmail.com?subject=${subject}&body=${body}`;

  window.open(gmailURL, "_blank");
}

// mailto:fnbappacademyinfo@gmail.com?subject=${subject}&body=${body}

// function openGmail() {
//   const name = document.getElementById("userName").value;
//   const message = document.getElementById("userMessage").value;
//   const preference = document.getElementById("contactPreference").value;

//   const subject = encodeURIComponent(`Support Request from ${name}`);
//   const body = encodeURIComponent(
//     `Hello FNB App Academy,\n\nMy preferred contact method is: ${preference}.\n\nMessage:\n${message}\n\nRegards,\n${name}`
//   );

//   const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=fnbappacademyinfo@gmail.com&su=${subject}&body=${body}`;

//   window.open(gmailURL, "_blank");
// }

// // ! For testing only
// function printName() {
//   const firstNameValue = firstName.value;
//   const additionalNameValue = additionalName.value;
//   const lastNameValue = lastName.value;
//   const emailValue = email.value;
//   const phoneValue = phone.value;
//   const contactPreferenceValue = contactPreference.value;
//   const messageTypeValue = messageType.value;
//   const messageValue = message.value;

//   console.log(firstNameValue);
//   console.log(additionalNameValue);
//   console.log(lastNameValue);
//   console.log(emailValue);
//   console.log(phoneValue);
//   console.log(contactPreferenceValue);
//   console.log(messageTypeValue);
//   console.log(messageValue);
// }
