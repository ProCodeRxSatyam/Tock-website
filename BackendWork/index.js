import connectDB from "./src/config/database.js";
import app from "./src/app.js";




const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on  port : ${PORT} `);
  });
});
