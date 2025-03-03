I'll create a comprehensive README file for your GitHub repository covering all essential details, including project name, features, installation, usage instructions, technologies used, and contribution guidelines. I'll provide it shortly.

# Chiru's Grocery

**Chiru's Grocery** is a web-based grocery management system that helps you keep track of grocery items and compare prices across different stores. It features two main sections: one for managing your grocery inventory (items and quantities) and another for tracking the prices of items at multiple retailers (Walmart, Smart & Final, and Target). All data is stored locally in your browser using Local Storage, so you can use the app offline and your lists will persist between visits without any backend or database.

## Features

- **Add and Manage Items**: Add items to your grocery inventory with a name, quantity, and an image for each. You can increase or decrease the quantity of any item as needed (for example, use the "Use 1" button when you consume an item, or "Add 1" when you restock it). If an item’s quantity reaches zero, it is automatically removed from the list. You can also remove items manually with the "Delete" button.  
- **Price Comparison**: Keep track of prices for each grocery item across multiple stores. For any item, you can record the price at **Walmart**, **Smart & Final**, and **Target**. The app displays these prices side by side under the "Grocery Prices" section, allowing you to compare and decide where to buy each item.  
- **Local Storage Persistence**: All item data and price data are saved in the browser’s **Local Storage**. This means your grocery list and price comparisons remain available even after refreshing the page or closing the browser. There’s no need for an external database or login – the application works completely offline and data stays on your device.  
- **User-Friendly Interface**: The application has a simple, intuitive interface. Use the top navigation buttons to switch between the **"Grocery Items"** section and the **"Grocery Prices"** section. Each section has a clear form for inputting data and a neatly formatted list to display your grocery items or price comparisons. The design uses a clean layout with a pleasant background image, making the app enjoyable to use.

## Installation Instructions

Getting a local copy of **Chiru's Grocery** up and running is straightforward. This project is purely front-end, so all you need is a web browser.

1. **Clone the repository**: Clone this repo to your local machine using Git. Open your terminal and run:  
   ```bash
   git clone https://github.com/yourusername/Chirus-Grocery.git
   ```  
   *(Alternatively, you can download the repository as a ZIP file and extract it.)*
2. **Open the application**: After cloning or downloading, navigate to the project directory and open the `index.html` file in your web browser. You can usually do this by double-clicking the `index.html` file, or by right-clicking it and choosing your preferred browser. The app will load in your browser, and you can start using it immediately.  

No additional installation or setup is required. All functionalities are built into the HTML, CSS, and JavaScript files.

## Usage Instructions

Once you have the application open in your browser, you can manage your grocery list and price comparisons using the two main sections of the app. Click the **“Grocery Items”** button or **“Grocery Prices”** button at the top of the page to switch between the sections. Here's how to use each part of **Chiru's Grocery**:

### Managing Grocery Items

- **Adding a New Item**: In the **Grocery Items** section, you’ll find input fields to add a new item. Enter the *Item Name*, *Quantity*, and an *Image URL* (for a picture of the item, if available), then click the **Add Item** button. The item will be added to your inventory list below and displayed with its image, name, and quantity.  
- **Updating Item Quantity**: Each item in your inventory list has two quantity buttons: **Use 1** and **Add 1**. Click **Use 1** when you consume/use one unit of that item – this will decrement the quantity by one (and if the quantity reaches 0, the item will be removed from the list automatically). Click **Add 1** when you acquire more of that item – this will increment the quantity by one. The displayed quantity will update immediately.  
- **Removing an Item**: If you want to remove an item completely from your inventory, click the **Delete** button associated with that item. This will delete the item from the list. (If you accidentally remove an item, you would need to re-add it manually, since there is no undo functionality.)  

All changes you make (adding items, updating quantities, or deleting) are instantly saved to local storage. If you refresh the page or come back later, your grocery items list will remain as you left it.

### Comparing Grocery Prices

- **Adding Price Information**: Switch to the **Grocery Prices** section by clicking the **“Grocery Prices”** button at the top. Here you'll find a form to add a price entry. Enter the *Item Name* (for the product you want to compare), an *Image URL* (optional image of the product), and the prices for that item at **Walmart**, **Smart & Final**, and **Target**. Once all fields are filled, click the **Add Item** button.  
- **Viewing Price Comparisons**: After adding, the item will appear in the **Added Items with Prices** list below the form. You will see the item’s image and its price at each of the three stores listed side by side (each price is labeled under the store’s name). This allows you to quickly scan which store offers the best price for that item. For example, you might see an item is $5.99 at Walmart, $6.49 at Smart & Final, and $5.75 at Target.  
- **Removing a Price Entry**: If you no longer want to track an item’s prices, you can remove it from the list by clicking the **Delete** button next to that item’s entry. The entry will be removed from the display and the data will be deleted from local storage.  

Like the inventory list, all price comparison data is saved to local storage. Your price entries will persist across page reloads. You can maintain and update this list as needed by deleting and re-adding items with new prices if they change.

## Technologies Used

This project was built using the following technologies and tools:

- **HTML5** – Markup for structuring the app’s interface and forms.  
- **CSS3** – Styling for the layout, buttons, and overall design (including a responsive, centered layout and a fixed background image for a visually appealing look).  
- **JavaScript (Vanilla JS)** – All interactivity and logic (adding items, updating quantities, switching sections, etc.) are implemented in plain JavaScript. The DOM is manipulated to show/hide sections and to dynamically display the list of items and prices.  
- **Web Storage (Local Storage)** – Used to store the grocery items list and price list in the browser. This allows data persistence without any database – the data is saved in the user's browser and loaded on each visit.  
- **No External Libraries or Frameworks** – The application runs without any frameworks (no jQuery, no React/Vue, etc.) and doesn’t require any build tools or bundlers. It’s a lightweight, front-end only project.

## Screenshots & Demo

*Live Demo*: You can see **Chiru's Grocery** in action via a live demo if available. *(For example, if deployed on GitHub Pages, the app might be accessible at **https://yourusername.github.io/Chirus-Grocery/**. Replace "yourusername" with the actual GitHub username.)* If a live demo link is not provided, you can run the app locally by opening `index.html` as described above.

Below are some screenshots of the application:

![Chiru's Grocery – Grocery Items Section](screenshots/grocery_items_section.png)  
*Screenshot: The **Grocery Items** section, where a user can add new grocery items with a name, quantity, and image. The list of added items is displayed with options to use, add, or delete each item.*  

![Chiru's Grocery – Grocery Prices Section](screenshots/grocery_prices_section.png)  
*Screenshot: The **Grocery Prices** section, showing a list of items with their prices at Walmart, Smart & Final, and Target. This allows easy price comparison for each item.*  

*(Note: Replace the placeholder image paths with actual screenshot files of your application interface. Screenshots help users visualize the app. You can capture the web page after adding some sample items and prices, then include those images in the repository.)*

## Contributing

Contributions are welcome! If you'd like to improve **Chiru's Grocery** or add new features, please feel free to contribute:

1. **Fork the repository** on GitHub to have your own copy of the project.
2. **Clone your fork** to your local machine and create a new branch for your feature or bugfix.  
3. **Make your changes**: Implement your feature or fix the bug, and try to follow the code style and structure used in the project for consistency.
4. **Commit your changes** with clear and descriptive commit messages.
5. **Push to your fork** and then open a **Pull Request** on the original repository. Provide details about your changes in the PR description so they can be understood and reviewed.  

Alternatively, you can open an issue to discuss any ideas or report bugs. For major changes, it's a good idea to open an issue first to discuss them with the project maintainers. This helps ensure that your contribution aligns with the project goals and is likely to be accepted.

## License

This project is open source and available under the **MIT License**. Feel free to use, modify, and distribute this application as permitted by the license. See the [`LICENSE`](LICENSE) file for more details.

## Contact Information

For any questions, suggestions, or feedback, you can reach out to the project maintainer:

- **Email**: chiru.developer@example.com *(replace with the developer's actual email address)*

You can also contact us by opening an issue on the GitHub repository if you encounter any problems or have feature requests. We appreciate your interest in **Chiru's Grocery** and hope you find it useful!
