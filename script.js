//your JS code here. If required.
function functionName() {
    return functionName.name; // Return function name
}

window.functionName = functionName; // Attach function to window for Cypress

document.addEventListener("DOMContentLoaded", function () {
    alert(functionName()); // Show function name on page load
});