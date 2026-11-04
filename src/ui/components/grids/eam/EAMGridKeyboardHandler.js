import React from 'react'

const EAMGridKeyboardHandler = (props) => {
    const { onSearch, toggleFilters } = props;
    const onSearchRef = React.useRef(onSearch);
    const toggleFiltersRef = React.useRef(toggleFilters);
    React.useLayoutEffect(() => {
        onSearchRef.current = onSearch;
        toggleFiltersRef.current = toggleFilters;
    });

    React.useEffect(() => {
        const handleUserKeyPress = event => {
            switch (event.key) {
                case 'Enter':
                case 'F8':
                    onSearchRef.current();
                    break;
                case 'F7':
                    toggleFiltersRef.current();
                    break
                default:
                    break;
            }
        };
        window.addEventListener('keydown', handleUserKeyPress);
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, []);

    return null;
}

export default EAMGridKeyboardHandler
