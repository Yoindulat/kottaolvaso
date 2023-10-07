// Hangok és lefogások
const hangok = {
	
	"Hang_1": "1^7",
	"Hang_2": "1^5",
	"Hang_3": "1^3",
	"Hang_4": "1^1",
	"Hang_5": "1^0",
	"Hang_6": "2^3",
	"Hang_7": "2^1",
	"Hang_8": "2^0",	
	"Hang_9": "3^2",
	"Hang_10": "3^0",
	"Hang_11": "4^3",
	"Hang_12": "4^2",
	"Hang_13": "4^0",
	"Hang_14": "5^3",
	"Hang_15": "5^2",
	"Hang_16": "5^0",
    // További hangok és lefogások
};
// Az oszlopok tömbje
const oszlopokElem = document.getElementById("oszlopok");
const hozzaadGomb = document.getElementById("hozzaadGomb");
const hangLeirasElem = document.getElementById("hangLeiras");

// Vezérlőgomb hozzáadása eseménykezelővel
hozzaadGomb.addEventListener("click", hozzaadOszlop);

// Oszlopot hozzáadó függvény
function hozzaadOszlop() {
    const oszlop = document.createElement("div");
    oszlop.classList.add("oszlop");

    const leirasElem = document.createElement("div"); // Külön leírás elem minden oszlophoz
    leirasElem.classList.add("leiras");
    hangLeirasElem.appendChild(leirasElem);

    for (let i = 0; i < 16; i++) {
        const radioDiv = document.createElement("div");
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "oszlop_" + (oszlopokElem.childElementCount + 1); // Az új oszlop sorszáma
        radioBtn.value = "Hang_" + (i + 1);
        radioBtn.addEventListener("change", function (event) {
            // A lefogás leírásának frissítése az adott oszlophoz tartozó leírás elemen belül
            const selectedHang = event.target.value;
            leirasElem.textContent = `${hangok[selectedHang]}`;
        });

        const label = document.createElement("label");
        label.textContent = "";

        radioDiv.appendChild(radioBtn);
        radioDiv.appendChild(label);
        oszlop.appendChild(radioDiv);
    }

    oszlopokElem.appendChild(oszlop);
}