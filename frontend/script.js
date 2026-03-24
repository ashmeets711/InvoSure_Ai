// script.js - Frontend Logic for InvoSureAI

document.addEventListener('DOMContentLoaded', () => {
    console.log("InvoSureAI Frontend Initialized");

    // Example logic for the "Analyze" page simulation
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');

    if (dropZone) {
        dropZone.onclick = () => fileInput.click();

        fileInput.onchange = (e) => {
            if (e.target.files.length > 0) {
                handleUploadSimulation(e.target.files[0]);
            }
        };
    }
});

/**
 * Simulates the AI Agent processing an invoice
 * This will be replaced by a real API call to the Python backend later.
 */
function handleUploadSimulation(file) {
    const loader = document.getElementById('loader');
    const resultArea = document.getElementById('resultArea');
    const placeholder = document.getElementById('placeholder');

    // Show loading spinner
    if(placeholder) placeholder.classList.add('d-none');
    if(loader) loader.classList.remove('d-none');

    console.log(`Processing file: ${file.name}`);

    // Simulate 3 seconds of "AI Thinking" (OCR + GST Logic)
    setTimeout(() => {
        if(loader) loader.classList.add('d-none');
        if(resultArea) {
            resultArea.classList.remove('d-none');
            // Populate with mock data for the demo
            document.getElementById('vendorName').innerText = "Sharma Trading Co.";
            document.getElementById('gstinStatus').innerHTML = '<span class="badge bg-success">Valid</span> 29AAAAA0000A1Z5';
            document.getElementById('taxAnalysis').innerText = "Tax Mismatch: Calculated GST (18%) is ₹1,800, but invoice states ₹1,750.";
        }
    }, 3000);
}
// Mock Login Logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // For the demo, we just redirect to the dashboard
        window.location.href = 'index.html';
    });
}

// Mock Signup Logic
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Account created successfully for your business!");
        window.location.href = 'login.html';
    });
}