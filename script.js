const btnHitung = document.querySelector('.hitung');
const umur = document.querySelector('.umur');

btnHitung.addEventListener('click', () => {
    const tglLahir = document.querySelector('.date').value;
    const { tahun, bulan, hari } = hitungUmur(tglLahir);

    if (isNaN(tahun) || tahun < 0) {
        return umur.innerHTML = "Tidak Valid, Isi dengan Benar !";
    }

    return umur.innerHTML = `${tahun} Tahun ${bulan} Bulan ${hari} Hari`;
});

function hitungUmur(tglLahir) {

    const today = new Date();
    const tglUltah = new Date(tglLahir);

    let tahun = today.getFullYear() - tglUltah.getFullYear();
    let bulan = today.getMonth() - tglUltah.getMonth();
    let hari = today.getDate() - tglUltah.getDate();

    if (bulan < 0 || (bulan === 0 && hari < 0)) {
        tahun--;
        bulan += 12;
    }

    if (hari < 0) {
        const bulanTerakhir = new Date(today.getFullYear(), today.getMonth() - 1, tglUltah.getDate()).getDate();
        const hariDiBulanTerakhir = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        hari = hariDiBulanTerakhir - bulanTerakhir + today.getDate();
    }

    return { tahun, bulan, hari };
}