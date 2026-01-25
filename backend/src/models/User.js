import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: { 
            type: String, 
            required: true, 
            unique: true, 
            trim: true 
        },

        name: { 
            type: String, 
            required: true, 
            trim: true 
        },

        password: { 
            type: String, 
            required: true 
        },

        role: { 
            type: String,
            default: "user"
        },
    },
    { timestamps: true}
);

export default mongoose.model("User", userSchema);