import JF from "johnny-five";

/**
 *
 * @param {Object} - servoOptions
 * @returns {Servo.Continuous} - Object instance of Servo
 */
export const innitServo = (servoOptions) => {
    return new JF.Servo.Continuous(servoOptions);
}