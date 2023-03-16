const mongoose = require('mongoose')
const slugify = require('slugify')
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        unique: true, // There can only be one.
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        unique: true
    }
})

CourseSchema.pre('validate', function(next){
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    })
    next(); 
})

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;