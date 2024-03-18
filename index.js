/** @format */

document.addEventListener('DOMContentLoaded', () => {
    const appScreen = document.getElementById('appScreen')
    const welcomeContent = document.getElementById('welcomeContent')
    const plantsContent = document.getElementById('plantsContent')
    const signUpBtn = document.getElementById('signUpBtn')
    const logInBtn = document.getElementById('logInBtn')

    function showPlantsScreen() {
        welcomeContent.classList.add('hidden')
        plantsContent.classList.remove('hidden')
        appScreen.classList.remove('welcome-screen') // Remove the welcome background image class
    }

    function showWelcomeScreen() {
        welcomeContent.classList.remove('hidden')
        plantsContent.classList.add('hidden')
        appScreen.classList.add('welcome-screen') // Add the welcome background image class
    }

    signUpBtn.addEventListener('click', showPlantsScreen)
    logInBtn.addEventListener('click', showPlantsScreen)
    // Call showWelcomeScreen on load or whenever you need to go back to the welcome screen
    showWelcomeScreen()
})
