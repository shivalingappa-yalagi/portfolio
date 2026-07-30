const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch("https://script.google.com/macros/s/AKfycbwDtfYNRks5EiLa9uZZLreKoVD4LV-f1kaD3z8cVDM8O2476prIEvjKoQz-n3sIX00m5w/exec", {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if(result.status === "success"){
            alert("Thank you! Your message has been sent.");
            form.reset();
        }

    } catch(error){

        alert("Unable to send message.");
        console.error(error);

    }

});