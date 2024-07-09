document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("shopping-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const itemList = document.getElementById("list");
        const clearListBtn = document.getElementById("clear-list");
        const shoppingList = []; // Array to store shopping list items
        const items = document.getElementById("item").value;

        // Add item to shopping list array
        shoppingList.push(items);

        // Create new list item
        const newItem = document.createElement("li");
        newItem.textContent = items;
        itemList.appendChild(newItem);

        // Reset form input
        e.target.reset();

        // Create edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit_btn");
        newItem.appendChild(editButton);

        // Create mark as done button
        const markButton = document.createElement("button");
        markButton.textContent = "Mark as Done";
        markButton.classList.add("mark_btn");
        newItem.appendChild(markButton);

        // Add event listener for edit button
        editButton.addEventListener("click", function() {
            const editText = prompt("Edit item:", newItem.textContent);
            if (editText !== null) {
                newItem.textContent = editText;
                // Update item in shopping list array
                const index = shoppingList.indexOf(items);
                if (index !== -1) {
                    shoppingList[index] = editText;
                }
                newItem.textContent = editText;
                newItem.appendChild(editButton);
                newItem.appendChild(markButton)
            }
        });

        // Add event listener for mark as done button
        markButton.addEventListener("click", function() {
            newItem.classList.toggle("strike");
        });

        // Add event listener for clear list button
        clearListBtn.addEventListener("click", function() {
        itemList.innerHTML = ""; // Clear the list in the DOM
        shoppingList.length = 0; // Clear the shopping list array
    });
    });
});
