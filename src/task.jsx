import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 3px solid lightgrey;
  border-radius: 50%;
  padding: 8px;
  margin-right: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

  width: 40px;
  height: 40px;
  // horizontally and vertically center text using Flexbox
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
    border-color: red;
  }
  `;
  export default class Task extends React.Component {
  render() {
    return (
    <div>
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {/* draggable expects its child to be a function */}
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {this.props.task.content[0]}
        </Container>
      )}
    </Draggable>
    </div>
    );
  }
}