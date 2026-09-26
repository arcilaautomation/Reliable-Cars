// Shared helpers for building source links in the data files.
window.RC = { models: [] };
window.CR = function (make, model, year) {
  return "https://www.consumerreports.org/cars/" + make + "/" + model + "/" + year + "/reliability/";
};
window.JDP = function (studyYear) {
  return "https://www.jdpower.com/cars/ratings/dependability/" + studyYear;
};
window.NH = function (id) {
  return "https://www.nhtsa.gov/recalls?nhtsaId=" + id;
};
window.TSB = function (path) {
  return "https://static.nhtsa.gov/odi/tsbs/" + path;
};
