module.exports = {
    secret: process.env.NODE_ENV === "production" ? "jadhfjahfljahfljagdjagflagjfagddjlfgafgadjfgajlfgaljgfadlfg" : "secret",    
    api: process.env.NODE_ENV === "production" ? "https://api.gopharmes.com.br" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://gopharmes.com.br" : "http://localhost:5000"
};
// "https://api.loja-teste.ampliee.com" => ALTERAR PARA DOMAIN DA GOPHARMS API
