/*eslint-env browser*/
/*jslint-env browser*/

function display() {
    "use strict";
    window.console.log("Welcome to The Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all the commands")
    window.console.log("view - To view existing inventory");
    window.console.log("update - Update an existing products inventory");
    window.console.log("exit - Exit from system");
    window.console.log("");
}
function view(inventory) {
    "use strict";
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    window.console.log("");
}

function update(inventory){
    "use strict";
    var foundsku = false;
    var quantityUpdated = false;
    var skuNumber = parseInt(window.prompt("Enter the sku number of the product"), 10);
    inventory.forEach(function (product){
        if(product[0] === skuNumber){
            foundsku = true;
            while(!quantityUpdated){
                var quantity = parseInt(window.prompt("Enter the new quantity"), 10);
                if(!isNaN(quantity)) {
                    product[2] = quantity;
                    window.console.log("Quantity updated successfully")
                    quantityUpdated = true;
                }else {
                    window.console.log("Please enter a valid number as quantity");
                    window.console.log("");
                }
            }
        }  
    });
    if(!foundsku){
        window.console.log("Product with sku number:" + skuNumber + " not found"); 
    } 
}

function main() {
    "use strict";
    var inventory = [[4824, "Shirt", 10, 15.99],[6343, "Jeans", 22, 39.99],[3223, "Socks", 36, 9.99],[2233, "Hat", 12, 14.99],[9382, "Jacket", 5, 49.99]];
    display();
    var quit = false;

    while(!quit){
        var command = window.prompt("Enter command");
        if(command !== null){
            switch(command){
                case "show":
                    display();
                    break;
                case "view":
                    view(inventory);
                    break;
                case "update":
                    update(inventory);
                    break;
                case "exit":
                    quit = true;
                    break;
                default:
                    window.alert("Please enter a valid command");
                    break;
            }
        }else {
            break;
        }
    }
    window.console.log("Program Terminated")
}

main();

