var noClickCount = 0;

var gifs = [
    '3fFj.gif',
    '3Xzs.gif',
    '3gMd.gif',
    '4Q0a.gif',
    '19wI.gif',
    '43OZ.gif',
    '7V0.gif',
    // Agrega más rutas de gifs según sea necesario
];

document.getElementById('noBtn').addEventListener('click', function() {
    noClickCount++;

    // Cambiar la imagen o gif cada vez que se hace clic en "NO"
    var gifElement = document.getElementById('kittyGif');
    var newGifSource = gifs[noClickCount % gifs.length];
    gifElement.src = newGifSource;

    // Cambiar el mensaje cada vez que se hace clic en "NO"
    var mensajesNo = ['¿Estás segura?', '¿Segurísima?', '¿Estás realmente segura?', '¿Segurísisima?', '¿Super segura?', '¿Enserio?', '¿De verdad?'];
    document.getElementById('mensaje').innerHTML = mensajesNo[noClickCount % mensajesNo.length];

    // Agrandar el botón "Sí" cada vez que se hace clic en "NO"
    var siBtn = document.getElementById('siBtn');
    var siBtnSize = window.getComputedStyle(siBtn, null).getPropertyValue('font-size');
    var newSize = (parseFloat(siBtnSize) * 1.2) + 'px';
    siBtn.style.fontSize = newSize;
});

document.getElementById('siBtn').addEventListener('click', function() {
    // Redirige a la nueva página cuando el usuario hace clic en "Sí"
    window.location.href = 'index2.html';
});

