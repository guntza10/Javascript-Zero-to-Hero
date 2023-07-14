// closure =  A function with preserved and private data.
//                   Gives you access to an outer function’s scope,
//                   from an inner function.

document.getElementById("loginButton").onclick = login();

//userInbox = 420.69;

function login() {
  let userName = "Bro";
  let userInbox = 1;

  function alertUser() {
    alert(`${userName} you have ${userInbox} new messages!`);
    userInbox = 0;
  }

  return alertUser;
}
