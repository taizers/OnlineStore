

const FilterLaptopType = () => {
    return (
        <fieldset className="filter__type filter__type--laptop">
            <legend>Тип ноутбука</legend>
            <ul className="filter__checkboxes-list filter__checkboxes-list--laptop-ram">
                <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-type" value="ultra" id="ultra" />
                <label htmlFor="ultra">Ультрабук</label>
                </li>
                <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-type" value="home" id="home" />
                <label htmlFor="home">Домашний ноутбук</label>
                </li>
                <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-type" value="gaming" id="gaming" />
                <label htmlFor="gaming">Игровой ноутбук</label>
                </li>
            </ul>
        </fieldset>
    );
};

export default FilterLaptopType;
