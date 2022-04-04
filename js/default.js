const items = document.querySelectorAll("section");
const aside = document.querySelector("aside");
const close = aside.querySelector(".btn_close");

for (let el of items) {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let desc = e.currentTarget.querySelector("p.desc").innerText;
        let imgSrc = e.currentTarget.querySelector("img").getAttribute("src");

        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("p.desc").innerText = desc;
        aside.querySelector("img").setAttribute("src", imgSrc);

        aside.classList.add("on");
    });

    close.addEventListener("click", () => {
        aside.classList.remove("on");
    });
}