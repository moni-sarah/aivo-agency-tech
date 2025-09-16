import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-auto rounded-lg shadow-elegant"
          >
            <source src="/video-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};