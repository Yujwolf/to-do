const arr = [];
document.querySelector(".create").addEventListener("click", function (event) {
  if (document.querySelector(".input").value.length > 0) {
    arr.push(document.querySelector(".input").value);
    document.querySelector(".result").innerHTML = arr
      .map(function (a, i) {
        return ' <li data-index="' + i + '">' + a + "</li>";
      })
      .join("");
    document.querySelector(".input").value = "";
  }
});

document.querySelector(".result").addEventListener("click", function (event) {
  //code
  arr.splice(event.target.dataset.index);
  document.querySelector(".result").innerHTML = arr
    .map(function (a, i) {
      return " <li data-index =" + i + ">" + a + "</li>";
    })
    .join("");
});
