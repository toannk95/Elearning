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