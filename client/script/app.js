
// Sign 
function init() {
  // Get sign in button
  const signinBtn = getDom('#signin-btn')
  
  // Get sign up link
  const inFormSignupLink = getDom('#in-form-signup-link')
  
  // Get sign up link
  const inFormSigninLink = getDom('#in-form-signin-link')
  
  // Get sign up and sign in container
  const acctContainer = getDom('#access-acct')
  
  // Get sign in container
  const signinContainer = getDom('#signin-container')
  
  // Get sign up container
  const signupContainer = getDom('#signup-container')

  // Get close sign in container
  const closeSignin = getDom('#close-signin')
  
  // Get close sign up container
  const closeSignup = getDom('#close-signup')
  
  // Get Create Campaign button
  const startCampaignBtn = getDom('#start-campaign-btn')
  
  // Home Header
  const homeHeader = getDom('#home header')
  
  // Home Header
  const homeMain = getDom('#home main')
  
  // Home footer
  const homeFooter = getDom('#home footer')
  
  
  showSignin(signinBtn)
  showSignin(startCampaignBtn)
  showSignin(inFormSigninLink)
  showSignup(inFormSignupLink)
  closeAcctContainer(closeSignin)
  closeAcctContainer(closeSignup)
  
  
  function showSignin(btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault
      // Hide home header 
      homeHeader.classList.add('hidden')
      
      // Hide home main 
      homeMain.classList.add('hidden')
      
      // Hide home footer
      homeFooter.classList.add('hidden')
      
      // Hide Signup Container
      signupContainer.classList.add('hidden')
      
      // Show acctContainer
      acctContainer.classList.remove('hidden')
      
      // Show Signin Container
      signinContainer.classList.remove('hidden')
    })
  }
  
  function showSignup(btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault
      // Hide home header 
      homeHeader.classList.add('hidden')
      
      // Hide home main 
      homeMain.classList.add('hidden')
      
      // Hide home footer
      homeFooter.classList.add('hidden')
      
      // Hode Signin Container
      signinContainer.classList.add('hidden')
      
      // Show acctContainer
      acctContainer.classList.remove('hidden')
      
      // Show Signup Container
      signupContainer.classList.remove('hidden')
      
    })
  }
  
  
  function closeAcctContainer(btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault
      // Show home header 
      homeHeader.classList.remove('hidden')
      
      // Show home main 
      homeMain.classList.remove('hidden')
      
      // Show home footer
      homeFooter.classList.remove('hidden')
      
      // Hide Signin Container
      signinContainer.classList.add('hidden')
      
      // Hide acctContainer
      acctContainer.classList.add('hidden')
      
      // Hide Signup Container
      signupContainer.classList.add('hidden')
      
    })
  }
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

//get the copyright span element
var element = document.querySelector('.tm-current-year');

// Get the current year
var currentYear = new Date().getFullYear();

// Set the text content of the element to the current year
element.textContent = currentYear;