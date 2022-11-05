import mongoose from "mongoose";

const editoraSchema = mongoose.Schema(
    {
        id:{type:String},
        nome:{type: String},
        endereco:{type: String}
    },
    {
        versionKey: false
    }
)

const editoras = mongoose.model("editoras", editoraSchema)

export default editoras