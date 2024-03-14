function comment() {
    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value.trim();

    if (commentText !== "") {
        var commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.classList.add("sb2");

        var usernameHeader = document.createElement("h6");
        var usernameBold = document.createElement("b");
        usernameBold.textContent = "User";
        usernameHeader.appendChild(usernameBold);
        var commentTextNode = document.createTextNode(commentText);

        commentElement.appendChild(usernameHeader);
        commentElement.appendChild(commentTextNode);

        document.getElementById("comment-section").appendChild(commentElement);

        commentInput.value = "";
    }
}
document.getElementById("post-button").addEventListener("click", comment);
