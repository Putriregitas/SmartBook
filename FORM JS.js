function Welcome(){
    alert("Welcome to my website !")
}

function ValidateForm(){
    var nama = document.forms["Pendaftaran"]["nama"].value;
    var email = document.forms["Pendaftaran"]["email"].value;

    if (!nama || !email) {
        alert("Mohon melengkapi form data yang kosong !");
        return ;
      }

    let tabel = document.getElementById('tabel');
    var newRow = tabel.insertRow(1);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);

    
    cell1.innerHTML=nama;
    cell2.innerHTML=email;

    if (nama && email) {
        alert("Data berhasil dimasukkan !")
        return;
    }
}

