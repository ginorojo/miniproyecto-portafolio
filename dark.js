let darkButton = document.querySelector("#dark");
darkButton.addEventListener("click" , changeDarknes);

function changeDarknes(){
    document.documentElement.classList.toggle("dark")
}