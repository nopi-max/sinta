const klik = document.getElementById("klik");
let resepAktif = null;

const resepList = [
    {judul:"🍳 Nasi Goreng", kategori:"sarapan", bahan:["Nasi","Telur","Kecap"], cara:"Masak semua bahan sampai harum."},
    {judul:"🥪 Roti Bakar", kategori:"sarapan", bahan:["Roti","Coklat"], cara:"Panggang roti hingga coklat meleleh."},
    {judul:"🍌 Pisang Goreng", kategori:"cemilan", bahan:["Pisang","Tepung"], cara:"Goreng sampai keemasan."},
    {judul:"🧀 Telur Keju", kategori:"cemilan", bahan:["Telur","Keju"], cara:"Goreng telur dengan keju."},
    {judul:"🍓 Es Susu Stroberi", kategori:"minuman", bahan:["Susu","Sirup stroberi"], cara:"Campur dan sajikan dingin."},
    {judul:"🥤 Es Teh Manis", kategori:"minuman", bahan:["Teh","Gula","Es"], cara:"Seduh teh dan tambahkan es."}
];

function tampilResep() {
    klik.play();
    const kat = document.getElementById("kategori").value;
    const filter = kat === "all" ? resepList : resepList.filter(r=>r.kategori===kat);
    resepAktif = filter[Math.floor(Math.random()*filter.length)];

    document.getElementById("judulResep").innerText = resepAktif.judul;
    document.getElementById("cara").innerText = resepAktif.cara;

    const ul = document.getElementById("bahan");
    ul.innerHTML="";
    resepAktif.bahan.forEach(b=>{
        let li=document.createElement("li");
        li.innerText=b;
        ul.appendChild(li);
    });

    sparkle();
}

function filterResep() {
    tampilResep();
}

function simpanFavorit() {
    if(!resepAktif) return;
    document.getElementById("favText").innerText =
        "❤️ Favorit: " + resepAktif.judul;
}

function sparkle() {
    const sp = document.querySelector(".sparkle");
    for(let i=0;i<6;i++){
        let s=document.createElement("span");
        s.innerText="✨";
        s.style.left=Math.random()*100+"vw";
        s.style.animationDuration=(Math.random()*3+2)+"s";
        sp.appendChild(s);
        setTimeout(()=>s.remove(),5000);
    }
}






