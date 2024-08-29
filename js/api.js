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
        
        // Add responsive classes for mobile
        tr.className = "block md:table-row mb-4 md:mb-0 w-full"; // DaisyUI and Tailwind classes for responsiveness

        tr.innerHTML = `
            <th class="block md:table-cell text-center md:text-left md:align-middle p-2">
                <label class="block md:inline-block text-sm md:text-base font-medium">${comment.id}</label>
            </th>
            <td class="block md:table-cell md:align-middle p-2">
                <div class="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <div class="avatar">
                        <div class="mask mask-squircle h-12 w-12">
                            <img src="${photo.thumbnailUrl}" alt="Comment image" />
                        </div>
                    </div>
                    <div class="mt-2 md:mt-0">
                        <div class="font-bold text-sm md:text-[15px]">${comment.name}</div>
                        <div class="text-sm md:text-md opacity-50">${comment.email}</div>
                    </div>
                </div>
            </td>
            <td class="block md:table-cell md:align-middle p-2 text-sm md:text-[14px]">
                ${comment.body}
            </td>
        `;
        
        commentsContainer.appendChild(tr);
    });
}

// Load and display comments when the page loads
loadComments();
