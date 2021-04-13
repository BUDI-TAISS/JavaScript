//Menghitung volume 2 kubus dengan algoritma biasa

//Mengetahui sisi masing-masing kubus

    var sisi_1 = 8
    var sisi_2 = 3

//Mengetahui volume masing-masing kubus

    volume_1 = sisi_1**3
    volume_2 = sisi_2**3

//Menjumlahkan volume masing-masing kubus

    volumeTotal = volume_1 + volume_2

//Menampilkan hasil penjumlahan volume

    alert('Jumlah volume total dari kubus 1 dan kubus 2 adalah '+volumeTotal)

//Menghitung volume 2 kubus dengan menggunakan function

    function jumlahVolumeDuaKubus(a,b) {
        var volumeA 
        var volumeB
        var total

            volumeA = a**3
            volumeB = b**3

            total   = volumeA + volumeB

        return total
    }

    alert('Ini adalah volume 2 kubus pertama '+jumlahVolumeDuaKubus(3, 5));
    alert('Ini adalah volume 2 kubus kedua '+jumlahVolumeDuaKubus(6, 7));