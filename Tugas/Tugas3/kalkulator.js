function calculate() {
    var angka1 = parseFloat(document.getElementById('angka1').value);
    var angka2 = parseFloat(document.getElementById('angka2').value);
    var operator = document.getElementById('operator').value;
    var result;
  
    switch (operator) {
        case '+':
            result = angka1 + angka2;
            break;
        case '-':
            result = angka1 - angka2;
            break;
        case '*':
            result = angka1 * angka2;
            break;
        case '/':
            if (angka2 !== 0) {
                result = angka1 / angka2;
            } else {
                result = 'Infinite (Tidak bisa membagi dengan 0)';
            }
            break;
        default:
            result = 'Operator tidak valid';
    }
  
    console.log('Hasil: ', angka1, operator, angka2, '= ', result);
    document.getElementById('result').innerHTML = 'Hasil: ' + result;
  
    document.write('<h4>Hasil:</h4>');
    document.write('<p>' + angka1 + ' ' + operator + ' ' + angka2 + ' = ' + result + '</p>');
    document.getElementById('result').innerHTML = 'Hasil: ' + result;
  }
  