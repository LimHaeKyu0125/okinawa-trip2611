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
                            address: '904-0401 Okinawa, Kunigami District, Onna, Nakama, 2199-1',
                            price: '¥2000~3000 (1인)',
                            time: '11:00 ~ 20:50',
                            memo: '더블치즈와 트리플 치즈 버거가 맛있다고 함',
                            googleMaps: '소군버거 오나손, 904-0401 Okinawa, Kunigami District, Onna, Nakama, 2199-1'
                        },
                        {
                            id: 'food02',
                            name: '카진호 피자',
                            description: '바다 풍경을 바라보면서 먹을 수 있는 피자집!',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfm-_iPEXUoBV1jL6L5b1_g8mNcZ0DlubaAke_UiwXMQX0nSvDQeia5CBwS9bLc7O6qIOsxB5TEf79fWBmOYKzFCO9FSauTp-c1x1xk3p88bXH4X7QERa0crX0uk37XMXsgn9VyDxm1N43L=w408-h306-k-no',
                            address: '1153-2 Yamazato, Motobu, Kunigami District, Okinawa 905-0219',
                            price: '¥2000~3000 (1인)',
                            time: '11:30 ~ 17:00',
                            memo: 'Only 현금만!',
                            googleMaps: '카진호 피자, 1153-2 Yamazato, Motobu, Kunigami District, Okinawa 905-0219'
                        },
                        {
                            id: 'food03',
                            name: '레스토랑 플리퍼',
                            description: '오키나와 스타일의 스테이크를 파는 곳',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdbciWCJlhhJ5UOd7DjUAJrcIqI-3TlZISjULdl_PIz-3bTI47s-xEJZPQmrL6IiMUG6yKQdIihdP1TIasPw2XgW40EQNAqR0k6dlj7AU4AFHYkc5oyufXS2Yp2t-NoGBi_9NyvZ2sN6Zde=w408-h306-k-no',
                            address: '162 Umusa, Nago, Okinawa 905-0006',
                            price: '¥3000~4000 (1인)',
                            time: '10:30 ~ 14:00',
                            memo: '50년 전통의 스테키 맛집!',
                            googleMaps: '레스토랑 플리퍼, 162 Umusa, Nago, Okinawa 905-0006'
                        },
                        {
                            id: 'food04',
                            name: '야키니쿠 모토부 목장 모토부점',
                            description: '모토부규를 맛 볼 수 있는 곳!',
                            image: 'https://images.openai.com/static-rsc-4/TBT_xCUr8Mi2AEzOnnFvwaEolXBwZ-VBfp0pgbm4CgmTs829suEhnmbPPs7NFQCWJb5VMDtsFxWVk-UjOjfv-jNKu55ZVt7orvcX72AS7burwOKnAQYTIJv8OQVifDILlMGJXmv6yRQJH3Ph-XOeSaGBWGhmgTuzBckNjRBZC9U?purpose=inline',
                            address: '881-1 Ohama, Motobu, Kunigami District, Okinawa 905-0212',
                            price: '¥3000~7000 (1인)',
                            time: '11:30 ~ 22:00',
                            memo: '숙소에서 가까운편!',
                            googleMaps: '야키니쿠 모토부 목장 모토부점, 881-1 Ohama, Motobu, Kunigami District, Okinawa 905-0212'
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
                            address: '1335-4 Goga, Nago, Okinawa 905-1154',
                            price: '¥1000~2000 (1인)',
                            time: '10:00 ~ 18:30',
                            memo: '츄로스 맛집!',
                            googleMaps: 'FIFI PARLOR, 1335-4 Goga, Nago, Okinawa 905-1154'
                        },
                        {
                            id: 'cafe02',
                            name: '카페 후쿠루비',
                            description: '180도 바다전망 카페',
                            image: 'https://images.openai.com/static-rsc-4/F0oQWg-b_aAhTwyiEnb8IS1Qx6o7z6SeYtrCO5119_LlZsIE2mGJ0YhQSe2R26b_TD8_FS3HAjF8Y5ml3rmy3VJSob4eXMBWK12ktOSR_CzexZTowkmLhrb0oiHxaa1_rIBjs_iS8x8eiBzJunQRmQbFLwwADRP2Wu4re9xOO3Y?purpose=inline',
                            address: '2516 Kouri, Nakijin, Kunigami District, Okinawa 905-0406',
                            price: '¥1000~2000 (1인)',
                            time: '12:00 ~ 18:00',
                            memo: '코우리섬 근처간다면 방문 추천',
                            googleMaps: '카페 후쿠루비, 2516 Kouri, Nakijin, Kunigami District, Okinawa 905-0406'
                        },
                        {
                            id: 'cafe03',
                            name: '카페 차하야불란',
                            description: '동남아 분위기를 살린 카페',
                            image: 'https://images.openai.com/static-rsc-4/_R0vwZ9oOVeFqgIUeAQwTyhKAak28FRoTPRlymzXDbv8RJlAo0qzQJJEIZpQn8r6z-QRoarhHdl_SYiwnszkQmXlDxQJr6c94Ta67-BvnmnBilxUTdN7PybDB3rOn_rCUzxcYXYMu5l_rAJyaK3b9FVjw8awnLxTegC1MPfZcxI?purpose=inline',
                            address: '429-1 Bise, Motobu, Kunigami District, Okinawa 905-0207',
                            price: '¥1000~2000 (1인)',
                            time: '08:00 ~ 18:00',
                            memo: '신행느낌을 조금이나마 느낄수 있을듯!',
                            googleMaps: '카페 차하야불란, 429-1 Bise, Motobu, Kunigami District, Okinawa 905-0207'
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
                            address: '424 Ishikawa, Motobu, Kunigami District, Okinawa 905-0206',
                            price: '입장료 별도',
                            time: '08:30 ~ 18:30',
                            memo: '고래상어 관람하기',
                            googleMaps: '추라우미 수족관, 424 Ishikawa, Motobu, Kunigami District, Okinawa 905-0206'
                        },
                        {
                            id: 'tour02',
                            name: '코우리 섬 드라이브(Heart Rock)',
                            description: '아름다운 바다 전망 명소',
                            image: 'https://images.openai.com/static-rsc-4/4aB73_lw3f6rlf9TCBEUHTAOhZ9cSj3BhfSGFoUO10KxZnGQxKJcoZcP_yMR8N85uq5xQvqX6qLowGZSaCWxAEbOUPwMRN1ZUdn4yBHTkdW0zmLHYipkbbQLdl7DB_GTJnkpgrjOnxIecuO2G7_pIRemxgNpJPWvNzUHTpy6faOTg6FXx9BRadobAvboOu59?purpose=fullsize',
                            address: '2 Kouri, Nakijin, Kunigami District, Okinawa 905-0406',
                            price: '무료',
                            time: '상시',
                            memo: '하얀 모래와 맑은바다 즐기려면 이곳으로!',
                            googleMaps: 'Heart Rock, 2 Kouri, Nakijin, Kunigami District, Okinawa 905-0406'
                        },
                        {
                            id: 'tour03',
                            name: '비세후쿠길 가로수길',
                            description: '나무가 터널처럼 이어지는 산책길',
                            image: 'https://images.openai.com/static-rsc-4/4wCRCjs9VyhE6O2TaPqGSHJLQTfPCr5vZBAIHKtdDCsICkUfwWya7ybhNw8BJLwAp5mrs6Fhevusd_NmfBLHn6tQ0IqXJATNzk9qqC9KJVQu0ejn5Q2uu-u3TsR9kCdfYJoUNp5hzJ_BizrTtu0P36nNDSg8GfS4SbwTfa1Ut-dJ0tb_rAafWpTyzVlrWT1p?purpose=fullsize',
                            address: '389 Bise, Motobu, Kunigami District, Okinawa 905-0207',
                            price: '무료',
                            time: '상시',
                            memo: '숙소에서 가까운 산책 명소',
                            googleMaps: '비세후쿠길 가로수길, 389 Bise, Motobu, Kunigami District, Okinawa 905-0207'
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
                            address: '5750 Sesoko, Motobu, Kunigami District, Okinawa 905-0227',
                            price: '조식 ¥4000(1인)',
                            time: '체크인 15:00 / 체크아웃 11:00',
                            memo: '바닷가 산책하기',
                            googleMaps: '힐튼 오키나와 세소코 리조트, 5750 Sesoko, Motobu, Kunigami District, Okinawa 905-0227'
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
                            id: 'food01',
                            name: '스테이크 하우스 88 차탄 아메리칸 빌리지점',
                            description: '철판에 나오는 스테이크 집!',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdpz-KEB2-9o4Cu06veZbeArSfgv8DLTp_ROSbrROuGjNGQM5BV73gWNJYihZQQM6q9wUjPUDxmxGBk6AdLO2vPJrdpGuOtAxAcZKxXJYCKELjcPj7BvwGyAAxWpe-GcnoWDt3WTU10HTbS=w408-h306-k-no',
                            address: '904-0115 Okinawa, Nakagami District, Chatan, Mihama, 9-17 / 2F',
                            price: '¥3000~4000 (1인)',
                            time: '11:00 ~ 21:00',
                            memo: 'SK텔레콤 제휴할인 가능하다는 리뷰 있음',
                            googleMaps: '스테이크 하우스 88 차탄 아메리칸 빌리지점, 904-0115 Okinawa, Nakagami District, Chatan, Mihama, 9-17'
                        },
                        {
                            id: 'food02',
                            name: '타코라이스 키지므나 데포아일랜드점',
                            description: '오키나와에서 유명한 타코라이스집!',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfpGQEn-22M38foedA5GKAI2WOt63LOAsUruN14b0ZegiOX7r8DId2cnFerWfVqS5lNRo5kTMC8y-ha9omKGX71svE7_kicfJ-MVfBeJ-H5Ul59EJHI4yNWKXLNVgPEWtKKqV9SPw=w408-h271-k-no',
                            address: '904-0115 Okinawa, Nakagami District, Chatan, Mihama, 9-1 / 2F',
                            price: '¥1000~2000 (1인)',
                            time: '11:00 ~ 22:00',
                            memo: '양이 은근 있다고함~!',
                            googleMaps: '타코라이스 키지므나 데포아일랜드점, 904-0115 Okinawa, Nakagami District, Chatan, Mihama, 9-1'
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
                            address: '560 Gima, Yomitan, Nakagami District, Okinawa 904-0327',
                            price: '¥1000~2000 (1인)',
                            time: '08:00 ~ 17:30',
                            memo: '인기가 많아 시간 잘보고 타이밍 노리쟈!',
                            googleMaps: '반타 카페 by 호시노 리조트, 560 Gima, Yomitan, Nakagami District, Okinawa 904-0327'
                        },
                        {
                            id: 'cafe02',
                            name: 'Zhyvago Coffee Roastery',
                            description: '느니가 가장 궁금해 하는 카페',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLc99JTk3LBHlQtVwKQiZ49Fgxci2P_3Pwn-K2cqXLCZDVmeCyrAVLZglajCMSZ1CUYjpwUemvlsW9aYb7FL2GwE_PWdQXswu2ITBE8HfyYH-4FELFGo0iyt2cEzpfHGirtfPwOdb3wAto-3=w408-h544-k-no',
                            address: '904-0115 Okinawa, Nakagami District, Chatan, Mihama, 34-1 / 1F',
                            price: '¥1000~2000 (1인)',
                            time: '07:00 ~ 22:00',
                            memo: '커피맛이 그렇게 다르담서~',
                            googleMaps: 'Zhyvago Coffee Roastery, 904-0115 Okinawa, Nakagami District, Chatan, Mihama, 34-1'
                        },
                        {
                            id: 'cafe03',
                            name: '카페 도카도카',
                            description: '온나손 언덕에 자리한 오키나와 전통 도자기 카페',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdPoEBAQjVDqItJujc8qDcyepOKwZ9XntL88B5bMCH8b9SG5Hxhv_coCvnZmXkEMqdr2jUbzus5azHyHW3mSn5WGt6RAVhvZKAM_tACnjCSJA1cAE3LwabjQpssO58b6fy3biuasT-msJo=w408-h306-k-no',
                            address: '904-0414 Okinawa, Kunigami District, Onna, Maeganeku, 243-1 2階',
                            price: '¥1000~2000 (1인)',
                            time: '08:00 ~ 17:00',
                            memo: '풍경과 분위기가 호평받는곳!',
                            googleMaps: '카페 도카도카, 904-0414 Okinawa, Kunigami District, Onna, Maeganeku'
                        },
                        {
                            id: 'cafe04',
                            name: '블루씰 아이스크림 마키미나토 본점',
                            description: '오키나와에서 유명한 아이스크림 체인점',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfsp8UsiGcNW6VYZNCoqiT8KpzQBIwtp1HNUvf40tfyVUNNEuPpTxA7wfj1itnmt-_YHBVP9GfyKdRWOLzMJlvqV4Zt7O3il3FHsvLWR0Ff9mGM7OVh4lFdN-b2sxo8L7l19kefCRnA9_q0=w408-h306-k-no',
                            address: '5 Chome-5-6 Makiminato, Urasoe, Okinawa 901-2131',
                            price: '¥500~1000 (1인)',
                            time: '08:00 ~ 17:00',
                            memo: '블루 웨이브 맛이 유명함!',
                            googleMaps: '블루씰 아이스크림 마키미나토 본점, 5 Chome-5-6 Makiminato, Urasoe, Okinawa 901-2131'
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
                            name: '만자모',
                            description: '코끼리바위로 유명한 오키나와 관광지!',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcWvqrABU740_9HEEesE4ZoU4LtEybs7CfrGLNze4WRvEkkn3s7i4BF80kqeS3fflHs5Jd7USV8ypSq7UDG_gqUFS3_y-wIn3ZcBLFnjKIH0uQNbQcLS7YPRZgC-rLDaqNGS3oBFYmqocP2=w408-h306-k-no',
                            address: 'Onna, Kunigami District, Okinawa 904-0411',
                            price: '¥100 (1인)',
                            time: '08:00 ~ 20:00',
                            memo: '일몰시간에 가면 더 예쁘다고 함!',
                            googleMaps: '만자모, Onna, Kunigami District, Okinawa 904-0411'
                        }
                    ]
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
                            id: 'food01',
                            name: '이치란 나하국제도오리점',
                            description: '일본에서 가장 유명한 라멘 체인점',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcp9WWA81QIJJdValkA4Yph9eBCuHOcYslUrPBkJEWYimdnVWCmJ2B9KqG7fVpBqk-HNhJ6fR49jv1TQODtY0fUMfdgOOHdhmuwn3jL1CcBKXD_Hog64b3u12Yg8pS_gnAzG3Wblg=w408-h259-k-no',
                            address: 'Chome-2-24 Makishi, Naha, Okinawa 900-0013 / B1F',
                            price: '¥1500~2000 (1인)',
                            time: '00:00 ~ 24:00',
                            memo: '맵기단계 & 토핑 선택 가능!',
                            googleMaps: '이치란 나하국제도오리점, Chome-2-24 Makishi, Naha, Okinawa 900-0013'
                        },
                        {
                            id: 'food02',
                            name: '국제거리 포장마차 마을',
                            description: '다양한 가판대에서 캐주얼한 길거리 음식을 즐길 수 있는 활기찬 야외 시장',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLemy5NCqe7gUYUQ6-3ESVM9PcibOaiFu6ON2MKJOjHHmvfjID8BPlikQDDUG3BxIFhpaPaSur0OXTNUJ7RT21yT-YWKg9nTGCPs45knqSCWhTzIWCAmQTo3_HfVrDBrMVmrx8jKcwaJ6yp7=w408-h306-k-no',
                            address: '3 Chome-11-17 Makishi, Naha, Okinawa 900-0013',
                            price: '¥1000~3000 (1인)',
                            time: '12:00 ~ 24:00',
                            memo: '포차거리 같은 너낌쓰!',
                            googleMaps: '국제거리 포장마차 마을, 3 Chome-11-17 Makishi, Naha, Okinawa 900-0013'
                        },
                        {
                            id: 'food03',
                            name: '부치 쿠모치점',
                            description: '호텔에서 가까운 야키니꾸 전문점!',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfWQJqw_Ns8Sa7dbg0el5tEnBS91jkbLf3gp2pFOSUbc8QlmnwfJWnYQCYVI9n0qIWotV59CKwzdwmYpePrr7fHZHXYgHIJ-As4Z0cquBjN4ZLzorrFUr4dVFdt6ExdcfkJksk_BE76iPF1=w408-h306-k-no',
                            address: '3 Chome-12-1 Kumoji, Naha, Okinawa 900-0015',
                            price: '¥3000~5000 (1인)',
                            time: '17:00 ~ 22:00',
                            memo: '진짜 기본으로 나오는 양배추가 미쳤다고 함~',
                            googleMaps: '부치 쿠모치점, 3 Chome-12-1 Kumoji, Naha, Okinawa 900-0015'
                        },
                        {
                            id: 'food04',
                            name: 'Calbee+',
                            description: '까루비~~',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLeRZhIM7pp4GrLFyDXhAFGw2fu3bWpu8NMFilsoRHW-Pvf8RJHCD32Bjr4jOIxW52xRz3KtXQv70gaxWo7ECUGr4MQHdRed5EPhs7jjdxueIOMhs-w2CZcoSL73HPW6QLTYeim4e2xsik2T=w408-h306-k-no',
                            address: '3 Chome-2-2 Makishi, Naha, Okinawa 900-0013',
                            price: '¥700~1000 (1인)',
                            time: '10:00 ~ 21:00',
                            memo: '갓 튀겨주는 감튀 & 고튀!',
                            googleMaps: 'Calbee+, 3 Chome-2-2 Makishi, Naha, Okinawa 900-0013'
                        },
                        {
                            id: 'food05',
                            name: '야키니쿠야 카즈쨩 나하국제거리점',
                            description: '노포 느낌쓰의 야키니꾸 전문점',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLf7dP_L4u3dzNYWPTwvwrdJ0wGr0Uc4W9B0DTe0I05fgWo4mLVMwI9yAN1-DbQgAvfnnpsSZiOiSoIR5HUADnCRharf19vKQ7jxJ_EfdNNlwcscpexy3bPElzM0EoSlDd_CVsHkRQ=w426-h240-k-no',
                            address: '1 Chome-4-2 Matsuo, Naha, Okinawa 900-0014',
                            price: '¥2000~5000 (1인)',
                            time: '16:00 ~ 24:00',
                            memo: '구글 별점이 상당히 높음~!',
                            googleMaps: '야키니쿠야 카즈쨩 나하국제거리점, 1 Chome-4-2 Matsuo, Naha, Okinawa 900-0014'
                        }
                    ]
                },
                {
                    id: 'shopping',
                    name: '쇼핑',
                    icon: '🛒',
                    places: [
                        {
                            id: 'shopping01',
                            name: '아카짱 혼포!',
                            description: '포도 육아용품 사는 곳(아주 중요!!)',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdwuKXGKruvInQ_XU9M7VBAyWdDkPgnxlCUbyMXZKjAs8CCfYIjSU3mr1WKYNA7gqagMPaQcM9jBKHdfS-bV2UIsUq43YNhUzSRbUU2wyPuva-0INKxXL07LnDEnQ8KRzCSCJNcWA4yUeL5=w408-h271-k-no',
                            address: '3 Chome-1-1 Irijima, Urasoe, Okinawa 901-2123',
                            price: '¥무제한',
                            time: '10:00 ~ 22:00',
                            memo: '첫쨋날에 들려서 육아용품 사는게 좋을듯~!(저녁두먹구)',
                            googleMaps: '파르코시티, 3 Chome-1-1 Irijima, Urasoe, Okinawa 901-2123'
                        },
                        {
                            id: 'shopping02',
                            name: '헤이와도리 상점가',
                            description: '오키나와 잡화, 과자, 의류 등을 판매하는 상점가',
                            image: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTJfMTkw/MDAxNTYyOTE0ODExMTQy.t60SZjMg14Cq8qHotxs0QG-CvMOdmfzah4KOMqmV0Gwg.XGede6SSi-IKOrYM0gB6uVn4PnybSJ163OZrfKsBX-Ag.JPEG.yangklee/DSC05610.JPG?type=w800',
                            address: '3 Chome-1-8 Makishi, Naha, Okinawa 900-0013',
                            price: '¥무제한',
                            time: '10:00 ~ 22:00',
                            memo: '골목구경하는 재미가 있다능~',
                            googleMaps: '헤이와도리 상점가, 3 Chome-1-8 Makishi, Naha, Okinawa 900-0013'
                        },
                        {
                            id: 'shopping03',
                            name: '오키나와 분카야 잡화점',
                            description: '오키나와의 기념품이나 잡화를 판매하는 곳',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfwFnyvlqfmoFVdHT5uW6XaHyAPGsTiBUXuATU2W-s-BvMSpRXiCSX7xHF0lGjGKJ82UAuMn5jUlQ1c1dEiHOIE60x2_WETHDXm0ZqxxOLOYN7O1tg1kNtSGreFHzTKiLALo8OFACLEsVs=w408-h544-k-no',
                            address: '3 Chome-2-24 Kumoji, Naha, Okinawa 900-0015',
                            price: '¥무제한',
                            time: '10:00 ~ 22:00',
                            memo: '가격은 좀 비싼편인것 같지만 쇼핑하기 재미난곳~',
                            googleMaps: '오키나와 분카야 잡화점, 3 Chome-2-24 Kumoji, Naha, Okinawa 900-0015'
                        },
                        {
                            id: 'shopping04',
                            name: '류보백화점',
                            description: '의류, 화장품 등 다양한 상품을 판매하는 대형 백화점',
                            image: 'https://lh3.googleusercontent.com/gps-cs/AAjk-CNSJLjTx9a5-7kiN6wtT-wQgGV7LScgk__QRUSgmYjCkuFJBYaCnIJgWXRepteND4nEA8FGgiM7z6THuTckYFrZShhngdibPRpM75VkWWhqKoYZ1hlVshmHB8AOblumeNV1PE9n76rHdsgJ=w600-h321-p-k-no',
                            address: '1 Chome-1-1 Kumoji, Naha, Okinawa 900-8503',
                            price: '¥무제한',
                            time: '10:00 ~ 20:00',
                            memo: '나하 시내의 대표적인 쇼핑 명소 중 하나로, 다양한 브랜드와 상품을 한 곳에서 만나볼 수 있다능~',
                            googleMaps: '류보백화점,  1 Chome-1-1 Kumoji, Naha, Okinawa 900-8503'
                        },
                        {
                            id: 'shopping05',
                            name: '돈키호테 국제거리점',
                            description: '돈돈돈 돈키~ 돈키 호오테~',
                            image: 'https://mblogthumb-phinf.pstatic.net/MjAyNTA5MDVfMTM2/MDAxNzU3MDU3Njk2OTg1.yUH2sJT3LY3-S0Jmp8_ZaNSSMjw4poqcGNhCnaGQVsog.FCLHWI0NEMGIcixdLH1vjlmDWBYsJX4YsKAjuGsmT1Eg.JPEG/SE-325f81e3-1f92-4198-908b-1a43c9d68d75.jpg?type=w800',
                            address: '2 Chome-8-19 Matsuo, Naha, Okinawa 900-0014',
                            price: '¥무제한',
                            time: '10:00 ~ 05:00',
                            memo: '시내 중심으로 가게되면 한번정도 들려보쟝',
                            googleMaps: '돈키호테 국제거리점, 2 Chome-8-19 Matsuo, Naha, Okinawa 900-0014'
                        },
                        {
                            id: 'shopping06',
                            name: '소금전문점 마스야',
                            description: '오키나와 특산품 소금을 다양하게 판매하는 전문점',
                            image: 'https://ak-d.tripcdn.com/images/1mi2b224x990xcu1529E1_Q90.jpg?proc=source/trip',
                            address: '3 Chome-9-2 Makishi, Naha, Okinawa 900-0013',
                            price: '¥무제한',
                            time: '10:00 ~ 05:00',
                            memo: '시내 중심으로 가게되면 한번정도 들려보쟝',
                            googleMaps: '소금전문점 마스야, 3 Chome-9-2 Makishi, Naha, Okinawa 900-0013'
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
                            name: '그랜드 컨소트 나하',
                            description: '국제거리와 가까운 호텔',
                            image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLf-qItBFNzfsRN13L3IvLCZ5kNWREqwRPEsE9rRctJLMzKrIE0Kbd1Iq7lUHUlQsD--qTtVaPiVa5BUAamecQHYXauHZDbrlk4Kp-WNQgd64Vfp3C1CkZ17z_p7lmgmWQZ6OGjUKg=w408-h562-k-no',
                            address: '1 Chome-18-25 Matsuo, Naha, Okinawa 900-0014',
                            price: '¥15,000',
                            time: '00:00 ~ 24:00',
                            memo: '주차요금 별도로 있음!',
                            googleMaps: '그랜드컨소트나하, 1 Chome-18-25 Matsuo, Naha, Okinawa 900-0014'
                        }
                    ]
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
                <div class="map-modal-header">
                    <div class="map-modal-handle"></div>

                    <button type="button" class="map-modal-close">×</button>

                    <span class="map-modal-label" id="mapModalCategory"></span>
                    <h3 id="mapModalTitle"></h3>
                    <p class="modal-description" id="mapModalDescription"></p>
                </div>
                <div class="map-modal-body">
                    <img class="map-modal-image" id="mapModalImage" src="" alt="">

                    <ul class="map-modal-info">
                        <li>📍 <span id="mapModalAddress"></span></li>
                        <li>💰 <span id="mapModalPrice"></span></li>
                        <li>🕒 <span id="mapModalTime"></span></li>
                    </ul>
                    <div class="map-modal-goole-map-list">
                        <button type="button" class="map-modal-google-map-btn" id="googleMaps">Google Maps에서 보기</button>
                        <button type="button" class="map-modal-google-map-btn" id="googleNavigation">Google Navigation에서 보기</button>
                    </div>
                    <div class="map-modal-memo" id="mapModalMemo"></div>
                </div>
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

        // ==========================
        // Google Maps / Navigation
        // ==========================

        const googleMapsBtn = document.getElementById('googleMaps');
        const googleNavigationBtn = document.getElementById('googleNavigation');

        // 음식점 이름 + 주소
        const placeName = place.googleMaps;

        // Google Maps
        googleMapsBtn.onclick = () => {
            if (!placeName) return;

            const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}`;

            window.open(url, '_blank');
        };

        // Google Navigation
        googleNavigationBtn.onclick = () => {
            if (!placeName) return;

            const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeName)}&travelmode=driving&dir_action=navigate`;

            window.open(url, '_blank');
        };
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