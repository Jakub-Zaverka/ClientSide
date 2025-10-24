//Form Validation
function showPassword(btn) {
    const wrapper = btn.closest(".input-group");
    const input = wrapper.querySelector("input");
    const svg = btn.querySelector("svg");

    // přepni typ inputu
    input.type = input.type === "password" ? "text" : "password";

    // přepni ikonu
    if (svg.classList.contains("bi-eye-fill")) {
        svg.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
        svg.innerHTML = `
          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>`;
    } else {
        svg.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
        svg.innerHTML = `
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>`;
    }
}

//Hodiny
function startClock() {
    const timeEl = document.getElementById('time');
    if (!timeEl) return;

    const update = () => {
        const now = new Date();
        const formatted = now
            .toLocaleDateString('cs-CZ')
            .replace(/\s/g, '') + ' ' +
            now.toLocaleTimeString('cs-CZ', { hour12: false });
        timeEl.textContent = formatted;
    };


    update();
    setInterval(update, 1000);
}

function initScheduleScroll(defaultStep = 120) {
    const viewport = document.getElementById('schedule-viewport');
    const prevBtn = document.getElementById('timePrev');
    const nextBtn = document.getElementById('timeNext');
    if (!viewport || !prevBtn || !nextBtn) return;

    const slot = viewport.querySelector('.schedule-header .schedule-cell:not(.schedule-cell-fixed)');
    const step = slot ? slot.offsetWidth : defaultStep;
    const scroll = direction => viewport.scrollBy({ left: direction * step, behavior: 'smooth' });

    prevBtn.addEventListener('click', () => scroll(-1));
    nextBtn.addEventListener('click', () => scroll(1));
}

document.addEventListener('DOMContentLoaded', () => {
    startClock();
    initScheduleScroll();
});
