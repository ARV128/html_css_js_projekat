const proizvodi=[
    {
    id: 1,
     slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnGKJi1LSK38e42datEhz27J9vSIbFl_exg&s",
     naziv: "kugla sladoleda od cokolade",
     opis: "Kugla sladoleda od cokolade sa komadicima cokolade",
     staraCena: 150,
     novaCena: 120,

    },

    {
    id: 2,
     slika: "https://cemarket.rs/wp-content/uploads/2019/11/vanila.png",
     naziv: "kugla sladoleda od vanile",
     opis: "Kugla sladoleda od vanile sa komadicima cokolade",
     staraCena: 150,
     novaCena: 120,

    },

    {
    id: 3,
     slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnGKJi1LSK38e42datEhz27J9vSIbFl_exg&s",
     naziv: "kugla sladoleda od jagode",
     opis: "Kugla sladoleda od cokolade sa komadicima cokolade",
     staraCena: 150,
     novaCena: 120,

    },

    {
    id: 4,
     slika: "https://cemarket.rs/wp-content/uploads/2019/11/vanila.png",
     naziv: "kugla sladoleda od karamele",
     opis: "Kugla sladoleda od vanile sa komadicima cokolade",
     staraCena: 150,
     novaCena: 120,

    }
];


 function dodajUKorpu(index){
    let korpa=JSON.parse(localStorage.getItem("korpa")) || [];
    korpa.push(proizvodi[index]);

    localStorage.setItem("korpa",JSON.stringify(korpa));
    alert("Proizvod je dodat u korpu!");
    

 }


function ucitajProizvode(){
    const sviProizvodiDiv=document.getElementById("sviproizvodi");
    sviProizvodiDiv.innerHTML="";

    proizvodi.forEach((proizvod,index) => {
          const proizvodDiv=document.createElement("div");
          proizvodDiv.innerHTML=`
           <div class="proizvodheder">
             <img src="${proizvod.slika}" alt="${proizvod.naziv}">
           </div>
           <p class="nazivproizvoda"><strong>${proizvod.naziv}</strong></p>
           <p>${proizvod.opis}</p>
           <i class="fa-solid fa-tag"></i>
           <span class="staracena">Stara cena: ${proizvod.staraCena}RSD</span>
           <span class="novacena">Nova cena: ${proizvod.novaCena}RSD</span>
            <button class="dodaj" data-id="${proizvod.id}"><i class="fa-solid fa-cart-plus"></i>Dodaj u korpu</button>
          `;

          sviProizvodiDiv.appendChild(proizvodDiv);
    });

    const dugmici=document.querySelectorAll(".dodaj");
    dugmici.forEach((dugme) => {
        dugme.addEventListener("click",() => {
           const index=dugme.getAttribute("data-id");
           dodajUKorpu(index);
        });
    });
    
}

window.addEventListener("DOMContentLoaded",ucitajProizvode);