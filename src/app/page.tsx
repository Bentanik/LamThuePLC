import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-slate-900/70 z-10"></div>
          <img
            src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
            alt="Hệ thống PLC phòng cháy chữa cháy"
            className="object-cover w-full h-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Giải pháp PLC thông minh cho{" "}
              <span className="text-red-500">phòng cháy chữa cháy</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Bảo vệ chung cư mini của bạn với hệ thống quản lý PLC tiên tiến,
              đảm bảo an toàn tối đa và giảm thiểu rủi ro cháy nổ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
              >
                Liên hệ ngay
              </Link>
              <Link
                href="/solutions"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
              >
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* Quy trình hoạt động */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quy trình hoạt động đơn giản
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white border-2 border-red-600 w-16 h-16 flex items-center justify-center rounded-full mb-3">
                <span className="text-red-600 text-xl font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Lắp đặt thiết bị PLC
              </h4>
              <p className="text-gray-600 text-center text-sm">
                Tư vấn, lắp đặt và cấu hình hệ thống PLC phù hợp với từng chung
                cư mini.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white border-2 border-red-600 w-16 h-16 flex items-center justify-center rounded-full mb-3">
                <span className="text-red-600 text-xl font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Giám sát thông minh
              </h4>
              <p className="text-gray-600 text-center text-sm">
                Theo dõi trạng thái hệ thống, phát hiện sự cố và cảnh báo sớm
                qua ứng dụng/web.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white border-2 border-red-600 w-16 h-16 flex items-center justify-center rounded-full mb-3">
                <span className="text-red-600 text-xl font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Cảnh báo & xử lý
              </h4>
              <p className="text-gray-600 text-center text-sm">
                Cảnh báo ngay lập tức cho cư dân, ban quản lý khi phát hiện nguy
                cơ cháy nổ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Giới thiệu Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Giới thiệu về giải pháp PLC
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Hệ thống PLC của chúng tôi được thiết kế đặc biệt cho các chung cư
              mini, đảm bảo an toàn tối đa trong việc phòng chống cháy nổ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/plc-system.jpg"
                alt="Hệ thống PLC"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tại sao chọn giải pháp PLC của chúng tôi?
              </h3>
              <p className="text-gray-600 mb-6">
                Với kinh nghiệm nhiều năm trong lĩnh vực phòng cháy chữa cháy,
                chúng tôi cung cấp giải pháp PLC toàn diện giúp chủ đầu tư và cư
                dân chung cư mini luôn an tâm về an toàn.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Tuân thủ các tiêu chuẩn an toàn phòng cháy chữa cháy mới
                    nhất
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Giám sát 24/7 với khả năng cảnh báo sớm
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Thiết kế tùy chỉnh phù hợp với đặc thù của từng chung cư
                    mini
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-red-600 font-semibold hover:text-red-700 flex items-center group"
                >
                  Tìm hiểu thêm về công ty chúng tôi
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dịch vụ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cung cấp các giải pháp PLC toàn diện cho hệ thống phòng
              cháy chữa cháy tại chung cư mini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dịch vụ 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Thiết kế và lắp đặt hệ thống PLC
              </h3>
              <p className="text-gray-600 mb-6">
                Tư vấn, thiết kế và lắp đặt hệ thống PLC phòng cháy chữa cháy
                phù hợp với đặc thù riêng của từng chung cư mini.
              </p>
              <Link
                href="/services/design"
                className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
              >
                Chi tiết
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Dịch vụ 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Giám sát và cảnh báo 24/7
              </h3>
              <p className="text-gray-600 mb-6">
                Hệ thống giám sát thông minh kết nối với ứng dụng di động, cung
                cấp cảnh báo sớm và khả năng kiểm soát từ xa.
              </p>
              <Link
                href="/services/monitoring"
                className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
              >
                Chi tiết
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Dịch vụ 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Bảo trì và hỗ trợ kỹ thuật
              </h3>
              <p className="text-gray-600 mb-6">
                Dịch vụ bảo trì định kỳ và hỗ trợ kỹ thuật 24/7 đảm bảo hệ thống
                phòng cháy chữa cháy luôn hoạt động tốt nhất.
              </p>
              <Link
                href="/services/maintenance"
                className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
              >
                Chi tiết
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
