

const FilterEstateRoomsCount = () => {
    
    return (
        <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
            <legend>Количество комнат</legend>
            <ul className="filter__ram-list">
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="rooms" value="any" id="any_room" defaultValue/>
                    <label htmlFor="any_room">Любое</label>
                </li>
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="rooms" value="one" id="one" />
                    <label htmlFor="one">1</label>
                </li>
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="rooms" value="two" id="two" />
                    <label htmlFor="two">2</label>
                </li>
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="rooms" value="three" id="three" />
                    <label htmlFor="three">3</label>
                </li>
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="rooms" value="four" id="four" />
                    <label htmlFor="four">4</label>
                </li>
                <li className="filter__radiobuttons-item">
                    <input className="visually-hidden" type="radio" name="rooms" value="fivemore" id="fivemore" />
                    <label htmlFor="fivemore">5+</label>
                </li>
            </ul>
        </fieldset>
    );
};

export default FilterEstateRoomsCount;
