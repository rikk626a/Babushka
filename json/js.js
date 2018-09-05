let retter;

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
     //hent json
     let jsonData = await fetch("json/menu.json");
     retter = await jsonData.json();
     //console.log(retter);
     visRetter(retter, "retter");
     lavFiltre();
}

function visRetter(retter, overskrift) {

     let menuTemplate = document.querySelector("[data-template]");
     let templateModtager = document.querySelector("[data-container]");
     templateModtager.innerHTML = "";
     document.querySelector("#overskrift").textContent = overskrift;


     retter.forEach(hverRet => {

          let klon = menuTemplate.cloneNode(true).content;
          klon.querySelector("[data-navn]").textContent = hverRet.navn;
          klon.querySelector("[data-kortbeskrivelse]").textContent = hverRet.kortbeskrivelse;
          klon.querySelector("[data-pris]").textContent = hverRet.pris;
          klon.querySelector("[data-billede]").setAttribute("src", "imgs/small/" + hverRet.billede + "-sm.jpg")
          templateModtager.appendChild(klon);

     });
}

function lavFiltre() {

     let forretter = retter.filter(ret => ret.kategori == "forretter");
     let hovedretter = retter.filter(ret => ret.kategori == "hovedretter");
     let desserter = retter.filter(ret => ret.kategori == "desserter");
     let drikkevare = retter.filter(ret => ret.kategori == "drikkevare");

     document.querySelector('#filter-alle').addEventListener("click", () => {
          visRetter(retter);

     });
}
document.querySelector('#forretter').addEventListener("click", () => {
     visRetter(forretter, "Forretter");
});

document.querySelector('#filter-hovedretter').addEventListener("click", () => {
     visRetter(hovedretter, "Hovedretter");
});

document.querySelector('#filter-desserter').addEventListener("click", () => {
     visRetter(desserter, "Desserter");
});

document.querySelector('#filter-drikkevare').addEventListener("click", () => {
     visRetter(drikkevare, "Drikkevare");
});

klon.querySelector(".data-ret").addEventListener("click", () => {
     visModal(visModal);
});

function visModal() {
     document.querySelector("#modal").classList.add("vis");
}


function visModal() {
     document.querySelector("#modal").classList.add("vis");

     klon.querySelector(".data-billede").addEventListener("click", () => {
          visModal(person);
     });

     function visModal(personen) {
          // . . . vis
          document.querySelector(".modal-navn").textContent = personen.navn;
          document.querySelector(".modal-billede").src = " " + personen.billede;
          document.querySelector(".modal-billede").alt = "Foto af" + personen.navn;
          // . . . skjul
     }

     document.querySelector("#modal button").addEventListener("click", skjulModal);
}

function skjulModal() {
     document.querySelector("#modal").classList.remove("vis");
}
