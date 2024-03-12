// You can add your JavaScript code here
// For example, you can update the number of houses audited dynamically
const housesAuditedElement = document.getElementById('houses-audited');
let housesAudited = 0;

function updateHousesAudited(count) {
    housesAudited = count;
    housesAuditedElement.textContent = housesAudited;
}

// Example usage:
updateHousesAudited(10);