const userForm = document.getElementById("userForm");
const msg = document.querySelector(".msg");

//user form submit
userForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  if (!data.name.trim() || !data.email.trim() || !data.mobile.trim()) {
    // msg.innerHTML = createAlert("All fields are required");
    msg.innerHTML = createAlert("All fields needed");
  } else if (!isEmail(data.email)) {
    msg.innerHTML = createAlert("Invalid email ", "warning");
  } else if (!isMobile(data.mobile)) {
    msg.innerHTML = createAlert("invalid mobile Number", "info");
  } else {
    msg.innerHTML = createAlert("Data stabled", "success");
  }
};
