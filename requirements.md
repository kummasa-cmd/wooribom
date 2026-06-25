# 🌊 우리봄 보석함 (Wooribom's Jewel Box)

> **클로드 코드 바이브 코딩용 랜딩 사이트 제작 요구사항 문서**
> 작성일: 2026.06
> 사이트 운영자: 우리봄 김윤희 (초등학교 교사 · 작가)

---

## 1. 프로젝트 개요 (Overview)

### 1.1. 사이트 이름
**우리봄 보석함**

### 1.2. 한 줄 정의
> "방문자가 사이트에 들어선 순간 바닷가에 도착한 듯한 힐링을 느끼고, 그 열린 마음으로 작가 '우리봄'의 작품과 SNS를 둘러볼 수 있는 감성 랜딩 페이지."

### 1.3. 핵심 컨셉
- **"바다 = 마음의 정화 공간"** : 첫 화면에서 청록빛 바다의 투명함을 시각·청각·움직임으로 전달
- **"보석함 = 작가의 작품·일상·연결고리를 담아둔 공간"** : 스크롤하며 하나씩 꺼내 보는 구조
- **정보 전달보다 '감정 경험'이 먼저**, 정보는 그 뒤에 자연스럽게 따라옴

### 1.4. 타겟 사용자
- 우리봄 작가의 SNS·책 독자
- 초등학교 학부모, 동료 교사
- 동시·에세이·힐링 콘텐츠를 좋아하는 일반 방문자

---

## 2. 디자인 가이드 (Design Guide)

### 2.1. 컬러 팔레트 (첨부 이미지 기반)

| 역할 | 컬러명 | HEX | 사용처 |
|------|--------|-----|--------|
| Primary (얕은 바다) | Aqua Mist | `#A8DCE3` | 메인 배경 그라데이션 상단 |
| Primary Deep (깊은 바다) | Ocean Teal | `#3DB2C7` | 버튼, 액센트, 링크 hover |
| Sky | Sky Cloud Blue | `#7EC0E8` | 보조 배경, 그라데이션 |
| Sand | Soft Sand | `#F4E6D2` | 카드 배경, 섹션 분리 |
| Foam | Foam White | `#FAFCFD` | 본문 배경 |
| Cloud | Cloud Gray | `#E8EEF2` | 구분선, 그림자 |
| Text | Deep Ocean | `#1F4D5C` | 본문 텍스트 |
| Text Sub | Misty Gray | `#6B8A93` | 보조 텍스트, 캡션 |

> ※ 그라데이션 기본 조합: `linear-gradient(180deg, #7EC0E8 0%, #A8DCE3 40%, #F4E6D2 100%)`

### 2.2. 무드 키워드
`잔잔함` · `투명함` · `여백` · `따뜻함` · `청량함` · `손글씨 감성`

### 2.3. 타이포그래피
- **헤드라인** : `Gowun Batang` 또는 `Nanum Myeongjo` (명조 계열, 따뜻한 감성)
- **본문** : `Pretendard` 또는 `Gowun Dodum` (가독성)
- **포인트(작가명/책제목)** : `Cafe24 Ssurround` 또는 `Gaegu` (손글씨 톤)
- 모든 폰트는 **구글 폰트** 또는 **눈누(noonnu.cc)** 에서 웹폰트로 임포트

### 2.4. 비주얼 요소
- 배경 : 첨부 바다 이미지를 **블러+밝기 조정**한 풀스크린 히어로
- 모션 : 잔잔한 **물결 ripple** 애니메이션 (CSS/SVG, 너무 빠르지 않게 8~12초 루프)
- 부유 요소 : 작은 **조개 · 별 · 거품** SVG 아이콘이 천천히 떠다니는 parallax
- 아이콘 : `Phosphor Icons` 또는 `Lucide` (얇은 라인 스타일)
- 카드 : `border-radius: 24px` 이상, 부드러운 그림자 (`0 8px 32px rgba(61,178,199,0.12)`)

---

## 3. 사이트 구조 (Information Architecture)

```
우리봄 보석함
│
├── ① Hero  (첫인상: 바다와 사이트명)
├── ② About (작가 우리봄 소개)
├── ③ Books (공저책 소개 — 2025 / 2026)
├── ④ Media (도서 소개 영상)
├── ⑤ Connect (SNS 보석함)
└── ⑥ Footer (저작권 · 이메일)
```

---

## 4. 섹션별 상세 시나리오 (User Scenario)

### 🌊 ① Hero — "도착의 순간"

**감정 목표**: "와, 바다다." (3초 안에 힐링 감정 도달)

- **풀스크린 배경** : 첨부 바다 이미지 (`/assets/hero-ocean.jpg`)
- 상단에 부드러운 **흰 안개 오버레이** (`backdrop-filter: blur(2px)`) → 글자 가독성 확보
- 중앙 텍스트 :
  - 메인 카피 : **"우리봄 보석함"** (명조체, 큼직하게)
  - 서브 카피 : *"마음에 물결이 닿는 곳, 작은 보석들을 꺼내어 보세요."*
- 하단 : `↓ Scroll` 화살표가 위아래로 부드럽게 움직임
- 진입 애니메이션 : 페이드인 + 텍스트가 아래에서 위로 살짝 떠오름 (1.5초)
- (선택) 우측 하단에 **음소거 가능한 파도소리** 토글 버튼 (기본 OFF)

---

### 🐚 ② About — "작가 우리봄"

**감정 목표**: 따뜻한 사람을 만난 것 같은 기분

- 좌측 : 작가 프로필 이미지 (둥근 형태, 부드러운 그림자) — *추후 업로드 슬롯*
- 우측 :
  - 이름 : **우리봄 (김윤희)**
  - 직업 : *초등학교 교사 · 작가*
  - 소개 문구 (수정 가능한 placeholder) :
    > "교실에서 아이들과 함께 마음을 키우고, 그 빛나는 순간을 글로 옮깁니다.
    > 우리봄의 보석함에는 아이들의 동시, 일상의 에세이, 그리고 바다 같은 마음이 담겨 있어요."
- 배경 : Soft Sand `#F4E6D2`
- 작은 장식 : 조개 SVG, 손글씨 밑줄

---

### 📚 ③ Books — "공저책 보석함"

**감정 목표**: 책을 손에 들고 만져보고 싶은 마음

- **2단 카드 레이아웃** (모바일에선 세로 스택)

#### 📖 Card 1 — 출간작
- 표지 이미지 : `https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480N251176320.jpg`
- 태그 : `2025 · 출간`
- 제목 : **「행복은 이렇게 와」**
- 부제 : *9살 아이들이 들려주는, 지금 행복해지는 19편의 동시*
- 설명 :
  > "초등학교 2학년 아이들이 일상 속에서 느낀 마음과,
  > 작은 손으로 적어 내려간 계절과 삶의 이야기를 담았습니다."
- 출간일 : 2025년 11월 27일
- CTA 버튼 : **[교보문고에서 보기](https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012258589)**

#### 📖 Card 2 — 출간 예정작
- 표지 자리 : "Coming Soon" 일러스트 또는 실루엣 (placeholder)
- 태그 : `2026.07 · 출간 예정`
- 제목 : **「오늘도 마음은 자라고 있어」**
- 부제 : *초등학교 5학년 아이들과 함께 쓰는 공저*
- 설명 :
  > "한 뼘씩 자라는 아이들의 마음을 글로 엮어,
  > 2026년 여름, 또 하나의 보석으로 찾아옵니다."
- CTA 버튼 : **[출간 소식 받기]** (linktree 또는 인스타로 이동)

- 카드 hover 효과 : 살짝 떠오르는 lift + 표지 미세 확대
- 배경 : Foam White, 카드는 Sand 톤

---

### 🎬 ④ Media — "보석을 영상으로 만나기"

**감정 목표**: 작가의 목소리를 듣고 가까이 다가서는 느낌

- 섹션 타이틀 : **"영상으로 만나는 보석함"**
- 유튜브 임베드 :
  ```html
  <iframe src="https://www.youtube.com/embed/XjV5x5grrD4"
          title="행복은 이렇게 와 - 도서 소개 영상"
          allowfullscreen></iframe>
  ```
- 영상 컨테이너 : `border-radius: 24px`, 바다색 그림자
- 캡션 : *"「행복은 이렇게 와」 도서 소개 영상"*
- 배경 : 잔잔한 물결 SVG 패턴

---

### 💌 ⑤ Connect — "SNS 보석함"

**감정 목표**: "더 알고 싶다, 연결되고 싶다"

- 섹션 타이틀 : **"우리봄과 더 가까이"**
- 서브 카피 : *"보석함의 문은 언제나 열려 있어요."*
- **6개의 카드형 링크** (그리드, 모바일 2열 / 데스크탑 3열)

| 아이콘 | 채널명 | URL |
|--------|--------|-----|
| 📷 | **Instagram** | https://www.instagram.com/wooribom.log?igsh=YmMxb2dmeHEycDZp |
| 🧵 | **Threads** | https://www.threads.com/@wooribom.log |
| 📺 | **YouTube** | https://youtube.com/@wooribom?si=Y-zHdx0VRpp1gBvq |
| ✍️ | **Brunch (그해 봄, 바다가 내게로 왔다)** | https://brunch.co.kr/brunchbook/sea-came-to-me |
| 📝 | **Naver Blog** | http://blog.naver.com/smile3901 |
| 🐦 | **X (Twitter)** | https://x.com/springrains4650 |
| 🌿 | **전체 Linktree 보기** | https://linktr.ee/Wooribombi |

- 카드 디자인 : 반투명 유리 효과 (`backdrop-filter: blur(10px)`), 호버 시 Ocean Teal 테두리
- 클릭 시 새 탭(`target="_blank" rel="noopener"`)

---

### 🌅 ⑥ Footer

- 카피라이트 : `© 2026 우리봄 보석함 (Wooribom). All rights reserved.`
- 좌측 : 작은 조개 아이콘 + "made with 🌊"
- 우측 : "Top ↑" 버튼 (클릭 시 부드럽게 Hero로 스크롤)
- 배경 : Deep Ocean `#1F4D5C`, 텍스트 Foam White

---

## 5. 기술 요구사항 (Tech Requirements)

### 5.1. 기술 스택
- **Framework** : `Next.js 14 (App Router)` 또는 순수 `HTML + Vanilla JS + TailwindCSS` (가벼움 우선)
- **Styling** : TailwindCSS + 커스텀 CSS Variables (컬러 팔레트)
- **애니메이션** : `Framer Motion` (Next.js) 또는 `GSAP` / 순수 CSS keyframes
- **폰트** : Google Fonts CDN
- **배포** : Vercel / Netlify / GitHub Pages 중 택1

### 5.2. 성능 / 접근성
- Lighthouse 성능 점수 **90+ 목표**
- 이미지는 WebP 변환 + lazy loading
- `prefers-reduced-motion` 사용자에겐 모션 최소화
- 모든 이미지 `alt` 속성 필수
- 키보드 네비게이션 가능

### 5.3. 반응형 브레이크포인트
- Mobile : `~ 640px`
- Tablet : `641 ~ 1024px`
- Desktop : `1025px ~`

### 5.4. 폴더 구조 (제안)
```
wooribom-jewelbox/
├── public/
│   └── assets/
│       ├── hero-ocean.jpg
│       ├── book-cover-2025.jpg
│       └── icons/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Books.tsx
│   │   ├── Media.tsx
│   │   ├── Connect.tsx
│   │   └── Footer.tsx
│   ├── styles/globals.css
│   └── app/page.tsx
├── requirements.md
└── README.md
```

---

## 6. 인터랙션 / 모션 디테일

| 영역 | 효과 |
|------|------|
| Hero | 페이드인 + 텍스트 부유 + 잔잔한 ripple |
| 스크롤 | `IntersectionObserver`로 섹션 진입 시 페이드업 |
| 책 카드 | hover 시 `translateY(-6px)` + scale 1.02 |
| SNS 카드 | hover 시 테두리 glow + 아이콘 살짝 흔들림 |
| 전체 | 부드러운 스크롤 (`scroll-behavior: smooth`) |
| 커서 (선택) | 작은 거품 trail 효과 |

---

## 7. 콘텐츠 자산 체크리스트

- [x] 첨부 바다 이미지 (Hero 배경) — 제공됨
- [x] 「행복은 이렇게 와」 표지 — 교보문고 URL 확보
- [x] 유튜브 영상 ID `XjV5x5grrD4` — 확보
- [x] SNS 6개 채널 링크 — 확보
- [ ] 작가 프로필 사진 — **추후 업로드 필요**
- [ ] 「오늘도 마음은 자라고 있어」 표지 — **출간 시 교체**
- [ ] 작가 자기소개 최종본 — **확정 필요**

---

## 8. 추가 고려사항 (Optional / Future)

- 📮 **방명록** : 독자가 한 줄 응원을 남길 수 있는 공간
- 📰 **소식 받기 폼** : 이메일 구독 (Mailchimp 또는 ConvertKit)
- 🎵 **파도소리 BGM** : 자동재생 X, 토글로 ON/OFF
- 🌐 **OG 이미지/메타태그** : 카카오톡·SNS 공유 시 미리보기 최적화
- 🔖 **즐겨찾기 추가 안내** : "보석함을 책갈피에 꽂아두세요" 마이크로카피

---

## 9. 작업 우선순위 (Claude Code 진행 순서 제안)

1. 프로젝트 초기 세팅 (Next.js or HTML+Tailwind) + 컬러 변수 등록
2. Hero 섹션 (가장 중요한 첫인상)
3. About + Books 섹션
4. Media (YouTube embed)
5. Connect (SNS 카드)
6. Footer + 스크롤 인터랙션 + 반응형 점검
7. 성능 최적화 & 배포

---

> 🌿 *"이 사이트의 진짜 컨텐츠는 '잠시 숨을 고를 수 있는 공간' 그 자체입니다."*
