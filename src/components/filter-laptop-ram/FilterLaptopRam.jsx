

const FilterLaptopRam = () => {
    return (
        <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
            <legend>Минимальный объем оперативной памяти</legend>
                <ul className="filter__radiobuttons-list">
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="ram" value="any" id="any_ram" />
                    <label htmlFor="any_ram">Любой</label>
                </li>
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="ram" value="4gb" id="4gb" />
                    <label htmlFor="4gb">4 Гб</label>
                </li>
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="ram" value="8gb" id="8gb" />
                    <label htmlFor="8gb">8 Гб</label>
                </li>
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="ram" value="16gb" id="16gb" />
                    <label htmlFor="16gb">16 Гб</label>
                </li>
                </ul>
        </fieldset>
    );
};

export default FilterLaptopRam;
