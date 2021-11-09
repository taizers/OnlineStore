

const FilterCarBody = () => {
    return (
        <fieldset className="filter__type filter__type--car-body">
            <legend>Тип кузова</legend>
            <ul className="filter__checkboxes-list filter__checkboxes-list--car-body">
                <li className="filter__checkboxes-item">
                    <input className="visually-hidden" type="checkbox" name="car-body" value="sedan" id="sedan" />
                    <label htmlFor="sedan">Седан</label>
                </li>
                <li className="filter__checkboxes-item">
                    <input className="visually-hidden" type="checkbox" name="car-body" value="universal" id="universal" />
                    <label htmlFor="universal">Универсал</label>
                </li>
                <li className="filter__checkboxes-item">
                    <input className="visually-hidden" type="checkbox" name="car-body" value="hatchback" id="hatchback" />
                    <label htmlFor="hatchback">Хэтчбэк</label>
                </li>
                <li className="filter__checkboxes-item">
                    <input className="visually-hidden" type="checkbox" name="car-body" value="jeep" id="jeep" />
                    <label htmlFor="jeep">Внедорожник</label>
                </li>
                <li className="filter__checkboxes-item">
                    <input className="visually-hidden" type="checkbox" name="car-body" value="cupe" id="cupe" />
                    <label htmlFor="cupe">Купэ</label>
                </li>
            </ul>
        </fieldset>
    );
};

export default FilterCarBody;
