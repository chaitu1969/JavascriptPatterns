/**
 *  This pattern allows object to subscribe and react to the events or changes in state
 *  Node.js EventEmitter is a built in exampkle
 */

import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("name", () => {
  console.log("Named event is emmited");
});

eventEmitter.emit("name");

/**
 * Used in real time notifications
 */
