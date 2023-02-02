// Create a html container that changes its image and information based on users feedback
// Acceptance criteria:
//     1. Our application should be modular, array of feedbacks should be declared outside of main.js
//     2. Feedback should rotate in cycles by changing each feedback every 3 seconds so if we would have two feedbacks it should show
//         first feedback, then second and then should return to first one and cycle continues.

import {feedbacks} from './feedback.js';

const feedbacksContainer = document.querySelector(".feedback-conatiner");
let displayFeedbackIndex = 0;

const displayFeedbacks = () => {
    const feedbacksContainers = document.querySelectorAll('.feedback');
    

    feedbacksContainers.forEach((feedback, index) => {
    index === displayFeedbackIndex ? feedback.classList.remove('hidden') : feedback.classList.add('hidden');

    console.log(feedbacks);
})
 displayFeedbackIndex++;

 if( displayFeedbackIndex === feedbacks.length-1) {
    displayFeedbackIndex = 0;
 }

 setTimeout(displayFeedbacks, 3000);

};

const constructFeedbacks = () => {
    feedbacks.forEach(constructFeedbackCard);
};

 const constructFeedbackCard = (feedback) => {
    const feedbackContainer = document.createElement('div');
    const profilePictureImg = document.createElement('img');
    const fullNameParagraph = document.createElement('p');
    const review = document.createElement('p');

    feedbackContainer.classList.add('feedback' , 'hidden');
    profilePictureImg.src = feedback.profilePicture;
    fullNameParagraph.textContent = `${feedback.firstName} + ${feedback.lastName}`;
    review.textContent = feedback.review;

    feedbackContainer.append(profilePictureImg, fullNameParagraph, review);

    feedbacksContainer.append(feedbackContainer);
 };

 console.log(constructFeedbackCard);

