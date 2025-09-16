import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: String,
    specie: String,
    adopted: {type: Boolean, default: false}
}, { timestamps: true});

const Pet = mongoose.model("Pet", petSchema);
export default Pet;
