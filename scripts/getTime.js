const LOCALE = "en-US"
const REGION = "America"
const LOCATION = "Denver"
const TIME_NODE = document.querySelector(".info-time");

let currentTime;

const setLocalTime = () => {
    const TIME_STRING = new Date().toLocaleString(LOCALE, { timeZone: `${REGION}/${LOCATION}` });
    const date = new Date(TIME_STRING);
    const localTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    if (localTime === currentTime) {
        return
    } else {
        currentTime = localTime;
        TIME_NODE.textContent = localTime;
    }
};

setInterval(() => {
    setLocalTime();
}, 500);