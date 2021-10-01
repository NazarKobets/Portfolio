
let alertBox = document.querySelector('.alertBox');


function getPassword(){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/@#$%^&()_+&<>:{}[]";
    let smiles = [ 
        '٩(◕‿◕)۶', 
        'o(>< )o', 
        '(・｀ω´・)', 
        '(--_--)', 
        '(◣_◢)', 
        ' (¬‿¬ )', 
        '(*・ω・)ﾉ', 
        'ヾ(⌐■_■)ノ♪', 
        '(ಠ‿ಠ)', 
        '(｡◕‿◕｡)', 
        '(͡° ͜ʖ ͡°)' 
    ];
    let passwordLength = 16;
    let password = "";
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    document.getElementById('password').value = password;
    let randomNumber = Math.floor(Math.random() * smiles.length);
    alertBox.innerHTML = "New Password Copied: <br>" + password + "<br><br>" + smiles[randomNumber];
}

function copyPassword(){
    let copyPassText = document.getElementById('password');
    copyPassText.select();
    document.execCommand("copy");
    alertBox.classList.toggle('active');
    setTimeout(function(){
        alertBox.classList.toggle('active');   
    }, 3000);
}
