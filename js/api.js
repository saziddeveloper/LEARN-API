//----------------- Comments-Container -----------------
function loadComments(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => displayComments(data));
}

function displayComments(inputDatas){
    const commentsContainer = document.getElementById("comments-container");
    for (inputData of inputDatas){

    }
}

loadComments();