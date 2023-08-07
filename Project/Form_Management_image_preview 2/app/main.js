// const userForm = document.getElementById("userForm");
// const msg = document.querySelector(".msg");
// const userPhoto = document.getElementById("userPhoto");
// const userPhotoPreview = document.getElementById("userPhotoPreview");
// const galleryPhoto = document.getElementById("galleryPhoto");
// const galleryPhotoPreview = document.getElementById("galleryPhotoPreview");
// const galimg = document.querySelector(".galimg");

// //user form submit

// userForm.onsubmit = (e) => {
//   e.preventDefault();
//   const form_Data = new FormData(e.target);
//   const data = Object.fromEntries(form_Data);
//   console.log(data);

//   if (!data.name.trim() || !data.email.trim() || !data.mobile.trim()) {
//     msg.innerHTML = CreateAlert("All Fields are required");
//   } else if (!isEmail(data.email)) {
//     msg.innerHTML = CreateAlert("Invalid email ", "info");
//   } else if (!IsMobile(data.mobile)) {
//     msg.innerHTML = CreateAlert("Invalid Mobile ", "warning");
//   } else {
//     msg.innerHTML = CreateAlert("Data stabled", "success");
//   }
// };

// //userPhoto preview
// // userPhoto.onchange = (e) => {
// //   const imageUrl = URL.createObjectURL(e.target.files[0]);
// //   userPhotoPreview.setAttribute("src", imageUrl);
// // };
// userPhoto.onchange = (e) => {
//   const imageUrl = URL.createObjectURL(e.target.files[0]);
//   userPhotoPreview.setAttribute("src", imageUrl);

// };
// const image = [];
// galleryPhoto.onchange = (e) => {
//   for (let i = 0; i < e.target.files.length; i++) {
//     const imageUrl = URL.createObjectURL(e.target.files[i]);
//     image.push(imageUrl);
//   }
//   content = "";
//   image.map((item, index) => {
//     content += `<img class="galphoto" src="${item}" alt="">`;
//     galimg.innerHTML = content;
//   });
// };

const userForm = document.getElementById("userForm");
const msg = document.getElementById("msg");
const userPhoto = document.getElementById("userPhoto");
const userphotoPrev = document.getElementById("userphotoPrev");
const galPhoto = document.getElementById("galPhoto");
const img_box = document.getElementById("img_box");

userForm.onsubmit = (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);

  //validation
  if (!data.name.trim() || !data.email.trim() || !data.mobile.trim()) {
    msg.innerHTML = CreateAlert("All fields are required");
  } else if (!IsEmail(data.email)) {
    msg.innerHTML = CreateAlert("Invalid Email", "secondary");
  } else if (!IsMobile(data.mobile)) {
    msg.innerHTML = CreateAlert("Invalid Mobile", "info");
  } else {
    msg.innerHTML = CreateAlert("Data Stabled", "success");
  }
};

userPhoto.onchange = (e) => {
  const imageUrl = URL.createObjectURL(e.target.files[0]);
  userphotoPrev.setAttribute("src", imageUrl);
};

galPhoto.onchange = (e) => {
  let photos = [];

  for (let i = 0; i < e.target.files.length; i++) {
    const galUrl = URL.createObjectURL(e.target.files[i]);
    photos.push(galUrl);
  }

  let content = "";
  photos.forEach((item, index) => {
    content += ` <img class="galpic w-100" src="${item}" alt="">`;
  });
  console.log(content);
  img_box.innerHTML = content;
};
