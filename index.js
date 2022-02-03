let serialPath = '/dev/ttyS6';

import APP from "./app/index.js";
const {innitApplication, innitServo, innitKeyPress} = APP;

const board = innitApplication({ port: serialPath });
const stdin = innitKeyPress();

import JF from "johnny-five";


board.on("ready", () => {
    const servo = innitServo(10);

    let buttonOn = new JF.Button(2);
    let buttonOff = new JF.Button(3);


    board.repl.inject({
        buttonOn: buttonOn,
        buttonOff: buttonOff
    });

    buttonOff.on("up", function() {
        servo.ccw();
    });

    buttonOn.on("up", function() {
        servo.cw();
    });

    // let joystick = new JF.Joystick({
    //     //   [ x, y ]
    //     pins: ["A0", "A1"]
    // });
    //
    // joystick.on("change", function() {
    //     console.log("Joystick");
    //     console.log("  x : ", +this.x.toFixed(3));
    //     console.log("  y : ", +this.y.toFixed(3));
    //     console.log("--------------------------------------");
    // });

    stdin.on("keypress", (ch, key) => {
        if (!key) { return; }

        if (key.name === "q") {
            console.log("Quitting");
            process.exit();
        } else if (key.name === "up") {
            servo.cw();
        } else if (key.name === "down") {
            servo.ccw();
        } else if (key.name === "space") {
            servo.stop();
        }
    });
});