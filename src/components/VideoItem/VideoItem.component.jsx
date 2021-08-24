import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 20em;
  margin: 1em;
`;
const ImageContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 10em;
`;

function VideoItem({ data }) {
  const { snippet: videoData } = data;
  return (
    <Button>
      <ImageContainer image={videoData.thumbnails.default.url} />
      <div>
        <h2 data-testid="videoTitle">{videoData.title}</h2>
        <p>{videoData.description}</p>
      </div>
    </Button>
  );
}

export default VideoItem;
