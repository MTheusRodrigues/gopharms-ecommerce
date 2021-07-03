module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'email@sandbox.pagseguro.com.br',
    email: 'rodrigotpf2@gmail.com',
    token: '0cabeb2d-feb1-4aa5-be48-22f84ff44be97cb24d374f6095c4fc1e63dcc09a6551cddd-63ee-43a8-9262-622e88a5f0c0',
    notificationURL: "https://gopharmes.com.br/v1/api/pagamentos/notificacao",
}
