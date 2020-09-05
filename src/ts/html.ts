import { createElementByString } from "./utils";
import * as styles from "../scss/player.scss";

const template = `
  <video class="${styles.video}" playsinline webkit-playsinline></video>
`;

export const createHTMLVideoElement = (): HTMLVideoElement => {
  return createElementByString(template).item(0) as HTMLVideoElement;
};
