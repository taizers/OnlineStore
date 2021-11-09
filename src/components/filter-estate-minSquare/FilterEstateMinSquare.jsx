

const FilterEstateMinSquare = () => {
    return (
        <div className="filter__min-square">
            <label htmlFor="square">Минимальная площать, м<sup>2</sup></label>
            <input type="number" id="square" name="min-square" min="1" value="" placeholder="0" />
        </div>
    );
};

export default FilterEstateMinSquare;
