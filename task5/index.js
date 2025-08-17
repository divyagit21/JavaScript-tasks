const contents = [
  "content1",
  "content2",
  "content3",
  "content4",
  "content5",
  "content6",
];

const container = document.querySelector(".container");

contents.forEach((content) => {
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `<div class='content'>${content}</div>`;
  item.setAttribute("draggable", "true");
  container.appendChild(item);

  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", content);
    e.target.classList.add("dragging");
  });

  item.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
});

container.addEventListener("dragover", (e) => {
  e.preventDefault();
});

container.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggedContent = e.dataTransfer.getData("text/plain");
  const targetItem = e.target.closest(".item");

  if (targetItem) {
    const draggedItem = Array.from(container.children).find(
      (child) =>
        child.classList.contains("item") &&
        child.innerText.trim() === draggedContent
    );

    if (draggedItem && draggedItem !== targetItem) {
      const temp = draggedItem.innerHTML;
      draggedItem.innerHTML = targetItem.innerHTML;
      targetItem.innerHTML = temp;
    }
  }
});
