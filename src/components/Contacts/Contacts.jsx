import PropTypes from 'prop-types';
import { Item, Name, Number, DeleteBtn } from './Contacts.styled';

export const Contacts = ({ contactList, onDeleteBtn }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>
            {name}: <Number>{number}</Number>
          </Name>
          <DeleteBtn
            type="button"
            onClick={() => {
              onDeleteBtn(id);
            }}
          >
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteBtn: PropTypes.func.isRequired,
};
