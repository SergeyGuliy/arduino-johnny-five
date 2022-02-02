import JF from "johnny-five";

/**
 *
 * @param {Object} - appOptions
 * @returns {Board} - Object instance of Board
 */
export const innitApplication = (appOptions) => {
        return new JF.Board(appOptions);
}