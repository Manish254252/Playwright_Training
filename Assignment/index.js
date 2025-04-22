function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const jsonData = {
        name: name,
        email: email,
        age: age
    };
    console.log(jsonData);

    localStorage.setItem('formData', JSON.stringify(jsonData));
    alert('Form submitted successfully!');

    window.location.href = "./home.html"

    // document.getElementById('jsonOutput').textContent = JSON.stringify(jsonData, null, 2);
}