// var jawaban = 5 * 2;
// var soal = prompt('Berapakah hasil dari 2*5');

 // alert(jawaban)
// if( soal == jawaban ) {
//     alert("Selamat jawaban anda benar")
// } else {
//     alert('Mohon maaf jawaban anda belum tepat')
// }


var cek = true

for(cek; cek == true;) {
    var angka = prompt("Masukkan angka yang ingin dicek genap atau ganjil:");


    if(angka % 2 == 0) {
        alert(angka + ' adalah angka genap')
    } else if(angka % 2 == 1) {
        alert(angka+ ' adalah angka ganjil');
    } 
     else if(angka == 'Mbak Nabila') {
        alert('Mbak Nabila terosssss')
     } else {
        alert("Yang anda masukkan bukan angka!!!!")
    }

    var cek = confirm("Coba lagi?");

}

