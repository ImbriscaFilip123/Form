const form = document.querySelector(".form-wrapper");
const formButton = document.querySelector(".formSubmit");

formButton.addEventListener("click", () => {

    const email = document.querySelector(".formEmail").value;
    const name = document.querySelector(".formName").value;
    const password = document.querySelector(".formPassword").value;
    const adress = document.querySelector(".formAdress").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let isValid = true;

    if(!emailRegex.test(email)){
        document.getElementById("emailError").textContent = 'Email invalid';
        isValid = false;
    } 

    if(!passwordRegex.test(password)){
        document.getElementById("passwordError").textContent = 'Parola nu corespunde cerintelor';
        isValid = false;
    }

    if(!name){
        document.getElementById("nameError").textContent = 'Introdu Numele tau';
        isValid = false;
    }

    if(!adress){
        document.getElementById("adressError").textContent = 'Introdu Adresa ta';
        isValid = false;
    }

    if(isValid){
       form.style.opacity = "0"; 

   const formValidation = document.querySelector(".form-validation");
   formValidation.style.opacity = "1";

        const contactDetails = document.createElement("div");

        contactDetails.innerHTML = `
          <h3>Contact Details</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Address:</strong> ${adress}</p>
       `;

    formValidation.appendChild(contactDetails);


    }



})