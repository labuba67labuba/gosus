function InfoBanner() {
  return (
    <>
      {/* Mobile Version - Below Form */}
      <div className="block xl:hidden w-full max-w-[384px] mt-6">
        <div className="bg-white rounded-2xl shadow-[0_6px_16px_rgba(230,235,245,0.8),0_1px_4px_rgb(227,235,252)] py-4 px-6 relative overflow-hidden">
          {/* Left Blue Border */}
          <div className="absolute left-0 top-0 w-1.5 h-full bg-[#4d83fa]"></div>

          <div className="pl-3">
            {/* Icon */}
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path fill="#005faf" d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm0,46A22,22,0,1,1,46,24,22,22,0,0,1,24,46Z" />
                <path fill="#005faf" d="M24,10a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V9A1,1,0,0,0,24,10Z" />
                <path fill="#005faf" d="M41,23H39a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                <path fill="#005faf" d="M9,23H7a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Z" />
                <path fill="#005faf" d="M33.9,32.49a1,1,0,0,0-1.41,1.41l2.82,2.83a1,1,0,0,0,1.41,0h0a1,1,0,0,0,0-1.41h0Z" />
                <path fill="#005faf" d="M14.1,15.51a1,1,0,1,0,1.41-1.41l-2.82-2.83a1,1,0,0,0-1.42,1.42Z" />
                <path fill="#005faf" d="M35.31,11.27,32.49,14.1a1,1,0,1,0,1.3,1.52l.11-.11,2.83-2.82a1,1,0,0,0-1.42-1.42Z" />
                <path fill="#005faf" d="M14.1,32.49l-2.83,2.82a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.41,0h0l2.82-2.83a1,1,0,0,0-1.41-1.41Z" />
                <path
                  fill="#005faf"
                  d="M24,14a10,10,0,0,0-5,18.66V39a2,2,0,0,0,2,2h.18a3,3,0,0,0,5.64,0H27a2,2,0,0,0,2-2V32.66A10,10,0,0,0,24,14ZM21,35h6v1H21Zm0,4V38h6v1Zm7-8.07a2,2,0,0,0-1,1.73V33H21v-.34a2,2,0,0,0-1-1.73,8,8,0,1,1,8,0Z"
                />
                <path fill="#005faf" d="M26.29,21.29,24,23.59l-2.29-2.3a1,1,0,0,0-1.42,1.42L23,25.41V30a1,1,0,0,0,2,0V25.41l2.71-2.7a1,1,0,0,0-1.42-1.42Z" />
                <circle fill="#005faf" cx="24" cy="20" r="1" />
              </svg>
            </div>

            {/* Link Text */}
            <div className="text-[16px] leading-tight">
              <a href="/" className="text-[#0d4cd3] hover:text-[#1d5deb] no-underline" style={{ letterSpacing: "-0.025em" }}>
                Куда ещё можно войти с паролем?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version - Absolute Right Side */}
      <div className="hidden xl:block absolute right-0 top-0" style={{ width: "280px", right: "90px" }}>
        <div className="bg-white rounded-2xl shadow-[0_6px_16px_rgba(230,235,245,0.8),0_1px_4px_rgb(227,235,252)] py-4 px-6 relative overflow-hidden">
          {/* Left Blue Border */}
          <div className="absolute left-0 top-0 w-1.5 h-full bg-[#4d83fa]"></div>

          <div className="">
            {/* Icon */}
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                <path fill="#005faf" d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm0,46A22,22,0,1,1,46,24,22,22,0,0,1,24,46Z" />
                <path fill="#005faf" d="M24,10a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V9A1,1,0,0,0,24,10Z" />
                <path fill="#005faf" d="M41,23H39a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                <path fill="#005faf" d="M9,23H7a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Z" />
                <path fill="#005faf" d="M33.9,32.49a1,1,0,0,0-1.41,1.41l2.82,2.83a1,1,0,0,0,1.41,0h0a1,1,0,0,0,0-1.41h0Z" />
                <path fill="#005faf" d="M14.1,15.51a1,1,0,1,0,1.41-1.41l-2.82-2.83a1,1,0,0,0-1.42,1.42Z" />
                <path fill="#005faf" d="M35.31,11.27,32.49,14.1a1,1,0,1,0,1.3,1.52l.11-.11,2.83-2.82a1,1,0,0,0-1.42-1.42Z" />
                <path fill="#005faf" d="M14.1,32.49l-2.83,2.82a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.41,0h0l2.82-2.83a1,1,0,0,0-1.41-1.41Z" />
                <path
                  fill="#005faf"
                  d="M24,14a10,10,0,0,0-5,18.66V39a2,2,0,0,0,2,2h.18a3,3,0,0,0,5.64,0H27a2,2,0,0,0,2-2V32.66A10,10,0,0,0,24,14ZM21,35h6v1H21Zm0,4V38h6v1Zm7-8.07a2,2,0,0,0-1,1.73V33H21v-.34a2,2,0,0,0-1-1.73,8,8,0,1,1,8,0Z"
                />
                <path fill="#005faf" d="M26.29,21.29,24,23.59l-2.29-2.3a1,1,0,0,0-1.42,1.42L23,25.41V30a1,1,0,0,0,2,0V25.41l2.71-2.7a1,1,0,0,0-1.42-1.42Z" />
                <circle fill="#005faf" cx="24" cy="20" r="1" />
              </svg>
            </div>

            {/* Link Text */}
            <div className="text-[16px] leading-tight">
              <a href="/" className="text-[#0d4cd3] hover:text-[#1d5deb] no-underline" style={{ letterSpacing: "-0.025em" }}>
                Куда ещё можно войти с паролем?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoBanner;
