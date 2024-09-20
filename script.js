function printTable() {
    let tableNum = document.getElementById('NumToPrint').value;
    let minLength = parseInt(document.getElementById('minLength').value );
    let maxLength = parseInt(document.getElementById('maxLength').value );

    // if (isNaN(minLength) || isNaN(maxLength) || isNaN(tableNum)) {
    //     document.getElementById('displayTable').innerHTML = "Please enter valid numbers.";
    //     return;
    // }

    let tableHtml = '';

    for (let i = minLength; i <= maxLength; i++) {
    tableHtml += `${tableNum} x ${i} = ${tableNum * i} <br>`;
    }

    document.getElementById('displayTable').innerHTML = tableHtml;
}
function refresh(){
    document.getElementById('NumToPrint').value="";
    document.getElementById('minLength').value="";
    document.getElementById('maxLength').value="";
    document.getElementById('displayTable').innerHTML="";
}