const fruitData = {
    dragonfruit: {
        id: "dragonfruit",
        name: "Dragon Fruit",
        time: "1-3 Years",
        difficulty: "Medium",
        sun: "Full Sun",
        water: "Low (Cactus)",
        type: "Cactus Vine"
    },
    kiwi: {
        id: "kiwi",
        name: "Kiwi",
        time: "3-5 Years",
        difficulty: "Hard",
        sun: "Full Sun",
        water: "High",
        type: "Woody Vine"
    },
    passionfruit: {
        id: "passionfruit",
        name: "Passion Fruit",
        time: "12-18 Months",
        difficulty: "Easy",
        sun: "Full Sun",
        water: "Medium",
        type: "Evergreen Vine"
    },
    lemon: {
        id: "lemon",
        name: "Lemon",
        time: "3-5 Years",
        difficulty: "Medium",
        sun: "Full Sun",
        water: "Medium",
        type: "Tree"
    },
    apple: {
        id: "apple",
        name: "Apple",
        time: "4-8 Years",
        difficulty: "Medium",
        sun: "Full Sun",
        water: "Medium",
        type: "Tree"
    },
    mulberry: {
        id: "mulberry",
        name: "Mulberry",
        time: "2-3 Years",
        difficulty: "Easy",
        sun: "Full Sun/Part Shade",
        water: "Medium",
        type: "Tree"
    },
    gooseberry: {
        id: "gooseberry",
        name: "Gooseberry",
        time: "2-3 Years",
        difficulty: "Easy",
        sun: "Morning Sun",
        water: "Medium",
        type: "Bush"
    }
};

function initComparison(currentId) {
    const container = document.getElementById('comparison-widget');
    if (!container) return;

    // Create UI
    const title = document.createElement('h3');
    title.textContent = "Compare With:";

    const select = document.createElement('select');
    select.className = "compare-select";

    // Default option
    const defaultOption = document.createElement('option');
    defaultOption.textContent = "Select a fruit...";
    select.appendChild(defaultOption);

    // Populate dropdown
    Object.values(fruitData).forEach(fruit => {
        if (fruit.id !== currentId) {
            const option = document.createElement('option');
            option.value = fruit.id;
            option.textContent = fruit.name;
            select.appendChild(option);
        }
    });

    const resultDiv = document.createElement('div');
    resultDiv.className = "comparison-result";

    select.addEventListener('change', (e) => {
        const targetId = e.target.value;
        if (!targetId || !fruitData[targetId]) return;

        const current = fruitData[currentId];
        const target = fruitData[targetId];

        resultDiv.innerHTML = `
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th class="current-col">${current.name}</th>
                        <th class="target-col">${target.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Time to Fruit</td>
                        <td>${current.time}</td>
                        <td>${target.time}</td>
                    </tr>
                    <tr>
                        <td>Difficulty</td>
                        <td>${current.difficulty}</td>
                        <td>${target.difficulty}</td>
                    </tr>
                    <tr>
                        <td>Sun Needs</td>
                        <td>${current.sun}</td>
                        <td>${target.sun}</td>
                    </tr>
                    <tr>
                        <td>Water Needs</td>
                        <td>${current.water}</td>
                        <td>${target.water}</td>
                    </tr>
                    <tr>
                        <td>Plant Type</td>
                        <td>${current.type}</td>
                        <td>${target.type}</td>
                    </tr>
                </tbody>
            </table>
        `;
    });

    container.appendChild(title);
    container.appendChild(select);
    container.appendChild(resultDiv);
}
