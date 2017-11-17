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
        generalLinkTextTwo: blogData.ftult2,
        content: blogData.bbc
    };
}

function buildNewArticleObj(articleData){
    return {
        type: "article",
        creator: articleData.creator,
        url: articleData.aurl,
        barColorOne: articleData.ab1,
        barColorTwo: articleData.ab2,
        barColorThree: articleData.ab3,
        barColorFour: articleData.ab4,
        header: articleData['article-header'],
        primaryImage: articleData.api,
        facebookUrl: articleData.flfb,
        instagramUrl: articleData.flinsta,
        snapchatUrl: articleData.flsnap,
        contact: articleData['footer-contact'],
        address: articleData['footer-address'],
        generalLinkHrefOne: articleData.ftulh1,
        generalLinkTextOne: articleData.ftult1,
        generalLinkHrefTwo: articleData.ftulh2,
        generalLinkTextTwo: articleData.ftult2,
        content: articleData.apc
    };
}

function buildNewNewsletterObj(nlData){
    return {
        type: "newsletter",
        creator: nlData.creator,
        url: nlData.nurl,
        barColorOne: nlData.nb1,
        barColorTwo: nlData.nb2,
        barColorThree: nlData.nb3,
        barColorFour: nlData.nb4,
        header: nlData['news-header'],
        primaryImage: nlData.npi,
        secondaryImageOne: nlData.nsi1,
        secondaryImageTwo: nlData.nsi2,
        facebookUrl: nlData.flfb,
        instagramUrl: nlData.flinsta,
        snapchatUrl: nlData.flsnap,
        contact: nlData['footer-contact'],
        address: nlData['footer-address'],
        generalLinkHrefOne: nlData.ftulh1,
        generalLinkTextOne: nlData.ftult1,
        generalLinkHrefTwo: nlData.ftulh2,
        generalLinkTextTwo: nlData.ftult2,
        content: nlData.npc        
    };
}

module.exports = {
    buildNewBlogObj : buildNewBlogObj,
    buildNewArticleObj: buildNewArticleObj,
    buildNewNewsletterObj: buildNewNewsletterObj
};