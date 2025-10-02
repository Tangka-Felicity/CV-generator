// Function to display user input and hide input fields
document.getElementById('saveBtn').onclick = function() {
    const name = document.getElementById('inputName').value;
    const position = document.getElementById('inputPosition').value;
    const age = document.getElementById('inputAge').value;
    const location = document.getElementById('inputLocation').value;
    const email = document.getElementById('inputEmail').value;
    const phone = document.getElementById('inputPhone').value;
    const freelance = document.getElementById('inputFreelance').value;
    const skills = document.getElementById('inputSkills').value;

    // Update display fields
    document.getElementById('fullName').innerText = name;
    document.getElementById('positionTitle').innerText = position;
    document.getElementById('age').innerText = age;
    document.getElementById('location').innerText = location;
    document.getElementById('email').innerText = email;
    document.getElementById('phone').innerText = phone;
    document.getElementById('freelance').innerText = freelance;
    document.getElementById('skills').innerText = skills;

    // Show the CV display section and hide the input section
    document.getElementById('cv-section').classList.add('hidden');
    document.getElementById('display-section').classList.remove('hidden');
};

// Function to handle PDF download
document.getElementById('downloadBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const { jsPDF } = window.jspdf; // Access jsPDF from the window object
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text(`Name: ${document.getElementById('fullName').innerText}`, 10, 10);
    doc.text(`Position: ${document.getElementById('positionTitle').innerText}`, 10, 20);
    doc.text(`Age: ${document.getElementById('age').innerText}`, 10, 30);
    doc.text(`Location: ${document.getElementById('location').innerText}`, 10, 40);
    doc.text(`Email: ${document.getElementById('email').innerText}`, 10, 50);
    doc.text(`Phone: ${document.getElementById('phone').innerText}`, 10, 60);
    doc.text(`Freelance: ${document.getElementById('freelance').innerText}`, 10, 70);
    doc.text(`Skills: ${document.getElementById('skills').innerText}`, 10, 80);

    // Save the PDF
    doc.save('CV.pdf');
});