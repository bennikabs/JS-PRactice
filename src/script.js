const buttonElement = document.querySelector("button");
const spanElement = document.querySelector("span");

//ask the user for the input and then update the span element.
//by passing an event listener with an argument, click and prompt
// save the variable to yourName (save the returned value into a prompt function)
//update the span element with the text that is being returned

buttonElement.addEventListener("click", () => {
  const yourName=prompt("please enter your name");
  spanElement.textContent=yourName;
});
