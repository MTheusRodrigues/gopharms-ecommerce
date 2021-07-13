module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'email@sandbox.pagseguro.com.br',
    email: 'djmatheusrodrigues@outlook.com',
    token: 'ebf37416-86a1-40f7-b46c-c8c48119b8d65894cf004d01ae8cc107b025eb38d42f6405-725b-4f6b-9232-ca96362c8d0a',
    notificationURL: "https://gopharmes.com.br/v1/api/pagamentos/notificacao",
}
