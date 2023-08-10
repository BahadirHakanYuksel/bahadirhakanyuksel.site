const mainInputs = document.querySelectorAll('.inputMain')
const sendMailBtn = document.getElementById('sendMailBtn')
const animation = document.querySelector('.btnAnimation')
const contactMe = document.getElementById('contactMe')
const nameInput = document.getElementById('name_surname')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

// Mail Screen Open / Close Control
const contactBtn = document.getElementById('contactBtn')
contactBtn.addEventListener('click',() => {
    if(contactMe.style.display != 'block'){
        contactMe.style.display = 'block'
        setTimeout(() => {
            contactMe.style.opacity = '1'
            contactMe.style.height = '38rem'
            contactBtn.className = 'fa-solid fa-xmark'
        }, 1);
    }else closeTheContactMe()
})
document.getElementById('content').addEventListener('click',closeTheContactMe)
function closeTheContactMe(){
    contactMe.style.opacity = ''
    contactMe.style.height = ''
    contactBtn.className = 'fa-regular fa-message'
    setTimeout(() => {
        contactMe.style.display = ''
    }, 800);
}

// Inputs Control
nameInput.addEventListener('keyup',nameInputControl)
emailInput.addEventListener('keyup',emailInputControl)
messageInput.addEventListener('keyup',messageInputControl)

function nameInputControl(){
    const parent = nameInput.parentElement
    const alertMessage = nameInput.parentElement.children[1]
    if(nameInput.value.trim().length > 3){
        parent.style.border = '2px solid green'
        alertMessage.style.color = 'green'
        alertMessage.textContent = 'Succesfuly :)'
        return true
    }else{
        alertMessage.style.color = 'red'
        alertMessage.textContent = 'Enter Incorrectly !'
        alertMessage.style.opacity = '1'
        alertMessage.style.visibility = 'visible'
        parent.style.border = '2px solid red'
        return false
    }
}
function emailInputControl(){
    const value = emailInput.value.trim();
    const parent = emailInput.parentElement
    const alertMessage = emailInput.parentElement.children[1]
    if(value.length >= 16 && value.includes('@') && value.includes('.')){
        parent.style.border = '2px solid green'
        alertMessage.style.color = 'green'
        alertMessage.textContent = 'Succesfuly :)'
        return true
    }else{
        alertMessage.style.color = 'red'
        alertMessage.textContent = 'Enter Incorrectly !'
        alertMessage.style.opacity = '1'
        alertMessage.style.visibility = 'visible'
        parent.style.border = '2px solid red'
        return false
    }
}
function messageInputControl(){
    const parent = messageInput.parentElement
    const alertMessage = messageInput.parentElement.children[1]
    if(messageInput.value.trim().length >= 3){
        parent.style.border = '2px solid green'
        alertMessage.style.color = 'green'
        alertMessage.textContent = 'Succesfuly :)'
        return true
    }else{
        alertMessage.style.color = 'red'
        alertMessage.textContent = 'Enter Incorrectly !'
        alertMessage.style.opacity = '1'
        alertMessage.style.visibility = 'visible'
        parent.style.border = '2px solid red'
        return false
    }
}

// Send Mail
sendMailBtn.addEventListener('click',()=>{

    const BOOLname = nameInputControl()
    const BOOLemail = emailInputControl()
    const BOOLmessage = messageInputControl()

    if(BOOLname === true && BOOLemail === true && BOOLmessage === true){
        sendMail(nameInput.value.trim(),emailInput.value.trim(),messageInput.value.trim())
    }else alert('E-Mail not send , please TRY AGAIN !')
})
function sendMail(nameSurname,email,message){
    var params = {
        name : nameSurname,
        email : email,
        message : message
    }

    const serviceID = "service_jh05b7u"
    const templateID = "template_5h7ivq8"
    emailjs.send(serviceID,templateID,params)
    .then(res => {
        document.getElementById('name_surname').value = ""
        document.getElementById('email').value = ""
        document.getElementById('message').value = ""
        mainInputs.forEach(main => {
            const alertMessage = main.children[1]
            main.style.border = '2px solid grey'
            alertMessage.style.visibility = 'hidden'
            alertMessage.style.opacity = '0'
            alertMessage.style.color = 'red'
            alertMessage.textContent = 'Enter Incorrectly !'
        })
        btn_animation()
        setTimeout(() => {
            closeTheContactMe()
        }, 6000);
    })
    .catch(err => alert(err,'E-Mail not send , please TRY AGAIN !'))

}
// Animation
function btn_animation(){
    animation.style.background = ''
    animation.style.transition = ''
    animation.textContent = 'Sending'
    animation.style.width = '100%'
    animation.style.left = '0'
    setTimeout(() => {
        animation.textContent = 'Sended'
        animation.style.background = 'linear-gradient(to left, rgb(1, 108, 170),rgb(1, 201, 68))'
    }, 3000);
    setTimeout(() => {
        animation.style.width = ''
        animation.style.left = ''
        animation.style.transition = '1s'
    }, 5000);
}