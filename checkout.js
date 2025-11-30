const shopli = document.querySelector(".nav2 .shop")
const shopScroll = document.querySelector(".shopscroll")
const CollectionHover = document.querySelector("#Cllhover")
var collections = document.querySelector("#collections")
var PagesHover = document.querySelector("#Pghover")
var Pages = document.getElementById("Pages")

//Shop Navbar...................................................................// 
shopli.addEventListener("mouseenter", ()=>{
    shopScroll.style.display = "block";
})

shopli.addEventListener("mouseleave", () =>{
    setTimeout(() =>{
        if(!shopScroll.matches(":hover")){
            shopScroll.style.display = "none"
        }
    }, 200);
});

shopScroll.addEventListener("mouseleave", ()=>{
    shopScroll.style.display = "none";
});

//COllection Navbar.................................................................//

CollectionHover.addEventListener("mouseenter", () =>{
    collections.style.display = "flex"
});

CollectionHover.addEventListener("mouseleave", () =>{
    setTimeout(() =>{
        if(!collections.matches(":hover")){
            collections.style.display = "none"
        }
    }, 200);
});

collections.addEventListener("mouseleave", ()=>{
    collections.style.display = "none"
})

//Pages Navbar....................................................................//

PagesHover.addEventListener("mouseenter", () =>{
    Pages.style.display = "block"
});

PagesHover.addEventListener("mouseleave", () =>{
    setTimeout(() =>{
        if(!Pages.matches(":hover")){
            Pages.style.display = "none"
        }
    }, 200);
});

Pages.addEventListener("mouseleave", () =>{
    Pages.style.display = "none"
})

//collections//


var data = [
    {
        img : "collection6.jpg",
        des : "Winter Jackets"
    },
    {
        img : "collection5.jpg",
        des: "Sunglasses"
    },
    {
        img : "collection4.jpg",
        des: "Sports Yoga Bra"
    },
    {
        img : "collection3.jpg",
        des: "Classic dresses"
    },
    {
        img : "collection2.jpg",
        des: "Man Blazer"
    },
    {
        img : "collection1.jpg",
        des: "Pilates top"
    },
]

data.map((values) =>{
    collections.innerHTML += `<div>
                                <img src=${values.img} alt="" height="150px">
                                <a href="#">${values.des}</a>
                            </div>`
})