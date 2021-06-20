bill = document.getElementById('bill_value')
tip = document.getElementById('tip_value')
total = document.getElementById('total')
calculate = document.getElementById('calculate')

calculate.onclick = () => {
    const totalAmount = bill.value * ( 1+ tip.value/100)
    total.innerHTML = `$${totalAmount.toFixed(2)}`
}
