const btn = document.getElementById('facebook');
const btn1 = document.getElementById('telegram');
const btn2 = document.getElementById('vk');
const btn3 = document.getElementById('od');

const handler = () => {
    window.open(
        'https://www.facebook.com/share.php?u=' + location.href,
        'share',
        'left=-50%,top=-50%,width=600,height=400',
    )
}
const handler1 = () => {
    window.open(
        'https://t.me/share/url?url=' + location.href,
        'share',
        'left=-50%,top=-50%,width=600,height=400',
    )
}

const handler2 = () => {
    window.open(
        'https://vk.com/share.php?url=' + location.href,
        'share',
        'left=-50%,top=-50%,width=600,height=400',
    )
}

const handler3 = () => {
    window.open(
        'https://connect.ok.ru/offer?url=' + location.href,
        'share',
        'left=-50%,top=-50%,width=600,height=400',
    )
}

btn.addEventListener('click', handler)
btn1.addEventListener('click', handler1)
btn2.addEventListener('click', handler2)
btn3.addEventListener('click', handler3)