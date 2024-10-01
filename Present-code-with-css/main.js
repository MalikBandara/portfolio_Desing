// Resize  navbar on scroll
var navbar = document.querySelector(".navbar");
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// project item filter
const  FilterContainer = document.querySelector(".project-filter"),
       filterBtns = FilterContainer.children;
        totalFilterBtn = filterBtns.length;
        protfoliItems = document.querySelectorAll(".project-item"),
            totalportfolioItems = protfoliItems.length;
            console.log(totalportfolioItems)
        for (let i= 0; i < totalFilterBtn; i++){
            filterBtns[i].addEventListener("click" , function ()
            {
                FilterContainer.querySelector(".active").classList.remove("active");
                this.classList.add("active");
                const filterValue = this.getAttribute("data-filter")
                for (let k = 0 ; k<totalportfolioItems; k++){
                        if (filterValue === protfoliItems[k].getAttribute("data-category"))
                        {
                            protfoliItems[k].classList.remove("hide");
                            protfoliItems[k].classList.add("show");
                        }else {
                            protfoliItems[k].classList.remove("show");
                            protfoliItems[k].classList.add("hide");
                        }
                        if (filterValue === "all"){
                            protfoliItems[k].classList.remove("hide");
                            protfoliItems[k].classList.add("show");
                        }
                }
            })
        }

        // lightbox

        const lightbox = document.querySelector(".lightbox"),
              lightboximg = lightbox.querySelector(".lightbox-img"),
              lightboxClose= lightbox.querySelector(".lightbox-close"),
              lightboxtext = lightbox.querySelector(".caption-text"),
              lightboxCounter = lightbox.querySelector(".caption-counter");
              let itemindex = 0 ;
              for (let i = 0; i<totalportfolioItems;i++){
                  protfoliItems[i].addEventListener("click" , function (){
                      itemindex = i ;
                      changeItem();
                      toggleLightbox();
                  })
              }
              function nextItem(){
                  if (itemindex == totalportfolioItems-1){
                      itemindex= 0;
                  }else {
                      itemindex++
                  }changeItem();
              }
              function prevItem(){
                 if (itemindex == 0){
                      itemindex= totalportfolioItems-1;
                 }else {
                     itemindex--
                  }changeItem();
              }
              function  toggleLightbox(){
                  lightbox.classList.toggle("open");
              }
              function changeItem(){
                  imgSrc = protfoliItems[itemindex].querySelector(".project-img img ").getAttribute("src");
                    lightboximg.src= imgSrc;
                    lightboxtext.innerHTML= protfoliItems[itemindex].querySelector("h4").innerHTML;
                    lightboxCounter.innerHTML=(itemindex+1) + " of " + totalportfolioItems;

              }
              // close lightbox
              lightbox.addEventListener("click",function (event){
                  if (event.target === lightboxClose || event.target === lightbox ){
                      toggleLightbox();
                  }
              })