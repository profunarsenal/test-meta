const btn = document.getElementById('facebook');
const btn1 = document.getElementById('telegram');

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

btn.addEventListener('click', handler)
btn1.addEventListener('click', handler1)