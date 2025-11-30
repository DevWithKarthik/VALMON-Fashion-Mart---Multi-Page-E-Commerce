const shopli = document.querySelector(".nav2 .shop")
const shopScroll = document.querySelector(".shopscroll")
const CollectionHover = document.querySelector("#Cllhover")
var collections = document.querySelector("#collections")
var PagesHover = document.querySelector("#Pghover")
var Pages = document.getElementById("Pages")
const serchResult10 = document.querySelector("#serch_result")

//Shop Navbar...................................................................// 
shopli.addEventListener("mouseenter", () => {
    shopScroll.style.display = "block";
})

shopli.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!shopScroll.matches(":hover")) {
            shopScroll.style.display = "none"
        }
    }, 200);
});

shopScroll.addEventListener("mouseleave", () => {
    shopScroll.style.display = "none";
});

//COllection Navbar.................................................................//

CollectionHover.addEventListener("mouseenter", () => {
    collections.style.display = "flex"
});

CollectionHover.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!collections.matches(":hover")) {
            collections.style.display = "none"
        }
    }, 200);
});

collections.addEventListener("mouseleave", () => {
    collections.style.display = "none"
})

//Pages Navbar....................................................................//

PagesHover.addEventListener("mouseenter", () => {
    Pages.style.display = "block"
});

PagesHover.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!Pages.matches(":hover")) {
            Pages.style.display = "none"
        }
    }, 200);
});

Pages.addEventListener("mouseleave", () => {
    Pages.style.display = "none"
})

//collections//


var data = [
    {
        img: "collection6.jpg",
        des: "Winter Jackets"
    },
    {
        img: "collection5.jpg",
        des: "Sunglasses"
    },
    {
        img: "collection4.jpg",
        des: "Sports Yoga Bra"
    },
    {
        img: "collection3.jpg",
        des: "Classic dresses"
    },
    {
        img: "collection2.jpg",
        des: "Man Blazer"
    },
    {
        img: "collection1.jpg",
        des: "Pilates top"
    },
]

data.map((values) => {
    collections.innerHTML += `<div>
                                <img src=${values.img} alt="" height="150px">
                                <a href="#">${values.des}</a>
                            </div>`
})

//...............................COllections..................................

var result12 = document.getElementById("result12");

const data1 = [
  { img: "Product-01.jpg", p1: "Deconstructed shirt", p2: "$320", cart: "ADD TO CART", p3: "Casual shirt", color: "white", size: ["l", "xl", "xxl"] },
  { img: "Product-02.jpg", p1: "Linen silk blend jumper", p2: "$149", cart: "ADD TO CART", p3: "T-shirt Tshirt", color: "black", size: ["l", "xl", "xxl"] },
  { img: "Product-03.jpg", p1: "Rouleau vest", p2: "$399", cart: "ADD TO CART", p3: "Vest sleeveless Swimmers", color: "grey", size: ["s", "l"] },
  { img: "Product-04.jpg", p1: "Vertical textured polo", p2: "$399", cart: "ADD TO CART", p3: "T-shirt Tshirt polo", color: "green", size: ["xl", "xxl"] },
  { img: "Product-05.jpg", p1: "Cotton crochet tank", p2: "$199", cart: "ADD TO CART", p3: "Winter Jacket", color: "maroon", size: ["xxl", "xl", "l"] },
  { img: "Product-06.jpg", p1: "Basic slim fit t-shirt", p2: "$199", cart: "ADD TO CART", p3: "T-shirt Tshirt", color: "white", size: ["l", "xl", "xxl"] },
  { img: "Product-07.jpg", p1: "Cotton slim scoop tank", p2: "$149", cart: "ADD TO CART", p3: "Formal shirt cotton", color: "blue", size: ["l", "xl", "xxl"] },
  { img: "Product-13.jpg", p1: "Draped cowl top", p2: "$399", cart: "ADD TO CART", p3: "Winter T-shirt Tshirt Sweatshirt top", color: "white", size: ["l", "s"] },
  { img: "Product-09.jpg", p1: "Viscose shell top", p2: "$289", cart: "ADD TO CART", p3: "Black Top T-shirt Tshirt Sleeveless top", color: "black", size: ["s", "l"] },
  { img: "Product-10.jpg", p1: "Wool blend sweater", p2: "$209", cart: "ADD TO CART", p3: "Winter T-shirt Tshirt sweater", color: "white", size: ["xl", "l"] },
  { img: "Product-11.jpg", p1: "Slim Fit Polo t-shirt", p2: "$189", cart: "ADD TO CART", p3: "T-shirt Formal Collar Tshirt Polo", color: "blue", size: ["l", "xl", "xxl"] },
  { img: "Product-12.jpg", p1: "Cotton Crochet Tank", p2: "$489", cart: "ADD TO CART", p3: "Top Sleeveless Cotton Swimmers", color: "white", size: ["s","l","m"] }
];

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

function displayProducts(products) {
    result12.innerHTML = "";

    if (products.length === 0) {
        result12.innerHTML = "<p style='padding:20px; font-weight:600;'>No products found!</p>";
        return;
    }

    products.forEach(value => {
        result12.innerHTML += `
            <div class="sp1" style="background-image:url(${value.img});
                                    background-position: top;
                                    background-size: cover;
                                    background-repeat: no-repeat;">
                <p class="p2">${value.p2}</p>
                <p class="p1">${value.p1}</p>
                <i class="fa-regular fa-heart heart"></i>
                <i class="fa-solid fa-eye eyes"></i>
                <button onclick='add("${value.img}", "${value.p1}", "${value.p2}")'>
                    <i class="fa-solid fa-suitcase-rolling"></i> ${value.cart}
                </button>

            </div>
        `;
    });

    // 🔥 Re-trigger animation for NEW elements
    const items = document.querySelectorAll(".subcontent .sp1");

    items.forEach(el => {
        el.classList.remove("show");      // reset style
        setTimeout(() => observer.observe(el), 10); // re-observe for smooth animation
    });
}

let currentFilters = { categories: [], colors: [], sizes: [] };

displayProducts(data1);

function filterProducts() {
  const filtered = data1.filter(item => {
    const matchCategory = currentFilters.categories.length === 0 ||
        currentFilters.categories.some(cat => item.p3.toLowerCase().includes(cat));

    const matchColor = currentFilters.colors.length === 0 ||
        currentFilters.colors.includes(item.color.toLowerCase());

    const matchSize = currentFilters.sizes.length === 0 ||
        item.size.some(sz => currentFilters.sizes.includes(sz.toLowerCase()));

    return matchCategory && matchColor && matchSize;
  });

  displayProducts(filtered);
}

document.querySelector(".btn1").addEventListener("click", () => {
    currentFilters.categories =
        [...document.querySelectorAll(".u1 input[type='checkbox']:checked")]
        .map(chk => chk.value.toLowerCase());
    filterProducts();
});

document.querySelector(".btn2").addEventListener("click", () => {
    currentFilters.colors =
        [...document.querySelectorAll(".u2 input[type='checkbox']:checked")]
        .map(chk => chk.value.toLowerCase());
    filterProducts();
});

document.querySelector(".btn3").addEventListener("click", () => {
    currentFilters.sizes =
        [...document.querySelectorAll(".u3 input[type='checkbox']:checked")]
        .map(chk => chk.value.toLowerCase());
    filterProducts();
});

//End - Funtion on Main Filters - Apply - Category, Color, Size

//FUnction to Search Bar


function searching(event) {
    if (event) event.preventDefault(); // stop form refresh

    searchresult.classList.add("srch");

    var searchitem = document.getElementById("searchitem").value.trim();
    var searchmenu = document.getElementById("searchmenu");

    searchmenu.innerHTML = ""; // clear previous results

    if (searchitem === "") {
        searchmenu.innerHTML = "<p>Please enter something to search</p>";
        return;
    }

    // Filter products across p1, p2, and p3
    var data2 = data1.filter(values =>
        values.p1.toLowerCase().includes(searchitem.toLowerCase()) ||
        values.p2.toLowerCase().includes(searchitem.toLowerCase()) ||
        values.p3.toLowerCase().includes(searchitem.toLowerCase())
    );

    if (data2.length === 0) {
        searchmenu.innerHTML = "<p>No products found...</p>";
        return;
    }

    // Display results
    data2.forEach(value => {
        searchmenu.innerHTML += `
            <div class="content1" style="background-image:url(${value.img});
                background-position: top;
                background-size: cover;
                background-repeat: no-repeat;">
                <p class="p2">${value.p2}</p>
                <p class="p1">${value.p1}</p>
                <i class="fa-regular fa-heart heart"></i>
                <i class="fa-solid fa-eye eyes"></i>
                <button onclick='add("${value.img}", "${value.p1}", "${value.p2}")'>
                    <i class="fa-solid fa-suitcase-rolling"></i> ${value.cart}
                </button>

            </div>`;
    });
}

//End of Function to search bar


//Function to add cart

var cartResult = document.getElementById("cart_result");

function add(a, b, c) {
    cartResult.innerHTML += `
        <div class="cart-items">
            <img src="${a}" alt="" height="150px">
            <p class="p1">${b}</p>
            <p class="p2">${c}</p>
            <i class="fa-solid fa-x" onclick="removeItem(this)" style="cursor: pointer;"></i>
        </div>`;
}

// open functions
function open1() {
    cartResult.classList.add("open");  // slide in
}

function open4() {
    serchResult10.classList.add("open")
}

//close functions
function close1() {
    cartResult.classList.remove("open");  // slide in
}

function close2() {
    searchresult.classList.remove("srch");
}

function close4() {
    serchResult10.classList.remove("open")
}

// remove the clicked cart block

function removeItem(el) {

    let itemDiv = el.parentElement;   // get <div class="cart-items">
    cartResult.removeChild(itemDiv);
}

//End of Add TO cart

//Function on hamburger menu

function toggleMenu() {
    const menu = document.querySelector('.nav2');
    menu.classList.toggle('open');
}

// //Animation part

// const items = document.querySelectorAll(".subcontent .sp1");

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting){
//             entry.target.classList.add("show")
//         }
//     });
// }, {threshold: 0.2});

// items.forEach(el => observer.observe(el));