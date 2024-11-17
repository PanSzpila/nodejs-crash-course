import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hi " + name);
}

function byeHandler(name) {
  console.log("Bye " + name);
}

//Regiser event listeners

myEmitter.on("greet", greetHandler);
myEmitter.on("bye", byeHandler);

//emit events
myEmitter.emit("greet", "Szpila");
myEmitter.emit("bye", "Ty kulfonie");

//Error handling
myEmitter.on("error", (err) => {
  console.log("An Error Occured:", err);
});

// Simulate error
myEmitter.emit("error", new Error("something went wrong"));
