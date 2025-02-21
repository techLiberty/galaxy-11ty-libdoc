window.libdocUi = {
    default: {
        scrollThreshold: window.innerHeight / 2
    },
    el: {},
    copyToClipboard: function(textToCopy, options) {
        const params = {
            notificationEnabled: function(value) {
                let result = typeof value == 'boolean' ? value : true;
                if (typeof value == 'string') {
                    if (value.toLocaleLowerCase() === 'false') result = false;
                }
                return result;
            },
            notificationContent: function(value) {
                return typeof value == 'string' ? value : 'Copied to clipboard';
            }
        }
        const userParams = {
            notificationEnabled: params.notificationEnabled(),
            notificationContent: params.notificationContent()
        }
        if (typeof options == 'object') {
            Object.keys(options).forEach(function(optionName) {
                if (typeof params[optionName] == 'function') {
                    const optionValue = options[optionName];
                    userParams[optionName] = params[optionName](optionValue);
                }
            });
        }
        if (navigator.clipboard !== undefined) {
            navigator.clipboard.writeText(textToCopy).then(
                function() {
                  /* clipboard successfully set */
                  if (userParams.notificationEnabled) libdocUi.notifications.add(userParams.notificationContent);
                }
            )
        } else {
            /* clipboard write failed */
            // Create a "hidden" input
            const aux = document.createElement("input");
            // Assign it the value of the specified element
            aux.setAttribute("value", textToCopy);
            // Append it to the body
            document.body.appendChild(aux);
            // Highlight its content
            aux.select();
            // Copy the highlighted text
            document.execCommand("copy");
            // Remove it from the body
            document.body.removeChild(aux);
            if (userParams.notificationEnabled) libdocUi.notifications.add(userParams.notificationContent);
        }
    },
    notifications: {
        defaults: {
            template: 'base',
            duration: 3,
            skin: 'primary'
        },
        templates: {
            base: function({id, message, duration, skin}) {
                return `
                    <aside class="
                        d-flex jc-space-between
                        pos-fixed z-3 top-0 right-0
                        mt-5 mr-5
                        bc-${skin}-100 c-${skin}-800 brad-2 bs-1"
                        mt-3="xs,sm"
                        mr-3="xs,sm"
                        id="${id}">
                        <div class="d-flex p-2">
                            <div class="pl-1 brad-3" style="background-color: yellowgreen"></div>
                        </div>
                        <div class="d-flex ai-center | pt-4 pb-4 pl-4 pr-7">
                            ${message}
                        </div>
                        <button class="
                            d-flex ai-center
                            pt-2 pb-2 pl-3 pr-3
                            fs-1 tt-uppercase
                            blwidth-1 blstyle-solid bcolor-neutral-700 c-${skin}-700 bc-${skin}-200 b-0 bradtr-2 bradbr-2
                            cur-pointer"
                            p-3="xs"
                            onclick="this.closest('aside').remove();">
                            ok
                        </button>
                        <style>
                            @keyframes ${id} {
                                100% {
                                    transform: translateY(-200%);
                                    opacity: 0;
                                    pointer-events: none;
                                }
                            }
                            #${id} {
                                animation: ${id} 500ms ${duration}s forwards;
                            }
                            #${id}:hover {
                                animation-play-state: paused;
                            }
                        </style>
                    </aside>
                `;
            }
        },
        add: function(message, options) {
            let n_tpl = this.defaults.template;
            let n_duration = this.defaults.duration;
            let n_skin = this.defaults.skin;
            if (typeof options == 'object') {
                // Template
                const custom_tpl = options.template;
                if (typeof custom_tpl == 'string') {
                    if (typeof this.templates[custom_tpl] == 'function') {
                        n_tpl = custom_tpl;
                    }
                }
                // Duration
                const custom_duration = options.duration;
                if (typeof custom_duration == 'number') {
                    n_duration = custom_duration;
                }
                // Color family name
                const custom_skin = options.skin;
                if (typeof custom_skin == 'string') {
                    n_skin = custom_skin;
                }

            }
            const n_id = 'notification_' + Date.now().toString();
            const n_markup = this.templates[n_tpl]({message: message, id: n_id, duration: n_duration, skin: n_skin});
            document.body.insertAdjacentHTML('beforeend', n_markup);
        }
    },
    handlers: {
        _clickCopyCodeBlock: function(evt) {
            const elBtn = evt.target.closest('button');
            const content = evt.target.closest('pre').querySelector('code').innerText;
            libdocUi.copyToClipboard(content, {notificationEnabled: false});
            if (elBtn.dataset.originalText === undefined) elBtn.dataset.originalText = elBtn.innerText;
            elBtn.innerHTML = '<span class="c-success-500">Copied!</span>';
            setTimeout(function() {
                elBtn.innerHTML = elBtn.dataset.originalText;
                elBtn.classList.remove('pe-none');
            }, 3000);
        },
        _scrollWindow: function() {
            if (window.scrollY > libdocUi.default.scrollThreshold) {
                libdocUi.showGoToTop();
            } else {
                libdocUi.hideGoToTop();
            }
        },
        _clickGTT: function(evt) {
            window.scroll({top:0})
        }
    },
    createFloatingToc: function() {
        const elTocMain = document.querySelector('#toc_main > ol');
        if (libdocUi.el.ftoc === undefined && elTocMain !== null) {
            const elDetails = document.createElement('details');
            elDetails.id = 'floating_toc';
            const elSummary = document.createElement('summary');
            elSummary.setAttribute('class', 'd-flex jc-end | pt-5 pr-5 | cur-pointer');
            elSummary.ariaLabel = 'Table of content';
            elSummary.innerHTML = `
                <span class="d-flex ai-center gap-2 | pos-relative | pt-3 pb-3 pl-5 pr-5 | brad-4 c-primary-500 bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500">
                    <span class="icon-list-dashes fs-6"></span>
                    <abbr class="fvs-wght-400 td-none fs-3" title="Table of content">TOC</abbr>
                </span>`;
            elDetails.appendChild(elSummary);
            
            let floatingTocMarkup = `
                <div class="d-flex jc-end">
                    <ul id="floating_toc__list"
                        class="
                        d-flex fd-column
                        o-auto pl-0 pt-3 pb-3 mt-2 mb-0 mr-5
                        brad-3 bwidth-1 bstyle-dashed bcolor-primary-300 ls-none">`;
            elTocMain.querySelectorAll('a').forEach(function(el) {
                floatingTocMarkup += `
                <li>
                    <a  href="${el.getAttribute(`href`)}"
                        class="d-inline-flex | pl-5 pr-5 pt-1 pb-1 | fs-2 lh-5 fvs-wght-400 | c-primary-500">
                        ${el.innerHTML}
                    </a>
                </li>`;
            });
            floatingTocMarkup += '</ul></div>';
            elDetails.innerHTML += floatingTocMarkup;

            libdocUi.el.ftoc = document.createElement('div');
            libdocUi.el.ftoc.setAttribute('class', 'd-flex | pos-fixed top-0 right-0 z-1 | floating_toc');
            libdocUi.el.ftoc.appendChild(elDetails);
            document.body.appendChild(libdocUi.el.ftoc);
        }
    },
    createGoToTop: function() {
        if (libdocUi.el.gtt === undefined) {
            libdocUi.el.gtt = document.createElement('button');
            libdocUi.el.gtt.setAttribute('class', 'pos-fixed bottom-0 right-0 | p-5 mr-5 mb-5 | brad-4 bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 cur-pointer');
            libdocUi.el.gtt.innerHTML = `<span class="icon-arrow-line-up | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-primary-500"></span>`;
            libdocUi.el.gtt.title = 'Go to top';
            libdocUi.el.gtt.addEventListener('click', libdocUi.handlers._clickGTT);
            if (window.scrollY < libdocUi.default.scrollThreshold) libdocUi.hideGoToTop();
            document.body.appendChild(libdocUi.el.gtt);
            window.addEventListener('scroll', libdocUi.handlers._scrollWindow);
        }
    },
    showGoToTop: function() {
        libdocUi.el.gtt.classList.remove('d-none');
    },
    hideGoToTop: function() {
        libdocUi.el.gtt.classList.add('d-none');
    },
    update: function() {
        hljs.highlightAll();
        document.querySelectorAll('main>pre').forEach(function(elPre) {
            elPre.style.paddingTop = '0';
            const elCommands = elPre.querySelector('.copy_code_block');
            if (elCommands === null) {
                const commandBarMarkup = `<div class="d-flex jc-end"><button type="button" class="d-flex ai-center | pt-5 pb-5 fvs-wght-400 fs-2 tt-uppercase bc-0 c-primary-900 b-0 cur-pointer | copy_code_block">Copy code</button></div>`;
                elPre.insertAdjacentHTML('afterbegin', commandBarMarkup);
            }
            const elCode = elPre.querySelector('code');
            if (elCode !== null) {
                if (!elCode.classList.contains('hljs')) elCode.classList.add('hljs');
            }
        });
        document.querySelectorAll('.copy_code_block').forEach(function(el) {
            el.addEventListener('click', libdocUi.handlers._clickCopyCodeBlock);
        });
        libdocUi.createGoToTop();
        libdocUi.createFloatingToc();
    }
}
libdocUi.update();

