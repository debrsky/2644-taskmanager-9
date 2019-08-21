import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createSearchTemplate} from "./components/search.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createSortingTemplate} from "./components/sorting.js";
import {createLoadMoreBtnTemplate} from "./components/load-more-btn.js";

import Task from "./components/task.js";
import TaskEdit from "./components/task-edit.js";

import {getTask} from "./data.js";
import {createFiltersData} from "./filters-data.js";

import {Position, render as renderNew} from "./utils.js";

const TASK_COUNT = 10;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderTask = (taskMock, tasksContainer) => {
  const task = new Task(taskMock);
  const taskEdit = new TaskEdit(taskMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  task.getElement()
    .querySelector(`.card__btn--edit`)
    .addEventListener(`click`, () => {
      task.getElement().replaceWith(taskEdit.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement()
    .querySelector(`.card__save`)
    .addEventListener(`click`, () => {
      taskEdit.getElement().replaceWith(task.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  renderNew(tasksContainer, task.getElement(), Position.BEFOREEND);
};

const taskMocks = new Array(TASK_COUNT).fill(``).map(() => getTask());
const filtersData = createFiltersData(taskMocks);

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

  while (currentTaskIndex < taskMocks.length && currentTaskIndex < stopTaskIndex) {
    renderTask(taskMocks[currentTaskIndex], boardTasksElement);
    currentTaskIndex++;
  }

  if (currentTaskIndex >= taskMocks.length) {
    loadMoreBtnElement.remove();
  }
};

loadMore(8);

loadMoreBtnElement.addEventListener(`click`, () => {
  loadMore(8);
});
