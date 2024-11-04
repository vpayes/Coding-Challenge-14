// Setup HTML Structure for the Ticket System
// Fetch Tickets Using Async/Await and Handle Errors
document.addEventListener("DOMContentLoaded", () => {
    fetchTickets();
});

async function fetchTickets() {
    const loadingMessage = document.getElementById("loading-message");
    const errorMessage = document.getElementById("error-message");
    const ticketContainer = document.getElementById("ticket-container");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Fetched ticket failed. Please try again later.");

        const tickets = await response.json();

        // Ticket Availability 
        if (tickets.length === 0) {
            throw new Error("No unresolved tickets available.");
        }

        displayTickets(tickets);

    } catch (error) {
        // Display error message on the page
        errorMessage.textContent = error.message;
        console.error("Fetching tickets error:", error);
    } finally {
        // Hide the loading message
        loadingMessage.style.display = "None";
    }
}