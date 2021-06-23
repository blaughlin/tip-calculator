bill = document.getElementById('bill_value')
tip = document.getElementById('tip_value')
people = document.getElementById('people_value')
const plus = document.getElementsByClassName("people_plus")[0].id
total = document.getElementById('total')
per_person = document.getElementById('per_person')
calculate = document.getElementById('calculate')
let i = 1
calculate.onclick = () => {
    const totalAmount = bill.value * ( 1+ tip.value/100)
    const splitTotal = (bill.value * ( 1+ tip.value/100))/people.value
    total.innerHTML = `$${totalAmount.toFixed(2)}`
    per_person.innerHTML = `$${splitTotal.toFixed(2)}`
}


function add(){
    i++
    document.getElementById('people_value').value = i
}

function subtract(){
    if (i > 1) {
        i--
        document.getElementById('people_value').value = i
    }
}