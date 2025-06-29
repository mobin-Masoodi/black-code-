///dark moode////
const sun1 = document.querySelector(".dark-mode-switcher1");
const sun2 = document.querySelector(".dark-mode-switcher2");
const website = document.querySelector("html");

let colorMode = localStorage.getItem("color");

if (colorMode == "dark") {
    sun1.classList.replace("fa-sun", "fa-moon");
    website.classList.remove("light");
    website.classList.add("dark");
} else {
    sun1.classList.replace("fa-moon", "fa-sun");
    website.classList.remove("dark");
    website.classList.add("light");
}

sun1.addEventListener("click", function () {
    if (sun1.classList.contains("fa-sun")) {
        sun1.classList.replace("fa-sun", "fa-moon");
        website.classList.replace("dark", "light");
        localStorage.setItem("color", "light");
    } else {
        sun1.classList.replace("fa-moon", "fa-sun");
        website.classList.replace("light", "dark");
        localStorage.setItem("color", "dark");
    }
});

if (colorMode == "dark") {
    sun2.classList.replace("fa-sun", "fa-moon");
    website.classList.remove("light");
    website.classList.add("dark");
} else {
    sun2.classList.replace("fa-moon", "fa-sun");
    website.classList.remove("dark");
    website.classList.add("light");
}

sun2.addEventListener("click", function () {
    if (sun2.classList.contains("fa-sun")) {
        sun2.classList.replace("fa-sun", "fa-moon");
        website.classList.replace("dark", "light");
        localStorage.setItem("color", "light");
    } else {
        sun2.classList.replace("fa-moon", "fa-sun");
        website.classList.replace("light", "dark");
        localStorage.setItem("color", "dark");
    }
});
//////modal/////
const supportBtn = document.getElementById("support");
const supportModalBlur = document.getElementById("blur");
const supportModal = document.getElementById("modal");
const supporclose = document.getElementById("close");

supportBtn.addEventListener("click", function () {
    supportModalBlur.classList.remove("hidden");
    supportModal.classList.remove("hidden");
});
supportModalBlur.addEventListener("click", function () {
    supportModalBlur.classList.add("hidden");
    supportModal.classList.add("hidden");
});
supporclose.addEventListener("click", function () {
    supportModalBlur.classList.add("hidden");
    supportModal.classList.add("hidden");
});

const key = document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !supportBtn.classList.add("hidden")) {
        supportModalBlur.classList.add("hidden");
        supportModal.classList.add("hidden");
    }
});

const serch = document.getElementById("serch-box");
const dark = document.getElementById("dark");
const box = document.getElementById("box");

serch.addEventListener("click", function () {
    box.classList.remove("hidden");
    dark.classList.remove("hidden");
});
dark.addEventListener("click", function () {
    box.classList.add("hidden");
    dark.classList.add("hidden");
});

const keyword = document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !serch.classList.add("hidden")) {
        dark.classList.add("hidden");
        box.classList.add("hidden");
    }
});

/////box1(start)//////
const text1 = document.getElementById("text1");
const shower1 = document.getElementById("show1");

text1.addEventListener("mouseenter", function () {
    shower1.classList.remove("hidden");
});

text1.addEventListener("click", function () {
    shower1.classList.add("hidden");
});

shower1.addEventListener("mouseenter", function () {
    shower1.classList.remove("hidden");
});

shower1.addEventListener("mouseleave", function () {
    shower1.classList.add("hidden");
});

document.addEventListener("mouseenter", function () {
    shower1.classList.add("hidden");
});

/////box2(start)//////
const text2 = document.getElementById("text2");
const shower2 = document.getElementById("show2");

text2.addEventListener("mouseenter", function () {
    shower2.classList.remove("hidden");
});

text2.addEventListener("click", function () {
    shower2.classList.add("hidden");
});

shower2.addEventListener("mouseenter", function () {
    shower2.classList.remove("hidden");
});

shower2.addEventListener("mouseleave", function () {
    shower2.classList.add("hidden");
});

document.addEventListener("mouseenter", function () {
    shower2.classList.add("hidden");
});
/////box2(end)//////
//////
text1.addEventListener("mouseenter", function () {
    shower2.classList.add("hidden");
});
text2.addEventListener("mouseenter", function () {
    shower1.classList.add("hidden");
});

///////

////sider/////

const lines = document.getElementById("men");
const side = document.getElementById("side");

lines.addEventListener("click", function () {
    side.classList.remove("hidden");
    dark.classList.remove("hidden");
});
dark.addEventListener("click", function () {
    side.classList.add("hidden");
    dark.classList.add("hidden");
});

const exit = document.getElementById("exit");

exit.addEventListener("click", function () {
    side.classList.add("hidden");
    dark.classList.add("hidden");
});
////////
