// Function render
// Tham so dau vao Row - so hang
// Tham so dau vao Column - so cot
const matrixButton = [];
function render(row, column) {
  var resume = "<table cellpadding='0' cellspacing='0'>";
  for (var i = 0; i < row; i++) {
    resume += "<tr>"; // thêm một hàng
    for (var j = 0; j < column; j++) {
      resume += "<td>";
      resume += "<button id='but" + i + "_" + j + "'></button>";
      resume += "</td>";
    }
    resume += "</tr>";
  }
  resume += "</table>";
  return resume;
}
// Function palygame
// get value input[type=text id=row] and get value input[type=text id=column]
function playgame() {
  var rows = document.getElementById("row").value;
  var columns = document.getElementById("column").value;
  // gán kết quả trả về của hàm render cho thuộc tính innerHTML của div id=main
  document.getElementById("main").innerHTML = render(rows, columns);
}

// should update function name
function addLogic() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const button = matrixButton[i][j];
      console.log(button);
      button.addEventListener("click", () => {
        if (button.textContent === "") {
          button.textContent = isX ? "X" : "O";
          isX = !isX;
          console.log(this.button);
        } else return;
      });
    }
  }
}
