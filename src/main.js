import MainPresenter from './presenter.js';
import PointModel from './model/point-model.js';

const filterPlace = document.querySelector('.trip-controls__filters');
const mainContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();

const mainPresenter = new MainPresenter({
  mainContainer,
  headerContainer: filterPlace,
  pointModel
});

mainPresenter.init();
