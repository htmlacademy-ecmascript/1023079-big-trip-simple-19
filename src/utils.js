import {offerTypes, MIN_ID, MAX_ID, MIN_PRICE, MAX_PRICE} from './const.js';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const randomOffer = {
  'title': 'Some offer text'
};

const getOffersArray = () => {
  const result = [];
  for(let i = 1; i < 6; i++) {
    const offer = Object.assign({}, randomOffer);
    offer.id = i;
    offer.price = getRandomInt(MIN_PRICE, MAX_PRICE);
    result.push(offer);
  }

  return result;
};

const getRandomArrayDestination = () => {
  const result = [];
  for(let i = 1; i < 6; i++) {
    const destination = {
      'id': i,
      description: 'some descr',
      'name': 'some name',
      'pictures': [
        {
          'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
          'description': 'Chamonix parliament building'
        }
      ]
    };
    result.push(destination);
  }

  return result;
};

const getOffersIdForEvent = () => {
  const allOffers = getOffersArray();
  const offersNumber = getRandomInt(1, 5);
  const result = new Set;
  for(let i = 0; i < offersNumber; i++) {
    const offer = allOffers[getRandomInt(0, 4)];
    if(result.has(offer.id)) {
      continue;
    } else {
      result.add(offer.id);
    }
  }

  return Array.from(result).sort();
};

const destinations = getRandomArrayDestination();

export const getRandomPoint = () => ({
  'base_price': getRandomInt(MIN_PRICE, MAX_PRICE),
  'date_from': '2019-07-10T22:55:56.845Z',
  'date_to': '2019-07-11T11:22:13.375Z',
  'id': getRandomInt(MIN_ID, MAX_ID),
  'destination': destinations[getRandomInt(0,4)],
  'offers': getOffersIdForEvent(),
  'type': getRandomArrayElement(offerTypes)
});
