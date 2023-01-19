const btn = document.getElementById('facebook');

const handler = () => {
    window.open(
        'https://www.facebook.com/share.php?u=' + location.href,
        'share',
        'left=-50%,top=-50%,width=600,height=400',
    )
}

btn.addEventListener('click', handler)