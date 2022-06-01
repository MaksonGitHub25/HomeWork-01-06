showBtn.addEventListener('click', function () {
    foto.style.opacity = 1;
    foto.classList.add('showfotoAnim');
    showBtn.disabled = true;
    showBtn.classList.add('showBtnClose');
    setTimeout(function () {
        mainText.style.display = 'block';
        mainText.classList.add('showMainText');
    }, 2000);
    mainText.style.opacity = 1;
});


codeBtn.addEventListener('click', function () {
    UserCode = prompt("Введите код:");
    if (UserCode == 'katas') {
        const windowWrapper = document.createElement('div');
        windowWrapper.className = 'window_wrapper';
        
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'img_wrapper';

        const img = document.createElement('img');
        img.className = 'img';

        const closeImgBtnWrapper = document.createElement('div');
        closeImgBtnWrapper.className = 'close_img_btn_wrapper';

        const closeImgBtn = document.createElement('button');
        closeImgBtn.className = 'close_img_btn';
        closeImgBtn.innerHTML = '&times;';

        setTimeout(function () {
            img.classList.add('img_show_anim');
        }, 500);

        closeImgBtnWrapper.append(closeImgBtn);
        imgWrapper.append(img);

        windowWrapper.append(imgWrapper, closeImgBtnWrapper);
        body.append(windowWrapper);

        closeImgBtn.addEventListener('click', function() {
            img.classList.remove('img_show_anim');
            img.classList.add('img_close_anim');
            setTimeout(function () {
                imgWrapper.remove();
                closeImgBtnWrapper.remove();
                windowWrapper.remove();
            }, 1500);
        });
        
    } else {
        alert('Ваш код не верный');
    }
});

setTimeout(function () {
    loaderWrapper.classList.add('removeLoader');
    setTimeout(function () {
        loaderWrapper.remove();
    }, 1000)
}, 2000);