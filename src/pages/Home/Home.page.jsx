import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import videos from '../../mockData/videos';
import VideoItem from '../../components/VideoItem';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { logout } = useAuth();
  const { items: videoItems } = videos;

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <>
      <section className="homepage" ref={sectionRef}>
        <h1>Videos</h1>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}
        >
          {videoItems.map((video) => (
            <VideoItem key={video.id.videoId} data={video} />
          ))}
          <span>
            <Link to="/" onClick={deAuthenticate} data-testid="logout">
              ← logout
            </Link>
          </span>
        </div>
      </section>
    </>
  );
}

export default HomePage;
