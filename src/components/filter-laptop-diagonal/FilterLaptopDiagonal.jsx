

const FilterLaptopDiagonal = () => {
    return (
        <fieldset className="filter__radiobuttons filter__radiobuttons--diagonal">
            <legend>Минимальная диагональ экрана</legend>
            <ul className="filter__radiobuttons-list">
                <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="any" id="any_diagonal" checked />
                <label htmlFor="any_diagonal">Любая</label>
                </li>
                <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="13in" id="13in" />
                <label htmlFor="13in">13<sup>″</sup></label>
                </li>
                <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="14in" id="14in" />
                <label htmlFor="14in">14<sup>″</sup></label>
                </li>
                <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="15in" id="15in" />
                <label htmlFor="15in">15<sup>″</sup></label>
                </li>
                <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="17in" id="17in" />
                <label htmlFor="17in">17<sup>″</sup></label>
                </li>
            </ul>
        </fieldset>
    );
};

export default FilterLaptopDiagonal;
