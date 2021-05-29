var studentRecord = null;

function onSubmit() {
  var Form = readForm();
  if (studentRecord == null) {
    insertDetails(Form);
  } else {
    updateDetails(Form);
  }
  resetRecord();
}

function searchForm(data) {
  var found = false;
  var count = 0;
  var searchstring = document.getElementById("search").value;
  table = document.getElementById("StudentList");
  rowcount = table.rows.length;
  rowcount -= 1;
  if (rowcount == 0) {
    alert("Sorry! No records are available for search operation");
  } else {
    for (var i = 1; i < rowcount + 1; i++) {
      studentRecord = table.rows[i];
      var username = studentRecord.cells[0].innerHTML;
      if (username == searchstring) {
        found = true;
        count = count + 1;
      }
    }
    if (found && count > 1) {
      alert("There are multiple users with that name in the records.");
    } else if (found == true && count == 1) {
      alert("The user is present in the records");
    } else {
      alert("Sorry! The user is not present in the available records.");
    }
  }
}
function readForm() {
  var Form = {};
  Form["Name"] = document.getElementById("Name").value;
  Form["RollNo"] = document.getElementById("rollNo").value;
  Form["Age"] = document.getElementById("Age").value;
  Form["Gender"] = document.getElementById("Gender").value;
  return Form;
}

function insertDetails(data) {
  var table = document
    .getElementById("StudentList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.Name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.RollNo;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Age;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Gender;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button class="btn btn-success btn-sm" onClick="onEdit(this)">Update</button>
                       <button class="btn  btn-success btn-sm" onClick="onDelete(this)">Delete</button>`;
}

function resetRecord() {
  document.getElementById("Name").value = "";
  document.getElementById("rollNo").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("Gender").value = "";
  studentRecord = null;
}

function onEdit(td) {
  studentRecord = td.parentElement.parentElement;
  document.getElementById("Name").value = studentRecord.cells[0].innerHTML;
  document.getElementById("rollNo").value = studentRecord.cells[1].innerHTML;
  document.getElementById("Age").value = studentRecord.cells[2].innerHTML;
  document.getElementById("Gender").value = studentRecord.cells[3].innerHTML;
}
function updateDetails(Form) {
  studentRecord.cells[0].innerHTML = Form.Name;
  studentRecord.cells[1].innerHTML = Form.RollNo;
  studentRecord.cells[2].innerHTML = Form.Age;
  studentRecord.cells[3].innerHTML = Form.Gender;
}

function onDelete(td) {
  if (confirm("Confirm if you really want to delete ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("StudentList").deleteRow(row.rowIndex);
    resetRecord();
  }
}
