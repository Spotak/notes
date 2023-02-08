let notes = document.querySelector("#notes");
let text = document.querySelector("#text");
let create = document.querySelector("#create");
let menu = document.querySelector("#menu");
console.log(create);
let texts = ["text1", "text2", "text3"];
button.addEventListener("click", function () {
  let mode = this.dataset.mode;
  if (mode == "create") {
    let li = document.querySelector("li");
    createNote(li, text.value);
    notes.appendChild(li);
  }
  if (mode == "update") {
    let key = this.dataset.key;
    let li = document.createElement("li");
    li.textContent = value;
    notes.appendChild(li);
    return li;
  }
});
