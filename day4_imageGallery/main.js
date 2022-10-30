



const images = document.querySelectorAll(".wrapper .image img");

images.forEach(item => item.addEventListener("click", handleRoomImage));

function handleRoomImage(e){
    const image = e.target.getAttribute("src");
    const imgshow = document.querySelector(".imgshow img");
    let imgshowSrc = imgshow.getAttribute("src");
    imgshow.setAttribute("src", image);
}

let index = 0;
document.body.addEventListener("click", function(e){
    const img = document.querySelector(".imgshow img");
    const imgSrc = img.getAttribute("src");
    if(e.target.matches(".lightbox-prev")){
        index = [...images].findIndex(item => item.getAttribute("src") === imgSrc);
        index = index - 1;
        if(index == -1){
            index = images.length - 1;
        }
        const newSrc = [...images][index].getAttribute("src");
        img.setAttribute("src", newSrc);
    }
    else if(e.target.matches(".lightbox-next")){
        index = [...images].findIndex(item => item.getAttribute("src") === imgSrc);
        index = index + 1;
        if(index == images.length){
            index = 0;
        }
        const newSrc = [...images][index].getAttribute("src");
        img.setAttribute("src", newSrc);
    }
})






