// eslint-disable-next-line max-len
const wordForm = (n, w, c = [2, 0, 1, 1, 1, 2]) => w[(n % 100 > 4 && n % 100 < 20) ? 2 : c[(n % 10 < 5) ? n % 10 : 5]];

export default wordForm;
