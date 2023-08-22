
// Sign 
function init() {
  // Get sign in button
  const signinBtn = getDom('#signin-btn')
  
  // Get sign in button
  const signupBtn = getDom('#signup-btn')
  
  // Get sign up and sign in container
  const acctContainer = getDom('#access-acct')
  
  // Get sign in container
  const signinContainer = getDom('#signin-container')
  
  // Get sign up container
  const signupContainer = getDom('#signup-container')

  // Get close sign in container
  const closeSignin = getDom('#close-signin')
  
  // Get close sign up container
  const closeSignup = getDom('#close-signupr')
  
  // Get Create Campaign button
  const createCampaignBtn = getDom('#start-campaign-btn')
  
  // Home Header
  const homeHeader = getDom('#home header')
  
  // Home Header
  const homeMain = getDom('#home main')
  
  // Home footer
  const homeFooter = getDom('#home footer')
  
  signinBtn.addEventListener('click', (e) => {
    e.preventDefault
    // Hide home header 
    homeHeader.classList.add('hidden')
    
    // Hide home main 
    homeMain.classList.add('hidden')
    
    // Hide home footer
    homeFooter.classList.add('hidden')
    
    // Show acctContainer
    acctContainer.classList.remove('hidden')
    
    // Show Signin Container
    signinContainer.classList.remove('hidden')
  })
}

init()






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
 