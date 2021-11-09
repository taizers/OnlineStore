

const FilterCarTransmission = () => {
    return (
        <fieldset className="filter__radiobuttons filter__radiobuttons--transmission">
            <legend>Коробка передач</legend>
            <ul className="filter__radiobuttons-list">
                <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="transmission" value="any" id="any_transmission" checked />
                <label htmlFor="any_transmission">Любая</label>
                </li>
                <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="transmission" value="mechanic" id="mechanic_transmission" />
                <label htmlFor="mechanic_transmission">Механика</label>
                </li>
                <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="transmission" value="auto" id="auto_transmission" />
                <label htmlFor="auto_transmission">Автомат</label>
                </li>
            </ul>
        </fieldset>
    );
};

export default FilterCarTransmission;
