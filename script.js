document.addEventListener("DOMContentLoaded", () => {
    // Load items and prices when the page is ready
    loadItems();
    loadPrices();
});

// Function to show the selected section
function showSection(sectionId) {
    // Hide both sections by default
    document.getElementById("itemsSection").style.display = "none";
    document.getElementById("pricesSection").style.display = "none";

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";
}

// Function to add Grocery Items
function addItem() {
    const imageURL = document.getElementById("imageURL").value.trim();
    const itemName = document.getElementById("itemName").value.trim();
    const itemQuantity = document.getElementById("itemQuantity").value.trim();

    if (!imageURL || !itemName || !itemQuantity) {
        alert("Please enter all details.");
        return;
    }

    let items = JSON.parse(localStorage.getItem("items")) || {};
    items[itemName] = { image: imageURL, quantity: parseInt(itemQuantity) };

    localStorage.setItem("items", JSON.stringify(items));
    loadItems();
}

// Load Grocery Items
function loadItems() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";

    let items = JSON.parse(localStorage.getItem("items")) || {};

    for (let name in items) {
        const div = document.createElement("div");
        div.classList.add("image-box");

        div.innerHTML = `
            <img src="${items[name].image}" onerror="this.src='https://via.placeholder.com/150'">
            <h3>${name}</h3>
            <p>Quantity: <span id="quantity-${name}">${items[name].quantity}</span></p>
            <button class="use-button" onclick="useItem('${name}')">Use 1</button>
            <button class="add-button" onclick="addExistingItem('${name}')">Add 1</button>
            <button class="delete-button" onclick="deleteItem('${name}')">Delete</button>
        `;

        imageContainer.appendChild(div);
    }
}

// Function to decrease quantity (Use)
function useItem(itemName) {
    let items = JSON.parse(localStorage.getItem("items")) || {};
    if (items[itemName]) {
        items[itemName].quantity -= 1;
        if (items[itemName].quantity <= 0) delete items[itemName];

        localStorage.setItem("items", JSON.stringify(items));
        loadItems();
    }
}

// Function to increase quantity (Add)
function addExistingItem(itemName) {
    let items = JSON.parse(localStorage.getItem("items")) || {};
    if (items[itemName]) {
        items[itemName].quantity += 1;
        localStorage.setItem("items", JSON.stringify(items));
        loadItems();
    }
}

// Function to delete an item from Grocery Items
function deleteItem(itemName) {
    let items = JSON.parse(localStorage.getItem("items")) || {};
    delete items[itemName];
    localStorage.setItem("items", JSON.stringify(items));
    loadItems();
}

// Grocery Prices
function addPrice() {
    const name = document.getElementById("priceItemName").value.trim();
    const image = document.getElementById("priceImageURL").value.trim();
    const walmart = document.getElementById("walmartPrice").value.trim();
    const smartAndFinal = document.getElementById("smartAndFinalPrice").value.trim();
    const target = document.getElementById("targetPrice").value.trim();

    if (!name || !image || !walmart || !smartAndFinal || !target) {
        alert("Please enter all details.");
        return;
    }

    let prices = JSON.parse(localStorage.getItem("prices")) || {};
    prices[name] = { image, walmart, smartAndFinal, target };

    localStorage.setItem("prices", JSON.stringify(prices));
    loadPrices();
}

function loadPrices() {
    const priceContainer = document.getElementById("priceContainer");
    priceContainer.innerHTML = "";

    let prices = JSON.parse(localStorage.getItem("prices")) || {};

    for (let name in prices) {
        const div = document.createElement("div");
        div.classList.add("price-box");

        div.innerHTML = `
            <img src="${prices[name].image}" onerror="this.src='https://via.placeholder.com/150'">
            <h3>${name}</h3>
            <p>Walmart: <span class="walmart-box">$${prices[name].walmart}</span></p>
            <p>Smart & Final: <span class="smartAndFinal-box">$${prices[name].smartAndFinal}</span></p>
            <p>Target: <span class="target-box">$${prices[name].target}</span></p>
            <button class="delete-button" onclick="deletePrice('${name}')">Delete</button>
        `;

        priceContainer.appendChild(div);
    }
}

function deletePrice(itemName) {
    let prices = JSON.parse(localStorage.getItem("prices")) || {};
    delete prices[itemName];
    localStorage.setItem("prices", JSON.stringify(prices));
    loadPrices();
}