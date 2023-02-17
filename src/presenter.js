import { render } from './render.js';
import AddFormView from './view/add-form-view.js';
import EditFormView from './view/edit-form-view.js';
import FilterView from './view/filter-view.js';
import EventsListView from './view/events-list-view.js';
import PointView from './view/point-view.js';
import SortView from './view/sort-view.js';

export default class MainPresenter {

  eventsList = new EventsListView();

  constructor({mainContainer, headerContainer, pointModel}) {
    this.mainContainer = mainContainer;
    this.headerContainer = headerContainer;
    this.pointModel = pointModel;
  }

  init() {
    this.points = [...this.pointModel.getPoints()];

    render(new FilterView, this.headerContainer);
    render(new SortView, this.mainContainer);
    render(this.eventsList, this.mainContainer);
    render(new AddFormView, this.eventsList.getElement());
    render(new EditFormView, this.eventsList.getElement());

    for(let i = 0; i < this.points.length; i++) {
      render(new PointView({point: this.points[i]}), this.eventsList.getElement());
    }
  }
}

