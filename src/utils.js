const Position = {
  AFTERBERGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBERGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
    default:
      console.assert(false); // eslint-disable-line
  }
};

const unrender = (element) => {
  if (element) {
    element.remove();
  }
};

export {createElement, Position, render, unrender};
