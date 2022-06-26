//v1 - Idéia original - Baseado em: https://www.youtube.com/watch?v=zx2axQoY_YM

const customStyleTag = document.createElement('style');
const body = document.querySelector('body');
const CustomStyleContent = document.createTextNode(`
    .typewrithem::after,
    .typewrithem_reverse::after {
      content: '|';
      margin-left: 5px;
      opacity: 1;
      animation: cursor-blink .7s infinite;
    }
    
    @keyframes cursor-blink {
      0%, 100% {
          opacity: 1;
      }
      50% {
          opacity: 0;
      }
    }
`);

customStyleTag.appendChild(CustomStyleContent);
body.appendChild(customStyleTag);

function typewrithem(params) {

    const defaultParams = {
        target: '.typewrithem',
        delay: 95,
        caret: '|'
    }

    // TYPE NORMAL
    function defaultAction(params, target) {
        arrayT = target.innerHTML.split('');
        target.innerHTML = '';
        arrayT.forEach((element, index) => {
            setTimeout(() => {
                target.innerHTML += element;
            }, params.delay * index);
        });
    }
    if (params === undefined) {
        params = defaultParams;
        const target = document.querySelector(".typewrithem");
        defaultAction(params, target);
    }
    else {
        const customParams = {
            ...defaultParams,
            ...params
        }
        const target = document.querySelector(`${customParams.target}.typewrithem`);
        //globalCaret = customParams.caret;
        defaultAction(customParams, target);
        let CustomStyleContent = document.createTextNode(`
    ${customParams.target}.typewrithem::after {
      content: '${customParams.caret}';
      margin-left: 5px;
      opacity: 1;
      animation: cursor-blink .7s infinite;
    }
`);

        customStyleTag.appendChild(CustomStyleContent);
        body.appendChild(customStyleTag);
    }
}

function typewrithemReverse(params) {
    const defaultParams = {
        target: '.typewrithem_reverse',
        delay: 195,
        caret: '|'
    }
    // TYPE NORMAL
    function defaultReverseAction(params) {
        const target = document.querySelector(`${params.target}.typewrithem_reverse`);
        arrayT = target.innerHTML.split('');
        target.innerHTML = arrayT.join('');
        arrayT.forEach((element, index) => {
            setTimeout(() => {
                target.innerHTML = target.innerHTML.substring(0, target.innerHTML.length - 1);
            }, params.delay * index);
        });
    }
    if (params === undefined) {
        params = defaultParams;
        const target = document.querySelector(".typewrithem_reverse");
        defaultReverseAction(params, target);
    }
    else {
        const customParams = {
            ...defaultParams,
            ...params
        }
        let CustomStyleContent = document.createTextNode(`
        ${customParams.target}.typewrithem_reverse::after {
            content: '${customParams.caret}';
            margin-left: 5px;
                opacity: 1;
                animation: cursor-blink .7s infinite;
            }
            `);
        defaultReverseAction(customParams);
        customStyleTag.appendChild(CustomStyleContent);
        body.appendChild(customStyleTag);
    }
}