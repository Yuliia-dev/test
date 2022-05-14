import PropTypes from 'prop-types';
import { LabelFilter, TextFilter, InputFilter } from './SearchForm.styled';

export default function SearchForm({ value, searchName }) {
  return (
    <LabelFilter>
      <TextFilter>Find dream</TextFilter>
      <InputFilter
        autoComplete="off"
        placeholder="Enter something ;)"
        type="text"
        name={value}
        onChange={searchName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </LabelFilter>
  );
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  searchName: PropTypes.func.isRequired,
};
