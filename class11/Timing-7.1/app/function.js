const CreateAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg}<button class="btn-close"></button></p>`;
};

const isEmail = (email) => {
  const pattern = /^[a-z0-9._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}$/;
  return pattern.test(email);
};

function IsMobile(mobile) {
  const pattern = /^(\+?1[-.\s]?)?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return pattern.test(mobile);
}
