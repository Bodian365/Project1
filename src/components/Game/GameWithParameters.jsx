import React from 'react';
import { useParams } from 'react-router-dom';

import Game from './Game';

const GameWithParameters = (properties) => {
    const { elementId } = useParams();
    return <Game {...properties} elementId={Number(elementId)} onAdd={properties.onAdd} />;
};

export default GameWithParameters;
