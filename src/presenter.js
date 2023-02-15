import { render } from './render.js';
import AddFormView from './view/add-form-view.js';
import EditFormView from './view/edit-form-view.js';
import FilterView from './view/filter-view.js';
import EventsListView from './view/events-list-view.js';
import PointView from './view/point-view.js';
import SortView from './view/sort-view.js';

const filterPlace = document.querySelector('.trip-controls__filters');
const mainContainer = document.querySelector('.trip-events');

export default class MainPresenter {

  eventsList = new EventsListView();

  init() {
    render(new FilterView, filterPlace);
    render(new SortView, mainContainer);
    render(this.eventsList, mainContainer);
    render(new AddFormView, this.eventsList.getElement());
    render(new EditFormView, this.eventsList.getElement());

    for(let i = 0; i < 3; i++) {
      render(new PointView, this.eventsList.getElement());
    }
  }
}

