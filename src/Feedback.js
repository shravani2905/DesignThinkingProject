import React, { useState } from 'react';

function Feedback() {
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmitFeedback = () => {
    // You can implement the logic to handle the submitted feedback, for example, sending it to a server.
    console.log('Submitted feedback:', feedbackText);
    // Reset the input after submission
    setFeedbackText('');
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>
      <p>Your feedback is valuable! Share your thoughts to help us improve and create a better living experience at VJ Hostel.</p>

      {/* Feedback form */}
      <form className="feedback-form">
        <label>
          How can we improve common areas in the hostel?
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleSubmitFeedback}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Feedback;
