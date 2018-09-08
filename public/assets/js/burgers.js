$(function () {
  $("#change-devoured").on("click", function (event) {
    var id = $(this).data("id");

    var newDevoured = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function () {

        location.reload();
      }
    );
  });

  $("#create-form").on("submit", function (event) {
    event.preventDefault();


    var newBurger = {
      burger_name: $("#bn").val().trim(),
      devoured: false
    };
console.log(newBurger)
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });
});
