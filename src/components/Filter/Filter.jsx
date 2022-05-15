import PropTypes from 'prop-types';
import { Title, Label } from './Filter.styled';

export function Filter({ sortHightLowPrice, sortLowHightPrice }) {
  return (
    <fieldset>
      <Title>Filter price:</Title>

      <div>
        <input
          onClick={sortHightLowPrice}
          type="radio"
          id="hight"
          name="price"
          value="hight-low"
        />
        <Label id="hight">Hight-Low</Label>
      </div>

      <div>
        <input
          onClick={sortLowHightPrice}
          type="radio"
          id="low"
          name="price"
          value="low-high"
        />
        <Label id="low">Low-High</Label>
      </div>
    </fieldset>
  );
}

Filter.propTypes = {
  sortHightLowPrice: PropTypes.func.isRequired,
  sortLowHightPrice: PropTypes.func.isRequired,
};
