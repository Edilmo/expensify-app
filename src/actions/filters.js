// Set text filter

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

// Sort by amount

export const sortByAmount = () => ({type: 'SORT_BY_AMOUNT'});

// Sort by date

export const sortByDate = () => ({type: 'SORT_BY_DATE'});

// Set start date filter

export const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});

// Set end date filter

export const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});
