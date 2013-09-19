var select = document.getElementById("dropdown");
var input = document.getElementById("txtbox");
select.onchange = function() {
  input.value = select.value;
}

