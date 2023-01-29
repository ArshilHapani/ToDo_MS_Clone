export const handleRightClick = (e, index) => {
  e.preventDefault(); // prevent the default behavior when right clicked
  let contextMenu = document.getElementById("context-menu");
  contextMenu.classList.add("active");
  contextMenu.style.top = `calc(${e.clientY}px - 110px)`;
  contextMenu.style.left = `calc(${e.clientX}px - 330px)`;
  for (let i = 1; i <= index; i++) {
    document.getElementById(`Arshil_${index}`).style.zIndex = -1 + i;
    i++;
  }
  contextMenu.style.zIndex = "10";
  window.addEventListener("click", () => {
    document.getElementById("context-menu").classList.remove("active");
    document.getElementById(`Arshil_${index}`).style.zIndex = 3;
  });
  setTimeout(() => {
    document.getElementById("context-menu").classList.remove("active");
  }, 20000);
};
