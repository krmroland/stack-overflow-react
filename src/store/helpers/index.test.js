import { mapStateToProps, mapActionsToProps } from '.';

const user = { name: 'Ahimbisibwe Roland' };
const article = { title: 'Hello world' };

const initialState = { user, article };

describe('mapStateToProps', () => {
  test('It returns an empty object if key is a string', () => {
    expect(mapStateToProps('name')(initialState)).toEqual({});
  });

  test('It extracts state using array keys', () => {
    expect(mapStateToProps(['article'])(initialState)).toEqual({ article });
  });
  test('It extracts state using object keys', () => {
    expect(mapStateToProps({ name: 'user.name' })(initialState)).toEqual({ name: user.name });
  });
});

describe('mapActionsToProps', () => {
  const dispatch = jest.fn();
  test('It returns an empty object if key is a string', () => {
    expect(mapActionsToProps('name')(dispatch)).toEqual({});
  });

  test('it dispatches an action', () => {
    const props = { action: jest.fn() };
    const obj = mapActionsToProps(props)(dispatch);
    obj.action();
    expect(dispatch).toHaveBeenCalled();
  });
});
