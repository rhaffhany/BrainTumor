var profilePic = document.getElementById('profilePic')
const uploadedImage = localStorage.getItem('uploadedImage');

if (uploadedImage) {
    profilePic.src = uploadedImage;
}else {
    alert("No image found. Please upload an image on the previous page.");
}

// inputFile.onchange = function(){
//     profilePic.src = URL.createObjectURL(inputFile.files[0]); 
// }
