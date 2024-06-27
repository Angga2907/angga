const profileForm = document.getElementById('profileForm');
const profileOutput = document.getElementById('profileOutput');

profileForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(profileForm);

  const nama = formData.get('nama');
  const umur = formData.get('umur');
  const pekerjaan = formData.get('pekerjaan');
  const tanggal = formData.get('tanggal');

  const profileHTML = `
      <h2>Profil Pengguna:</h2>
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Umur:</strong> ${umur}</p>
      <p><strong>Pekerjaan:</strong> ${pekerjaan}</p>
      <p><strong>Tanggal:</strong> ${tanggal}</p>
  `;

  profileOutput.innerHTML = profileHTML;

  profileForm.reset();
});