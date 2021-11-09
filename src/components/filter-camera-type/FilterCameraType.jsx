

const FilterCameraType = () => {
    return (
        <fieldset className="filter__type filter__type--camera">
            <legend>Тип фотоаппарата</legend>
            <ul className="filter__checkboxes-list filter__checkboxes-list--camera">
                <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="camera-type" value="mirror" id="mirror" />
                <label htmlFor="mirror">Зеркальный</label>
                </li>
                <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="camera-type" value="digital" id="digital" />
                <label htmlFor="digital">Цифровой</label>
                </li>
                <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="camera-type" value="mirrorless" id="mirrorless" />
                <label htmlFor="mirrorless">Беззеркальный</label>
                </li>
            </ul>
        </fieldset>
    );
};

export default FilterCameraType;
