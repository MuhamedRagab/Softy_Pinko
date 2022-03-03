const nav = document.querySelector("header nav");
const menu = document.getElementById("menu");
const x = document.querySelector("header nav div strong");
const bar = document.querySelector("header nav div i");

const home = document.getElementById("home");
const About = document.getElementById("About");
const work = document.getElementById("work");
const test = document.getElementById("test");
const price = document.getElementById("price");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");

function showMenu(e) {
  menu.style.display = "block";
  nav.style.top = "40%";
  bar.style.display = "none";
  x.style.display = "block";
}

function hideMenu() {
  menu.style.display = "none";
  nav.style.top = "15%";
  bar.style.display = "block";
  x.style.display = "none";
}

function goal(e) {
  if (e === home) {
    home.classList.add("goal");
    About.classList.remove("goal");
    work.classList.remove("goal");
    test.classList.remove("goal");
    price.classList.remove("goal");
    blog.classList.remove("goal");
    contact.classList.remove("goal");
  } else if (e === About) {
    home.classList.remove("goal");
    About.classList.add("goal");
    work.classList.remove("goal");
    test.classList.remove("goal");
    price.classList.remove("goal");
    blog.classList.remove("goal");
    contact.classList.remove("goal");
  } else if (e === work) {
    home.classList.remove("goal");
    About.classList.remove("goal");
    work.classList.add("goal");
    test.classList.remove("goal");
    price.classList.remove("goal");
    blog.classList.remove("goal");
    contact.classList.remove("goal");
  } else if (e === test) {
    home.classList.remove("goal");
    About.classList.remove("goal");
    work.classList.remove("goal");
    test.classList.add("goal");
    price.classList.remove("goal");
    blog.classList.remove("goal");
    contact.classList.remove("goal");
  } else if (e === price) {
    home.classList.remove("goal");
    About.classList.remove("goal");
    work.classList.remove("goal");
    test.classList.remove("goal");
    price.classList.add("goal");
    blog.classList.remove("goal");
    contact.classList.remove("goal");
  } else if (e === blog) {
    home.classList.remove("goal");
    About.classList.remove("goal");
    work.classList.remove("goal");
    test.classList.remove("goal");
    price.classList.remove("goal");
    blog.classList.add("goal");
    contact.classList.remove("goal");
  } else {
    home.classList.remove("goal");
    About.classList.remove("goal");
    work.classList.remove("goal");
    test.classList.remove("goal");
    price.classList.remove("goal");
    blog.classList.remove("goal");
    contact.classList.add("goal");
  }
}
