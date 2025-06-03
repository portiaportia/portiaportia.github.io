//https://web3forms.com/
//"2cc869cb-a5d4-4b4b-b609-7d0a0bd4ea78"
const form = document.getElementById('contact-form');
const result = document.getElementById('result');

form.onsubmit = async(event) => {
    event.preventDefault();     //don't go the action (another page)
    
    //collect all the name value pairs from the form
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    const url = "https://api.web3forms.com/submit";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });
        
        const result = response.json();

        if (response.status == 200) {
            result.innerHTML = result.message;
        } else {
            console.log(response);
            result.innerHTML = result.message;
        }




    }catch(error){
        console.log(error);
    }


        
};