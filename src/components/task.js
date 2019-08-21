import {createElement} from "../utils.js";

class Task {
  constructor({
    description,
    dueDate,
    repeatingDays,
    tags,
    color,
    // isArchive,
    // isFavorite
  }) {
    this._description = description;
    this._dueDate = dueDate;
    this._repeatingDays = repeatingDays;
    this._tags = tags;
    this._color = color;

    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    const getDateString = (date) => {
      const monthNames = [
        `January`, `February`, `March`,
        `April`, `May`, `June`, `July`,
        `August`, `September`, `October`,
        `November`, `December`
      ];

      const day = date.getDate();
      const monthIndex = date.getMonth();

      return `${day} ${monthNames[monthIndex]}`;
    };

    const createHashTagTemplate = (tag) => {
      return `<span class="card__hashtag-inner">
        <span class="card__hashtag-name">
          #${tag}
        </span>
      </span>`;
    };

    return `<article
      class="card
        card--${this._color}
        ${Object.values(this._repeatingDays).some((value) => value) ? `card--repeat` : ``}
        ${this._dueDate < Date.now() ? `card--deadline` : ``}
      ">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button"
              class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${this._description}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${getDateString(new Date(this._dueDate))}</span>
                    <span class="card__time">${new Date(this._dueDate).toLocaleTimeString(`en-US`, {hours12: true})}</span>
                  </p>
                </div>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">

                  ${[...this._tags].map((tag) => createHashTagTemplate(tag)).join(``)}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`;
  }
}

export default Task;
