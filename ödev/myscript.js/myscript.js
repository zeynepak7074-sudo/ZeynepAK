
let sepet = JSON.parse(localStorage.getItem('parfum_sepeti')) || [];

function sepeteEkle(urunAdi, fiyat) {
    const urun = { isim: urunAdi, ucret: fiyat };
    sepet.push(urun);
    
    localStorage.setItem('parfum_sepeti', JSON.stringify(sepet));
    
    alert(`${urunAdi} sepetinize başarıyla eklendi! 🌸`);
}

function sepetiGoster() {
    const sepetKonteyner = document.getElementById('sepetIcerik');
    const toplamFiyatAlani = document.getElementById('toplamFiyat');
    
    if (!sepetKonteyner) return; 

    if (sepet.length === 0) {
        sepetKonteyner.innerHTML = '<p style="text-align: center; color: #888;">Sepetiniz şu anda boş. 🌸</p>';
        toplamFiyatAlani.innerText = "0 TL";
        return;
    }

    let htmlIcerik = "<ul style='list-style: none; padding: 0;'>";
    let toplam = 0;

    sepet.forEach((urun) => {
        htmlIcerik += `<li style='display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f1f1f1;'>
            <span>${urun.isim}</span>
            <strong>${urun.ucret} TL</strong>
        </li>`;
        toplam += urun.ucret;
    });

    htmlIcerik += "</ul>";
    sepetKonteyner.innerHTML = htmlIcerik;
    toplamFiyatAlani.innerText = toplam + " TL";
}

function sepetiTemizle() {
    sepet = [];
    localStorage.removeItem('parfum_sepeti');
    sepetiGoster();
}

function kokuTestiHesapla(event) {
    event.preventDefault(); 

    const kokuTarzi = document.getElementById('soru1').value;
    const mevsim = document.getElementById('soru2').value;
    
    const sonucAlani = document.getElementById('quizSonuc');
    const textAlani = document.getElementById('onerilenParfum');
    
    let tavsiye = "";

    if (kokuTarzi === "tatli") {
        if (mevsim === "tatli") {
            tavsiye = "🍭 Vanilla Dream (Kış aylarının vazgeçilmez sıcak vanilya esintisi)";
        } else {
            tavsiye = "🍿 Flowerbomb Intense (Her mevsim dikkat çeken tatlı ve gurme bir koku)";
        }
    } 
  
    else if (kokuTarzi === "taze") {
        if (mevsim === "taze") {
            tavsiye = "💐 Miss Dior Cherry (İlkbahar ve yaz aylarına uygun cıvıl cıvıl taze çiçekler)";
        } else {
            tavsiye = "🌸 La Vie Est Belle (Dört mevsim kullanılabilecek zarif ve ferah bir dokunuş)";
        }
    } 

    else if (kokuTarzi === "agir") {
        if (mevsim === "agir") {
            tavsiye = "✨ Hypnotic Poison (Gece davetlerinde tüm gözleri üzerinize çekecek oryantal imza)";
        } else {
            tavsiye = "🔥 Libre Intense (Hem gündüz hem gece güçlü duruş sergileyen asil baharatlar)";
        }
    }

    textAlani.innerText = tavsiye;
    sonucAlani.style.display = "block";
}


function formGonder(event) {
    event.preventDefault(); 
    
    const isim = document.getElementById('name').value;
    
    alert(`Teşekkürler ${isim}! Mesajınız başarıyla iletildi. En kısa sürede geri dönüş sağlayacağız. 💌`);
    document.getElementById('contactForm').reset(); 
}

function satinAl() {
    if (sepet.length === 0) {
        alert("Sepetiniz boş olduğu için alışverişi tamamlayamazsınız! 🌸");
        return;
    }
    
    alert("Siparişiniz başarıyla alındı! ✨ Kokularınız en kısa sürede hazırlanıp kargoya verilecektir. Zeynep Perfume'ü tercih ettiğiniz için teşekkür ederiz! 💖");

    sepetiTemizle();
}

