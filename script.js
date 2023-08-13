const button = document.querySelector("#btn1");
const img = document.querySelector("#meme-img");
const titled = document.querySelector("#h1");
const update = (url, title, author) => {
    img.setAttribute("src", url)
    titled.innerHTML = title;

}
const run = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            update(data.url , data.title , data.author);
        });
      
}

button.addEventListener("click", run);
