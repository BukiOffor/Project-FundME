// Add Click event to switch between light and dark theme
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});



// On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    
    
    
 // Gets Dom from the document body
 function getDom(selector) {
   return document.querySelector(selector);
 }
 
 
 // Get inner selector from outter Selector
 function getInnerDom(outterSelector) {
    (innerSelector) => {
     return outterSelector.querySelector(innerSelector)
   }
 }

 //toggle the input type of passwords
 document.addEventListener('DOMContentLoaded', function() {
    var eyeAndSlashElements = document.querySelectorAll('.eye, .slash');

    eyeAndSlashElements.forEach(function(element) {
        element.addEventListener('click', function() {
            var inputField = this.closest('div').querySelector('input');
            if (inputField.type === 'password') {
                inputField.type = 'text';
                inputField.placeholder = 'Password';
            } else {
                inputField.type = 'password';
                inputField.placeholder = '••••••••';
            }
            
            var siblingIcon = this.nextElementSibling;
            if (siblingIcon) {
                this.style.display = 'none';
                siblingIcon.style.display = 'block';
            } else {
                siblingIcon = this.previousElementSibling;
                this.style.display = 'none';
                siblingIcon.style.display = 'block';
            }
        });
    });
});







//get the copyright span element
var element = document.querySelector('.tm-current-year');

// Get the current year
var currentYear = new Date().getFullYear();

// Set the text content of the element to the current year
element.textContent = currentYear;