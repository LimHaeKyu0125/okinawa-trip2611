document.addEventListener('DOMContentLoaded', () => {

    // ==========================
    // 1. 여행 장소 데이터
    // ==========================

    const mapData = [
        {
            id: 'north',
            region: '북쪽 지역',
            location: '세소코 부근',
            categories: [
                {
                    id: 'food',
                    name: '음식',
                    icon: '🍜',
                    places: [
                        {
                            id: 'food01',
                            name: '오키나와 소바',
                            description: '현지 인기 소바 맛집',
                            image: '../img/food01.jpg',
                            address: '오키나와현 나고시',
                            price: '약 1,000엔',
                            time: '11:00 ~ 18:00',
                            memo: '현지식 소바를 먹어보기'
                        },
                        {
                            id: 'food02',
                            name: '해산물 식당',
                            description: '신선한 해산물 전문점',
                            image: '../img/food02.jpg',
                            address: '오키나와현 모토부초',
                            price: '약 2,000엔',
                            time: '11:30 ~ 20:00',
                            memo: '해산물 덮밥 추천'
                        }
                    ]
                },
                {
                    id: 'hotel',
                    name: '호텔',
                    icon: '🏨',
                    places: [
                        {
                            id: 'hotel01',
                            name: '오션뷰 호텔',
                            description: '바다가 보이는 숙소',
                            image: '../img/hotel01.jpg',
                            address: '오키나와현 모토부초',
                            price: '약 15,000엔',
                            time: '체크인 15:00',
                            memo: '바다 전망 객실 예약'
                        }
                    ]
                },
                {
                    id: 'tour',
                    name: '관광',
                    icon: '📸',
                    places: [
                        {
                            id: 'tour01',
                            name: '츄라우미 수족관',
                            description: '오키나와 대표 관광 명소',
                            image: '../img/tour01.jpg',
                            address: '오키나와현 모토부초',
                            price: '입장료 별도',
                            time: '08:30 ~ 18:30',
                            memo: '고래상어 관람하기'
                        },
                        {
                            id: 'tour02',
                            name: '코우리 대교',
                            description: '아름다운 바다 전망 명소',
                            image: '../img/tour02.jpg',
                            address: '오키나와현 나키진촌',
                            price: '무료',
                            time: '상시',
                            memo: '다리 위에서 사진 촬영하기'
                        }
                    ]
                }
            ]
        },
        {
            id: 'middle',
            region: '중간 지역',
            location: '아메리칸빌리지 부근',
            categories: [
                {
                    id: 'food',
                    name: '음식',
                    icon: '🍜',
                    places: [
                        {
                            id: 'food03',
                            name: '현지 맛집',
                            description: '남부 지역 추천 맛집',
                            image: '../img/food03.jpg',
                            address: '오키나와현 나하시',
                            price: '약 1,500엔',
                            time: '11:00 ~ 21:00',
                            memo: '현지 인기 메뉴'
                        }
                    ]
                },
                {
                    id: 'hotel',
                    name: '호텔',
                    icon: '🏨',
                    places: []
                },
                {
                    id: 'tour',
                    name: '관광',
                    icon: '📸',
                    places: []
                }
            ]
        },
        {
            id: 'south',
            region: '남쪽 지역',
            location: '나하 부근',
            categories: [
                {
                    id: 'food',
                    name: '음식',
                    icon: '🍜',
                    places: [
                        {
                            id: 'food03',
                            name: '현지 맛집',
                            description: '남부 지역 추천 맛집',
                            image: '../img/food03.jpg',
                            address: '오키나와현 나하시',
                            price: '약 1,500엔',
                            time: '11:00 ~ 21:00',
                            memo: '현지 인기 메뉴'
                        }
                    ]
                },
                {
                    id: 'hotel',
                    name: '호텔',
                    icon: '🏨',
                    places: []
                },
                {
                    id: 'tour',
                    name: '관광',
                    icon: '📸',
                    places: []
                }
            ]
        }
    ];

    // ==========================
    // 2. 지도 영역 확인
    // ==========================

    const articleBody = document.querySelector('.map .article-body');

    if (!articleBody) return;

    // ==========================
    // 3. HTML 자동 생성
    // ==========================

    articleBody.innerHTML = `
        <div class="map-region-container">
            ${mapData.map((region, regionIndex) => `
                <section class="map-region ${regionIndex === 0 ? 'active' : ''}" data-region="${region.id}">

                    <div class="map-region-header">
                        <h3 class="map-title">
                            <span>${region.region}</span>
                            <small>${region.location}</small>
                        </h3>
                        <span class="arrow"></span>
                    </div>

                    <div class="map-region-content">

                        <ul class="map-category-list">
                            ${region.categories.map((category, index) => `
                                <li class="${index === 0 ? 'active' : ''}" data-category="${category.id}">
                                    <span class="category-icon">${category.icon}</span>
                                    <span class="category-name">${category.name}</span>
                                    <span class="category-count">${category.places.length}곳</span>
                                </li>
                            `).join('')}
                        </ul>

                        ${region.categories.map((category, index) => `
                            <ul class="map-place-list ${index === 0 ? 'active' : ''}" data-place-category="${category.id}">
                                ${category.places.map(place => `
                                    <li data-place="${place.id}">
                                        <img class="map-place-image" src="${place.image}" alt="${place.name}" onerror="this.style.visibility='hidden'">
                                        <div class="map-place-info">
                                            <strong>${place.name}</strong>
                                            <small>${place.description}</small>
                                        </div>
                                        <span class="map-place-arrow">›</span>
                                    </li>
                                `).join('')}
                            </ul>
                        `).join('')}

                    </div>
                </section>
            `).join('')}
        </div>

        <!-- 상세 모달 -->
        <div class="map-modal" id="mapModal">
            <div class="map-modal-bg"></div>

            <div class="map-modal-content">
                <div class="map-modal-handle"></div>

                <button type="button" class="map-modal-close">×</button>

                <span class="map-modal-label" id="mapModalCategory"></span>
                <h3 id="mapModalTitle"></h3>
                <p class="modal-description" id="mapModalDescription"></p>

                <img class="map-modal-image" id="mapModalImage" src="" alt="">

                <ul class="map-modal-info">
                    <li>📍 <span id="mapModalAddress"></span></li>
                    <li>💰 <span id="mapModalPrice"></span></li>
                    <li>🕒 <span id="mapModalTime"></span></li>
                </ul>

                <div class="map-modal-memo" id="mapModalMemo"></div>
            </div>
        </div>
    `;

    // ==========================
    // 4. 지역 아코디언
    // ==========================

    articleBody.querySelectorAll('.map-region-header').forEach(header => {
      header.addEventListener('click', () => {

          const region = header.closest('.map-region');
          const isActive = region.classList.contains('active');

          // 기존 지역 모두 닫기
          articleBody.querySelectorAll('.map-region').forEach(item => {
              item.classList.remove('active');
          });

          // 클릭한 지역만 열기
          if (!isActive) {
              region.classList.add('active');

              // 화면 중앙으로 스크롤
              setTimeout(() => {
                  const top = region.getBoundingClientRect().top + window.scrollY;

                  window.scrollTo({
                      top: top - (window.innerHeight / 2) + (region.offsetHeight / 2),
                      behavior: 'smooth'
                  });
              }, 200);
          }

      });
    });

    // ==========================
    // 5. 카테고리 선택
    // ==========================

    articleBody.querySelectorAll('.map-category-list li').forEach(button => {
        button.addEventListener('click', () => {

            const region = button.closest('.map-region');
            const categoryId = button.dataset.category;

            region.querySelectorAll('.map-category-list li').forEach(item => {
                item.classList.toggle('active', item === button);
            });

            region.querySelectorAll('.map-place-list').forEach(list => {
                list.classList.toggle('active', list.dataset.placeCategory === categoryId);
            });
        });
    });

    // ==========================
    // 6. 장소 상세 모달
    // ==========================

    const modal = document.getElementById('mapModal');

    function openMapDetail(regionId, categoryId, placeId) {

        const region = mapData.find(item => item.id === regionId);
        const category = region?.categories.find(item => item.id === categoryId);
        const place = category?.places.find(item => item.id === placeId);

        if (!place) return;

        document.getElementById('mapModalCategory').textContent = category.name;
        document.getElementById('mapModalTitle').textContent = place.name;
        document.getElementById('mapModalDescription').textContent = place.description;

        const image = document.getElementById('mapModalImage');
        image.src = place.image;
        image.alt = place.name;
        image.style.display = place.image ? 'block' : 'none';

        document.getElementById('mapModalAddress').textContent = place.address || '정보 없음';
        document.getElementById('mapModalPrice').textContent = place.price || '정보 없음';
        document.getElementById('mapModalTime').textContent = place.time || '정보 없음';
        document.getElementById('mapModalMemo').textContent = place.memo || '';

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    articleBody.querySelectorAll('.map-place-list li').forEach(item => {

        item.addEventListener('click', () => {

            const region = item.closest('.map-region');
            const category = item.closest('.map-place-list');

            openMapDetail(
                region.dataset.region,
                category.dataset.placeCategory,
                item.dataset.place
            );

        });

    });

    // ==========================
    // 7. 모달 닫기
    // ==========================

    function closeMapDetail() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modal.querySelector('.map-modal-close').addEventListener('click', closeMapDetail);
    modal.querySelector('.map-modal-bg').addEventListener('click', closeMapDetail);

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMapDetail();
        }
    });

});