import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

console.log("Login");

$("#target").submit(() => {
  const login = $("#login").val();
  const password = $("#password").val();

  console.log("Text");
  return false;
});


function login(login, password) {
  $.ajax({
    url: "http://localhost:3131/",
    usernam: login,
    password: password,
    method: "GET",
    dataType: "json",
    error: (request, status, error) => {
      console.log("error");
    },
    success: (data, status, request) => {
      console.log(data);
      console.log(login);
      console.log(password);
    }
  });
}
