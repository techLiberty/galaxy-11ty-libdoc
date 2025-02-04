const sandbox = {
    _pointerX: 0,
    _pointerY: 0,
    _pointerXReference: 0,
    _pointerYReference: 0,
    _preInitialWidth: null,
    _iframeInitialWidth: null,
    _resizerEls: {
        btn: null,
        sandboxWrapper: null,
        pre: null,
        iframe: null
    },
    disableIframes: function() {
        document.querySelectorAll('iframe').forEach(function(el) {
            el.classList.add('pe-none');
        });
    },
    enableIframes: function() {
        document.querySelectorAll('iframe').forEach(function(el) {
            el.classList.remove('pe-none');
        });
    },
    resize: function() {
        const   delta = sandbox._pointerX - sandbox._pointerXReference,
                preWidth = sandbox._preInitialWidth + delta,
                iframeWidth = sandbox._iframeInitialWidth - delta;
        sandbox._resizerEls.pre.style.width = `${preWidth}px`;
        sandbox._resizerEls.iframe.style.width = `${iframeWidth}px`;
    },
    handlers: {
        _mousedownResizer: function(evt) {
            sandbox._pointerXReference = evt.clientX;
            sandbox._resizerEls.btn = evt.target.closest('.resizer');
            sandbox._resizerEls.sandboxWrapper = evt.target.closest('.sandbox');
            sandbox._resizerEls.pre = sandbox._resizerEls.sandboxWrapper.querySelector('pre');
            sandbox._resizerEls.iframe = sandbox._resizerEls.sandboxWrapper.querySelector('iframe');
            if (typeof sandbox._resizerEls.btn == 'object'
                && typeof sandbox._resizerEls.sandboxWrapper == 'object'
                && typeof sandbox._resizerEls.pre == 'object'
                && typeof sandbox._resizerEls.iframe == 'object') {
                sandbox._iframeInitialWidth = sandbox._resizerEls.iframe.clientWidth;
                sandbox._preInitialWidth = sandbox._resizerEls.pre.clientWidth;
                // To be able to detect mouse position
                sandbox.disableIframes();
                // Enable mouse position monitoring
                window.addEventListener('mousemove', sandbox.handlers._mousemoveWindow);
                console.log('start resizer', sandbox._preInitialWidth, sandbox._iframeInitialWidth);
            }
        },
        _stopResizer: function(evt) {
            console.log('stop resizer');
            sandbox.enableIframes();
            window.removeEventListener('mousemove', sandbox.handlers._mousemoveWindow);
        },
        _mousemoveWindow:  function(evt) {
            sandbox._pointerX = evt.clientX;
            sandbox._pointerY = evt.clientY;
            // const delta = sandbox._pointerX - sandbox._pointerXReference;
            // console.log(delta);
            sandbox.resize();
        }
    },
    update: function() {
        document.querySelectorAll('.resizer').forEach(function(el) {
            el.addEventListener('mousedown', sandbox.handlers._mousedownResizer);
        });
        window.addEventListener('mouseup', sandbox.handlers._stopResizer);
    }
}
document.addEventListener('DOMContentLoaded', sandbox.update);