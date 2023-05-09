let html = document.documentElement;
console.log(html.clientWidth);
if (html.clientWidth < 800){
    alert("small screen");
    window.location.href = 'SmallScreen.html';
}




// function for sending email
function sendMail(){
    // vocabluary for having an access to HTML elemets 
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    // My ID's for email
    const servieID = "service_ai280au"
    const templateID = "template_60qz6c1"

    
    // sending email and returning HTML elemets to default value
    emailjs.send(servieID, templateID, params)
    .then(
        // if email was send without ERRORS
        res =>{
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("message").value = ""

            alert("Mail was sent")
        }
    )
        // if there were some ERRORS
    .catch(arr => console.log(err))
    
}



