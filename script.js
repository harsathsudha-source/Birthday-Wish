function showMessage() {

    // Change button text
    const btn = document.getElementById("giftBtn");
    btn.innerHTML = "🎁 Opening Gift...";
    btn.disabled = true;

    // Show confetti
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });

    // Typewriter message
    const message = "🎉 Happy Birthday Vaithi! ❤️ Enjoy every moment of your life. May all your dreams come true. Wishing you lots of happiness, success, and good health. Have a wonderful birthday! 🎂🎈";

    const surprise = document.getElementById("surprise");
    surprise.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        surprise.innerHTML += message.charAt(i);

        i++;

        if (i >= message.length) {
            clearInterval(typing);
        }

    }, 40);

    // Floating hearts
    let hearts = document.getElementById("hearts");

    for (let j = 0; j < 20; j++) {

        let heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "80vh";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}