import { Component } from 'react';
import { Item, Name, Number, DeleteBtn } from './Contacts.styled';

export class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contactList.map(({ id, name, number }) => (
          <Item key={id}>
            <Name>
              {name}: <Number>{number}</Number>
            </Name>
            <DeleteBtn
              type="button"
              onClick={() => {
                this.props.onDeleteBtn(id);
              }}
            >
              Delete
            </DeleteBtn>
          </Item>
        ))}
      </ul>
    );
  }
}
