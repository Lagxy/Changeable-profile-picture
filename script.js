// Get the file input field and the image element that will display the selected image
const fileInput = document.getElementById('picture-input');
const profilePicture = document.getElementById('profile-picture');

// When the user selects a file, read the image and display it on the page
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', (event) => {
    profilePicture.src = event.target.result;
  });

  reader.readAsDataURL(file);
});
