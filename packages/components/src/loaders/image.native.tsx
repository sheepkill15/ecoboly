import React from 'react';
import { Image, ImageStyle } from 'react-native';
export default 
    ({ imageStyle, source }: { imageStyle: ImageStyle; source: any }) => 
    (<Image style={imageStyle} source={source} />)