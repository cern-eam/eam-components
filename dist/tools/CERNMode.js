export var isCernMode = process.env.REACT_APP_CERN_MODE === 'TRUE';
export var withCernMode = function withCernMode(WrappedComponent) {
  return isCernMode ? WrappedComponent : function () {
    return null;
  };
};
var CERNMode = function CERNMode(props) {
  return isCernMode ? props.children : null;
};
export default CERNMode;