import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </Label>
  );
};
