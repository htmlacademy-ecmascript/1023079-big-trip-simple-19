import {createElement} from '../render.js';
import { humanizePointTime, humanizePointDate } from '../utils.js';

const createPointTemplate = (point) => {

  const {dateFrom, dateTo, type, basePrice, offers} = point;
  const {name} = point.destination;

  return (`
  <div class="event">
  <time class="event__date">${humanizePointDate(dateFrom)}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${type} ${name}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time">${humanizePointTime(dateFrom)}</time>
      &mdash;
      <time class="event__end-time">${humanizePointTime(dateTo)}</time>
    </p>
  </div>
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
    ${offers ? offers.map((offer) => `<li class="event__offer">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.price}</span>
  </li>`).join('') : ''}

  </ul>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
  </div>
`);
};

export default class PointView {

  constructor({point}) {
    this.point = point;
  }

  getTemplate() {
    return createPointTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
