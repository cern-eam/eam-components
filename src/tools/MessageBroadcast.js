const DEFAULT_TARGET_ORIGIN = "*";

const broadcastMessageParent = (payload, targetOrigin = DEFAULT_TARGET_ORIGIN) => {
  if (window.parent === window) {
    return;
  }
  window.parent.postMessage({source: 'EAM-COMPONENTS', ...payload}, targetOrigin);
};

const broadcastMessage = (payload, targetOrigin = DEFAULT_TARGET_ORIGIN) => {
  broadcastMessageParent({ type: 'success', ...payload }, targetOrigin);
};

const broadcastExceptionText = (text, targetOrigin = DEFAULT_TARGET_ORIGIN) => {
  broadcastMessageParent({ type: 'exception', text }, targetOrigin);
};

const broadcastException = (payload, targetOrigin = DEFAULT_TARGET_ORIGIN) => {
  broadcastMessageParent({ ...payload, type: 'exception' }, targetOrigin);
};

export { broadcastMessage, broadcastExceptionText, broadcastException };