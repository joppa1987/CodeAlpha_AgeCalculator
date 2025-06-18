document.getElementById('calculate-btn').addEventListener('click', function() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    // Validate inputs
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('Please enter valid values for all fields');
        return;
    }
    
    // Validate date
    const inputDate = new Date(year, month - 1, day);
    if (inputDate.getDate() !== day || inputDate.getMonth() !== month - 1 || inputDate.getFullYear() !== year) {
        alert('Please enter a valid date');
        return;
    }
    
    // Calculate age
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    
    // Adjust for negative months or days
    if (ageDays < 0) {
        ageMonths--;
        // Get the last day of the previous month
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += lastDayOfMonth;
    }
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Your age is:</strong></p>
        <p>${ageYears} years, ${ageMonths} months, and ${ageDays} days</p>
    `;
    resultDiv.classList.add('show');
});