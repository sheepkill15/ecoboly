import RNFetchBlob from 'rn-fetch-blob';

export default (uri: string) => RNFetchBlob.android.actionViewIntent(uri, 'application/pdf');
