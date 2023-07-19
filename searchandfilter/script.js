let products = {
    data:[
        {
            productBarcode: "8807379403072",
            productName: "Natural Seaweed with Traditional Flavor",
            category: "Seaweed",
            price: "$1.27",
            image: "8807379403072.jpg",
        },
        {
            productBarcode: "8809716450671",
            productName: "Dried Yogurt with Apple Flavor",
            category: "Candy",
            price: "$2.54",
            image: "8809716450671.jpg",
        },
        /*{
            productBarcode: "8809506855778",
            productName: "Dried Yogurt with Strawberry Flavor - Sangol brand",
            category: "Candy",
            price: "$2.12",
            image: "8809506855778.jpg",
        },*/
        /*{
            productBarcode: "8809506855785",
            productName: "Dried Yogurt with Cheese Flavor - Sangol brand",
            category: "Candy",
            price: "$2.12",
            image: "8809506855785.jpg",
        },*/
        {
            productBarcode: "8809506855648",
            productName: "Fruit Jelly with Kumquat Flavor",
            category: "Jelly",
            price: "$2.12",
            image: "8809506855648.jpg",
        },
        {
            productBarcode: "8809506855662",
            productName: "Fruit Jelly with Grape Flavor",
            category: "Jelly",
            price: "$2.12",
            image: "8809506855662.jpg",
        },
        {
            productBarcode: "8806011435631",
            productName: "Bacchus Energy Jelly",
            category: "Jelly",
            price: "$0.93",
            image: "8806011435631.jpg",
        },
        {
            productBarcode: "8806011416142",
            productName: "Bacchus Energy Drink",
            category: "Drinks",
            price: "$1.44",
            image: "8806011416142.jpg",
        },
        /*{
            productBarcode: "8809477920246",
            productName: "Spinach-flavored Rice Noodles with Anchovy",
            category: "Noodles",
            price: "$2.12",
            image: "8809477920246.jpg",
        },*/
        /*{
            productBarcode: "8803248000441",
            productName: "Ginseng Candy",
            category: "Candy",
            price: "$1.52",
            image: "8803248000441.jpg",
        },*/
        /*{
            productBarcode: "8803248000427",
            productName: "Red Ginseng Candy",
            category: "Candy",
            price: "$1.52",
            image: "8803248000427.jpg",
        },*/
        {
            productBarcode: "8803248000618",
            productName: "Goryeo Red Ginseng Candy",
            category: "Candy",
            price: "$1.27",
            image: "8803248000618.jpg",
        },
        {
            productBarcode: "8807379411084",
            productName: "Bamboo Flavored Seaweed",
            category: "Seaweed",
            price: "$1.27",
            image: "8807379411084.jpg",
        },
        {
            productBarcode: "8807379415129",
            productName: "Seasoned Seaweed Shreds",
            category: "Seaweed",
            price: "$2.33",
            image: "8807379415129.jpg",
        },
        {
            productBarcode: "8809691861783",
            productName: "Roasted and Salted Seaweed Shreds",
            category: "Seaweed",
            price: "$1.69",
            image: "8809691861783.jpg",
        },
        {
            productBarcode: "8809305611063",
            productName: "Altori Honey Flavored Chestnuts",
            category: "Chesnuts",
            price: "$2.96",
            image: "8809305611063.jpg",
        },
        {
            productBarcode: "8809691861783",
            productName: "Steamed Altori Chestnuts",
            category: "Chesnuts",
            price: "$1.69",
            image: "8809691861783.jpg",
        },
        {
            productBarcode: "8801382127970",
            productName: "Grape Flavored Beverage 180ml",
            category: "Drinks",
            price: "$0.85",
            image: "8801382127970.jpg",
        },
        {
            productBarcode: "8801382134480",
            productName: "Apple Flavored Beverage 180ml",
            category: "Drinks",
            price: "$0.85",
            image: "8801382134480.jpg",
        },
        {
            productBarcode: "8801382131021",
            productName: "Pomegranate Flavored Beverage 180ml",
            category: "Drinks",
            price: "$0.85",
            image: "8801382131021.jpg",
        },
        {
            productBarcode: "8801382147619",
            productName: "Cocomong Yogurt Drink with Peach Flavor 200ml",
            category: "Drinks",
            price: "$0.85",
            image: "8801382147619.jpg",
        },
        {
            productBarcode: "8801382147602",
            productName: "Cocomong Yogurt Drink with Apple Flavor 200ml",
            category: "Drinks",
            price: "$0.85",
            image: "8801382147602.jpg",
        },
        {
            productBarcode: "8801382147596",
            productName: "Cocomong Yogurt Drink with Strawberry Flavor 200ml",
            category: "Drinks",
            price: "$0.85",
            image: "8801382147596.jpg",
        },
    ],
};

for(let i of products.data){
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name")
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //price
    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);

    card.appendChild(container);

    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value){
    //Get all category buttons
    let buttons = document.querySelectorAll(".categories");
    buttons.forEach ((button) => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {   
            button.classList.remove("active");
        }
    });

      //select all cards
      let elements = document.querySelectorAll(".card");
      //loop through all cards
      elements.forEach((element) => {
          //display all cards on 'all' button click
        if (value == "All") 
            {
                element.classList.remove("hide");
            } 
        else {
            //Check if element contains category class
            if(element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } 
            else {
                element.classList.add("hide");
            }    
          }
    });
}

// Function to handle search logic
function performSearch() {
    // Initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    // Loop through all elements
    elements.forEach((element, index) => {
        // Check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            // Display matching card
            cards[index].classList.remove("hide");
        } else {
            // Hide others
            cards[index].classList.add("hide");
        }
    });
}

// Search button click
document.getElementById("search").addEventListener("click", performSearch);

// Input field "keyup" event
document.getElementById("search-input").addEventListener("keyup", (event) => {
    // Check if the "Enter" key is pressed (keyCode 13)
    if (event.key === "Enter") {
        // Perform search when Enter is pressed
        performSearch();
    }
});


//Initially display all  products
window.onload = () => {
    filterProduct("All");
}
        