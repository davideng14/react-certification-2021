import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import videos from '../../mockData/videos';
import VideoItem from '../../components/VideoItem';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const { items: videoItems } = videos;

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <>
      <section className="homepage" ref={sectionRef}>
        {authenticated ? (
          <>
            <h1>Videos</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {videoItems.map((video) => (
                <VideoItem key={video.id.videoId} data={video} />
              ))}
              <span>
                <Link to="/" onClick={deAuthenticate}>
                  ← logout
                </Link>
                <span className="separator" />
                <Link to="/secret">show me something cool →</Link>
              </span>
            </div>
          </>
        ) : (
          <Link to="/login">let me in →</Link>
        )}
      </section>
    </>
  );
}

export default HomePage;
