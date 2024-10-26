const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier", required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
            quantity: { type: Number, required: true },
            totalPrice: { type: Number, required: true },
        }
    ],
    grandTotal: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);