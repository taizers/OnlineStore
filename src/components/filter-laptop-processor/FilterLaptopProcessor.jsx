

const FilterLaptopProcessor = () => {
    return (
        <fieldset className="filter__type filter__type--laptop-processor">
            <legend>Тип процессора</legend>
            <ul className="filter__checkboxes-list filter__checkboxes-list--laptop-processor">
                <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-processor" value="i3" id="i3" />
                <label htmlFor="i3">Intel Core i3</label>
                </li>
                <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-processor" value="i5" id="i5" />
                <label htmlFor="i5">Intel Core i5</label>
                </li>
                <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-processor" value="i7" id="i7" />
                <label htmlFor="i7">Intel Core i7</label>
                </li>
            </ul>
        </fieldset>
    );
};

export default FilterLaptopProcessor;
