// data
const data = [
  {
    image: "assets/img/featured_img1.png",
    title: "Hazel - Clean Minimalist Multi-Pu...",
    price: "$50",
    saleCount: "258 Sale",
    id: 0,
  },
  {
    image: "assets/img/feature__image2.png",
    title: "Monstroid2 - Multipurpose Modular...",
    price: "$50",
    saleCount: "258 Sale",
    id: 1,
  },
  {
    image: "assets/img/featured__image3.png",
    title: "Techno - IT Solutions & Business ...",
    price: "$50",
    saleCount: "258 Sale",
    id: 2,
  },
];

const checkOutData = [
  {
    image: "assets/img/check__out-img1.png",
    title: "Monstroid2 - Multipurpose Modular...",
    price: "$50",
    saleCount: "258 Sale",
    id: 0,
    classes: ["all", "cms__themes", "blogging__"],
  },
  {
    image: "assets/img/check__out-img2.png",
    title: "Hazel - Clean Minimalist Multi-Pu...",
    price: "$50",
    saleCount: "258 Sale",
    id: 1,
    classes: ["all", "cms__themes", "eCommerce__"],
  },
  {
    image: "assets/img/check__out-img3.png",
    title: "Techno - IT Solutions & Business...",
    price: "$50",
    saleCount: "258 Sale",
    id: 2,
    classes: ["all", "html__design", "eCommerce__"],
  },
  {
    image: "assets/img/check__out-img4.png",
    title: "PathSoft - IT Solutions for Your ...",
    price: "$50",
    saleCount: "258 Sale",
    id: 3,
    classes: ["all", "wp__themes", "blogging__"],
  },
  {
    image: "assets/img/check__out-img5.png",
    title: "Brave Theme Multipurpose HTML",
    price: "$50",
    saleCount: "258 Sale",
    id: 4,
    classes: ["all", "wp__themes", "ui__templates"],
  },
  {
    image: "assets/img/check__out-img6.png  ",
    title: "Technology & IT Solution Servic...",
    price: "$50",
    saleCount: "258 Sale",
    id: 5,
    classes: ["all", "wp__themes"],
  },
];

/* constants */

const featuredViewAllBtn = document.querySelector(".featured__viewBtn");
const featuredWrapper = document.querySelector(".featured__wrapper");

const preview = document.querySelectorAll(".previewHoverOn");
const modalBg = document.getElementById("modal-bg");
const modal = document.querySelector(".myModal");

const cart = document.querySelectorAll(".hoverOnCart");
let cartItemsCount = document.querySelector(".cart__count");

const allClick = document.querySelector(".allClick");
const htmlClick = document.querySelector(".htmlClick");
const wpClick = document.querySelector(".wpClick");
const cmsClick = document.querySelector(".cmsClick");
const ecomClick = document.querySelector(".ecomClick");
const blogClick = document.querySelector(".blogClick");
const uiClick = document.querySelector(".uiClick");
const allProducts = document.getElementsByClassName("all");
const checkOutViewAllBtn = document.querySelector(".checkOutViewBtn");
const checkOutWrapper = document.querySelector(".checkOut__wrapper");
const checkOutPreview = document.querySelectorAll(".check__out-hoverOnBtn");
const checkOutCart = document.querySelectorAll(".checkOutCart");

const mobileBarBtn = document.querySelector(".mobile__bar");
const closeMobileMenuBtn = document.querySelector(".close__mobile_menuBtn");
const mobileMenu = document.querySelector(".mobile__menu");

let count = (cartItemsCount.textContent = 0);
const cartArr = [];
const checkOutArr = [];

featuredViewAllBtn.addEventListener("click", () => {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += getFeaturedProducts(data[i]);
  }
  featuredWrapper.insertAdjacentHTML("afterbegin", html);
});

function getFeaturedProducts(data) {
  return `
    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${
      data.id
    }00">
    <div class="featured__box">
        <div class="featured__hoverOn featured__hoverOn${data.id + 1}}">
            <button onclick=previewView(${
              data.id
            }) class="hoverOn__btn previewHoverOn">Preview</button>
            <div class="header__likes hoverOn__cart">
                <div class="heart ">
                    <img src="assets/img/shopping-cart-fill.png" alt="heart icon">
                </div>
            </div>
        </div>
        <div class="featured__box-image">
            <img src="${data.image}" alt="">
        </div>
        <h3 class="choose__box-title">${data.title}</h3>
        <div class="featured__box-items">
            <strong class="feature__box-price">${data.price}</strong>
            <small class="feature__box-sale">${data.saleCount}</small>
        </div>
    </div>
</div>`;
}

/* preview click */
Array.from(preview).forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("featured__hoverOn1")) {
      modal.insertAdjacentHTML("afterbegin", getPreviewToModal(data[0]));
      openModal();
    } else if (
      e.target.parentElement.classList.contains("featured__hoverOn2")
    ) {
      modal.insertAdjacentHTML("afterbegin", getPreviewToModal(data[1]));
      openModal();
    } else if (
      e.target.parentElement.classList.contains("featured__hoverOn3")
    ) {
      modal.insertAdjacentHTML("afterbegin", getPreviewToModal(data[2]));
      openModal();
    }
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("closeModalBtn")) {
    closeModal();
  }
});

function openModal() {
  modalBg.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  modal.innerHTML = "";
  modalBg.style.display = "none";
  modal.style.display = "none";
}

modalBg.addEventListener("click", (e) => {
  if (e.target.classList.contains("myModal")) return;
  closeModal();
});

/* cart click */

Array.from(cart).forEach((item, index) => {
  item.addEventListener("click", () => {
    count++;
    cartItemsCount.textContent = count;
    cartArr.push(index);
  });
});

function getPreviewToModal(data) {
  return `      
  <div>${
    cartArr.includes(data.id)
      ? `<h1 class="inCart">${data.title}  in cart</h1>`
      : `<h1 class="inCart">${data.title} not in cart</h1>`
  }</div>
    <div class="myModal__image">
    <img src="${data.image}" alt="">
</div>
<h3 class="choose__box-title">${data.title}</h3>
<div class="featured__box-items">
    <strong class="feature__box-price">${data.price}</strong>
    <small class="feature__box-sale">${data.saleCount}</small>
</div>
<button class="myBtn closeModalBtn">Close</button>
      `;
}

/* categories */

allClick.addEventListener("click", () => {
  htmlClick.classList.remove("check__out-categoriesActive");
  wpClick.classList.remove("check__out-categoriesActive");
  wpClick.classList.remove("check__out-categoriesActive");
  ecomClick.classList.remove("check__out-categoriesActive");
  blogClick.classList.remove("check__out-categoriesActive");
  uiClick.classList.remove("check__out-categoriesActive");

  allClick.classList.add("check__out-categoriesActive");

  Array.from(allProducts).forEach((item) => {
    if (item.classList.contains("all")) {
      item.style.display = "block";
    }
  });
});

htmlClick.addEventListener("click", () => {
  allClick.classList.remove("check__out-categoriesActive");
  wpClick.classList.remove("check__out-categoriesActive");
  cmsClick.classList.remove("check__out-categoriesActive");
  ecomClick.classList.remove("check__out-categoriesActive");
  blogClick.classList.remove("check__out-categoriesActive");
  uiClick.classList.remove("check__out-categoriesActive");

  htmlClick.classList.add("check__out-categoriesActive");

  Array.from(allProducts).forEach((item) => {
    if (item.classList.contains("html__design")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

wpClick.addEventListener("click", () => {
  allClick.classList.remove("check__out-categoriesActive");
  htmlClick.classList.remove("check__out-categoriesActive");
  cmsClick.classList.remove("check__out-categoriesActive");
  ecomClick.classList.remove("check__out-categoriesActive");
  blogClick.classList.remove("check__out-categoriesActive");
  uiClick.classList.remove("check__out-categoriesActive");

  wpClick.classList.add("check__out-categoriesActive");

  Array.from(allProducts).forEach((item) => {
    if (item.classList.contains("wp__themes")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

cmsClick.addEventListener("click", () => {
  allClick.classList.remove("check__out-categoriesActive");
  htmlClick.classList.remove("check__out-categoriesActive");
  wpClick.classList.remove("check__out-categoriesActive");
  ecomClick.classList.remove("check__out-categoriesActive");
  blogClick.classList.remove("check__out-categoriesActive");
  uiClick.classList.remove("check__out-categoriesActive");

  cmsClick.classList.add("check__out-categoriesActive");

  Array.from(allProducts).forEach((item) => {
    if (item.classList.contains("cms__themes")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

ecomClick.addEventListener("click", () => {
  allClick.classList.remove("check__out-categoriesActive");
  htmlClick.classList.remove("check__out-categoriesActive");
  wpClick.classList.remove("check__out-categoriesActive");
  cmsClick.classList.remove("check__out-categoriesActive");
  blogClick.classList.remove("check__out-categoriesActive");
  uiClick.classList.remove("check__out-categoriesActive");

  ecomClick.classList.add("check__out-categoriesActive");

  Array.from(allProducts).forEach((item) => {
    if (item.classList.contains("eCommerce__")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

blogClick.addEventListener("click", () => {
  allClick.classList.remove("check__out-categoriesActive");
  htmlClick.classList.remove("check__out-categoriesActive");
  wpClick.classList.remove("check__out-categoriesActive");
  cmsClick.classList.remove("check__out-categoriesActive");
  ecomClick.classList.remove("check__out-categoriesActive");
  uiClick.classList.remove("check__out-categoriesActive");

  blogClick.classList.add("check__out-categoriesActive");

  Array.from(allProducts).forEach((item) => {
    if (item.classList.contains("blogging__")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

uiClick.addEventListener("click", () => {
  allClick.classList.remove("check__out-categoriesActive");
  htmlClick.classList.remove("check__out-categoriesActive");
  wpClick.classList.remove("check__out-categoriesActive");
  cmsClick.classList.remove("check__out-categoriesActive");
  ecomClick.classList.remove("check__out-categoriesActive");
  blogClick.classList.remove("check__out-categoriesActive");

  uiClick.classList.add("check__out-categoriesActive");

  Array.from(allProducts).forEach((item) => {
    if (item.classList.contains("ui__templates")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

checkOutViewAllBtn.addEventListener("click", () => {
  let html = "";
  for (let i = 0; i < checkOutData.length; i++) {
    html += getCheckOutProducts(checkOutData[i]);
  }
  checkOutWrapper.insertAdjacentHTML("afterbegin", html);
});

function getCheckOutProducts(data) {
  return `
  <div class=' ${data.classes.join(
    " "
  )} col-lg-3 col-md-6 all' data-aos="fade-up" data-aos-delay="${data.id}00">
  <div class="featured__box check__out-box">
      <div class="featured__hoverOn check__out-hoverOn">
          <button onclick=checkOutPreviewFunc(${
            data.id
          }) class="hoverOn__btn check__out-hoverOnBtn ">Preview</button>
          <div class="header__likes hoverOn__cart">
              <div class="heart ">
                  <img src="assets/img/shopping-cart-fill.png" alt="heart icon">
              </div>
          </div>
      </div>
      <div class="featured__box-image check__out-image">
          <img src="${data.image}" alt="">
      </div>
      <h3 class="choose__box-title check__out-title">${data.title}</h3>
      <div class="featured__box-items">
          <strong class="feature__box-price check__out-price">${
            data.price
          }</strong>
          <small class="feature__box-sale check__out-sale">${
            data.saleCount
          }</small>
      </div>
  </div>
</div>
  
  
  `;
}

Array.from(checkOutPreview).forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("checkOutHoverOn1")) {
      modal.insertAdjacentHTML(
        "afterbegin",
        checkOutProductToModal(checkOutData[0])
      );
      openModal();
    } else if (e.target.parentElement.classList.contains("checkOutHoverOn2")) {
      modal.insertAdjacentHTML(
        "afterbegin",
        checkOutProductToModal(checkOutData[1])
      );
      openModal();
    } else if (e.target.parentElement.classList.contains("checkOutHoverOn3")) {
      modal.insertAdjacentHTML(
        "afterbegin",
        checkOutProductToModal(checkOutData[2])
      );
      openModal();
    } else if (e.target.parentElement.classList.contains("checkOutHoverOn4")) {
      modal.insertAdjacentHTML(
        "afterbegin",
        checkOutProductToModal(checkOutData[3])
      );
      openModal();
    } else if (e.target.parentElement.classList.contains("checkOutHoverOn5")) {
      modal.insertAdjacentHTML(
        "afterbegin",
        checkOutProductToModal(checkOutData[4])
      );
      openModal();
    } else if (e.target.parentElement.classList.contains("checkOutHoverOn6")) {
      modal.insertAdjacentHTML(
        "afterbegin",
        checkOutProductToModal(checkOutData[5])
      );
      openModal();
    } else if (e.target.parentElement.classList.contains("checkOutHoverOn7")) {
      modal.insertAdjacentHTML(
        "afterbegin",
        checkOutProductToModal(checkOutData[2])
      );
      openModal();
    } else if (e.target.parentElement.classList.contains("checkOutHoverOn8")) {
      modal.insertAdjacentHTML(
        "afterbegin",
        checkOutProductToModal(checkOutData[3])
      );
      openModal();
    }
  });
});

function previewView(id) {
  modal.insertAdjacentHTML("afterbegin", getPreviewToModal(data[id]));
  openModal();
}

function checkOutPreviewFunc(id) {
  modal.insertAdjacentHTML(
    "afterbegin",
    checkOutProductToModal(checkOutData[id])
  );
  openModal();
}

Array.from(checkOutCart).forEach((item, index) => {
  item.addEventListener("click", () => {
    count++;
    cartItemsCount.textContent = count;
    checkOutArr.push(index);
  });
});

function checkOutProductToModal(data) {
  return `
  <div>${
    checkOutArr.includes(data.id)
      ? `<h1 class="inCart">${data.title}  in cart</h1>`
      : `<h1 class="inCart">${data.title} not in cart</h1>`
  }</div>
  
    <div class="myModal__image">
    <img src="${data.image}" alt="">
</div>
<h3 class="choose__box-title">${data.title}</h3>
<div class="featured__box-items">
    <strong class="feature__box-price">${data.price}</strong>
    <small class="feature__box-sale">${data.saleCount}</small>
</div>
<button class="myBtn closeModalBtn">Close</button>
  
  
  
  `;
}

/* mobile menu showing toogle */

mobileBarBtn.addEventListener("click", () => {
  openMobileMenu();
});

closeMobileMenuBtn.addEventListener("click", () => {
  closeMobileMenu();
});

function openMobileMenu() {
  mobileMenu.classList.add("mobile__menu_show");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("mobile__menu_show");
}
