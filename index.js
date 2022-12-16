function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    const servieID = "service_ai280au"
    const templateID = "template_60qz6c1"

    
    emailjs.send(servieID, templateID, params)
    .then(
        res =>{
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("message").value = ""

            alert("Mail was sent")
        }
    )

    .catch(arr => console.log(err))
    
}


function test(){
    console.log("This is WORK")
}

