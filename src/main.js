import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createSearchTemplate} from "./components/search.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createSortingTemplate} from "./components/sorting.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createLoadMoreBtnTemplate} from "./components/load-more-btn.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);

render(siteMainElement, createSearchTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(boardElement, createLoadMoreBtnTemplate(), `beforeend`);

const boardTasksElement = boardElement.querySelector(`.board__tasks`);

render(boardTasksElement, createTaskEditTemplate(), `beforeend`);

render(boardTasksElement, createTaskTemplate(), `beforeend`);
render(boardTasksElement, createTaskTemplate(), `beforeend`);
render(boardTasksElement, createTaskTemplate(), `beforeend`);
