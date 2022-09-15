'use strict'


//Grabs the required info from the getData I think
function addData(data) {
    const info = document.createElement("p")
    const linebreak = document.createElement("br")
    
    const first_name = data.results[0].name.first
    const last_name = data.results[0].name.last
    const email = data.results[0].email
    const tele = data.results[0].phone

    info.append(first_name)
    info.append(last_name)
    info.append(email)
    info.append(tele)

    const otherdata = document.getElementById('firstlast')
    
    otherdata.append("Name: ")
    otherdata.append(first_name)
    otherdata.append(" ")
    otherdata.append(last_name)
    otherdata.append(",")
    otherdata.append("email: ")
    otherdata.append(email)
    otherdata.append(",")
    otherdata.append("phone: ")
    otherdata.append(tele)
    otherdata.append(linebreak)
    

  
}


function getData(url = 'https://randomuser.me/api/') {
    fetch(url)
    .then(response =>{
        //console.log(response)
        return response.json()
    })
    .then(data => {
        addData(data)
        
    }).catch(error =>{
        console.log(error)
    })
    
}


function getDataServer(url = 'https://randomuser.me/api/') {
    fetch(url)
    .then(response =>{
        return response.json()
    })
    .then(data => {
        addData(data)
    
    }).catch(error =>{
        console.log(error)
    })
    
}


async function getDirect(event) {
    event.preventDefault();
    getData()
    
}   

  
async function callServer(event) {
    event.preventDefault()
    getDataServer('/random-person') 

}


// function callServerExpress(event) {
//     event.preventDefault()
//     getDataServer('https://randomuser.me/api/')

// } 

document.addEventListener('DOMContentLoaded', () => {
    const linkname = document.getElementById("link-name")
    linkname.addEventListener('click', getDirect)

    const expresslink = document.getElementById("express-link")
    expresslink.addEventListener('click',callServer)


});

