// Выпадающее меню выбора салона по адресу
function DropDown(el) {
  this.dd = el;
  this.initEvents();
}

DropDown.prototype = {
  initEvents: function () {
    var obj = this;

    obj.dd.on("click", function (event) {
      $(this).toggleClass("active");
      event.stopPropagation();
    });
  },
};

$(function () {
  var dd = new DropDown($("#dd"));

  $(document).click(function () {
    $(".wrapper-dropdown").removeClass("active");
  });
});

// изменение полей когда выбрано значение выпадающего меню
// данные салонов
var num1 = "8 (918) 369-22-00";
var num2 = "8 (928) 749-45-01";
var num3 = "8 (978) 176-28-34";
function ChoseFunc(id) {
  $("#chosen_saloon").text(id.getElementsByTagName("span")[0].innerHTML);
  if (id.id == "saloon1") {
    $("#saloon_number").text(num1);
    $("#saloon1specialist1").removeClass("hidden");
    $("#saloon1specialist2").removeClass("hidden");
    $("#saloon2specialist1").removeClass("hidden");
    $("#saloon2specialist2").removeClass("hidden");
    $("#saloon3specialist1").removeClass("hidden");
    $("#saloon3specialist2").removeClass("hidden");
    $("#saloon2specialist1").toggleClass("hidden");
    $("#saloon2specialist2").toggleClass("hidden");
    $("#saloon3specialist1").toggleClass("hidden");
    $("#saloon3specialist2").toggleClass("hidden");
  }
  if (id.id == "saloon2") {
    $("#saloon_number").text(num2);
    $("#saloon1specialist1").removeClass("hidden");
    $("#saloon1specialist2").removeClass("hidden");
    $("#saloon2specialist1").removeClass("hidden");
    $("#saloon2specialist2").removeClass("hidden");
    $("#saloon3specialist1").removeClass("hidden");
    $("#saloon3specialist2").removeClass("hidden");
    $("#saloon1specialist1").toggleClass("hidden");
    $("#saloon1specialist2").toggleClass("hidden");
    $("#saloon3specialist1").toggleClass("hidden");
    $("#saloon3specialist2").toggleClass("hidden");
  }
  if (id.id == "saloon3") {
    $("#saloon_number").text(num3);
    $("#saloon1specialist1").removeClass("hidden");
    $("#saloon1specialist2").removeClass("hidden");
    $("#saloon2specialist1").removeClass("hidden");
    $("#saloon2specialist2").removeClass("hidden");
    $("#saloon3specialist1").removeClass("hidden");
    $("#saloon3specialist2").removeClass("hidden");
    $("#saloon1specialist1").toggleClass("hidden");
    $("#saloon1specialist2").toggleClass("hidden");
    $("#saloon2specialist1").toggleClass("hidden");
    $("#saloon2specialist2").toggleClass("hidden");
  }
}
