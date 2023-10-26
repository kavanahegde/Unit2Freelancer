// Initial data
const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
];

let totalStartingPrice = 0;
let averageStartingPrice = 0;
let numFreelancers = 0;

const freelancerList = document.getElementById("freelancer-list");
const averagePriceDisplay = document.getElementById("average-price");

// Function to add a new freelancer
function addFreelancer(name, occupation, startingPrice) {
    const freelancerElement = document.createElement("div");
    freelancerElement.className = "freelancer";
    freelancerElement.innerHTML = `<p>Name: ${name}</p><p>Occupation: ${occupation}</p><p>Starting Price: $${startingPrice}</p>`;
    freelancerList.appendChild(freelancerElement);

    //  average price
    totalStartingPrice += startingPrice;
    numFreelancers++;
    averageStartingPrice = totalStartingPrice / numFreelancers;
    averagePriceDisplay.textContent = `Average Starting Price: $${averageStartingPrice.toFixed(2)}`;
}

// Initial display of freelancers
for (const freelancer of freelancers) {
    addFreelancer(freelancer.name, freelancer.occupation, freelancer.startingPrice);
}

// Simulate the arrival of new freelancers every few seconds
setInterval(() => {
    // Simulate new freelancer data (replace this with your data source)
    const newFreelancer = {
        name: "Carol",
        occupation: "Programmer",
        startingPrice: Math.floor(Math.random() * 100) + 1, // Simulate a random starting price
    };

    // Add the new freelancer to the list
    addFreelancer(newFreelancer.name, newFreelancer.occupation, newFreelancer.startingPrice);
}, 5000); // Adjust the interval as needed
