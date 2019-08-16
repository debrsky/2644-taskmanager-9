import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createSearchTemplate} from "./components/search.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createSortingTemplate} from "./components/sorting.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createLoadMoreBtnTemplate} from "./components/load-more-btn.js";

import {getTask} from "./data.js";
import {createFiltersData} from "./filters-data.js";

const tasks = new Array(17).fill(``).map(() => getTask());
const filtersData = createFiltersData(tasks);


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);

render(siteMainElement, createSearchTemplate(), `beforeend`);

render(siteMainElement, createFilterTemplate(filtersData), `beforeend`);

render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(boardElement, createLoadMoreBtnTemplate(), `beforeend`);
const loadMoreBtnElement = boardElement.querySelector(`.load-more`);

const boardTasksElement = boardElement.querySelector(`.board__tasks`);

const loadMore = (taskCount) => {
  const tasksAlreadyShown = boardTasksElement.children.length;

  let currentTaskIndex = tasksAlreadyShown;
  const stopTaskIndex = tasksAlreadyShown + taskCount;

  while (currentTaskIndex < tasks.length && currentTaskIndex < stopTaskIndex) {
    render(boardTasksElement, createTaskTemplate(tasks[currentTaskIndex]), `beforeend`);
    currentTaskIndex++;
  }

  if (currentTaskIndex >= tasks.length) {
    loadMoreBtnElement.remove();
  }
};

render(boardTasksElement, createTaskEditTemplate(tasks[0]), `beforeend`);
loadMore(7);


loadMoreBtnElement.addEventListener(`click`, () => {
  loadMore(8);
});
