var profilePic=document.getElementById('profilePic');
var inputFile=document.getElementById('inputFile');
var uploadPhoto = document.getElementById('uploadPhoto');
var icon = document.querySelector('.icon');
const predictButton = document.querySelector('button[name="photo-predict"]');

inputFile.addEventListener('change', function() {

    if (this.files && this.files.length > 0) {
        icon.classList.remove('d-none');
    } else {
        icon.classList.add('d-none');
    }
});

predictButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    if (inputFile.files && inputFile.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Store the image data in localStorage
            localStorage.setItem('uploadedImage', e.target.result);
            // Redirect to the predict.html page
            window.location.href = 'predict.html';
        };

        reader.readAsDataURL(inputFile.files[0]);
    } else {
                alert("Please upload a photo before predicting."); 
           }
            
});

