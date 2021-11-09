import FilterLaptopType from '../filter-laptop-type/FilterLaptopType.jsx';
import FilterLaptopRam from '../filter-laptop-ram/FilterLaptopRam.jsx';
import FilterLaptopDiagonal from '../filter-laptop-diagonal/FilterLaptopDiagonal.jsx';
import FilterLaptopProcessor from '../filter-laptop-processor/FilterLaptopProcessor.jsx';

const FilterLaptop = () => {
    return (
        <div className="filter__laptop">
            <FilterLaptopType />
            <FilterLaptopRam />
            <FilterLaptopDiagonal />
            <FilterLaptopProcessor />
        </div>
    );
};

export default FilterLaptop;
