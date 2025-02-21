// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH_ToiP2bh1rOt8w_KxCgXsuDV9BYqtPw",
    authDomain: "image-app-46f9e.firebaseapp.com",
    projectId: "image-app-46f9e",
    storageBucket: "image-app-46f9e.appspot.com",
    messagingSenderId: "485522150903",
    appId: "1:485522150903:web:163e28c2f7307cebddcaf2",
    measurementId: "G-1F69T3NRT6"
};
//

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Load data on page load
document.addEventListener("DOMContentLoaded", () => {
    loadItems();
    loadPrices();
});

// Function to show the selected section
function showSection(sectionId) {
    document.getElementById("itemsSection").style.display = "none";
    document.getElementById("pricesSection").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

// ✅ Grocery Items Functions

// Add Grocery Items to Firestore
function addItem() {
    const imageURL = document.getElementById("imageURL").value.trim();
    const itemName = document.getElementById("itemName").value.trim();
    const itemQuantity = document.getElementById("itemQuantity").value.trim();

    if (!imageURL || !itemName || !itemQuantity) {
        alert("Please enter all details.");
        return;
    }

    db.collection("items").doc(itemName).set({
        image: imageURL,
        quantity: parseInt(itemQuantity)
    }).then(() => {
        loadItems();
        alert("Item added successfully!");
    }).catch(error => console.error("Error adding item: ", error));
}

// Load Grocery Items from Firestore
function loadItems() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";

    db.collection("items").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const div = document.createElement("div");
            div.classList.add("image-box");

            div.innerHTML = `
                <img src="${data.image}" onerror="this.src='https://via.placeholder.com/150'">
                <h3>${doc.id}</h3>
                <p>Quantity: <span id="quantity-${doc.id}">${data.quantity}</span></p>
                <button onclick="useItem('${doc.id}')">Use 1</button>
                <button onclick="addExistingItem('${doc.id}')">Add 1</button>
                <button onclick="deleteItem('${doc.id}')">Delete</button>
            `;

            imageContainer.appendChild(div);
        });
    });
}

// Use Item (Decrease Quantity)
function useItem(itemName) {
    const itemRef = db.collection("items").doc(itemName);

    itemRef.get().then((doc) => {
        if (doc.exists) {
            let newQuantity = doc.data().quantity - 1;
            if (newQuantity <= 0) {
                itemRef.delete().then(() => loadItems());
            } else {
                itemRef.update({ quantity: newQuantity }).then(() => loadItems());
            }
        }
    });
}

// Add Existing Item (Increase Quantity)
function addExistingItem(itemName) {
    const itemRef = db.collection("items").doc(itemName);

    itemRef.get().then((doc) => {
        if (doc.exists) {
            let newQuantity = doc.data().quantity + 1;
            itemRef.update({ quantity: newQuantity }).then(() => loadItems());
        }
    });
}

// Delete Grocery Item
function deleteItem(itemName) {
    db.collection("items").doc(itemName).delete().then(() => {
        loadItems();
    });
}

// ✅ Grocery Prices Functions

// Add Grocery Prices to Firestore
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

    db.collection("prices").doc(name).set({
        image, walmart, smartAndFinal, target
    }).then(() => {
        loadPrices();
        alert("Price added successfully!");
    });
}

// Load Grocery Prices from Firestore
function loadPrices() {
    const priceContainer = document.getElementById("priceContainer");
    priceContainer.innerHTML = "";

    db.collection("prices").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const div = document.createElement("div");
            div.classList.add("price-box");

            div.innerHTML = `
                <img src="${data.image}" onerror="this.src='https://via.placeholder.com/150'">
                <h3>${doc.id}</h3>
                <p>Walmart: $${data.walmart}</p>
                <p>Smart & Final: $${data.smartAndFinal}</p>
                <p>Target: $${data.target}</p>
                <button onclick="deletePrice('${doc.id}')">Delete</button>
            `;

            priceContainer.appendChild(div);
        });
    });
}

// Delete Grocery Price
function deletePrice(itemName) {
    db.collection("prices").doc(itemName).delete().then(() => {
        loadPrices();
    });
}
