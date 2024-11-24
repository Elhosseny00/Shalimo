let nav = document.querySelector("nav");
let links = [
  {
    linkName: "Home",
    href: "home",
  },
  {
    linkName: "Menu",
    href: "menu",
  },
  {
    linkName: "About",
    href: "about",
  },
  {
    linkName: "Contact",
    href: "contact",
  },
];
let unOrderList = document.createElement("ul");
links.forEach((link, index) => {
  let li = document.createElement("li");
  let myLink = document.createElement("a");
  myLink.innerHTML = link.linkName;
  myLink.href = link.href;
  li.appendChild(myLink);
  if (index === 0) myLink.classList.add("active");
  myLink.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll("nav a")
      .forEach((a) => a.classList.remove("active"));
    myLink.classList.add("active");
    nav.classList.remove("open");
    responsiveBtn.classList.remove("burger");
  });
  unOrderList.appendChild(li);
});
nav.appendChild(unOrderList);

let cartDiv = document.querySelector(".cart");
let cartIcon = document.querySelector(".cart-icon");
let closeBtn = document.querySelector(".close-btn");
cartIcon.addEventListener("click", () => {
  cartDiv.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  cartDiv.classList.remove("active");
});
let responsiveBtn = document.querySelector(".responsive-btn");
responsiveBtn.addEventListener("click", () => {
  responsiveBtn.classList.toggle("burger");
  nav.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !responsiveBtn.contains(e.target)) {
    responsiveBtn.classList.remove("burger");
    nav.classList.remove("open");
  }
});

const products = [
  {
    id: 1,
    name: "Beauty tonic",
    price: 30,
    image: "../images/beauty-tonic-thumbnail.png",
  },

  {
    id: 2,
    name: "Celery juice",
    price: 25,
    image: "../images/celery-juice.png",
  },
  {
    id: 3,
    name: "Citrus Juice",
    price: "22.5",
    image: "../images/citrus1.png",
  },
  {
    id: 4,
    name: "Citrus Juice",
    price: "22.5",
    image: "../images/citrus2.png",
  },
  {
    id: 5,
    name: "Citrus Juice",
    price: "22.5",
    image: "../images/citrus3.png",
  },
  {
    id: 6,
    name: "Detox tonic",
    price: "40",
    image: "../images/detox-tonic.png",
  },
  {
    id: 7,
    name: "Greens juice",
    price: "35",
    image: "../images/greens1.png",
  },
  {
    id: 8,
    name: "Greens juice",
    price: "35",
    image: "../images/greens2.png",
  },
  {
    id: 9,
    name: "Greens juice",
    price: "35",
    image: "../images/greens3.png",
  },
  {
    id: 10,
    name: "Greens juice",
    price: "35",
    image: "../images/greens15.png",
  },
  {
    id: 11,
    name: "Hydration dragonfruit juice",
    price: "50",
    image: "../images/hydration-dragonfruit-thumbnail.png",
  },
  {
    id: 12,
    name: "Hydration Greens juice",
    price: "50",
    image: "../images/hydration-greens-thumbnail.png",
  },
  {
    id: 13,
    name: "Immunity juice",
    price: "45",
    image: "../images/immunity-tonic-thumbnail.png",
  },
  {
    id: 14,
    name: "Mango & Tumeric juice",
    price: "45",
    image: "../images/mango-tumeric.png",
  },
  {
    id: 15,
    name: "Orange juice",
    price: "32",
    image: "../images/orange-tumeric.png",
  },
  {
    id: 16,
    name: "Blue pineapple & Lemonade juice",
    price: "40",
    image: "../images/refresh-blue-pineapple-lemonade-thumbnail.png",
  },
  {
    id: 17,
    name: "Blue pineapple & Lemonade juice",
    price: "40",
    image: "../images/refresh-blue-pineapple-lemonade-thumbnail.png",
  },
  {
    id: 18,
    name: "Roots juice",
    price: "22",
    image: "../images/roots3.png",
  },
  {
    id: 19,
    name: "Spiced apple cider juice",
    price: "33",
    image: "../images/spiced-apple-cider_thumbnail.png",
  },
  {
    id: 20,
    name: "Strawberry-basil juice",
    price: "40",
    image: "../images/strawberry-basil.png",
  },
];
let myProductInfo = document.querySelector(".product-info");
let nameProduct = document.createElement("h2");
let priceProduct = document.createElement("span");
let addBtn = document.createElement("button");
let image = document.createElement("img");
let imageCover = document.createElement("div");
let mainInfo = document.createElement("div");
mainInfo.classList.add("main-info");
mainInfo.appendChild(nameProduct);
mainInfo.appendChild(priceProduct);
mainInfo.appendChild(addBtn);
imageCover.appendChild(image);
imageCover.classList.add("image-cover");
myProductInfo.appendChild(mainInfo);
myProductInfo.appendChild(imageCover);
products.slice(0, 1).map((item) => {
  nameProduct.innerHTML = item.name;
  priceProduct.innerHTML = item.price;
  addBtn.innerHTML = 'Buy Now <i class="fa-solid fa-arrow-right"></i>';
  image.src = item.image;
  image.alt = item.name;
});
