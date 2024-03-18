//we get menu button and menu from html
const menuBtn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')

//adding event to listen to the click of the the menu button
menuBtn.addEventListener('click', handleOpenMenu)

//function for handling the menu button clicked, if the is button is clicked, it should perform the tasks in the function block {}
function handleOpenMenu() {
    // using javascript classList to toggle the html class attribute in the menu button <button class="active">
  menuBtn.classList.toggle('active')

   //if the button has active as class attribute value truly
  if (menuBtn.classList.contains('active')) {
    //it should add this javascript style (css) to menu
    menu.style.right = 0 //give the menu the right of 0 (css)
    menu.style.transition = '1s ease-in-out' //add transition to it (css)
  } else { //else, if it does't contain active as class attribute value
    menu.style.right = '-100%' //make the css right for menu -100%
    menu.style.transition = '1s ease-in-out' //add transition to it
  }
}


/*============== HOW THE TOGGLE WORKS ===============*/
//initially, the button was give a class atrrive with value of active,
//if the button is clicked in the output, the toggle does 2 thing, it add the attribute value and remove it
//if the button is clicked, the toggle will remove the class attrive value (active) from the button, therefore, the else in the function will be executed
//if the button is cliked once again, the toggle will the class attribute value (active) back, and the code in if block will be executed