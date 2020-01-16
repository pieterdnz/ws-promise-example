import "@bospieter/ws-helper/styles.css";
import { add, initBody } from "@bospieter/ws-helper";

initBody("promise example");

add.li("log 1");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("We are done promise p1");
  }, 2000);
});

p1.then(message => add.li("Promise done" + message));

add.li("log 3");
