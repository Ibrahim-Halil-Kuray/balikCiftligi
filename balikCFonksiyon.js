// Stok miktarri 500 kg uzerinde olan baliklar
let stockDizisi = [];

let stokKontrolEt = () => {
    fishFarm.map(obje => {
        if (obje.stockVolumeInKg > 500) {
            stockDizisi.push(obje.fishType)
        }
    })
}

//Istenen fiyat araligindeaki balik turlerini bulma fonksiyonu

let fiyatAraligindakiBaliklar = [];

let fiyatiKontrolEt = () => {
    fishFarm.map(obje => {
        if (obje.price > 9 && obje.price < 12) {
            fiyatAraligindakiBaliklar.push(obje.fishType)
        }
    })
}

// Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?

let berndeKisSatilanlar = [];

let berndeKisSatilanlariBul = () => {
    fishFarm.map(obje => {
        if (obje.season == "Winter" && obje.saleLocations.includes("BE")) {
            berndeKisSatilanlar.push(obje.fishType)
        }
    })
}


//Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
function gunEkle(date, days) {
    let tarih = new Date(Number(date))
    tarih.setDate(date.getDate() + days)
    return tarih
}

let tarihSiralamasi = () => {
    fishFarm
        .map(fish => {
            return {
                "ad": fish.fishType,
                "skt": gunEkle(fish.entryDate, fish.durationInDays)
            }
        })
        .sort((a, b) => a.enddate - b.enddate)
        .map(a => {
            console.log("Balik adi: ", a.ad, " Son Kullanma Tarihi ", a.skt)
        })
}

// Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.

let avrupadan = [];

let avrupaBirligindenGelenleriBul = () => {
    fishFarm.map(mense => {
        if ((mense.price < 10) && (mense.originCountry == ("Spain") || mense.originCountry ==
                ("Norway") || mense.originCountry == ("Italy") || mense.originCountry == ("France") ||
                mense.originCountry == ("GREECE") || mense.originCountry == ("Poland"))) {
            avrupadan.push(mense.fishType)
        }
    })

}
//Toplam balik stoku ne kadardir?

let toplam = 0;

let toplamStokBul = () => {

    for (let index = 0; index < fishFarm.length; index++) {
        toplam += fishFarm[index].stockVolumeInKg
    }
}
//Yaz sezonunda cikan,Zürih te satilan ve Avrupa disindan gelen balik türlerinin gramaj ortalamasi
let gramajlar = [];
gramajiBul = () => {
    fishFarm.map(obje => {
        if (
            obje.season == ("Summer") &&
            obje.saleLocations.includes("ZH") &&
            (obje.originCountry == ("Vietnam") ||
                obje.originCountry == ("Egypt") ||
                obje.originCountry == ("United Kingdom") ||
                obje.originCountry == ("Japan")))
            gramajlar.push(obje.itemWeightInGrams)
    })
    let toplam = 0
    for (let index = 0; index < gramajlar.length; index++) {
        toplam += gramajlar[index]
    }
    gramajOrtalamasi = toplam / gramajlar.length
    console.log("Istenen baliklarin gramaj ortalamasi: ", gramajOrtalamasi)
}

//Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
let ticinoStok = [];
let toplamStokMiktari = 0;
ticinoStokBul = () => {
    fishFarm.map(obje => {

        if (obje.saleLocations.includes("TI")) {
            ticinoStok.push(obje.stockVolumeInKg)
        }

        for (let index = 0; index < ticinoStok.length; index++) {
            toplamStokMiktari += ticinoStok[index];

        }

    })
}

// Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
swissRomainBaliklari = [];
swissRomainBul = () => {
    fishFarm.map(obje => {
        if (obje.saleLocations.includes("VD") && (obje.season == ("Winter") || obje.season == ("Autumn")))
            swissRomainBaliklari.push(obje.price)
    })

    toplam = 0;
    for (let index = 0; index < swissRomainBaliklari.length; index++) {
        toplam += swissRomainBaliklari[index]

    }
    console.log(toplam / swissRomainBaliklari.length)

}
swissRomainBul();

//En pahali olan balik hangisidir? 
let enPahaliBalik = fishFarm
    .map((obje) => {
        return {
            "Ad": obje.fishType,
            "Fiyat": obje.price
        }
    })
    .sort((a, b) => {
        return b.Fiyat - a.Fiyat
    })
console.log("Tesislerimizdeki en Pahali Balik", enPahaliBalik[0]);

//En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?

let enDayanikliBalik = fishFarm
    .map((obje) => {
        return {
            "Mensei Ulke ": obje.originCountry,
            "DayanmaSuresi ": obje.durationInDays
        }
    })
    .sort((a, b) => {
        return b.DayanmaSuresi - a.DayanmaSuresi
    })
console.log("Tesislerimizdeki en Dayanikli Balik", enDayanikliBalik[0])

ticinoStokBul();
console.log("Ticino Kantonu Icin Balik Stogu: ", toplamStokMiktari);

gramajiBul();

toplamStokBul();
console.log("Stogumuzda Bulunan Toplam Balik Miktari :", toplam);

avrupaBirligindenGelenleriBul();
console.log("Avrupa Birligi Kaynakli Urunler: ", avrupadan)

stokKontrolEt();
console.log("stokta 500 kg den fazla miktarda bulunan balik turleri ", stockDizisi)

fiyatiKontrolEt();
console.log("fiyati 9 ile 12 birim arasinda olan balik turleri: ", fiyatAraligindakiBaliklar)

berndeKisSatilanlariBul();
console.log("Bern sehrinde ve kisin satilan balik turleri ", berndeKisSatilanlar)

tarihSiralamasi();