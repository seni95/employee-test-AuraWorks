-- public.textbooks 더미 데이터를 지우고 36개 상품을 다시 넣는다.
-- Supabase SQL Editor에서 검토한 뒤 직접 실행한다. 이 파일은 앱에서 실행하지 않는다.
--
-- 첫 12개는 Figma 프레임 1:204 (I8nDYvrhx7rSEDJ4GAYFYe)의 화면 순서다.
-- 할인율은 저장하지 않고, 화면에서 original_price와 price로 계산한다.
-- image_url은 product-images 버킷 안의 상대 경로다.
-- 1페이지는 Figma에 그려진 표지 기준이다. 4, 5, 12번은 패스 상품이지만 단권 표지를 쓴다.
-- 2~3페이지는 카테고리와 같은 표지를 쓴다.

begin;

delete from public.textbooks;

alter table public.textbooks
  add column if not exists sort_order integer;

insert into public.textbooks (
  title,
  category,
  price,
  original_price,
  image_url,
  sort_order
)
values
  -- 1페이지. Figma 좌→우, 위→아래.
  ('2026 Hidden Kice 시즌7', 'single', 40000, null, 'cover-single.png', 1),
  ('2026 Hidden Kice 시즌7', 'pass', 64800, 76000, 'cover-pass.png', 2),
  ('2026 Hidden Kice 시즌7', 'pass', 64800, 76000, 'cover-pass.png', 3),
  ('2026 Hidden Kice 시즌7', 'pass', 64800, 76000, 'cover-single.png', 4),
  ('2026 Hidden Kice 시즌7', 'pass', 64800, 76000, 'cover-single.png', 5),
  ('2026 Hidden Kice 시즌7', 'pass', 64800, 76000, 'cover-pass.png', 6),
  ('2026 Hidden Kice 시즌7', 'single', 40000, null, 'cover-single.png', 7),
  ('2026 Hidden Kice 시즌7', 'pass', 64800, 76000, 'cover-pass.png', 8),
  ('2026 Hidden Kice 시즌7', 'single', 40000, null, 'cover-single.png', 9),
  ('2026 Hidden Kice 시즌7', 'pass', 64800, 76000, 'cover-pass.png', 10),
  ('2026 Hidden Kice 시즌7', 'pass', 64800, 76000, 'cover-pass.png', 11),
  ('2026 Hidden Kice 시즌7', 'pass', 64800, 76000, 'cover-single.png', 12),

  -- 2페이지. 페이지 이동 확인용. Figma에 없는 행이다.
  ('2026 Hidden Kice 시즌7 검증 13', 'single', 40000, null, 'cover-single.png', 13),
  ('2026 Hidden Kice 시즌7 검증 14', 'single', 40000, null, 'cover-single.png', 14),
  ('2026 Hidden Kice 시즌7 검증 15', 'single', 40000, null, 'cover-single.png', 15),
  ('2026 Hidden Kice 시즌7 검증 16', 'single', 40000, null, 'cover-single.png', 16),
  ('2026 Hidden Kice 시즌7 검증 17', 'single', 40000, null, 'cover-single.png', 17),
  ('2026 Hidden Kice 시즌7 검증 18', 'single', 40000, null, 'cover-single.png', 18),
  ('2026 Hidden Kice 시즌7 검증 19', 'pass', 64800, 76000, 'cover-pass.png', 19),
  ('2026 Hidden Kice 시즌7 검증 20', 'pass', 64800, 76000, 'cover-pass.png', 20),
  ('2026 Hidden Kice 시즌7 검증 21', 'pass', 64800, 76000, 'cover-pass.png', 21),
  ('2026 Hidden Kice 시즌7 검증 22', 'pass', 64800, 76000, 'cover-pass.png', 22),
  ('2026 Hidden Kice 시즌7 검증 23', 'pass', 64800, 76000, 'cover-pass.png', 23),
  ('2026 Hidden Kice 시즌7 검증 24', 'pass', 64800, 76000, 'cover-pass.png', 24),

  -- 3페이지. 페이지 이동 확인용. Figma에 없는 행이다.
  ('2026 Hidden Kice 시즌7 검증 25', 'single', 40000, null, 'cover-single.png', 25),
  ('2026 Hidden Kice 시즌7 검증 26', 'single', 40000, null, 'cover-single.png', 26),
  ('2026 Hidden Kice 시즌7 검증 27', 'single', 40000, null, 'cover-single.png', 27),
  ('2026 Hidden Kice 시즌7 검증 28', 'single', 40000, null, 'cover-single.png', 28),
  ('2026 Hidden Kice 시즌7 검증 29', 'single', 40000, null, 'cover-single.png', 29),
  ('2026 Hidden Kice 시즌7 검증 30', 'single', 40000, null, 'cover-single.png', 30),
  ('2026 Hidden Kice 시즌7 검증 31', 'pass', 64800, 76000, 'cover-pass.png', 31),
  ('2026 Hidden Kice 시즌7 검증 32', 'pass', 64800, 76000, 'cover-pass.png', 32),
  ('2026 Hidden Kice 시즌7 검증 33', 'pass', 64800, 76000, 'cover-pass.png', 33),
  ('2026 Hidden Kice 시즌7 검증 34', 'pass', 64800, 76000, 'cover-pass.png', 34),
  ('2026 Hidden Kice 시즌7 검증 35', 'pass', 64800, 76000, 'cover-pass.png', 35),
  ('2026 Hidden Kice 시즌7 검증 36', 'pass', 64800, 76000, 'cover-pass.png', 36);

alter table public.textbooks
  alter column sort_order set not null;

create unique index if not exists textbooks_sort_order_uidx
  on public.textbooks (sort_order);

commit;
