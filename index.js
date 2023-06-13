function calculateTip() {
    var total = parseFloat(document.getElementById('total').value);
    var service = parseFloat(document.getElementById('service').value);
    var people = parseInt(document.getElementById('people').value);
  
    if (isNaN(total) || isNaN(service) || isNaN(people) || total <= 0 || people < 1) {
      document.getElementById('result').innerHTML = "Por favor, preencha todos os campos corretamente.";
      return;
    }
  
    var tipAmount = total * service;
    var totalAmount = total + tipAmount;
    var perPerson = tipAmount / people;
    
    document.getElementById('result').innerHTML = "Valor total: R$" + totalAmount.toFixed(2) + "<br>Gorjeta por pessoa: R$" + perPerson.toFixed(2);
  }
 