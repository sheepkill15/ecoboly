import React, {RefObject} from 'react';
import { ViewStyle } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Book } from '../types';
import BottomBook from '../BottomBook';

export default ({currBook, styles, refRBSheet, onOpen}: {currBook: Book | undefined; styles: ViewStyle; refRBSheet: RefObject<RBSheet>; onOpen: (uri: string, page: number) => void}) => {

    return (
        <RBSheet
				ref={refRBSheet}
				closeOnDragDown={true}
				closeOnPressMask={true}
				closeOnPressBack={true}
				customStyles={{
					container: styles,
				}}>
				{currBook ? (
					<BottomBook onOpen={onOpen} book={currBook as Book} />
				) : (
					<></>
				)}
			</RBSheet>
    )
}
