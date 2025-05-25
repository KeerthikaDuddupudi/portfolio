function showDownloadMessage() {
  alert("Downloading CV..............");
}

  function showEducation(level) {
  var content = document.getElementById("edu-content");

  if (level === "tenth") {
    document.getElementById("tenth").style.display = "block";
    document.getElementById("inter").style.display = "none";
    document.getElementById("btech").style.display = "none";
  } else if (level === "inter") {
    document.getElementById("tenth").style.display = "none";
    document.getElementById("inter").style.display = "block";
    document.getElementById("btech").style.display = "none";
  } else if (level === "btech") {
    document.getElementById("tenth").style.display = "none";
    document.getElementById("inter").style.display = "none";
    document.getElementById("btech").style.display = "block";
  }
}

const form = document.getElementById("contactForm");
  const error = document.getElementById("form-error");

  form.onsubmit = function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
      error.textContent = "All fields are required.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      error.textContent = "Please enter a valid email.";
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      error.textContent = "Please enter a valid 10-digit phone number.";
      return;
    }

    error.textContent = "";
    alert("Message sent successfully!");
    form.reset();
  };
