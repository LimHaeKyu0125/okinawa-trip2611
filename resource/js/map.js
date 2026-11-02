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
                            name: '소군버거 오나손',
                            description: '와규버거로 유명',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfOOzOK44vCaxRc68l0zHy8dy0nhHPqFEHZ6d2YwaBznBp_DeMwViheqQUWNFwPruMGeINTPtKY92Jk5ktzSSeMkL6zMnUPBof7b_O_WjFpQUTdpsMpA1zpF5RDQxMuPImmWUgKJWXFZ4ze=w408-h306-k-no',
                            address: '일본 〒904-0401 Okinawa, Kunigami District, Onna, Nakama, 2199-1 恩納サンセットモール内',
                            price: '¥2000~3000 (1인)',
                            time: '11:00 ~ 20:50',
                            memo: '더블치즈와 트리플 치즈 버거가 맛있다고 함'
                        },
                        {
                            id: 'food02',
                            name: '카진호 피자',
                            description: '바다 풍경을 바라보면서 먹을 수 있는 피자집!',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfm-_iPEXUoBV1jL6L5b1_g8mNcZ0DlubaAke_UiwXMQX0nSvDQeia5CBwS9bLc7O6qIOsxB5TEf79fWBmOYKzFCO9FSauTp-c1x1xk3p88bXH4X7QERa0crX0uk37XMXsgn9VyDxm1N43L=w408-h306-k-no',
                            address: '일본 〒905-0219 Okinawa, Kunigami District, Motobu, Yamazato, １１５３−2',
                            price: '¥2000~3000 (1인)',
                            time: '11:30 ~ 17:00',
                            memo: 'Only 현금만!'
                        },
                        {
                            id: 'food03',
                            name: '레스토랑 플리퍼',
                            description: '오키나와 스타일의 스테이크를 파는 곳',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdbciWCJlhhJ5UOd7DjUAJrcIqI-3TlZISjULdl_PIz-3bTI47s-xEJZPQmrL6IiMUG6yKQdIihdP1TIasPw2XgW40EQNAqR0k6dlj7AU4AFHYkc5oyufXS2Yp2t-NoGBi_9NyvZ2sN6Zde=w408-h306-k-no',
                            address: '162 Umusa, Nago, Okinawa 905-0006 일본',
                            price: '¥3000~4000 (1인)',
                            time: '10:30 ~ 14:00',
                            memo: '50년 전통의 스테키 맛집!'
                        },
                        {
                            id: 'food04',
                            name: '야키니쿠 모토부 목장 모토부점',
                            description: '모토부규를 맛 볼 수 있는 곳!',
                            image: 'https://images.openai.com/static-rsc-4/TBT_xCUr8Mi2AEzOnnFvwaEolXBwZ-VBfp0pgbm4CgmTs829suEhnmbPPs7NFQCWJb5VMDtsFxWVk-UjOjfv-jNKu55ZVt7orvcX72AS7burwOKnAQYTIJv8OQVifDILlMGJXmv6yRQJH3Ph-XOeSaGBWGhmgTuzBckNjRBZC9U?purpose=inline',
                            address: '야키니쿠 모토부 목장 모토부점 일본 〒905-0212 Okinawa, Kunigami District, Motobu, Ohama, 881-1',
                            price: '¥3000~7000 (1인)',
                            time: '11:30 ~ 22:00',
                            memo: '숙소에서 가까운편!'
                        }
                    ]
                },
                {
                    id: 'cafe',
                    name: '카페',
                    icon: '☕',
                    places: [
                        {
                            id: 'cafe01',
                            name: 'FIFI PARLOR',
                            description: '바다를 보며 커피를 느낄수 있는 곳!',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt12iUG8CjxDU_HkHYGq6o5xhGlhQ0aGA3rEE2KIpmmJN-69zEPbD3fhM&s=10',
                            address: '일본 〒905-1154 Okinawa, Nago, Goga, 大真利原1335-4',
                            price: '¥1000~2000 (1인)',
                            time: '10:00 ~ 18:30',
                            memo: '츄로스 맛집!'
                        },
                        {
                            id: 'cafe02',
                            name: '카페 후쿠루비',
                            description: '180도 바다전망 카페',
                            image: 'https://images.openai.com/static-rsc-4/F0oQWg-b_aAhTwyiEnb8IS1Qx6o7z6SeYtrCO5119_LlZsIE2mGJ0YhQSe2R26b_TD8_FS3HAjF8Y5ml3rmy3VJSob4eXMBWK12ktOSR_CzexZTowkmLhrb0oiHxaa1_rIBjs_iS8x8eiBzJunQRmQbFLwwADRP2Wu4re9xOO3Y?purpose=inline',
                            address: '일본 〒905-1154 Okinawa, Nago, Goga, 大真利原1335-4카페 후쿠루비 일본 〒905-0406 Okinawa, Kunigami District, Nakijin, Kouri, 2516',
                            price: '¥1000~2000 (1인)',
                            time: '12:00 ~ 18:00',
                            memo: '코우리섬 근처간다면 방문 추천'
                        },
                        {
                            id: 'cafe03',
                            name: 'Cafe CAHAYA BULAN',
                            description: '동남아 분위기를 살린 카페',
                            image: 'https://images.openai.com/static-rsc-4/_R0vwZ9oOVeFqgIUeAQwTyhKAak28FRoTPRlymzXDbv8RJlAo0qzQJJEIZpQn8r6z-QRoarhHdl_SYiwnszkQmXlDxQJr6c94Ta67-BvnmnBilxUTdN7PybDB3rOn_rCUzxcYXYMu5l_rAJyaK3b9FVjw8awnLxTegC1MPfZcxI?purpose=inline',
                            address: '카페 차하야불란 일본 〒905-0207 Okinawa, Kunigami District, Motobu, Bise, 429-1',
                            price: '¥1000~2000 (1인)',
                            time: '08:00 ~ 18:00',
                            memo: '츄로스 맛집!'
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
                            name: '힐튼 오키나와 세소코 리조트',
                            description: '오션뷰 리조트',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9uaoaQGQHk7UZuCOFPL0piMMXP4Ivddnunh7l6bmHQ&s=10',
                            address: '5750番地 Sesoko, Motobu, Kunigami District, Okinawa 905-0227 일본',
                            price: '조식 ¥4000(1인)',
                            time: '체크인 15:00 / 체크아웃 11:00',
                            memo: '바닷가 산책하기'
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
                            name: '추라우미 수족관',
                            description: '오키나와 대표 관광 명소',
                            image: 'https://img.activityjapan.com/wi/okinawa-churaumi-aquarium_top01.jpg',
                            address: '424 Ishikawa, Motobu, Kunigami District, Okinawa 905-0206 일본',
                            price: '입장료 별도',
                            time: '08:30 ~ 18:30',
                            memo: '고래상어 관람하기'
                        },
                        {
                            id: 'tour02',
                            name: '코우리 섬 드라이브',
                            description: '아름다운 바다 전망 명소',
                            image: 'https://images.openai.com/static-rsc-4/4aB73_lw3f6rlf9TCBEUHTAOhZ9cSj3BhfSGFoUO10KxZnGQxKJcoZcP_yMR8N85uq5xQvqX6qLowGZSaCWxAEbOUPwMRN1ZUdn4yBHTkdW0zmLHYipkbbQLdl7DB_GTJnkpgrjOnxIecuO2G7_pIRemxgNpJPWvNzUHTpy6faOTg6FXx9BRadobAvboOu59?purpose=fullsize',
                            address: '고우리 섬 일본 〒905-0406 오키나와현 Kunigami District, 나키진손 고우리',
                            price: '무료',
                            time: '상시',
                            memo: '하얀 모래와 맑은바다 즐기려면 이곳으로!'
                        },
                        {
                            id: 'tour03',
                            name: '비세 후쿠기 가로수길',
                            description: '나무가 터널처럼 이어지는 산책길',
                            image: 'https://images.openai.com/static-rsc-4/4wCRCjs9VyhE6O2TaPqGSHJLQTfPCr5vZBAIHKtdDCsICkUfwWya7ybhNw8BJLwAp5mrs6Fhevusd_NmfBLHn6tQ0IqXJATNzk9qqC9KJVQu0ejn5Q2uu-u3TsR9kCdfYJoUNp5hzJ_BizrTtu0P36nNDSg8GfS4SbwTfa1Ut-dJ0tb_rAafWpTyzVlrWT1p?purpose=fullsize',
                            address: '비세후쿠길 일본 〒905-0207 Okinawa, Kunigami District, Motobu, Bise, 389',
                            price: '무료',
                            time: '상시',
                            memo: '숙소에서 가까운 산책 명소'
                        },
                        {
                            id: 'tour04',
                            name: '비세쟈키',
                            description: '투명한 바닷물과 작은 물고기 볼 수 있는 명소',
                            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/50/25/f2/caption.jpg?w=2000&h=1200&s=1',
                            address: '비세자키 일본 〒905-0207 Okinawa, Kunigami District, Motobu, 本部町Bise, 639-21',
                            price: '무료',
                            time: '상시',
                            memo: '비세 후쿠기 근처 해안가!'
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
                    id: 'cafe',
                    name: '카페',
                    icon: '☕',
                    places: [
                        {
                            id: 'cafe01',
                            name: '반타 카페 by 호시노 리조트',
                            description: '바다가 내려다 보이는 깔꼼한 카페',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLf3xqDYch0idKB886nu6v2bLzpe2DwcwzwU0iPX1kqte2gnmnXioxYuANwRoJgCPa2bgLIFM4522m5FFjQy1k3jGC6ae-6NHU55j17-GWxieQuZOVKA0qvAhx14piiBChlr5fRWVMOB9U0=w408-h306-k-no',
                            address: '오키나와현 나하시560 Gima, Yomitan, Nakagami District, Okinawa 904-0327 일본',
                            price: '¥1000~2000 (1인)',
                            time: '08:00 ~ 17:30',
                            memo: '인기가 많아 시간 잘보고 타이밍 노리쟈!'
                        },
                        {
                            id: 'cafe02',
                            name: 'Zhyvago Coffee Roastery',
                            description: '느니가 가장 궁금해 하는 카페',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLc99JTk3LBHlQtVwKQiZ49Fgxci2P_3Pwn-K2cqXLCZDVmeCyrAVLZglajCMSZ1CUYjpwUemvlsW9aYb7FL2GwE_PWdQXswu2ITBE8HfyYH-4FELFGo0iyt2cEzpfHGirtfPwOdb3wAto-3=w408-h544-k-no',
                            address: '일본 〒904-0115 Okinawa, Nakagami District, Chatan, Mihama, 34−1 lequ プレミア棟 1F',
                            price: '¥1000~2000 (1인)',
                            time: '07:00 ~ 22:00',
                            memo: '커피맛이 그렇게 다르담서~'
                        },
                        {
                            id: 'cafe03',
                            name: '카페 도카도카',
                            description: '온나손 언덕에 자리한 오키나와 전통 도자기 카페',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdPoEBAQjVDqItJujc8qDcyepOKwZ9XntL88B5bMCH8b9SG5Hxhv_coCvnZmXkEMqdr2jUbzus5azHyHW3mSn5WGt6RAVhvZKAM_tACnjCSJA1cAE3LwabjQpssO58b6fy3biuasT-msJo=w408-h306-k-no',
                            address: '일본 〒904-0414 Okinawa, Kunigami District, Onna, Maeganeku, 243-1 2階',
                            price: '¥1000~2000 (1인)',
                            time: '08:00 ~ 17:00',
                            memo: '풍경과 분위기가 호평받는곳!'
                        }
                    ]
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
            location: '국제거리 부근',
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