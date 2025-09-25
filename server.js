import app from "./app.js";

// const PORT = 5000;
// app
//   .listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
//   .on("error", (err) => {
//     console.error("Server failed to start:", err);
//   });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
