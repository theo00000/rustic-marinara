export const config = {
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/rustic-marinara",
    port: process.env.PORT || 5000,
};