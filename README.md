# (주)레오이노비젼

## 설치 및 로컬환경 시작

의존성 모듈 설치

```bash
$ yarn
# or
$ yarn install
```

개발환경 시작

```bash
$ yarn dev
```

## 프로젝트 구성

### 주요의존성

- next: Next.JS 프레임워크 사용
- next-i18next: 다국어지원 라이브러리
- react-scroll: 스크롤 이벤트 처리
- swiper: 메인 배경화면 슬라이더
- eslint: 코드 포맷팅 규약

### 폴더 구조

- src
  - components -> 섹션,공통 컴포넌트 집합
    - common -> 공통 컴포넌트
    - layout -> 랜더링 템플릿 레이아웃
  - pages -> page route 관련 파일 집합
    - `_app.tsx` -> 레이아웃, 스타일 정의
    - `404.tsx` -> custom 404 page
    - `index.tsx` -> 루트 페이지 정의
  - styles -> 스타일시트 파일
    - `global.css` -> 메인 스타일시트
    - `responsive.css` -> 반응형 스타일시트
  - types -> API 응답 타입 파일
- public
  - images -> 정적 이미지 파일
  - locales -> 다국어 지원을 위해 en/ko 파일로 텍스트를 분리
    - ko -> 국문
    - en -> 영문
- `.env` -> 환경변수 파일
- `package.json` -> 의존 모듈 관리파일

### 환경변수

`.env`

- NEXT_PUBLIC_API_ENDPOINT: API 엔드포인트
- NEXT_PUBLIC_API_REPORTS: API reports 주소

## 참고 문서

### 웹 호스팅

- [Vercel](https://vercel.com/) -> Next.js 공식 호스팅 플랫폼
- [Amplify](https://aws.amazon.com/ko/amplify/) -> AWS Front 호스팅 솔루션
- [Cloudflare](https://www.cloudflare.com/ko-kr/) -> 웹호스팅및 다양한 솔루션 제공

### 주요 의존성 문서
- [next](https://nextjs.org/docs) -> Next.js 공식 document
- [next-i18next](https://github.com/i18next/next-i18next) -> 다국어 처리 관련
- [react-scroll](https://github.com/fisshy/react-scroll) -> 스크롤 이벤트 처리 관련
- [swiper](https://swiperjs.com/react) -> 슬라이더 docs

