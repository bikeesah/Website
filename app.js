let bttn = document.getElementById("btn");
let moreText = document.getElementById("moreText");

bttn.onclick = function () {
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        bttn.innerText = "Show Less";
    } else {
        moreText.style.display = "none";
        bttn.innerText = "Show More";
    }
};
