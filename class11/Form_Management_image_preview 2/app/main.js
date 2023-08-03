const userForm = document.getElementById("userForm");
const msg = document.querySelector(".msg");
const userPhoto = document.getElementById("userPhoto");
const userPhotoPreview = document.getElementById("userPhotoPreview");
const galleryPhoto = document.getElementById("galleryPhoto");
const galleryPhotoPreview = document.getElementById("galleryPhotoPreview");
const galimg = document.querySelector(".galimg");

//user form submit

userForm.onsubmit = (e) => {
  e.preventDefault();
  const form_Data = new FormData(e.target);
  const data = Object.fromEntries(form_Data);
  console.log(data);

  if (!data.name.trim() || !data.email.trim() || !data.mobile.trim()) {
    msg.innerHTML = CreateAlert("All Fields are required");
  } else if (!isEmail(data.email)) {
    msg.innerHTML = CreateAlert("Invalid email ", "info");
  } else if (!IsMobile(data.mobile)) {
    msg.innerHTML = CreateAlert("Invalid Mobile ", "warning");
  } else {
    msg.innerHTML = CreateAlert("Data stabled", "success");
  }
};

//userPhoto preview
// userPhoto.onchange = (e) => {
//   const imageUrl = URL.createObjectURL(e.target.files[0]);
//   userPhotoPreview.setAttribute("src", imageUrl);
// };
userPhoto.onchange = (e) => {
  const imageUrl = URL.createObjectURL(e.target.files[0]);
  userPhotoPreview.setAttribute("src", imageUrl);
 
};
const image = [];
galleryPhoto.onchange = (e) => {
  for (let i = 0; i < e.target.files.length; i++) {
    const imageUrl = URL.createObjectURL(e.target.files[i]);
    image.push(imageUrl);
  }
  content = "";
  image.map((item, index) => {
    content += `<img class="galphoto" src="${item}" alt="">`;
    galimg.innerHTML = content;
  });
};
