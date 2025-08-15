// Update current time every second
function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toString();
}
setInterval(updateTime, 1000);
updateTime();

function salam() {
    let nama = document.getElementById("nameInput").value;
    document.getElementById("greeting").textContent = `Hai ${nama}, selamat datang di situs saya!!`;
}

document.getElementById("sayHi").addEventListener("click", salam);


// Handle form submit
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = e.target.nama.value;
    const tgl = e.target.tanggalLahir.value;
    const gender = e.target.gender.value;
    const pesan = e.target.pesan.value;

    document.getElementById('output').innerHTML = `
        <p><strong>Current time:</strong> <span id="currentTime">${new Date().toString()}</span></p>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tgl}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;
});
