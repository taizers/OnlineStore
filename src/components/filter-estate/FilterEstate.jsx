import FilterEstateType from '../filter-estate-type/FilterEstateType.jsx';
import FilterEstateMinSquare from '../filter-estate-minSquare/FilterEstateMinSquare.jsx';
import FilterEstateRoomsCount from '../filter-estate-roomsCount/FilterEstateRoomsCount.jsx';

const FilterEstate = () => {
    return (
        <div className="filter__estate">
            <FilterEstateType />
            <FilterEstateMinSquare />
            <FilterEstateRoomsCount />
        </div>
    );
};

export default FilterEstate;