import React from 'react';
import { PlayerWrapper, AvatarWrapper } from './Player.styled';
import Avatar from 'react-nice-avatar';
import { Text } from '../../styles/General.styled';


function Player({ player, isPlayerActive }) {

  return (
    <PlayerWrapper>
        <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
            <Avatar {...player.avatarConfig} />
        </AvatarWrapper>
        <Text>{player.name} ({player.choice.toUpperCase()})</Text>
        <Text>{player.score}</Text>
    </PlayerWrapper>
  );
}

export default Player
