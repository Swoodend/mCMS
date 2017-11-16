function buildNewBlogObj(blogData){
    let images = [];
    
    for (let i = 1; i <=4; i++){
        let image = blogData[`bci${i}`] || null;
        images.push(image);
    }

    return {
        type: "blog",
        creator: blogData.creator,
        url: blogData.burl,
        barColorOne: blogData.bb1,
        barColorTwo: blogData.bb2,
        barColorThree: blogData.bb3,
        barColorFour: blogData.bb4,
        header: blogData['blog-header'],        
        carouselImages: images,
        miniNavTextOne: blogData.brmnt1,
        miniNavHrefOne: blogData.brmnl1,
        miniNavTextTwo: blogData.brmnt2,
        miniNavHrefTwo: blogData.brmnl2,
        miniNavTextThree: blogData.brmnt3,
        miniNavHrefThree: blogData.brmnl3,
        facebookUrl: blogData.flfb,
        instagramUrl: blogData.flinsta,
        snapchatUrl: blogData.flsnap,
        contact: blogData['footer-contact'],
        address: blogData['footer-address'],
        generalLinkHrefOne: blogData.ftulh1,
        generalLinkTextOne: blogData.ftult1,
        generalLinkHrefTwo: blogData.ftulh2,
        generalLinkTextTwo: blogData.ftult2
    };
}

module.exports = {
    buildNewBlogObj : buildNewBlogObj
}