import React from 'react';

var EAMGridKeyboardHandler = function EAMGridKeyboardHandler(props) {
  var onSearch = props.onSearch,
      toggleFilters = props.toggleFilters;
  var handleUserKeyPress = React.useCallback(function (event) {
    switch (event.key) {
      case 'Enter':
      case 'F8':
        onSearch();
        break;

      case 'F7':
        toggleFilters();
        break;

      default:
        break;
    }
  }, [onSearch, toggleFilters]);
  React.useEffect(function () {
    window.addEventListener('keydown', handleUserKeyPress);
    return function () {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
  return null;
};

export default EAMGridKeyboardHandler;