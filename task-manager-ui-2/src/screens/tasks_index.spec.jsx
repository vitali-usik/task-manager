// import React from 'react'
// import {shallow} from 'enzyme'
// import Button from './Button'

// describe('TasksIndex', () => {
//   it.skip('should style the button with a background of the context color', () => {
//     throw new Error('TODO: test this')
//   })
// })

// import { renderComponent , expect } from '../../test/test_helper';
// import TasksIndex from '../../src/screens/tasks_index';
//
// describe('TasksIndex' , () => {
//   let component;
//
//   beforeEach(() => {
//     component = renderComponent(TasksIndex);
//   });
//
//   it('renders something', () => {
//     expect(component).to.exist;
//   });
// });

import TasksIndex from '../../src/screens/tasks_index';
import { renderComponent , expect } from '../../test/test_helper';

describe('TasksIndex my code must work', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TasksIndex);
  });

  it ('should work', () => {
    expect(component).to.exist;
  });
  it ('should not work', () => {

  })
});

// import { renderComponent , expect } from '../test_helper';
// import TasksIndex from '../../src/screens/tasks_index';
//
// describe('TasksIndex' , () => {
//   let component;
//
//   beforeEach(() => {
//     component = renderComponent(TasksIndex);
//   });
//
//   it('renders something', () => {
//     expect(component).to.exist;
//   });
// });


