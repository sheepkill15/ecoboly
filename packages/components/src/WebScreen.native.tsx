import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Pdf from 'react-native-pdf';
import {WebView} from 'react-native-webview';
import {WebScreenNavigationProp, WebScreenRouteProp} from './types';

type Props = {
  route: WebScreenRouteProp;
  navigation: WebScreenNavigationProp;
};

const WebScreen = ({route, /*navigation */}: Props) => {
	const [pdf, setPdf] = useState<Pdf | null>(null);

	const onRefChange = useCallback((newpdf: Pdf) => {
		setPdf(newpdf);
	}, []);

	useEffect(() => {
    pdf?.setPage(route.params.page + 1);
	}, [pdf, route.params.page]);

	const uri = route.params.uri as string;
	return uri[0] === '/' ? (
		<Pdf
			ref={onRefChange}
			style={styles.pdf}
			fitWidth={true}
			source={{uri: `file://${uri}`}}
		/>
	) : (
		<WebView source={{uri: uri}} />
	);
};
export default WebScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 25,
	},
	pdf: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
