
//basic methods:
const sum = (i, j) => i + j;
const sub = (i, j) => i - j;


// don't repeat yourself mate

const operation = (i, j, op) => (op ? i + j : i - j);
