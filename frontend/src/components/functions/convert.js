import React from 'react';

export  const ConvertDate = (created_at) => {
    let convertDay;
    if(created_at){
        convertDay = created_at.split(/[T.]/);
        return `${convertDay[0]} ${convertDay[1]}`;
    }
    return null;
}