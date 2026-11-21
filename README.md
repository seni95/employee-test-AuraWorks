# 히든카이스 스토어

히든카이스 교재 스토어의 메인 화면입니다. 배너와 상품 목록을 보여주고, 상품 정보는 Supabase `public.textbooks`에서 브라우저가 직접 조회합니다.

## 기술 스택

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS 4
- Supabase JS (`@supabase/supabase-js`)
- Pretendard Variable, 대체 글꼴 Noto Sans KR

## 주요 구현 기능

- 메인 화면은 헤더, 프로모션 배너, 상품 영역, 푸터로 구성됩니다.
- 교재 목록은 마운트 후 한 번 조회합니다. 로딩과 오류 상태를 구분해서 보여 줍니다.
- 상품명 검색, 전체·패스·단품 필터, 12개 단위 페이지네이션은 조회된 목록에서 처리합니다.
- 목록은 `sort_order` 오름차순입니다. 검색과 필터를 바꿔도 이 상대 순서는 유지됩니다.
- `image_url`은 `product-images` 버킷 안의 상대 경로입니다. 공개 URL로 바꾼 뒤 표시하고, 경로가 없거나 이미지를 읽지 못하면 로컬 표지로 대체합니다.
- 할인율은 저장값이 아닙니다. `original_price`와 `price`로 계산하고 `Math.round()`로 정수화합니다. 정가가 없거나 판매가가 정가 이상이면 할인율을 표시하지 않습니다.
- 헤더의 메뉴와 아이콘은 화면 구조만 표시합니다. 푸터의 회사소개, 이용약관, 개인정보처리방침은 페이지 내 앵커입니다.

## Supabase CSR 조회

상품 영역은 클라이언트 컴포넌트입니다. `useProducts`가 `useEffect`에서 `fetchProducts`를 호출합니다.

1. `src/lib/supabase.ts`의 브라우저 클라이언트를 재사용합니다. 클라이언트는 `NEXT_PUBLIC_SUPABASE_URL`과 `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`로 한 번만 만듭니다.
2. `textbooks`에서 `id`, `title`, `category`, `price`, `original_price`, `image_url`, `created_at`을 읽고 `sort_order` 오름차순으로 정렬합니다.
3. `category`가 `pass` 또는 `single`인 행만 상품으로 변환합니다.
4. `image_url`이 있으면 `storage.from('product-images').getPublicUrl()`로 공개 주소를 만듭니다.
5. 검색, 필터, 페이지 이동은 이 배열을 다시 거르고 잘라서 처리합니다. 조건이 바뀔 때마다 Supabase를 다시 호출하지 않습니다.

`supabase/seed/textbooks.sql`은 SQL Editor에서 직접 실행하는 시드입니다. 앱이 이 파일을 실행하지는 않습니다. 조회가 동작하려면 `textbooks`에 위 컬럼과 `sort_order`가 있어야 합니다.

## 폴더 구조

```txt
src/
├─ app/
│  ├─ layout.tsx                 루트 레이아웃, 글꼴
│  ├─ globals.css
│  └─ (main)/                    URL은 / 인 스토어 라우트 그룹
│     ├─ layout.tsx              헤더, 본문, 푸터
│     ├─ page.tsx                배너와 상품 영역
│     ├─ _components/            이 화면의 UI
│     ├─ _api/products.ts        조회와 목록 가공
│     ├─ _hooks/use-products.ts  브라우저 조회 상태
│     └─ _types/product.ts       행, 상품, 필터, 페이지 크기
├─ components/                   Header, Footer
└─ lib/                          Supabase 클라이언트, 가격 포맷, 정적 자산 경로
```

`(main)`은 라우트 그룹이라 주소에 포함되지 않습니다. `_components`, `_api`, `_hooks`, `_types`도 주소 세그먼트가 아닙니다. 스토어 화면의 조회, 상태, 타입, UI를 한곳에 두었습니다. 화면이 늘어나도 상품 코드가 공용 폴더로 흩어지지 않습니다.

다른 화면을 추가할 때는 `app` 아래 새 세그먼트를 만들고 같은 방식으로 `_api`와 `_components`를 둡니다. 여러 화면이 함께 쓰는 레이아웃만 `src/components`에 둡니다. Supabase 클라이언트처럼 화면과 무관한 코드만 `src/lib`에 둡니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

프로젝트 루트의 `.env.local`에 다음 값이 필요합니다.

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

두 값은 브라우저에 노출되는 공개 키입니다. 상품 이미지는 Supabase Storage의 공개 버킷 `product-images`를 사용합니다.
