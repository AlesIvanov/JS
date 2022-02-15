import $ from 'jquery'

/*
$.get("./api", data => {
    console.log(data)
})
*/

/*
let user = {
    name: 'John',
    surname: "Smith"
}

fetch('./api', {
    method: 'POST',
    header: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: {
        name: "John",
        surname: "Smith"
    }
})
    .then(data => data.text())
    .then((text)=> {
        console.log(text)
    })
*/

let name = "John"

let products = []

$("button").click(() => {
    $.post("./api/index.php").done((data) => {
        for(let product of JSON.parse(data)){
            products.push(product)
        }
    })
    console.log(products)
})



