import FilterCarYear from '../filter-car-year/FilterCarYear.jsx';
import FilterCarTransmission from '../filter-car-transmission/FilterCarTransmission.jsx';
import FilterCarBody from '../filter-car-body/FilterCarBody.jsx';

const FilterCar = () => {
    return (
        <div className="filter__car">
            <FilterCarYear />
            <FilterCarTransmission />
            <FilterCarBody />
        </div>
    );
};

export default FilterCar;
