// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const http = require("http");
// const socketIo = require("socket.io");

// const app = express();
// app.use(cors());
// app.use(express.json()); 

// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: { origin: "*" },
// });

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   socket.on("setUserId", (userId) => {
//     socket.userId = userId; // Attach user ID to socket
//     console.log(`User ${userId} connected with socket ID: ${socket.id}`);
//   });

//   socket.on("disconnect", () => {
//     console.log(`User ${socket.userId || "unknown"} disconnected`);
//   });
// });

// global.io = io;

// const roleRoutes = require("./src/routes/RoleRoutes");
// app.use(roleRoutes);

// const userRoutes = require("./src/routes/UserRoutes");
// app.use(userRoutes);

// const stateRoutes = require("./src/routes/StateRoutes");
// app.use("/state", stateRoutes);

// const cityRoutes = require("./src/routes/CityRoutes");
// app.use("/city", cityRoutes);

// const areaRoutes = require("./src/routes/AreaRoutes");
// app.use("/area", areaRoutes);

// const propertyRoutes = require("./src/routes/PropertyRoutes");
// app.use("/property", propertyRoutes);

// const bookingRoutes = require("./src/routes/BookingRoutes");
// app.use("/booking", bookingRoutes);

// const reviewRoutes = require("./src/routes/ReviewRoutes");
// app.use("/review", reviewRoutes);

// const messageRoutes = require("./src/routes/MessageRoutes");
// app.use("/messages", messageRoutes);

// const reportRoutes = require("./src/routes/ReportRoutes");
// app.use("/report", reportRoutes);

// const notificationsRoutes = require("./src/routes/NotificationRoutes");
// app.use("/notifications", notificationsRoutes);

// mongoose
//   .connect(
//     "mongodb+srv://prahladkumar0878:VuIfFwte6oNghrLF@cluster0.7cmf1i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     console.log("Database connected successfully!!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// // mongodb+srv://prahladkumar0878:VuIfFwte6oNghrLF@cluster0.7cmf1i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// // mongodb://127.0.0.1:27017/Stay_Sphere_database_Copy

// const PORT = 3002;
// server.listen(PORT, () => {
//   console.log("Server started on port number", PORT);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());
app.use(cors({
  origin: "https://vehicle-vault-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));

// Routes imports
const roleRoutes = require("./src/routes/RoleRoutes");
const userRoutes = require("./src/routes/UserRoutes");
const stateRoutes = require("./src/routes/StateRoutes");
const cityRoutes = require("./src/routes/CityRoutes");
const areaRoutes = require("./src/routes/AreaRoutes");
const propertyRoutes = require("./src/routes/PropertyRoutes");
const bookingRoutes = require("./src/routes/BookingRoutes");
const reviewRoutes = require("./src/routes/ReviewRoutes");
const messageRoutes = require("./src/routes/MessageRoutes");
const reportRoutes = require("./src/routes/ReportRoutes");
const notificationsRoutes = require("./src/routes/NotificationRoutes");

// Use routes
app.use(roleRoutes);
app.use(userRoutes);
app.use("/state", stateRoutes);
app.use("/city", cityRoutes);
app.use("/area", areaRoutes);
app.use("/property", propertyRoutes);
app.use("/booking", bookingRoutes);
app.use("/review", reviewRoutes);
app.use("/messages", messageRoutes);
app.use("/report", reportRoutes);
app.use("/notifications", notificationsRoutes);

// Basic root route
app.get("/", (req, res) => {
  res.send("Socket.IO server is running...");
});

// Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: "https://stay-sphere-gray.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  }
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("send_message", (message) => {
    io.emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Connect to MongoDB with options
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database connected..."))
  .catch(err => console.error("MongoDB connection error:", err));

// Error handling middleware (for debugging)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Use process.env.PORT with fallback for local testing
const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

/*
IMPORTANT:
- If you are using bcrypt, switch to bcryptjs to avoid native binary errors on Vercel:
    npm uninstall bcrypt
    npm install bcryptjs
  Then update your auth code imports:
    const bcrypt = require('bcryptjs');

- Vercel serverless functions are NOT ideal for persistent Socket.IO servers.
  For production with sockets, consider using dedicated Node.js hosting like Heroku, Railway, or DigitalOcean.
*/
