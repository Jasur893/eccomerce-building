import katalog01 from './img/catalog/katalog01.png'

const catalogs = [
  {
    name: "Малярные товары",
    id: 'molyarni-tovari',
    resources: [
      {
        name: "Грунтовка",
        id: 'gruntovka',
        image: katalog01
      },
      {
        name: "Красители",
        id: "krasiteli",
        image: katalog01
      },
      {
        name: "Шпатлёвка",
        id: "shpatlyovka",
        image: katalog01
      }
    ]
  },
  {
    name: "Электрооборудование",
    id: "electro",
    resources: [
      {
        name: "Перфораторы",
        id: 'perforatori',
        image: katalog01
      },
      {
        name: "дрели",
        id: "dreli",
        image: katalog01
      },
      {
        name: "Фонари",
        id: "fonari",
        image: katalog01,
      }
    ]
  },
  {
    name: "Спецодежда",
    id: "spets-odejda",
    resources: [
      {
        name: "Костюм Trellchem Splash",
        id: 'kostym-trellchem-splash',
        image: katalog01
      },
      {
        name: "Костюм сигнальный Kron",
        id: "kostym-signalniy-kron",
        image: katalog01
      },
      {
        name: "Защитный Microchem",
        id: "zashitniy-microchem",
        image: katalog01
      }
    ]
  },
  {
    name: "Сезонное",
    id: "seasons",
    resources: [
      {
        name: "Бетоносмесители",
        id: 'betonosmesiteli',
        image: katalog01
      },
      {
        name: "Теплицы",
        id: "teplitsi",
        image: katalog01
      },
      {
        name: "Тачки садовые",
        id: "tachki-sadovie",
        image: katalog01
      }
    ]
  },
  {
    name: "Для дома и дачи",
    id: "dlya-doma-dachi",
    resources: [
      {
        name: "Поливочный инвентарь",
        id: 'polivochniy-invertor',
        image: katalog01
      },
      {
        name: "Насосы",
        id: "nasosi",
        image: katalog01
      },
      {
        name: "Поликарбонат",
        id: "polikorbanat",
        image: katalog01
      }
    ]
  },{
    name: "Инструменты",
    id: "insturmenti",
    resources: [
      {
        name: "Слесарный",
        id: 'slesarniy',
        image: katalog01
      },
      {
        name: "Монтажный",
        id: "montajniy",
        image: katalog01
      },
      {
        name: "Вспомагательный",
        id: "vspomagatelniy",
        image: katalog01
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