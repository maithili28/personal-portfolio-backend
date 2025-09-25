import app from "./app.js";

const PORT = process.env.PORT || 8080; // EB will provide PORT
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
