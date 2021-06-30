alert('Working');
var firstName = ["Kostas", "Giannis", "Giorgos", "Mpampis", "Alex", "Panos", "Sotiris", "Takis", "Makis", "Xristos", "Nikos", "Aggelos"]

var lastName =  ["Zafolias", "Throubas", "Rizopoulos", "Papandreou", "Papadopoulos"]

function getName() {
    var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)];
    return randomName;
}

function nameQty(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = '';
    if (userQty > 10) {
        document.querySelector('.nameList').innerHTML = 'ONLY 10 NAMES WILL BE GENERETE';
    }
    else{
        for (var i = 0; i < userQty; i++) {
            document.querySelector('.nameList').innerHTML += getName() + '<br>';
        }
    }
}