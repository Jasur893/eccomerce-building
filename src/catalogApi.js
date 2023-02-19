const catalogs = [
  {
    name: "Малярные товары",
    id: 'molyarni-tovari',
    resources: [
      {
        name: "Грутовка",
        id: 'gruntovka'
      },
      {
        name: "Красители",
        id: "krasiteli"
      },
      {
        name: "Шпатлёвка",
        id: "shpatlyovka"
      }
    ]
  },
  {
    name: "Электрооборудование",
    id: "electro",
    resources: [
      {
        name: "Перфораторы",
        id: 'perforatori'
      },
      {
        name: "дрели",
        id: "dreli"
      },
      {
        name: "Фонари",
        id: "fonari"
      }
    ]
  },
  {
    name: "Спецодежда",
    id: "spets-odejda",
    resources: [
      {
        name: "Костюм Trellchem Splash",
        id: 'kostym-trellchem-splash'
      },
      {
        name: "Костюм сигнальный Kron",
        id: "kostym-signalniy-kron"
      },
      {
        name: "Защитный Microchem",
        id: "zashitniy-microchem"
      }
    ]
  },
  {
    name: "Сезонное",
    id: "seasons",
    resources: [
      {
        name: "Бетоносмесители",
        id: 'betonosmesiteli'
      },
      {
        name: "Теплицы",
        id: "teplitsi"
      },
      {
        name: "Тачки садовые",
        id: "tachki-sadovie"
      }
    ]
  },
  {
    name: "Для дома и дачи",
    id: "dlya-doma-dachi",
    resources: [
      {
        name: "Поливочный инвентарь",
        id: 'polivochniy-invertor'
      },
      {
        name: "Насосы",
        id: "nasosi"
      },
      {
        name: "Поликарбонат",
        id: "polikorbanat"
      }
    ]
  },{
    name: "Инструменты",
    id: "insturmenti",
    resources: [
      {
        name: "Слесарный",
        id: 'slesarniy'
      },
      {
        name: "Монтажный",
        id: "montajniy"
      },
      {
        name: "Вспомагательный",
        id: "vspomagatelniy"
      }
    ]
  },

]

export function getcatalogName(catalogId) {
  return catalogs.find(({ id }) => id === catalogId);
}

export function getcatalogNames() {
  return catalogs;
}