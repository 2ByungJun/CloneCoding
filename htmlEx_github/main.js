(function (window, document) {
    'use strict';

    // NodeList : 유사배열
    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            offElements();
        }
    });

    function toggleElements() {
        // 유사 배열을 연결하여 반복
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
            // on이 있으면 지우고 없으면 추가하는 방식
            // on이라는 클래스를 넣고 빼는 것으로 통해 작업
        });
    }

    function offElements () {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)