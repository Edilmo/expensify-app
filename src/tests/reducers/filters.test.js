import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toEqual('date');
});

test('should set text to provided value', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const value = 'rent';
    const action = {type: 'SET_TEXT', text: value};
    const state = filtersReducer(currentState, action);
    expect(state.text).toEqual(value);
});

test('should set startDate to provided value', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const value = moment().startOf('month');
    const action = {type: 'SET_START_DATE', date: value};
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(value);
});

test('should set endDate to provided value', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const value = moment().endOf('month');
    const action = {type: 'SET_END_DATE', date: value};
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toEqual(value);
});
