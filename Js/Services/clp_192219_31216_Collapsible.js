
var Collapse = () => {
  var collapse = document.querySelectorAll('[data-toggle="collapse"]');
  collapse.forEach((e) => {
    var target = document.getElementById(
      e.getAttribute("data-target").replace(/(#|.)/, "")
    );
    e.addEventListener("click", function () {
      if (!target) {
        return;
      }
      //   target.classList.toggle("collapse");
      if (target && target.classList.contains("collapse.in")) {
        target.classList.add("collapse");
        target.classList.remove("collapse.in");
      } else {
        target.classList.add("collapse.in");
        target.classList.remove("collapse");
      }
    });
  });
};

