const FOOTER_LINKS = [
  { href: "#about", label: "회사소개" },
  { href: "#terms", label: "이용약관" },
  { href: "#privacy", label: "개인정보처리방침" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#f0f0f0] bg-white px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto w-full max-w-[1160px] text-[12px] leading-relaxed text-[#b0b0b0]">
        <nav aria-label="약관 및 회사 정보" className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
          {FOOTER_LINKS.map((link, index) => (
            <span key={link.label} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">|</span> : null}
              <a
                href={link.href}
                className="hover:text-[#888] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e45c2d]"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <p>
          (주)히든카이스 | 대표 : 민병도 | 사업자등록번호 : 735-87-02452 (사업자정보확인)
        </p>
        <p>
          주소 : 경기도 고양시 일산서구 일현로 87-11, 504 | 통신판매업신고 : 제
          2024-고양일산서-1238 | 이메일 : Hidden_kice@naver.com
        </p>
        <p className="mt-3">Copyright © 2026 히든카이스. All rights reserved.</p>
      </div>
    </footer>
  );
}
