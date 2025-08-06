window.onscroll = function() {
  scrollProgressBar();
};

function scrollProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle
    const navLinks = document.getElementById("navLinks");
    function toggleMenu(show) {
        navLinks.style.right = show ? "0" : "-200px";
        document.body.style.overflow = show ? "hidden" : "auto";
    }
    window.showMenu = () => toggleMenu(true);
    window.hideMenu = () => toggleMenu(false);

    // Search bar
    document.getElementById('searchBtn')?.addEventListener('click', function () {
        const query = document.getElementById('searchBar').value.toLowerCase();
        const cards = document.querySelectorAll('.team-card, .founder-card');
        cards.forEach(card => {
            const name = card.querySelector('h2, h3')?.textContent.toLowerCase();
            card.style.display = name.includes(query) ? 'block' : 'none';
        });
    });

    // Newsletter form
    const form = document.querySelector('form[action="/subscribe"]');
    if (form) {
        const emailInput = form.querySelector('input[name="email"]');
        const errorMsg = document.createElement("p");
        errorMsg.style.color = "red";
        errorMsg.style.marginTop = "5px";
        errorMsg.style.display = "none";
        form.appendChild(errorMsg);

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                errorMsg.textContent = "Please enter a valid email address.";
                errorMsg.style.color = "red";
            } else {
                errorMsg.textContent = "Subscribed successfully!";
                errorMsg.style.color = "#a0ed79";
            }
            errorMsg.style.display = "block";
            setTimeout(() => { errorMsg.style.display = "none"; }, 3000);
            emailInput.value = "";
        });
    }

    // Loader
    // Loader
const loaderScreen = document.getElementById('loading-screen');
if (loaderScreen) {
    setTimeout(() => loaderScreen.classList.add('fading'), 1700);
    setTimeout(() => loaderScreen.classList.add('hidden'), 2000);
}


    // Quote of the day
    const quotes = [
        { text: "Poetry is not a luxury. It is a vital necessity of our existence.", author: "Audre Lorde" },
        { text: "Fill your paper with the breathings of your heart.", author: "William Wordsworth" },
        { text: "Poetry is when an emotion has found its thought and the thought has found words.", author: "Robert Frost" },
        { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou" },
        { text: "A word after a word after a word is power.", author: "Margaret Atwood" },
        { text: "Creativity is intelligence having fun.", author: "Albert Einstein" }
    ];
    const quoteTextEl = document.getElementById("quote-text");
    const quoteAuthorEl = document.getElementById("quote-author");
    if (quoteTextEl && quoteAuthorEl) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteTextEl.textContent = `"${randomQuote.text}"`;
        quoteAuthorEl.textContent = `– ${randomQuote.author}`;
    }

    // Social share buttons
    const pageURL = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const twitterBtn = document.querySelector(".share-btn.twitter");
    const linkedinBtn = document.querySelector(".share-btn.linkedin");
    const whatsappBtn = document.querySelector(".share-btn.whatsapp");
    if (twitterBtn) twitterBtn.href = `https://twitter.com/intent/tweet?url=${pageURL}&text=${pageTitle}`;
    if (linkedinBtn) linkedinBtn.href = `https://www.linkedin.com/shareArticle?mini=true&url=${pageURL}&title=${pageTitle}`;
    if (whatsappBtn) whatsappBtn.href = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageURL}`;
});

// Update the year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
