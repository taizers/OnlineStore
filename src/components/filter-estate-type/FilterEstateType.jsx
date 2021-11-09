
const FilterEstateType = () => {
    return (
        <fieldset className="filter__type filter__type--estate">
            <legend>Тип недвижимости</legend>
                <ul className="filter__checkboxes-list filter__checkboxes-list--estate">
                    <li className="filter__checkboxes-item">
                        <input className="visually-hidden" type="checkbox" name="estate-type" value="house" id="house" />
                        <label htmlFor="house">Дом</label>
                    </li>
                    <li className="filter__checkboxes-item">
                        <input className="visually-hidden" type="checkbox" name="estate-type" value="flat" id="flat" />
                        <label htmlFor="flat">Квартира</label>
                    </li>
                    <li className="filter__checkboxes-item">
                        <input className="visually-hidden" type="checkbox" name="estate-type" value="apartments" id="apartments" />
                        <label htmlFor="apartments">Апартаменты</label>
                    </li>
                </ul>
        </fieldset>
    );
};

export default FilterEstateType;
