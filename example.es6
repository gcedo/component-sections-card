import React from 'react';
import context from './context';
import SectionsCard from './index';

context.media.map((mediaLink) => {
  mediaLink.icon = {
    useBackground: true,
    color: 'chicago',
    icon: mediaLink.meta,
  };
  return mediaLink;
});

export default (
  <SectionsCard data={context} />
);
