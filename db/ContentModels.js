const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    type: { type: String, required: true},
    creator: { type: String, required: true},
    url: { type: String, required: true, unqiue: true },
    barColorOne: { type: String },
    barColorTwo: { type: String },
    barColorThree: { type: String },
    barColorFour: { type: String },
    header:  { type: String },
    carouselImages: { type: Array },
    primaryImage: { type: String },
    secondaryImageOne: { type: String },
    secondaryImageTwo: { type: String },    
    miniNavTextOne: { type: String },
    miniNavHrefOne: { type: String },
    miniNavTextTwo: { type: String },
    miniNavHrefTwo: { type: String },
    miniNavTextThree: { type: String },
    miniNavHrefThree: { type: String },
    facebookUrl : { type: String },
    instagramUrl : { type: String },
    snapchatUrl : { type: String },
    contact: {type: String },
    address: { type: String },
    generalLinkHrefOne: { type: String },
    generalLinkTextOne: { type: String },
    generalLinkHrefTwo: { type: String },
    generalLinkTextTwo: { type: String }
});

let Content = mongoose.model('Content', contentSchema);

module.exports = {
    Content : Content
}
