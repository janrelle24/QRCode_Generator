const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");
const qrContainer = document.getElementById("qrCode");
const inputText = document.getElementById("text"); 

generateBtn.addEventListener("click", generateQR);
downloadBtn.addEventListener("click", downloadQR);

function generateQR(){
    const text = inputText.value.trim();
    qrContainer.innerHTML = "";

    if(text === ""){
        alert("Please enter some text or URL!");
        downloadBtn.style.display = "none";
        return;
    }
    const qr = new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H
    });

    setTimeout(() => {
        downloadBtn.style.display = "block";
    }, 300);
    
}

function downloadQR(){
    const img = qrContainer.querySelector("img") || qrContainer.querySelector("canvas");
    if(!img){
        alert("Please generate a QR code first!");
        return;
    }
    const link = document.createElement("a");
    link.href = img.src ? img.src : img.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
}