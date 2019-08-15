export const createFilterTemplate = (filtersData) => {
  const filtersDataObj = filtersData.reduce((acc, cur) => {
    acc[cur.title] = cur.count;
    return acc;
  }, {});

  const {all, overdue, today, favorites, repeating, tags, archive} = filtersDataObj;

  return `<section class="main__filter filter container">
    <input
      type="radio"
      id="filter__all"
      class="filter__input visually-hidden"
      name="filter"
      checked
      ${all === 0 ? `disabled` : ``}
    />
    <label for="filter__all" class="filter__label">
      All <span class="filter__all-count">${all}</span></label
    >
    <input
      type="radio"
      id="filter__overdue"
      class="filter__input visually-hidden"
      name="filter"
      ${overdue === 0 ? `disabled` : ``}
    />
    <label for="filter__overdue" class="filter__label"
      >Overdue <span class="filter__overdue-count">${overdue}</span></label
    >
    <input
      type="radio"
      id="filter__today"
      class="filter__input visually-hidden"
      name="filter"
      ${today === 0 ? `disabled` : ``}
    />
    <label for="filter__today" class="filter__label"
      >Today <span class="filter__today-count">${today}</span></label
    >
    <input
      type="radio"
      id="filter__favorites"
      class="filter__input visually-hidden"
      name="filter"
      ${favorites === 0 ? `disabled` : ``}
    />
    <label for="filter__favorites" class="filter__label"
      >Favorites <span class="filter__favorites-count">${favorites}</span></label
    >
    <input
      type="radio"
      id="filter__repeating"
      class="filter__input visually-hidden"
      name="filter"
      ${repeating === 0 ? `disabled` : ``}
    />
    <label for="filter__repeating" class="filter__label"
      >Repeating <span class="filter__repeating-count">${repeating}</span></label
    >
    <input
      type="radio"
      id="filter__tags"
      class="filter__input visually-hidden"
      name="filter"
      ${tags === 0 ? `disabled` : ``}
    />
    <label for="filter__tags" class="filter__label"
      >Tags <span class="filter__tags-count">${tags}</span></label
    >
    <input
      type="radio"
      id="filter__archive"
      class="filter__input visually-hidden"
      name="filter"
      ${archive === 0 ? `disabled` : ``}
    />
    <label for="filter__archive" class="filter__label"
      >Archive <span class="filter__archive-count">${archive}</span></label
    >
  </section>`;
};
