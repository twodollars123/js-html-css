





const images = document.querySelectorAll(".item .imgitem");
images.forEach(item => item.addEventListener("click", handleZoomImage));

function handleZoomImage(event){
    const image= event.target.getAttribute("src");

    const template = `<div class="lightbox">
        <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-prev"></i>
        <img src="${image}" alt="" class="img">
        <i class="fa fa-angle-right lightbox-next"></i>
        </div>  
    </div>`

    document.body.insertAdjacentHTML("beforeend", template); 
}

let index = 0;

document.body.addEventListener("click", function(e){
    const lightImage = document.querySelector(".lightbox-content .img");
    let lightSrc = "";

    if(e.target.matches(".lightbox")){
        e.target.parentNode.removeChild(e.target);
    }
    else if(e.target.matches(".lightbox-prev")){
        lightSrc = lightImage.getAttribute("src");
        index = [...images].findIndex(item => item.getAttribute("src") === lightSrc);
        index = index - 1;
        if(index == -1){
            index = images.length - 1;
        }
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);
    }
    else if(e.target.matches(".lightbox-next")){
        lightSrc = lightImage.getAttribute("src");
        index = [...images].findIndex(item => item.getAttribute("src") === lightSrc);
        index = index + 1;
        if(index > images.length - 1){
            index = 0;
        }
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);
    }
})
