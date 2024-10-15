document.getElementById("saveNoteBtn").addEventListener("click", function() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Please enter a note.");
        return;
    }

    const notesContainer = document.getElementById("notesContainer");
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerText = noteText;

    notesContainer.appendChild(noteDiv);
    noteInput.value = ""; // Clear the input after saving
});
