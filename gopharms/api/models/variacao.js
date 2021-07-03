const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VariacaoSchema = Schema({
    codigo: { type: String, required: false, unique: true },
    nome: { type: String, required: false },
    preco: { type: Number, required: false },
    promocao: { type: Number },
    fotos: { type: Array, default: [] },
    entrega: {
        type: {
            dimensoes: {
                type: {
                    alturaCm: { type: Number },
                    larguraCm: { type: Number },
                    profundidadeCm: { type: Number }
                },
                required: false
            },
            pesoKg: { type: Number, required: false },
            freteGratis: { type: Boolean, default: false }
        }
    },
    quantidade: { type: Number, default: 0 },
    quantidadeBloqueada: { type: Number, default: 0 },
    produto: { type: Schema.Types.ObjectId, ref: "Produto", required: false },
    loja:  { type: Schema.Types.ObjectId, ref: "Loja", required: false }
},{ timestamps: true });

module.exports = mongoose.model("Variacao", VariacaoSchema);