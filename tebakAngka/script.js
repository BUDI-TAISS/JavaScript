    // Membuat perulangan untuk mereset nilai dari jawaban agar permainan dapat berjalan baik
    for(i = true; i ==true; i = confirm('Mau main lagi kak?')) {
        // Membangkitkan angka random sebagai jawaban permainan
    var jawaban = Math.random()

    if(jawaban <= 0.1) {
    jawaban = 1
    } else if(jawaban <= 0.2) {
    jawaban = 2
    } else if(jawaban <= 0.3) {
    jawaban = 3
    } else if(jawaban <= 0.4) {
    jawaban = 4
    } else if(jawaban <= 0.5) {
    jawaban = 5
    } else if(jawaban <= 0.6) {
    jawaban = 6
    } else if(jawaban <= 0.7) {
    jawaban = 7
    } else if(jawaban <= 0.8) {
    jawaban = 8
    } else if(jawaban <= 0.9) {
    jawaban = 9
    } else {
    jawaban = 10
    }

     //Membuat popup awal sebagai pembuka permainan
    alert('Coba tebak angka dari 1 - 10\nKamu punya 3 kesempatan')

    // Membuat perulangan yang berperan sebagai nyawa atau kesempatan bermain
    for(i = 3; i >= 1; i--) {
        kesempatan = i-1
    //Menangkap jawaban tebakan dari pemain
    tebakan = prompt('Masukkan angka tebakan')
    //Membuat penanganan apabila tebakan pemain tidak sesuai harapan 
    if(tebakan == '') {
        alert('Maaf anda tidak menjawab apapun')
        i = i + 1
    } else if(tebakan == null){
        i = -1
    }
    //Membuat aturan permainan
    if(tebakan != '' && tebakan != null) {
        if(tebakan == jawaban ) {
            alert('Anda benar\nAngka yang dicari adalah '+jawaban)
            i = -1
            } else if(tebakan < jawaban) {
                if(kesempatan == 0) {
                    alert('Tebakan anda terlalu rendah\nKesempatan anda sudah habis')
                } else {
                    alert('Tebakan anda terlalu rendah\nAnda masih memiliki kesempatan '+kesempatan+' kali')
                }
            } else {
                if(kesempatan == 0) {
                    alert('Tebakan anda terlalu tinggi\nKesempatan anda sudah habis')
                } else {
                    alert('Tebakan anda terlalu tinggi\nAnda masih memiliki kesempatan '+kesempatan+' kali')
                }
            
            }
    }

    }
    if(i == 0) {
        alert('Maaf anda kalah. Angka yang dicari adalah '+jawaban)
    }
    // alert('Nilai dari i adalah '+i)
    }

    alert("Terima kasih telah bermain")