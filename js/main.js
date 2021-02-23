// Sau khi thư viện của hệ thống được load lên thì mới chạy vào hàm truncateCardTitle()
window.addEventListener("load", function() {
    truncateCardTitle();
})

let truncateCardTitle = () => {
    let cardList = document.getElementsByClassName("card-title");
    for (let i = 0; i < cardList.length; i++) {
        let text = cardList[i].innerHTML;
        let newText = truncateString(text, 35);
        cardList[i].innerHTML = newText;
    }
}

let truncateString = (str, num) => {
    if (str.length > num) {
        str = str.slice(0, num) + "...";
    }
    return str;
}

// Sidebar Mini
let toggleBtn = document.querySelector('.sidebarMini__button');
let sidebarMini = document.querySelector('.sidebarMini');
let switchBtn = document.querySelector('#checkbox');

toggleBtn.addEventListener('click', function() {
    sidebarMini.classList.toggle('is-opened');
});

switchBtn.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('darkMode');
});