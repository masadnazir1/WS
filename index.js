const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Handle connection events
wss.on("connection", (ws) => {
  console.log("New client connected");

  // Handle messages from clients
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Echo the message back to the client
    ws.send(`Server received: ${message}`);
  });

  // Handle client disconnections
  ws.on("close", () => {
    console.log("Client disconnected");
  });

  // Send a message to the connected client
  ws.send("Welcome to the WebSocket server!");
});

console.log("WebSocket server is running on ws://localhost:8080");
