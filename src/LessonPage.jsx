// import React, { useState } from 'react';
// import YouTube from 'react-youtube';

// const LessonPage = ({ lessonTitle }) => {
//   const [currentTopic, setCurrentTopic] = useState(1);
//   const videoIds = ['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3'];

//   const handleNext = () => {
//     setCurrentTopic((prevTopic) => Math.min(3, prevTopic + 1));
//   };

//   const handlePrev = () => {
//     setCurrentTopic((prevTopic) => Math.max(1, prevTopic - 1));
//   };

//   const handleVideoEnd = () => {
//     // You can add logic for what happens when a video ends
//   };

//   const handleCompleteLesson = () => {
//     // Add logic for marking lesson completion
//     alert(`Congratulations! You've completed Lesson ${lessonTitle}`);
//   };

//   const handleVideoSelection = (selectedTopic) => {
//     setCurrentTopic(selectedTopic);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       {/* Sidebar for video selection */}
//       <div style={{ width: '20%', marginRight: '20px' }}>
//         <h3>Videos</h3>
//         <ul>
//           {[1, 2, 3].map((topic) => (
//             <li key={topic}>
//               {/* Use onClick to handle video selection without changing URL */}
//               <span style={{ cursor: 'pointer' }} onClick={() => handleVideoSelection(topic)}>
//                 Video {topic}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main content area */}
//       <div>
//         <h2>Content Hub {lessonTitle}</h2>

//         {/* Video Player */}
//         <h3>Video {currentTopic}</h3>
//         <YouTube
//           videoId={videoIds[currentTopic - 1]}
//           opts={{ height: '390', width: '640' }}
//           onEnd={handleVideoEnd}
//         />

//         {/* Video Description */}
//         <p>Description: This is the description for Video {currentTopic}</p>

//         {/* Progress Bar: Replace with your progress bar component and logic */}
//         <div>
//           Progress Bar: <progress value={currentTopic} max="3"></progress>
//         </div>

//         {/* Navigation Buttons */}
//         <div>
//           <button onClick={handlePrev} disabled={currentTopic === 1}>
//             Previous
//           </button>
//           <button onClick={handleNext} disabled={currentTopic === 3}>
//             Next
//           </button>
//         </div>

//         {/* Complete Lesson Button */}
//         <div>
//           <button onClick={handleCompleteLesson}>Complete Lesson</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LessonPage;


import React, { useState } from 'react';
import YouTube from 'react-youtube';

const LessonPage = ({ lessonTitle }) => {
  const [currentTopic, setCurrentTopic] = useState(1);
  const videoIds = ['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3'];

  const handleNext = () => {
    setCurrentTopic((prevTopic) => Math.min(3, prevTopic + 1));
  };

  const handlePrev = () => {
    setCurrentTopic((prevTopic) => Math.max(1, prevTopic - 1));
  };

  const handleVideoEnd = () => {
    // You can add logic for what happens when a video ends
  };

  const handleCompleteLesson = () => {
    // Add logic for marking lesson completion
    alert(`Congratulations! You've completed Lesson ${lessonTitle}`);
  };

  const handleVideoSelection = (selectedTopic) => {
    setCurrentTopic(selectedTopic);
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar for video selection */}
      <div style={{ width: '20%', marginRight: '20px', color: '#555' }}>
        <h3>Videos</h3>
        <ul>
          {[1, 2, 3].map((topic) => (
            <li key={topic}>
              {/* Use onClick to handle video selection without changing URL */}
              <span
                style={{
                  cursor: 'pointer',
                  fontSize: '14px',
                  padding: '8px',
                  display: 'block',
                  marginBottom: '4px',
                  borderRadius: '4px',
                  backgroundColor: currentTopic === topic ? '#007BFF' : 'transparent',
                  color: currentTopic === topic ? '#fff' : '#333',
                }}
                onClick={() => handleVideoSelection(topic)}
              >
                Video {topic}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content area */}
      <div>
        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#333' }}>Content Hub {lessonTitle}</h2>

        {/* Video Player */}
        <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#007BFF' }}>Video {currentTopic}</h3>
        <YouTube
          videoId={videoIds[currentTopic - 1]}
          opts={{ height: '390', width: '640' }}
          onEnd={handleVideoEnd}
        />

        {/* Video Description */}
        <p style={{ fontSize: '16px', marginBottom: '12px', color: '#555' }}>
          Description: This is the description for Video {currentTopic}
        </p>

        {/* Progress Bar: Replace with your progress bar component and logic */}
        <div style={{ marginBottom: '16px' }}>
          Progress Bar: <progress value={currentTopic} max="3" style={{ width: '100%' }}></progress>
        </div>

        {/* Navigation Buttons */}
        <div>
          <button
            style={{
              fontSize: '14px',
              padding: '8px 12px',
              marginRight: '8px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={handlePrev}
            disabled={currentTopic === 1}
          >
            Previous
          </button>
          <button
            style={{
              fontSize: '14px',
              padding: '8px 12px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={handleNext}
            disabled={currentTopic === 3}
          >
            Next
          </button>
        </div>

        {/* Complete Lesson Button */}
        <div>
          <button
            style={{
              fontSize: '16px',
              padding: '12px 20px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={handleCompleteLesson}
          >
            Complete Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;

