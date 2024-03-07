// Mendapatkan elemen berdasarkan ID

const namaElemen = document.getElementById('nama');
const umurElemen = document.getElementById('umur');
const alamatElemen = document.getElementById('alamat');
const pekerjaanElemen = document.getElementById('pekerjaan');

// Mengisi data biodata

const biodata = {
  nama: 'Kevin Pandu Samudera',
  umur: '14 Tahun',
  alamat: 'Batam, Kep - Riau',
  pekerjaan: 'Mahasiswa & Web Developer'
};

// Mengganti teks pada elemen-elemen dengan data biodata

namaElemen.textContent = `Nama: ${biodata.nama}`;
umurElemen.textContent = `Umur: ${biodata.umur} tahun`;
alamatElemen.textContent = `Alamat: ${biodata.alamat}`;
pekerjaanElemen.textContent = `Pekerjaan: ${biodata.pekerjaan}`;
