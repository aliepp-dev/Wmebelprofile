// Menunggu sampai dokumen HTML selesai dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Mengecek apakah elemen formulir kontak ada di halaman saat ini
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Mencegah halaman mentransmisi/refresh saat formulir dikirim
            event.preventDefault();

            // Mengambil nilai input dari kolom isian
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validasi Sederhana: Memastikan tidak ada kolom yang kosong
            if (name === '' || email === '' || message === '') {
                formMessage.style.color = '#ef4444'; // Warna merah untuk peringatan
                formMessage.textContent = 'Harap isi semua kolom terlebih dahulu!';
                return;
            }

            // Jika semua kolom sudah terisi
            formMessage.style.color = '#10b981'; // Warna hijau untuk sukses
            formMessage.textContent = `Pesan berhasil dikirim! Terima kasih, ${name}.`;

            // Mengosongkan isian formulir kembali
            contactForm.reset();
        });
    }
});