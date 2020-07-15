// Comprueba el IBAN
var testIBAN = () => {
    var IBAN = document.getElementById("IBAN").value;
    var writeIBAN = document.getElementById("testIBAN");
    var writeControlCode = document.getElementById("digitsControl");
    const patternIBAN = /(^[A-Z]{2}\d{2})\d{20}$/; // Distingue entre las letras del país, los dígitos de control y el resto de dígitos

    IBAN = IBAN.replace(/ /g, ''); // Quita los posibles espacios en blanco
    if (patternIBAN.test(IBAN)) {
        writeIBAN.innerText = "Este número de cuenta es correcto";
        writeControlCode.innerText = "El código del país y los dígitos de control son " + patternIBAN.exec(IBAN)[1];
    } else {
        writeIBAN.innerText = "Ha introducido un número de cuenta inválido!! ";
        writeControlCode.innerText = '';
    }
};

// Comprueba la matrícula
var testMatricula = () => {
    var matricula = document.getElementById("matricula").value;
    var writeMatricula = document.getElementById("testMatricula");
    var writeCodeMatricula = document.getElementById("codeMatricula");
    const patternMatricula = /(^\d{4})([A-Z]{3}$)/; // Distingue 4 números que deben ir al principio y 3 letras que deben ir al final

    matricula = matricula.replace(/[ -]/g, ''); // Quita tanto los espacios en blanco como los guiones
    if (patternMatricula.test(matricula)) {
        writeMatricula.innerText = "La matrícula es correcta";
        writeCodeMatricula.innerText = "Los números de la matrícula son " + patternMatricula.exec(matricula)[1] + " y las letras son " + patternMatricula.exec(matricula)[2];
    } else {
        writeMatricula.innerText = "Ha introducido una matrícula que no es válida!! ";
        writeCodeMatricula.innerText = '';
    }
};

// Imprime las imagenes por pantalla
var takeImagesLinks = () => {
    var myImage = new Image(100, 100);
    myImage.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
    var myImage2 = new Image(100, 100);
    myImage2.src = 'https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg';
    var divImage = document.getElementById("image");
    const patternImg = /^https:\/\/(?=.*[\w])[\w.\/-]{2,}\.(?=.*[\w])[\w]{3,4}$/; //Distingue que el source de las etiquetas img comience por https:// y que acabe en 3 o 4 letras
    divImage.appendChild(myImage);
    divImage.appendChild(myImage2);

    // Imprime por consola el src de las imágenes
    console.log(patternImg.exec(myImage.src)[0]);
    console.log(patternImg.exec(myImage2.src)[0]);
};

// Comprueba los números de las tarjetas de crédito
var testCard = () => {
    var card = document.getElementById("card").value;
    var writeCard = document.getElementById("testCard");
    var writeCodeCard = document.getElementById("codeCard");
    var patternCard = /^(\d{4})(\d{4})(\d{4})(\d{4})$/; // Divide el número en 4 partes

    card = card.replace(/[ -]/g, ''); // Borra los espacios en blanco y los guiones
    if (patternCard.test(card)) {
        writeCard.innerText = "La tarjeta es correcta";
        writeCodeCard.innerText = (patternCard.exec(card)[1] + " " + patternCard.exec(card)[2] + " " + patternCard.exec(card)[3] + " " + patternCard.exec(card)[4]); //AQUI YA ME SALE
    } else {
        writeCard.innerText = "Ha introducido una tarjeta que no es válida!! ";
        writeCodeCard.innerText = '';
    }
};

// Comprueba la seguridad de la contraseña
var testPassword = () => {
    var password = document.getElementById("password").value;
    var writePassword = document.getElementById("testPassword");
    var patternStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    var patternWeakPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (patternStrongPassword.test(password)) {
        writePassword.innerText = "Su contraseña es indescifrable!";
    } else if (patternWeakPassword.test(password)) {
        return writePassword.innerText = "Su contraseña es correcta, pero podría ser más segura";
    } else {
        writePassword.innerText = "Su contraseña no es segura!!";
    }
};

// Comprueba la URL
var testUrl = () => {
    var url = document.getElementById("url").value;
    var writeUrl = document.getElementById("testUrl");
    var patternUrlHttps = /^https:\/\/www.(?=.*[\w])[\w]{2,}\.(?=.*[\w])[\w.\/]{2,5}$/;
    var patternUrlWww = /^www.(?=.*[\w])[\w]{2,}\.(?=.*[\w])[\w.\/]{2,5}$/;
    var patternUrlSimple = /^(?=.*[\w])[\w]{2,}\.(?=.*[\w])[\w.\/]{2,5}$/;

    if (patternUrlHttps.test(url)) {
        writeUrl.innerText = "La URL es correcta";
    } else if (patternUrlWww.test(url)) {
        writeUrl.innerText = "La URL es correcta";
    } else if (patternUrlSimple.test(url)) {
        writeUrl.innerText = "La URL es correcta";
    } else {
        writeUrl.innerText = "Ha introducido una URL incorrecta. Por favor, revísela y compruébela de nuevo";
    }
};

// Comprueba el código de color hexadecimal
var testColor = () => {
    var color = document.getElementById("color").value;
    var writeColor = document.getElementById("testColor");
    var patternColor = /#([a-f0-9]{3}){1,2}\b/i;
    if (patternColor.test(color)) {
        writeColor.innerText = "El código hexadecimal es correcto";
    } else {
        writeColor.innerText = "No es un código hexadecimal válido";
    }
};

// Llamada a las funciones a través de la escucha de botones
document.getElementById("sendIBAN").addEventListener("click", testIBAN);
document.getElementById("sendMatricula").addEventListener("click", testMatricula);
takeImagesLinks();
document.getElementById("sendCard").addEventListener("click", testCard);
document.getElementById("sendPassword").addEventListener("click", testPassword);
document.getElementById("sendUrl").addEventListener("click", testUrl);
document.getElementById("sendColor").addEventListener("click", testColor);