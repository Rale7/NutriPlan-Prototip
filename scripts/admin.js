function generateTable() {
    var table = document.createElement("table");
    table.className = "table table-striped table-sm";

    var thead = document.createElement("thead");
    var headRow = document.createElement("tr");
    var headers = ["#", "Header", "Header", "Header", "Header"];

    headers.forEach(function (headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    data = ["1", "Lorem", "ipsum", "dolor", "sit"];

    var tbody = document.createElement("tbody");

    for (let i = 0; i < 20; i++) {
        var row = document.createElement("tr");
        data.forEach(function (cellData) {
            var cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    }

    table.appendChild(tbody);

    const outerDiv = document.getElementById("my-table");
    outerDiv.innerHTML = "";
    outerDiv.appendChild(table);
}

var fatSlider = document.getElementById("fat-range");
var fatOutput = document.getElementById("fat-value");
fatOutput.innerHTML = fatSlider.value;

fatSlider.oninput = function () {
    fatOutput.innerHTML = this.value;
};

var carbsSlider = document.getElementById("carbs-range");
var carbsOutput = document.getElementById("carbs-value");
carbsOutput.innerHTML = carbsSlider.value;

carbsSlider.oninput = function () {
    carbsOutput.innerHTML = this.value;
};

var proteinSlider = document.getElementById("protein-range");
var proteinOutput = document.getElementById("protein-value");
proteinOutput.innerHTML = proteinSlider.value;
proteinSlider.oninput = function () {
    proteinOutput.innerHTML = this.value;
};

document.getElementById("sql-button").addEventListener("click", generateTable());
