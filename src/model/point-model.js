import { getRandomPoint, getRandomInt } from '../utils.js';

const pointsCount = getRandomInt(3, 8);
export default class PointModel {
  points = Array.from({length: pointsCount}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
