const tips = [
    "Dragon fruit cacti need a strong trellis because the branches get very heavy.",
    "Kiwi vines can take 3-5 years to produce their first fruit.",
    "Passion fruit vines have shallow roots—mulch heavily to retain moisture.",
    "Lemons stop ripening once picked, so leave them on the tree until fully yellow.",
    "To get good apples, you usually need two different varieties for cross-pollination.",
    "Mulberries drop ripe fruit easily; place a sheet under the tree and shake branches to harvest.",
    "Gooseberries are one of the few fruits that can tolerate some shade."
];

const tipText = document.getElementById('tip-text');
const newTipBtn = document.getElementById('new-tip-btn');

function showRandomTip() {
    tipText.style.opacity = 0;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * tips.length);
        tipText.textContent = `"${tips[randomIndex]}"`;
        tipText.style.opacity = 1;
    }, 200);
}

newTipBtn.addEventListener('click', showRandomTip);

document.addEventListener('DOMContentLoaded', showRandomTip);

console.log("Fruit Garden Pro Loaded 🌳");
