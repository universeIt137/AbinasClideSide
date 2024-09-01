import React from 'react';

const ImageUrl = () => {
    // const serviceUrl = `http://localhost:5000/servicesImage`;
    const serviceUrl = `https://server.abinashfoundation.com/servicesImage`;
    // const mediaUrl = `http://localhost:5000/mediaImage`;
    const mediaUrl = `https://server.abinashfoundation.com/mediaImage`;
    // const newsUrl = `http://localhost:5000/newsImage`;
    const newsUrl = `https://server.abinashfoundation.com/newsImage`;
    // const aboutUrl = `http://localhost:5000/aboutImage`
    const aboutUrl = `https://server.abinashfoundation.com/aboutImage`
    // const noticeUrl = `http://localhost:5000/noticeImage`;
    const noticeUrl = `https://server.abinashfoundation.com/noticeImage`;
    // const csrUrl = `http://localhost:5000/csrImage`;
    const csrUrl = `https://server.abinashfoundation.com/csrImage`;
    return {
        serviceUrl,
        mediaUrl,
        newsUrl,
        aboutUrl,
        noticeUrl,
        csrUrl
    }
};

export default ImageUrl;