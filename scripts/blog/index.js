const fetchArticles = require('./fetch-articles');

const getBlog = async (ids) => fetchArticles(ids);

module.exports = getBlog;
