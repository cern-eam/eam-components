import React from 'react';
var EAMGridKeyboardHandler = function EAMGridKeyboardHandler(props) {
  var onSearch = props.onSearch,
    toggleFilters = props.toggleFilters;
  var onSearchRef = React.useRef(onSearch);
  var toggleFiltersRef = React.useRef(toggleFilters);
  React.useLayoutEffect(function () {
    onSearchRef.current = onSearch;
    toggleFiltersRef.current = toggleFilters;
  });
  React.useEffect(function () {
    var handleUserKeyPress = function handleUserKeyPress(event) {
      switch (event.key) {
        case 'Enter':
        case 'F8':
          onSearchRef.current();
          break;
        case 'F7':
          toggleFiltersRef.current();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleUserKeyPress);
    return function () {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, []);
  return null;
};
export default EAMGridKeyboardHandler;