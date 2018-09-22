function onUpdateParagraph() {
  let borderRed = document.getElementById("redBorder").value;
  let borderGreen = document.getElementById("greenBorder").value;
  let borderBlue = document.getElementById("blueBorder").value;
  let borderWidth = document.getElementById("borderWidth").value;
  let bgRed = document.getElementById("redBG").value;
  let bgGreen = document.getElementById("greenBG").value;
  let bgBlue = document.getElementById("blueBG").value;

  document.getElementById('editParagraph').style.border = "solid 1px"
  document.getElementById('editParagraph').style.borderColor = "rgb(" + borderRed + "," + borderGreen + "," + borderBlue + ")"
  document.getElementById('editParagraph').style.borderWidth = borderWidth + "px"
  document.getElementById('editParagraph').style.backgroundColor = "rgb(" + bgRed + "," + bgGreen + "," + bgBlue + ")"
}
