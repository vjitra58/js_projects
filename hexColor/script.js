function changeColor() {
  var hexCode = document.getElementById("hex-code");
  let body = document.body;
  let hex_numbers = "0123456789ABCDEF";
  let hex_code = "";

  for (let i = 0; i < 6; i++) {
    hex_code += hex_numbers[Math.floor(Math.random() * 16)];
  }
  console.log(hex_code);
  hexCode.innerHTML = hex_code;
  body.style.backgroundColor = "#" + hex_code;
}
