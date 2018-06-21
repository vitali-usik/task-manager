import React from 'react';
import TasksIndex from './tasks_index';
import configureStore from 'redux-mock-store'

// const mockStore = { tasks: [] };
const initialState = {
  tasks: {
    tasks: [
      {
        _id: "5b2ab429bc721c263e0a1810",
        task_name: "adfa",
        task_desc: "asdf",
        task_priority: 333,
        task_user_id: "5b2aacb6832e54237a03530e",
        updated_at: "2018-06-20T20:08:09.632Z",
        __v: 0
      },
      {
        _id: "5b2ab5f0bc721c263e0a1814",
        task_name: "a sdfa sdf ",
        task_desc: "a sdfas f",
        task_priority: 33,
        task_user_id: "5b2a5051fa5e631bf5864ab3",
        updated_at: "2018-06-20T20:15:44.111Z",
        __v: 0
      },
      {
        _id: "5b2ab6c3bc721c263e0a1817",
        task_name: "111",
        task_desc: "1",
        task_priority: 11,
        task_user_id: "5b2ab6b5bc721c263e0a1816",
        updated_at: "2018-06-20T20:19:15.590Z",
        __v: 0
      }
    ],
    currentUser: {
      _id: "5b2ab6b5bc721c263e0a1816"
    }
  }
};
const mockStore = configureStore();
let store;
let wrapper;

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = shallow(<TasksIndex store={store} />);
});

describe('TasksIndex Component', () => {
  it('should be initialized', () => {
    expect(wrapper).to.exist;
  });

  it('should receive tasks', () => {
    expect(wrapper.props().tasks).to.exist;
  });

  it('should contain tasks with length 3', () => {
    expect(wrapper.props().tasks.length).to.equal(3);
  });

  it('should generate table', () => {
    expect(wrapper.find('table')).to.exist;
  });

  it('should receive user', () => {
    expect(wrapper.props().user._id).to.exist;
  });

  // it('should filter tasks by current user', () => {
  //   expect(wrapper.dive().instance().getTasks()).to.exist;
  // });

  it('should filter tasks by current user and return one item', () => {
    const tasks = wrapper.dive().instance().getTasks();
    const keys = Object.keys(tasks);
    expect(keys.length).to.equal(1);
  });
});
