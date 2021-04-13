var lagi = true
//Menggunakan keyword while
// while(lagi ) {
//     var angka = prompt('Masukkan angka yang mau dicek:');

//     if(angka  != 0 && angka > 1 && angka % 2 != 0 && angka % 3 !=0 && angka % 4 != 0) {
//         alert(angka + ' adalah bilangan prima')
//     } else if(angka == 2 || angka == 3) {
//         alert(angka + ' adalah bilangan prima')
    
//     } else {
//         alert(angka + ' bukan prima')
//     }
//     lagi = confirm("Coba lagi??")
// }

//Mengunakan keyword for



for(i = true; i; i = confirm("Coba lagi??")
) {
    var angka = prompt('Masukkan angka yang mau dicek:')
    var verify = angka / 1 == angka

    if(angka  != 0 && angka > 1 && angka % 2 != 0 && angka % 3 !=0 && angka % 4 != 0 && verify) {
        alert(angka + ' adalah bilangan prima')
    } else if(angka == 2 || angka == 3) {
        alert(angka + ' adalah bilangan prima')
    } else if( !verify) {
        alert('Yang bener dong bang, suruh masukkin angka malah string hadehh')
        // alert(verify)
    }
    // } else if(typeof(angka) == string) {
    //     alert('Yang bener dong bang, suruh masukkin angka malah string hadehh')
    // } 
    else {
        alert(angka + ' bukan prima')
    }

}

alert('Terimakasih telah menggunakan alat kami:)')