//import '../../lib/rSlider.min.js';

/* const mySlider = new rSlider({
    target: '#sampleSlider',
    set: [MIN_PRICE, MAX_PRICE],
    values: getSliderValues(),
    range: true,
    tooltip: true,
    scale: true,
    labels: true,
    step: 10000,
}); */

const FilterSlider = () => {
    return (
        <div className="filter__range">
            <label htmlFor="range">Цена, ₽</label>
            <input type="text" id="sampleSlider" />
        </div>
    );
};

export default FilterSlider;