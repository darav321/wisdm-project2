const quote_1 = document.getElementById("quote-1")
const quote_2 = document.getElementById("quote-2")
const quote_3 = document.getElementById("quote-3")
const quote_4 = document.getElementById("quote-4")

let quote_array = [quote_1, quote_2, quote_3, quote_4]

let count = 0;

document.getElementById("left-arrow").addEventListener("click", () => {
    count = (count + 1) % 4;
    let prev_quote = quote_array[(count - 1 + 4) % 4];
    let current_quote = quote_array[count];

    prev_quote.style.display = "none"
    current_quote.style.display = "block"
})

document.getElementById("right-arrow").addEventListener("click", () => {
    prev_count = count;
    count = (count + 3) % 4;
    let prev_quote = quote_array[prev_count];
    let current_quote = quote_array[count];

    prev_quote.style.display = "none";
    current_quote.style.display = "block";
})

const location_text = document.querySelector(".location p").innerText;

document.querySelector(".location").addEventListener("click", () => {
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(location_text)}`
    window.open(mapUrl, "_blank")
})

const searchBtn = document.getElementById("search-btn");
const findClass = document.getElementById("rounded-nav-link")
const searchBar = document.getElementById("nav-search");

searchBtn.addEventListener("click", () => {
    if (searchBar.style.display == "block") {
        searchBar.style.display = "none"
    }
    else {
        searchBar.style.display = "block"
    }
});

findClass.addEventListener("click", () => {
    if (searchBar.style.display == "block") {
        searchBar.style.display = "none"
    }
    else {
        searchBar.style.display = "block"
    }
});

const signinBtn = document.getElementById("signin-btn")

signinBtn.addEventListener("click", () => {
    document.querySelector(".pop-up").style.display = "flex";
})

const closeBtn = document.getElementById("popup-close-btn")

closeBtn.addEventListener("click", () => {
    document.querySelector(".pop-up").style.display = "none";
})

function searchWord() {
    const keyword = document.getElementById("nav-search-input").value.trim();

    if (!keyword) return;

    document.querySelectorAll(".highlight").forEach(el => {
        el.classList.remove("highlight")
    })

    const bodyText = document.body.innerHTML;

    const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
    const match = bodyText.match(regex);

    if (!match) {
        alert("No matches")
        return;
    }


    document.body.innerHTML = bodyText.replace(regex, `<span class="highlight">$1</span>`)

    const first = document.querySelector(".highlight")

    if (first) {
        first.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    document.querySelector(".occurences").style.display = "flex";

    document.getElementById("close-occ").addEventListener("click", () => {
        clearHighlights();
        document.querySelector(".occurences").style.display = "none";
    })

    function clearHighlights() {
        document.querySelectorAll(".highlight").forEach(el => {
            el.replaceWith(document.createTextNode(el.textContent));
        });
    }

}

const jumpBtn = document.getElementById("jump_to_top")

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        jumpBtn.style.display = "block"
    }
    else {
        jumpBtn.style.display = "none"
    }
})

jumpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})





