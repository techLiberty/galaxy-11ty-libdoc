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
        iframe: null,
        tabCode: null,
        tabIframe: null
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
            sandbox._resizerEls.btn = evt.target.closest('.sandbox__resizer');
            sandbox._resizerEls.sandboxWrapper = evt.target.closest('.sandbox');
            sandbox._resizerEls.pre = sandbox._resizerEls.sandboxWrapper.querySelector('.sandbox__code');
            sandbox._resizerEls.iframe = sandbox._resizerEls.sandboxWrapper.querySelector('.sandbox__iframe');
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
                console.log('start sandbox__resizer', sandbox._preInitialWidth, sandbox._iframeInitialWidth);
            }
        },
        _stopResizer: function(evt) {
            console.log('stop sandbox__resizer');
            sandbox.enableIframes();
            window.removeEventListener('mousemove', sandbox.handlers._mousemoveWindow);
        },
        _mousemoveWindow:  function(evt) {
            sandbox._pointerX = evt.clientX;
            sandbox._pointerY = evt.clientY;
            // const delta = sandbox._pointerX - sandbox._pointerXReference;
            // console.log(delta);
            sandbox.resize();
        },
        _windowResize: function() {
            if (sandbox._resizerEls.pre !== null && sandbox._resizerEls.iframe !== null) {
                sandbox._resizerEls.pre.style.width = null;
                sandbox._resizerEls.iframe.style.width = null;
            }
        },
        _tab: function(evt) {
            
            const elBtn = evt.target.closest('.sandbox__tab'),
                elSandbox = evt.target.closest('.sandbox'),
                elPre = elSandbox.querySelector('.sandbox__code'),
                elIframe = elSandbox.querySelector('.sandbox__iframe'),
                tabName = elBtn.dataset.name;
            switch (tabName) {
                case 'code':
                    elPre.classList.remove('d-none--xs', 'd-none--sm');
                    elIframe.classList.add('d-none--xs', 'd-none--sm');
                    break;
            
                default:
                    elIframe.classList.remove('d-none--xs', 'd-none--sm');
                    elPre.classList.add('d-none--xs', 'd-none--sm');
                    break;
            }
        }
    },
    update: function() {
        document.querySelectorAll('.sandbox__resizer').forEach(function(el) {
            el.addEventListener('mousedown', sandbox.handlers._mousedownResizer);
        });
        document.querySelectorAll('.sandbox__tab').forEach(function(el) {
            el.addEventListener('click', sandbox.handlers._tab);
        });
        window.addEventListener('mouseup', sandbox.handlers._stopResizer);
        window.addEventListener('resize', sandbox.handlers._windowResize);
    }
}
document.addEventListener('DOMContentLoaded', sandbox.update);