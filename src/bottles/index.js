import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import $ from "jquery";

console.log("Bottles");

$.ajax({
  url: "http://localhost:3131/bottles",
  data: {
    login: "",
    password: "",
  },
  method: "GET",
  dataType: "json",
  error: (request) => {
    console.log("error");
  },
  success: (data) => {
    for (var i = 0; i < data.length; i++){

      var price = data[i].PRICE/100;

      $("#table-bottles").append(`
        <tr>
        <th scope="row">${data[i].ID}</th>
        <td>${data[i].BRAND}</td>
        <td>${price}</td>
        <td>${data[i].VOLUME}</td>
        <td>${data[i].COUNT}</td>
        <td>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Actions
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Add</a>
              <a class="dropdown-item" href="#">Delete</a>
            </div>
          </div>
        </td>
      </tr>
      `);
    };
  },
});
