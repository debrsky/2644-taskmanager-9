// Fisher–Yates Shuffle
// https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

const getTask = () => {
  return {
    description: [
      `Изучить теорию`,
      `Сделать домашку`,
      `Пройти интенсив на соточку`,
    ][Math.floor(Math.random() * 3)],

    dueDate: Date.now() + (Math.floor(Math.random() * 15) - 7) * 24 * 60 * 60 * 1000,

    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': Boolean(Math.round(Math.random())),
      'th': false,
      'fr': false,
      'sa': false,
      'su': false,
    },

    tags: (() => {
      const tags = [
        `homework`,
        `theory`,
        `practice`,
        `intensive`,
        `keks`
      ];

      shuffle(tags);

      return new Set(tags.slice(0, 3));
    })(),

    color: [
      `black`,
      `yellow`,
      `blue`,
      `green`,
      `pink`
    ][Math.floor(Math.random() * 5)],

    isFavorite: Boolean(Math.round(Math.random())),
    isArchive: Boolean(Math.round(Math.random()))
  };
};


export {getTask};
