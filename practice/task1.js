// Create a list of vendors (unordered)
var vendors = [
    { id: 3, name: "Vendor C", category: "Electronics", location: "Chennai" },
    { id: 1, name: "Vendor A", category: "Groceries", location: "Bangalore" },
    { id: 4, name: "Vendor D", category: "Stationery", location: "Mumbai" },
    { id: 2, name: "Vendor B", category: "Clothing", location: "Delhi" },
];
// Sort vendors by ID
var sortedVendors = vendors.sort(function (a, b) { return a.id - b.id; });
// Display all vendor details
console.log("Sorted Vendor List by ID:\n");
sortedVendors.forEach(function (vendor) {
    console.log("ID: ".concat(vendor.id));
    console.log("Name: ".concat(vendor.name));
    console.log("Category: ".concat(vendor.category));
    console.log("Location: ".concat(vendor.location));
    console.log("--------------------------");
});
