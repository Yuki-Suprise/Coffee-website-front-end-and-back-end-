var fix = document.getElementsByClassName('fix')[0]
document.onscroll = throttle(function () {
    if (parseInt(HOME.getBoundingClientRect().top) <= -200) {
        fix.style.backgroundColor = 'rgb(83, 83, 83, 0.5)'
    }

    if (parseInt(HOME.getBoundingClientRect().top) > -200) {
        fix.style.backgroundColor = 'transparent'
    }

    if (parseInt(BLOG.getBoundingClientRect().top) <= 10) {

        if (parseInt(num1.innerHTML) <= 1) {
            for (var i = 0; i < 1000; i++) {
                setTimeout(() => {
                    num1.innerHTML = 2 + parseInt(num1.innerHTML)
                }, 2 * i)
            }
        }
        //  () => {}  箭头函数
        //JS是单线程的，为了防止一段代码执行时间过长，从而阻塞后面的代码执行，所以，我们遇到同步任务时将同步任务立即执行，遇到异步任务时将异步任务
        //压入异步队列中，异步队列又分为宏任务队列和微任务队列，执行完同步任务后，会执行微任务队列，之后执行宏任务队列；

        if (parseInt(num2.innerHTML) <= 1) {
            for (var i = 0; i < 1010; i++) {
                setTimeout(() => {
                    num2.innerHTML = 2 + parseInt(num2.innerHTML)
                }, 2 * i)
            }
        }


        if (parseInt(num3.innerHTML) <= 1) {
            for (var i = 0; i < 2010; i++) {
                setTimeout(() => {
                    num3.innerHTML = 5 + parseInt(num3.innerHTML)
                }, 1 * i)
            }
        }


        if (parseInt(num4.innerHTML) <= 1) {
            for (var i = 0; i < 1123; i++) {
                setTimeout(() => {
                    num4.innerHTML = 7 + parseInt(num4.innerHTML)
                }, 2 * i)
            }
        }

    }
}, 500)

var img = document.getElementsByClassName('img')
img[0].onmousemove = throttle(function () {
    var width = parseInt(img[0].style.width)
    if (width !== 400) {
        img[0].className += ' fly'
        for (var i = 0; i < 50; i++) {
            setTimeout(() => {
                img[0].style.width = parseInt(img[0].style.width) + 1 + 'px'
                img[0].style.height = parseInt(img[0].style.height) + 1 + 'px'
            }, 10 * i)
        }
    }
}, 2000)

img[0].onmouseleave = function () {
    var width = parseInt(img[0].style.width)
    if (width === 400) {
        img[0].className = 'img'
        for (var i = 0; i < 50; i++) {
            setTimeout(() => {
                img[0].style.width = parseInt(img[0].style.width) - 1 + 'px'
                img[0].style.height = parseInt(img[0].style.height) - 1 + 'px'
            }, 10 * i)
        }
    }
}

img[1].onmousemove = throttle(function () {
    var width = parseInt(img[1].style.width)
    if (width !== 400) {
        img[1].className += ' fly'
        for (var i = 0; i < 50; i++) {
            setTimeout(() => {
                img[1].style.width = parseInt(img[1].style.width) + 1 + 'px'
                img[1].style.height = parseInt(img[1].style.height) + 1 + 'px'
            }, 10 * i)
        }
    }
}, 2000)

img[1].onmouseleave = function () {
    var width = parseInt(img[1].style.width)
    if (width === 400) {
        img[1].className = 'img'
        for (var i = 0; i < 50; i++) {
            setTimeout(() => {
                img[1].style.width = parseInt(img[1].style.width) - 1 + 'px'
                img[1].style.height = parseInt(img[1].style.height) - 1 + 'px'
            }, 10 * i)
        }
    }
}

img[2].onmousemove = throttle(function () {
    var width = parseInt(img[2].style.width)
    if (width === 720) {
        img[2].className += ' fly'
        for (var i = 0; i < 80; i++) {
            setTimeout(() => {
                img[2].style.width = parseInt(img[2].style.width) + 1 + 'px'
                img[2].style.height = parseInt(img[2].style.height) + 1 + 'px'
            }, 10 * i)
        }
    }
}, 2000)

img[2].onmouseleave = function () {
    var width = parseInt(img[2].style.width)
    if (width >= 800) {
        img[2].className = 'img'
        for (var i = 0; i < 80; i++) {
            setTimeout(() => {
                img[2].style.width = parseInt(img[2].style.width) - 1 + 'px'
                img[2].style.height = parseInt(img[2].style.height) - 1 + 'px'
            }, 10 * i)
        }
    }
}

img[3].onmousemove = throttle(function () {
    var width = parseInt(img[3].style.width)
    if (width !== 400) {
        img[3].className += ' fly'
        for (var i = 0; i < 50; i++) {
            setTimeout(() => {
                img[3].style.width = parseInt(img[3].style.width) + 1 + 'px'
                img[3].style.height = parseInt(img[3].style.height) + 1 + 'px'
            }, 10 * i)
        }
    }
}, 2000)

img[3].onmouseleave = function () {
    var width = parseInt(img[3].style.width)
    if (width === 400) {
        img[3].className = 'img'
        for (var i = 0; i < 50; i++) {
            setTimeout(() => {
                img[3].style.width = parseInt(img[3].style.width) - 1 + 'px'
                img[3].style.height = parseInt(img[3].style.height) - 1 + 'px'
            }, 10 * i)
        }
    }
}

img[4].onmousemove = throttle(function () {
    var width = parseInt(img[4].style.width)
    if (width !== 400) {
        img[4].className += ' fly'
        for (var i = 0; i < 50; i++) {
            setTimeout(() => {
                img[4].style.width = parseInt(img[4].style.width) + 1 + 'px'
                img[4].style.height = parseInt(img[4].style.height) + 1 + 'px'
            }, 10 * i)
        }
    }
}, 2000)

img[4].onmouseleave = function () {
    var width = parseInt(img[4].style.width)
    if (width === 400) {
        img[4].className = 'img'
        for (var i = 0; i < 50; i++) {
            setTimeout(() => {
                img[4].style.width = parseInt(img[4].style.width) - 1 + 'px'
                img[4].style.height = parseInt(img[4].style.height) - 1 + 'px'
            }, 10 * i)
        }
    }
}

function throttle(fn, delay) {
    //记录上一次函数触发的时间
    var lastTime = 0;
    return function () {
        //记录当前函数触发的时间
        var nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            fn();
            //同步执行结束时间
            lastTime = nowTime;
        }
    }
}