import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#e4ecfd] flex justify-center pt-24 pb-8 md:pt-8 md:pb-4 px-4">
      {/* Main Container */}
      <div className="w-full max-w-[1200px] relative">
        <div className="flex items-start justify-center">
          <div className="flex flex-col items-center w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
