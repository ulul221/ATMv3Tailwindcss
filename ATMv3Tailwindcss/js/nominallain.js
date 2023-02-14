let saldo = 1000000
const input = document.getElementById('input')

alert(`Saldo anda adalah ${saldo}`)
function button() {
    if (input.value < saldo) {
        if (input.value == "") {
            alert('Nominal tidak boleh kosong')
        }else if (input.value % 50000 == 0) {
            const konfirmasi = confirm(`Anda akan menarik sebesar ${input.value}?`)
            if (konfirmasi) {
                location.href = '/html/keluar.html'
                alert(`Sisa saldo anda adalah ${saldo - input.value}`)
            }
        }else(
            alert('Nominal tidak sesuai')
            )
    }else(
        alert('Saldo tidak cukup')
    )
}