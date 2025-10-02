document.getElementById("loginBtn").addEventListener("click",function(e){
      e.preventDefault();

      let email=document.getElementById("email_login").value.trim();
      let lozinka=document.getElementById("password_login").value;

      let sviKorisnici=JSON.parse(localStorage.getItem("sviKorisnici")) || [];
      if(sviKorisnici.length===0){
        alert("Nema registrovanih korisnika");
        return;
      }

      for(let i=0; i<sviKorisnici.length;i++){
        if(sviKorisnici[i].email===email && sviKorisnici[i].lozinka===lozinka){
            alert("Uspesno ste se prijavili!");
            window.location.href="ponuda.html";
            return;
        }
      }
      alert("Pogresan email ili lozinka!");
      

});