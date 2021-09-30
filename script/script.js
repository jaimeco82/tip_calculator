
function  calculateTip(){
  //* Gets Input from User
  const totalBill = document.getElementById('bill_amount').value;
  const quality = document.getElementById('quality').value;

  


  //* Checks to see if User put in the needed information
  if( totalBill === ''|| quality === '0'){
    alert('Please Eneter a numerical Value');
    return
  }else
  {
    //* Calculates Tip
    const billTotal = parseFloat(totalBill);
    const deservedTip = parseFloat(quality);
    const tipTotal= billTotal * deservedTip;
    let splitBill;

    const people = document.getElementById('number_of_people').value;

    //* Checks to see how many people are Splitting the bill
    if(people === '' || people === '0'){
       splitBill = 1;
    }else{
       splitBill = parseInt(people);
    }

    let total = tipTotal;

    //*Calculates How much tip each person or one person should pay
    total = Math.round(total*100)/100;
    total = total.toFixed(2);


      if(splitBill <= 1){
        document.getElementById("total_due").innerHTML = 'Total tip due is: ' +'</br>'+'$ '+ total;
      
      }else{
        total = total/splitBill;
        total = total.toFixed(2);

        document.getElementById("total_due").innerHTML = 'Tip due for each is: ' +'</br>'+ '$ '+ total;

    }
     
     }
    
}

//* Starts Calculation Function
document.getElementById('btnSubmit').onclick = function(){
  calculateTip();
}
//* Resets Calculator
function restCalc(){
  document.getElementById('myForm').reset();




}

