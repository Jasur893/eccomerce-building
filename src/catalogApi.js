import gruntovka from './assets/catalog/gruntovka-betonkontakt-ct-19.jpg'
import kraski from './assets/catalog/kraski04.jpg'
import smesiSuxi from './assets/catalog/smesi-bergauf.jpg'
import perfo from './assets/catalog/perfo01.jpg'
import drel from './assets/catalog/drel02.jpg'
import bolgar from './assets/catalog/bolgar01.jpg'
import odejda from './assets/catalog/odejda01.jpg'
import obuv from './assets/catalog/obuv03.jpg'
import perchatka from './assets/catalog/perchatki04.jpg'
import polivInvertor from './assets/catalog/polivochniy01.png'
import nasos from './assets/catalog/karcher01.jpg'
import slesar from './assets/catalog/slesar01.jpg'
import montaj from './assets/catalog/montaj01.jpeg'


const catalogs = [
  {
    name: "Малярные товары",
    id: 'molyarni-tovari',
    resources: [
      {
        name: "Грунтовка",
        id: 'gruntovka',
        image: gruntovka
      },
      {
        name: "Крастели",
        id: "krasteli",
        image: kraski
      },
      {
        name: "Сухие смеси",
        id: "suxiye-smesi",
        image: smesiSuxi
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
        image: perfo
      },
      {
        name: "дрели",
        id: "dreli",
        image: drel
      },
      {
        name: "Шлифовальные машинки",
        id: "shlifmashinki",
        image: bolgar,
      }
    ]
  },
  {
    name: "Для Строителей",
    id: "dlya-stroiteley",
    resources: [
      {
        name: "Спец Одежда",
        id: 'spets-odejda',
        image: odejda
      },
      {
        name: "Обувь",
        id: "obuv",
        image: obuv
      },
      {
        name: "Перчатки",
        id: "perchatki",
        image: perchatka
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
        image: polivInvertor
      },
      {
        name: "Насосы",
        id: "nasosi",
        image: nasos
      },
    ]
  },{
    name: "Инструменты",
    id: "insturmenti",
    resources: [
      {
        name: "Слесарный",
        id: 'slesarniy',
        image: slesar
      },
      {
        name: "Монтажный",
        id: "montajniy",
        image: montaj
      },
    ]
  },

]

export function getcatalogName(catalogId) {
  return catalogs.find(({ id }) => id === catalogId);
}

export function getcatalogNames() {
  return catalogs;
}