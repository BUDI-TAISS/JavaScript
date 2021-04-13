// var s = '   '


// for(i = 1; i <= 10; i++) {
//     for(j = 1; j <= i; j++) {
//         s = s + '*'
//         // console.log(s)

//     }
//     s = s+ '\n'
//     // console.log(s)

// }
// console.log(s)


// var u = ''

// for(a = 9; a >= 1; a--) {
//    for(b = 1; b <= a; b++) {
//     u = u + '*'
//    }
//    u = u+ '\n'
   
// }

// // console.log(u)

// console.log(s+u)

var s = '';


for(i = 1; i <= 10; i++) {
    // for kedua ini untuk membuat spasi tiap baris dengan jumlah baris yang mendapat spasi sesuai variable j

    // 2 kali 
    for(j = 100; j >= i; j--) {
        // alert('Nilai dari variabel j adalah: ' + j)
        // alert('Nilai dari variabel s sebelum adalah: \n' + s)
        s = s + ' ';
        // alert('Nilai dari variabel s sesudah adalah: ' + s)
    }
    for(k = 1; k <= i; k++) {
        s  = s+ '*';
    }
    for(l = 1; l <= i-1; l++) {
        s = s + '*';
    }
    s +='\n'
}

    console.log(s);