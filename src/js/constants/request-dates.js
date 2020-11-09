const TODAY = new Date();
const SEVEN_DAYS_AGO = new Date(TODAY.getTime() - 7 * 86400000);
const TODAY_ISO = TODAY.toISOString().substr(0, 10);
const SEVEN_DAYS_ISO = SEVEN_DAYS_AGO.toISOString().substr(0, 10);
const REQUEST_DATES = { TODAY_ISO, SEVEN_DAYS_ISO };

export default REQUEST_DATES;
