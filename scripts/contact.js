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

  const emailURL = `mailto:fnbappacademyinfo@gmail.com?subject=${subject}&body=${body}`;

  window.open(emailURL, "_blank");
}
