import React, {useEffect} from 'react';

import {WebScreenNavigationProp, WebScreenRouteProp} from './types';

type Props = {
  route: WebScreenRouteProp;
  navigation: WebScreenNavigationProp;
};

const WebScreen = ({route, /*navigation */}: Props) => {
  useEffect(() => {
    window.open(route.params.uri, '_blank');
  })
	return <></>
};
export default WebScreen;