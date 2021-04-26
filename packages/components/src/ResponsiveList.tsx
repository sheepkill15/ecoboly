import React from 'react';
import { FlatListProps, FlatList } from 'react-native';
import { useMediaQuery } from 'react-responsive';

const ResponsiveList = (props: FlatListProps<any>) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });

    return (
        <FlatList
            {...props}
            numColumns={isBigScreen ? 4 : isDesktopOrLaptop ? 3 : 1} />
    );
};

export default ResponsiveList;