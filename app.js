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
const server = http.createServer(app); // HTTP + Socket.IO server

// Middleware
app.use(express.json());
app.use(cors({
  origin: "https://vehicle-vault-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));

// Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: "https://vehicle-vault-frontend.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
  }
});

// Routes
app.get("/", (req, res) => {
  res.send("Socket.IO server is running...");
});

const roleRoutes = require("./src/routes/RoleRoutes");
app.use(roleRoutes);

const userRoutes = require("./src/routes/UserRoutes");
app.use(userRoutes);

const stateRoutes = require("./src/routes/StateRoutes");
app.use("/state", stateRoutes);

const cityRoutes = require("./src/routes/CityRoutes");
app.use("/city", cityRoutes);

const areaRoutes = require("./src/routes/AreaRoutes");
app.use("/area", areaRoutes);

const propertyRoutes = require("./src/routes/PropertyRoutes");
app.use("/property", propertyRoutes);

const bookingRoutes = require("./src/routes/BookingRoutes");
app.use("/booking", bookingRoutes);

const reviewRoutes = require("./src/routes/ReviewRoutes");
app.use("/review", reviewRoutes);

const messageRoutes = require("./src/routes/MessageRoutes");
app.use("/messages", messageRoutes);

const reportRoutes = require("./src/routes/ReportRoutes");
app.use("/report", reportRoutes);

const notificationsRoutes = require("./src/routes/NotificationRoutes");
app.use("/notifications", notificationsRoutes);


// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("send_message", (message) => {
    io.emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected..."))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server with Socket.IO
server.listen(process.env.PORT, () => {
  console.log(`Server Started On Port: ${process.env.PORT}`);
});