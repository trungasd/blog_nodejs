const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
        .then(course => {
            res.render('courses/show', { course: mongooseToObject(course) });
        })
        .catch(next);
    }   

    //[GET] courses/create
    create(req, res, next){
        res.render('courses/create');
    }

    //[POST] courses/store
    store(req, res, next){
        const formData = req.body;
        req.body.image = `https://files.fullstack.edu.vn/f8-prod/${req.body.videoId}courses/6.png`;
        const course = new Course(formData);
        course.save();

        res.send("course save")
    }
}

module.exports = new CourseController();
