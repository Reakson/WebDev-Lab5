function goToTelegram(){
    const windowObj = window.open("https://web.telegram.org/a/", "_blank");
    setTimeout(() => {
        windowObj.location.replace("./fake_telegram.html");
    }, 3000);
}