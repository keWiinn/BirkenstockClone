const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Arizona",
        price: 4990.00,
        colors: [
            {
                code: "black",
                img: "./img/Arizona-removebg-preview (1).png",
            },
            {
                code: "#6e3e28",
                img: "./img/arizona2-removebg-preview.png",
            },
        ],
    },
    {
        id: 2,
        title: "Boston",
        price: 12990.00,
        colors: [
            {
                code: "#72645b",
                img: "./img/Boston-removebg-preview.png",
            },
            {
                code: "black",
                img: "./img/boston2-removebg-preview.png",
            },
        ],
    },
    {
        id: 3,
        title: "Ramses",
        price: 6990.00,
        colors: [
            {
                code: "black",
                img: "./img/Ramses-removebg-preview.png",
            },
            {
                code: "#433b38",
                img: "./img/ramses2-removebg-preview.png",
            },
        ],
    },
    {
        id: 4,
        title: "Gizeh",
        price: 7490.00,
        colors: [
            {
                code: "black",
                img: "./img/Gizeh-removebg-preview.png",
            },
            {
                code: "#422d28",
                img: "./img/gizeh2-removebg-preview.png",
            },
        ],
    },
    {
        id: 5,
        title: "Milano",
        price: 13990.00,
        colors: [
            {
                code: "black",
                img: "./img/Milano-removebg-preview (1).png",
            },
            {
                code: "#39312e",
                img: "./img/milano2-removebg-preview.png",
            },
        ],
    },
    {
        id: 6,
        title: "Mayari",
        price: 6990.00,
        colors: [
            {
                code: "black",
                img: "./img/Mayari-removebg-preview.png",
            },
            {
                code: "#494037",
                img: "./img/mayari2-removebg-preview.png",
            },
        ],
    },
    {
        id: 7,
        title: "Bend",
        price: 14490.00,
        colors: [
            {
                code: "black",
                img: "./img/Bend-removebg-preview.png",
            },
            {
                code: "#98613a",
                img: "./img/bend2-removebg-preview.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex";
});

close.addEventListener("click",()=>{
    payment.style.display = "none";
});


