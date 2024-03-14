function myPlanLook() {
    window.location.href = "make-plan.html";
}
function myCurrentPlan() {
    window.location.href = "plan.html";
}
function createInput() {
    var formBox = document.createElement("div");
    formBox.classList.add("form-box", "login");

    var inputBox1 = document.createElement("div");
    inputBox1.classList.add("input-box", "animation");
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("required", "");
    var label1 = document.createElement("label");
    label1.textContent = "Username";
    var icon1 = document.createElement("i");
    icon1.classList.add("bx", "bxs-user");
    inputBox1.appendChild(input1);
    inputBox1.appendChild(label1);
    inputBox1.appendChild(icon1);

    formBox.appendChild(inputBox1);

    var inputBox2 = document.createElement("div");
    inputBox2.classList.add("input-box", "animation");
    var input2 = document.createElement("input");
    input2.setAttribute("type", "password");
    input2.setAttribute("required", "");
    var label2 = document.createElement("label");
    label2.textContent = "Password";
    var icon2 = document.createElement("i");
    icon2.classList.add("bx", "bxs-lock-alt");
    inputBox2.appendChild(input2);
    inputBox2.appendChild(label2);
    inputBox2.appendChild(icon2);

    formBox.appendChild(inputBox2);

    return formBox;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            //document.getElementById("my-content").innerHtml = "";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            //console.log("ovde");
            //document.getElementById("my-content").appendChild(createInput());
        }
    });
}
