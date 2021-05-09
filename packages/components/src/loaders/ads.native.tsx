import React from 'react';
import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';

const AdBanner = () => <BannerAd
unitId='ca-app-pub-6729129195115808/2443797298'
size={BannerAdSize.SMART_BANNER}
requestOptions={{
    requestNonPersonalizedAdsOnly: true,}}
onAdLoaded={() => {
    console.log('Advert loaded');}}
onAdFailedToLoad={(error) => {
    console.error('Advert failed to load: ', error);}}
onAdClosed={() => console.log('closed!')} onAdLeftApplication={() => console.log('left!')} onAdOpened={() => console.log('opened!')}/>;

export default AdBanner;