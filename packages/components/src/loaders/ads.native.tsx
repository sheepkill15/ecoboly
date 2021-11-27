import React from 'react';
import { BannerAd, BannerAdSize} from '@react-native-firebase/admob';

const AdBanner = () => <BannerAd
unitId='ca-app-pub-5540832875853339/5827889674'
size={BannerAdSize.SMART_BANNER}
onAdLoaded={() => {
    console.log('Advert loaded');}}
onAdFailedToLoad={(error) => {
    console.error('Advert failed to load: ', error);}}
onAdClosed={() => console.log('closed!')} onAdLeftApplication={() => console.log('left!')} onAdOpened={() => console.log('opened!')}/>;

export default AdBanner;