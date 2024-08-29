function loadComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(comments => {
        comments.forEach(comment => {
            displayComment(comment);
        });
    });
}
function displayComment(comment) {
    fetch(`https://jsonplaceholder.typicode.com/photos/${comment.id}`)
    .then(res => res.json())
    .then(photo => {
        const commentsContainer = document.getElementById("comments-container");
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th class="text-center">
                <label>${comment.id}</label>
            </th>
            <td>
                <div class="flex items-center gap-3">
                    <div class="avatar">
                        <div class="mask mask-squircle h-12 w-12">
                            <img src="${photo.thumbnailUrl}" alt="Comment image" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">${comment.name}</div>
                        <div class="text-sm opacity-50">${comment.email}</div>
                    </div>
                </div>
            </td>
            <td>${comment.body}</td>
        `;
        commentsContainer.appendChild(tr);
    });
}
loadComments();