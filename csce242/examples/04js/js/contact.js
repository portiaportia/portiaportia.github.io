//https://web3forms.com/
//"2cc869cb-a5d4-4b4b-b609-7d0a0bd4ea78"
const form = document.getElementById('contact-form');
const result = document.getElementById('result');

form.onsubmit = (event) => {
    event.preventDefault();     //don't go the action (another page)
    
    //collect all the name value pairs from the form
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log(json);
};