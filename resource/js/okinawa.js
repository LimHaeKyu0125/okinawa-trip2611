document.addEventListener('DOMContentLoaded', () => {
    // 1. 상위 메뉴 탭 전환
    const buttons = document.querySelectorAll('.card-button-wrap button');
    const articles = document.querySelectorAll('.content-section > article');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            articles.forEach(article => {
                article.classList.remove('active');
            });

            articles[index].classList.add('active');
        });
    });


    // 2. 일정표 내부 상세 일정 전환
    const schedule = document.querySelector('.schedule');

    const previewList = schedule.querySelector('.schedule-preview-list');
    const detailList = schedule.querySelector('.schedule-detail-list');

    const detailButtons = schedule.querySelectorAll('.schedule-detail-button');
    const detailBoxes = schedule.querySelectorAll('.detail-box');

    const backButton = schedule.querySelector('.schedule-back-button');


    // 상세 일정 버튼 클릭
    detailButtons.forEach((button, index) => {
        button.addEventListener('click', () => {

            // 기존 활성화된 상세 일정 초기화
            detailBoxes.forEach(box => {
                box.classList.remove('active');
            });

            // 클릭한 버튼과 순서가 일치하는 상세 일정 활성화
            detailBoxes[index].classList.add('active');

            // 일정 목록 숨기기
            previewList.style.display = 'none';

            // 뒤로가기 버튼 표시
            backButton.style.display = 'block';
        });
    });


    // 뒤로가기 버튼 클릭
    backButton.addEventListener('click', () => {

        // 상세 일정 비활성화
        detailBoxes.forEach(box => {
            box.classList.remove('active');
        });

        // 일정 목록 다시 표시
        previewList.style.display = '';

        // 뒤로가기 버튼 숨기기
        backButton.style.display = 'none';
    });

    // 일정 개수 자동 계산
    const schedulePreviewItems = schedule.querySelectorAll('.schedule-preview-list li');

    schedulePreviewItems.forEach((item, index) => {
        const countElement = item.querySelector('.schedule-count');
        const detailBox = detailBoxes[index];

        if (countElement && detailBox) {
            const count = detailBox.querySelectorAll('.list-wrap > li').length;

            countElement.textContent = count;
        }
    });

    const STORAGE_KEY = 'travel_supply_checklist';
    const supplyList = document.getElementById('supplyList');

    if (!supplyList) return;

    const checkboxes = supplyList.querySelectorAll('input[type="checkbox"]');

    // 저장된 체크 상태 불러오기
    function loadChecklist() {
        try {
            const savedData = localStorage.getItem(STORAGE_KEY);

            if (!savedData) return;

            const checkedItems = JSON.parse(savedData);

            checkboxes.forEach((checkbox, index) => {
                checkbox.checked = checkedItems[index] === true;
            });
        } catch (error) {
            console.error('체크리스트 불러오기 실패:', error);
        }
    }

    // 현재 체크 상태 저장하기
    function saveChecklist() {
        const checkedItems = Array.from(checkboxes).map(
            checkbox => checkbox.checked
        );

        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(checkedItems)
            );
        } catch (error) {
            console.error('체크리스트 저장 실패:', error);
        }
    }

    // 체크 상태 변경 시 자동 저장
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveChecklist);
    });

    // 페이지 진입 시 저장된 상태 복원
    loadChecklist();
});
