//https://api.web3forms.com/submit

const getEmailResult = async() => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    //show please wait message
    const result = document.getElementById("result");
    result.innerHTML = "Please wait....";

    try {
        const response = await fetch("https://api.web3forms.com/submit",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
}

document.getElementById("contact-form").onsubmit = async(e) => {
    e.preventDefault();

    getEmailResult();
}