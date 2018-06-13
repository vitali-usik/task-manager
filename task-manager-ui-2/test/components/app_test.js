import { renderComponent , expect } from '../test_helper';
import TasksIndex from '../../src/screens/tasks_index';

describe('TasksIndex' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TasksIndex);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
