import keypress from "keypress";
/**
 *
 * @param {Object} - servoOptions
 * @returns {Servo.Continuous} - Object instance of Servo
 */
export const innitKeyPress = () => {
    let stdin = process.stdin
    keypress(stdin);

    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);

    return stdin;
}