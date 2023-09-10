const lang_icon = document.querySelector(".arrow");

const lang_links = document.querySelector(".lang_links");

const lang_link = lang_links.querySelectorAll(".lang_link")

const show_link = document.querySelector(".show_link")

const sign_in_fixed = document.querySelector(".sign_in_fixed")

const user = document.querySelectorAll(".user")

const active_fixed = document.querySelector(".active_fixed")

const loginOverlay = document.querySelector(".loginOverlay")

const form = document.querySelector(".form")

//! GEt rating star

const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}
executeRating(ratingStars);

lang_icon.addEventListener("click", () => {
    lang_links.classList.toggle("active")
})

for (let i = 0; i < lang_link.length; i++) {
    lang_link[i].addEventListener("click", () => {
        const text = lang_link[i].innerText;
        show_link.innerText = text
        lang_links.classList.remove("active")
    })
}

for (let i = 0; i < user.length; i++) {
    user[i].addEventListener("click", () => {
        console.log("sdads");
        sign_in_fixed.classList.toggle("active_fixed")
        loginOverlay.classList.toggle("active_fixed")
        sign_in_fixed.style.display = "flex"
        loginOverlay.style.display = "flex"
    })
}

sign_in_fixed.addEventListener("click", function (e) {
    if (e.target == this) {
        sign_in_fixed.style.display = "none"
        loginOverlay.style.display = "none"
    }
    else {
        return;
    }
})


//!Hide password
const togglePassword = document.querySelector(".togglePassword");
const password = document.querySelector(".password");

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

// })

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("fa-eye-slash");
});


// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
let count = 1;

// Display initial count value
//! Malın sayı
totalCount.innerHTML = count;
decrementCount.style.color = "lightgray"

// Function to increment count
const handleIncrement = () => {
    if (totalCount.innerHTML < 10) {
        count++;
        totalCount.innerHTML = count;
        decrementCount.style.color = "black"
    }
    if (totalCount.innerHTML == 10) {
        incrementCount.style.color = "lightgray"
    }
};

// Function to decrement count
const handleDecrement = () => {
    if (totalCount.innerHTML > 1) {
        count--;
        totalCount.innerHTML = count;
        incrementCount.style.color = "black"
    }
    if (totalCount.innerHTML == 1) {
        decrementCount.style.color = "lightgray"
    }
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);


//! Change main img

const product_img = document.querySelectorAll(".product_img")
const main_img = document.querySelectorAll(".main_img")

for (let j = 0; j < product_img.length; j++) {
    product_img[j].addEventListener("click", () => {
        for (let i = 0; i <= main_img.length; i++) {
            if (j == 0) {
                main_img[0].style.display = "flex"
                main_img[i].style.display = "none"
                product_img[j].classList.add("product_active_img")
                product_img[1].classList.remove("product_active_img")
                product_img[2].classList.remove("product_active_img")
                product_img[3].classList.remove("product_active_img")
                product_img[4].classList.remove("product_active_img")
            }
            else if (j == 1) {
                main_img[1].style.display = "flex"
                main_img[i].style.display = "none"
                product_img[j].classList.add("product_active_img")
                product_img[0].classList.remove("product_active_img")
                product_img[2].classList.remove("product_active_img")
                product_img[3].classList.remove("product_active_img")
                product_img[4].classList.remove("product_active_img")
            }
            else if (j == 2) {
                main_img[2].style.display = "flex"
                main_img[i].style.display = "none"
                product_img[j].classList.add("product_active_img")
                product_img[0].classList.remove("product_active_img")
                product_img[1].classList.remove("product_active_img")
                product_img[3].classList.remove("product_active_img")
                product_img[4].classList.remove("product_active_img")
            }
            else if (j == 3) {
                main_img[3].style.display = "flex"
                main_img[i].style.display = "none"
                product_img[j].classList.add("product_active_img")
                product_img[0].classList.remove("product_active_img")
                product_img[1].classList.remove("product_active_img")
                product_img[2].classList.remove("product_active_img")
                product_img[4].classList.remove("product_active_img")
            }
            else if (j == 4) {
                console.log("asdas");
                main_img[4].style.display = "flex"
                main_img[i].style.display = "none"
                product_img[j].classList.add("product_active_img")
                product_img[0].classList.remove("product_active_img")
                product_img[1].classList.remove("product_active_img")
                product_img[2].classList.remove("product_active_img")
                product_img[3].classList.remove("product_active_img")
            }
        }
    })
}