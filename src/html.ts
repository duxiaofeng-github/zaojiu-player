import {createElementByString} from "./utils";
const styles = require('./player.scss');

const template = `
  <video class="${styles.video}" playsinline webkit-playsinline></video>
`;

export const createHTMLVideoElement = (): HTMLVideoElement => {
  return createElementByString(template).item(0) as HTMLVideoElement;
};

