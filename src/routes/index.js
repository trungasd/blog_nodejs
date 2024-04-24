const newRouter = require('./news');
const coursesRouter = require('./courses');
const siteRoute = require('./site');

function route(app){

    app.use('/news', newRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRoute);

}

module.exports = route;