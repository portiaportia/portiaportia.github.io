//https://web3forms.com/
//e.target is the form
document.getElementById('contact-form').onsubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    formData.append("access_key", "f45f3906-4be3-4f95-a4bd-820e85c09623");
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
};