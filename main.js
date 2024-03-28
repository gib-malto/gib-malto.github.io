function toggleMenu(obj) {
  const ul = document.querySelector('ul');
  const body = document.querySelector('body');
  if (ul.style.left === "0px") {
    ul.style.left = "-800px";
    obj.classList.remove("fa-times");
    obj.classList.add("fa-bars");
    body.style.overflow = "auto";
   
  } else {
    ul.style.left = "0px";
    obj.classList.remove("fa-bars");
    obj.classList.add("fa-times");
    body.style.overflow = "hidden";
  }
}