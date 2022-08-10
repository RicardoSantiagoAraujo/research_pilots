function viewSwitch() {
    // Get the checkbox
    var checkBox = document.getElementById("view_switch");
    // Get the output text
    var text = document.getElementById("view_mode");
    // Get content blocks
    var preview = document.getElementById("preview"); // preview block
    var table = document.getElementById("table"); // Table block
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.innerHTML = "Table";
      preview.style.display = "none";
      table.style.display = "block";
    } else {
      text.innerHTML = "Preview";
      preview.style.display = "block";
      table.style.display = "none";
    }
  }
