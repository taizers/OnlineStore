import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.jsx';
import {products} from './moks/mock-bd.json';

const MIN_VIEW_PRODUCTS_COUNT = 0;
const MAX_VIEW_PRODUCTS_COUNT = 7;

const itemsCount = Math.min(products.length, MAX_VIEW_PRODUCTS_COUNT);

const adapter = (cards) => {
  const cardsList = [];

  cards.forEach((card, index) => {
      cardsList.push({
          card_id: `card_${index}`,
          favorite: false,
          name: card.name,
          description: card.description,
          price: card.price,
          category: card.category,
          coordinates: card.coordinates,
          seller: {
              fullname: card.seller.fullname,
              rating: card.seller.rating,
          },
          publishDate: +card['publish-date'],
          address: {
              city: card.address.city,
              street: card.address.street,
              building: card.address.building,
          },
          photos: card.photos,
          filters: {
              type: card.filters.type,
              area: card.filters.area,
              roomsCount: card.filters['rooms-count'],
          },
      })
  });
  return cardsList;
};

ReactDOM.render(
  <React.StrictMode>
    <App cards = {adapter(products).slice(MIN_VIEW_PRODUCTS_COUNT,itemsCount)}/>
  </React.StrictMode>,
  document.querySelector('#root')
);
