
const CURRENCY = "₽";
const ONE_DAY_IN_MS = 86400000;
const TWO_DAYS_IN_MS = 172800000;
const MAX_COUNT_PHOTO_IN_CARD = 5;

const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];

const numberWithSpaces = (price) => {
    if (price != null) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + CURRENCY;
    }else
        return "";
};

const getProductsDate = (productDate) => {
    if (productDate != null) {
        const date = Date.now();
    if (productDate <= date && productDate > date - ONE_DAY_IN_MS) {
        return "Сегодня";
    } else
    if (productDate <= date - ONE_DAY_IN_MS && productDate > date - TWO_DAYS_IN_MS) {
        return "Вчера";
    }else
    {
        return `${new Date(productDate).getDay() + 1} ${months[new Date(productDate).getMonth()]} ${new Date(productDate).getFullYear()} года`;
    }
    }else
    {
        return "";
    }
};

const getCountPlusPhotos = (count) => {
    const countPlus = count - MAX_COUNT_PHOTO_IN_CARD;
    if (countPlus > 0) {
        return <div className="product__image-more-photo">+{countPlus} фото</div>
    }
};

const Card = (props) => {
    return (
        <li className="results__item product">
            <button className="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="product__image">
              {
                  getCountPlusPhotos(props.card.photos.length)
              }
              <div className="product__image-more-photo hidden">+2 фото</div>
              <img src={props.card.photos[0]} srcSet="img/item1-2x.jpg 2x" width="318" height="220" alt={props.card.name} />
              <div className="product__image-navigation">
                <span className="product__navigation-item product__navigation-item--active"></span>
                <span className="product__navigation-item"></span>
                <span className="product__navigation-item"></span>
                <span className="product__navigation-item"></span>
                <span className="product__navigation-item"></span>
              </div>
            </div>
            <div className="product__content">
              <h3 className="product__title">
                <a href="#">{props.card.name}</a>
              </h3>
              <div className="product__price">{numberWithSpaces(props.card.price)}</div>
              <div className="product__address">{props.card.address.city}, {props.card.address.street}</div>
              <div className="product__date">{getProductsDate(props.card.publishDate)}</div>
            </div>
        </li>
    );
};

export default Card;
