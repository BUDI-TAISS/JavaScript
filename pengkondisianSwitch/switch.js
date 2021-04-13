
// var rumus = angka > 1 && angka % 2 != 0 && angka % 3 !=0 || angka % 4 != 0 &&  angka / 1 == angka;
// if(rumus) {
//     alert(angka + ' adalah bilangan prima')
// } else {
//     alert(' yang anda masukkan bukan angka!!')
// }

// var i = true


//  while(i) {
//     var angka = prompt('Masukkan angka :');

//     switch( angka ) {
//         case  '1' :
//             alert('Anda memasukkan angka 1')
//             break;
//         case '2' : 
//             alert('Anda memasukkan angka 2');
//             break;
//         case '3' :
//             alert('Anda memasukkan angka 3');
//             break;
//         case '' :
//             alert('Angkanya mana woiii')
//             break;
//         default :
//             alert("Angka yang masukkan salah!!")
//             break;
//         }  
//     confirm('Main Lagi?')
//  }

 for(i = true; i; i = confirm('Main lagi bang?')) {
     var item = prompt('Masukkan nama makanan atau minuman : \n(contoh : nasi, daging, susu, hamburger, softdrink) ')

     switch(item) {
        case 'nasi' :
        case 'daging' :
        case 'susu' :
            alert('Anda memilih minuman yang SEHAT')
            break;
        case 'hamburger' :
        case 'softdrink' :
            alert('Anda memilih makanan yang tidak SEHAT')
            break;
        case '' :
            alert("Ckckckck, suruh milih malah dikosongin")
            break;
        default :
            alert('Anda memasukkan nama makanan atau minuman yang tidak terdaftar dalam database kami')
            
     }
 }
            // var item = prompt('Masukkan nama makanan atau minuman : \n(contoh : nasi, daging, susu, hamburger, softdrink) ')

            // switch(item) {
            //     case 'nasi' :
            //         alert('Anda memilih makanan yang SEHAT')
            //         break;
            //     case 'daging' :
            //         alert('Anda memilih makanan yang SEHAT')
            //         break;
            //     case 'susu' :
            //         alert('Anda memilih minuman yang SEHAT')
            //         break;
            //     case 'hamburger' :
            //         alert('Anda memilih makanan yang tidak SEHAT')
            //         break;
            //     case 'softdrink' :
            //         alert('Anda memilih makanan yang tidak SEHAT')
            //         break;
            //     default :
            //         alert('Anda memasukkan nama makanan atau minuman yang salah!!')
            // }