import FilterCameraType from '../filter-camera-type/FilterCameraType.jsx';
import FilterCameraMatrix from '../filter-camera-matrix/FilterCameraMatrix.jsx';
import FilterCameraVideo from '../filter-camera-video/FilterCameraVideo.jsx';


const FilterCamera = () => {
    return (
        <div className="filter__camera">
            <FilterCameraType />
            <FilterCameraMatrix />
            <FilterCameraVideo />
        </div>
    );
};

export default FilterCamera;