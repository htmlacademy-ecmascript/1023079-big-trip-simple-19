import { getRandomPoint, getRandomInt } from '../utils.js';

const pointsCount = getRandomInt(3, 8);

export const pointModel = Array.from({length: pointsCount}, getRandomPoint);
