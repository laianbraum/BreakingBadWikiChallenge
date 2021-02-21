import React from 'react';

import Avatar from '../../styles/Avatar';

export default function AvatarComponent({ source }: { source: string }){
  return (
    <Avatar>
      <img
        src={source}
        alt="Character"
      />
    </Avatar>
  )
}