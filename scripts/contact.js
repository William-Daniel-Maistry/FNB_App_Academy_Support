function openGmail() {
  const firstName = document.querySelector("#firstname").value;
  const additionalName = document.querySelector("#additional-name").value;
  const lastName = document.querySelector("#lastname").value;
  const email = document.querySelector("#email").value;
  const emailDomain = email.split("@")[1].toLowerCase();
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

  let emailURL = "";

  if (emailDomain.includes("gmail.com")) {
    emailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=fnbappacademyinfo@gmail.com&su=${subject}&body=${body}`;
  } else if (
    emailDomain.includes("outlook.com") ||
    emailDomain.includes("hotmail.com") ||
    emailDomain.includes("live.com")
  ) {
    emailURL = `https://outlook.live.com/owa/?path=/mail/action/compose&to=fnbappacademyinfo@gmail.com&subject=${subject}&body=${body}`;
  } else if (emailDomain.includes("yahoo.com")) {
    emailURL = `https://compose.mail.yahoo.com/?to=fnbappacademyinfo@gmail.com&subject=${subject}&body=${body}`;
  } else {
    // Default to mailto link
    emailURL = `mailto:fnbappacademyinfo@gmail.com?subject=${subject}&body=${body}`;
  }

  window.open(emailURL, "_blank");
}
