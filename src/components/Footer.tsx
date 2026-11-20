const FOOTER_LINKS = [
  { href: "#about", label: "회사소개" },
  { href: "#terms", label: "이용약관" },
  { href: "#privacy", label: "개인정보처리방침" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto flex justify-center bg-white">
      <div className="flex w-full max-w-[1440px] flex-col gap-2 px-[60px] py-10 text-[14px] leading-[1.5] font-medium text-[#b2b6bd]">
        <nav aria-label="약관 및 회사 정보" className="flex flex-wrap items-center gap-3">
          {FOOTER_LINKS.map((link, index) => (
            <span key={link.label} className="flex items-center gap-3">
              {index > 0 ? <span aria-hidden="true">|</span> : null}
              <a
                href={link.href}
                className="hover:text-[#979ca5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f77dd]"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <div>
          <p>
            (주)히든카이스 | 대표: 안영호 | 사업자등록번호: 735-87-02522 (
            <span className="underline">사업자정보확인</span>)
          </p>
          <p>
            주소: 경기도 고양시 일산서구 일현로 97-11, 56F | 통신판매업신고: 제
            2024-고양일산서-1209 | 이메일: Hidden_kice@naver.com
          </p>
        </div>
        <p>Copyright © 2026 히든카이스. All rights reserved.</p>
      </div>
    </footer>
  );
}
