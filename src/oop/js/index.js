import { fork } from "child_process";

const child = fork("./child.js");

child.on("message", (message) => {
  console.log("Message from child:", message);
});

child.send({ hello: "world" });
