
const defaultParams = {
    target: '.typewrithem',
    delay: 95,
    caret: '|'
}

function typewrithem(params) {
    function defaultAction(params) {
        const target = document.querySelector(`${params.target}.typewrithem`);
        arrayT = target.innerHTML.split('');
        target.innerHTML = '';
        target.setAttribute('caret', params.caret);
        arrayT.forEach((element, index) => {
            setTimeout(() => {
                target.innerHTML += element;
            }, params.delay * index);
        });
    }
    if (params === undefined) {
        params = defaultParams;
        defaultAction(params);
    }
    else {
        const customParams = {
            ...defaultParams,
            ...params
        }
        defaultAction(customParams);
    }
}

function typewrithemReverse(params) {
    const reverseParams = {
        ...defaultParams,
        target: '.typewrithem_reverse',
    }
    function defaultReverseAction(params) {
        const target = document.querySelector(`${params.target}.typewrithem_reverse`);
        arrayT = target.innerHTML.split('');
        target.innerHTML = arrayT.join('');
        target.setAttribute('caret', params.caret);
        arrayT.forEach((_, index) => {
            setTimeout(() => {
                target.innerHTML = target.innerHTML.substring(0, target.innerHTML.length - 1);
            }, params.delay * index);
        });
    }
    if (params === undefined) {
        params = reverseParams;
        defaultReverseAction(params);
    }
    else {
        const customParams = {
            ...reverseParams,
            ...params
        }
        defaultReverseAction(customParams);
    }
}