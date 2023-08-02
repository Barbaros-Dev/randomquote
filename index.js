let quotes;

const colors = [
    "#0E2954",
    "#116D6E",
    "#070A52",
    "#576CBC",
    "#443C68",
    "#735F32",
    "#E94560"
]

window.onload = async () => {
    const res = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    const body = await res.json()
    quotes = body.quotes
    newQuote()
}

function newQuote() {
    const random = Math.floor(Math.random() * quotes.length)
    const root = document.querySelector(":root")
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    while(getComputedStyle(root).getPropertyValue("--primary-color") === randomColor) {
        randomColor = colors[Math.floor(Math.random() * colors.length)]
    }
    $("#tweet-quote").attr("href", `https://twitter.com/intent/tweet/?hashtags=quotes&text="${quotes[random].quote}" - ${quotes[random].author}`)
    $("#text").css("opacity", 0)
    $("#author").css("opacity", 0)
    $("#text").animate({ opacity: 1 }, getComputedStyle(root).getPropertyValue("--transition-time"))
    $("#author").animate({ opacity: 1 }, getComputedStyle(root).getPropertyValue("--transition-time"))
    $("#text").text(quotes[random].quote)
    $("#author").text(`- ${quotes[random].author}`)
    root.style.setProperty('--primary-color', randomColor)
}