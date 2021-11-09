import FilterEstate from '../filter-estate/FilterEstate.jsx';
import FilterCamera from '../filter-camera/FilterCamera.jsx';
import FilterLaptop from '../filter-laptop/FilterLaptop.jsx';
import FilterCar from '../filter-car/FilterCar.jsx';
import FilterSlider from '../filter-slider/FilterSlider.jsx';
import FilterCategories from '../filter-categories/FilterCategories.jsx';

const Filters = () => {
     return (
        <section className="onlineshop-app__filter filter">
            <h2 className="title filter__title">Фильтр</h2>
            <form className="filter__form" action="#" method="post">
                <FilterCategories />
                <FilterSlider />
                <FilterEstate />
                <button className="button filter__button" type="submit">Показать</button>
            </form>
        </section>
    );
};

export default Filters;