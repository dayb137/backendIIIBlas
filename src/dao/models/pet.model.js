import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    age: { type: Number, required: true },
    adopted: {type: Boolean, default: false}
}, { timestamps: true});

const Pet = mongoose.model("Pet", petSchema);
export default Pet;
