// Define the Vendor type
type Vendor = {
    id: number;
    name: string;
    category: string;
    location: string;
};

// Create a list of vendors (unordered)
const vendors: Vendor[] = [
    { id: 3, name: "Vendor C", category: "Electronics", location: "Chennai" },
    { id: 1, name: "Vendor A", category: "Groceries", location: "Bangalore" },
    { id: 4, name: "Vendor D", category: "Stationery", location: "Mumbai" },
    { id: 2, name: "Vendor B", category: "Clothing", location: "Delhi" },
];

// Sort vendors by ID
const sortedVendors = vendors.sort((a, b) => a.id - b.id);

// Display all vendor details
console.log("Sorted Vendor List by ID:\n");

sortedVendors.forEach((vendor) => {
    console.log(`ID: ${vendor.id}`);
    console.log(`Name: ${vendor.name}`);
    console.log(`Category: ${vendor.category}`);
    console.log(`Location: ${vendor.location}`);
    console.log("--------------------------");
});
