// Translation data for Code Up Your Brain website
const translations = {
    // Vietnamese translations
    vi: {
        // Meta and title
        'title': 'Code Up Your Brain - Khóa học Python và Thuật Toán',
        'meta-description': 'Khóa học Python và Thuật Toán chất lượng cao với giảng viên giàu kinh nghiệm từ Zalo. Học từ cơ bản đến nâng cao với phương pháp thực hành 100%.',
        
        // Logo and navigation
        'logo-text': 'Code Up Your Brain',
        'nav-home': 'Trang chủ',
        'nav-about': 'Giới thiệu',
        'nav-course': 'Khóa học',
        'nav-instructor': 'Giảng viên',
        'nav-contact': 'Liên hệ',
        'header-cta': 'Đăng ký ngay',
        
        // Hero section
        'hero-title': 'Nâng tầm tư duy với<br><span class="highlight">Python & Thuật Toán</span>',
        'hero-description': 'Khóa học chất lượng cao giúp bạn làm chủ lập trình Python và thuật toán từ cơ bản đến nâng cao. Được giảng dạy bởi Senior Technical Leader với hơn 8 năm kinh nghiệm tại Zalo.',
        'hero-start': 'Bắt đầu học ngay',
        'hero-preview': 'Xem trước khóa học',
        'start-course': 'Bắt đầu học ngay',
        'jump-lesson1': 'Nhảy đến Bài 1',
        'stat-modules': 'Modules',
        'stat-exercises': 'Bài tập',
        'stat-practical': 'Thực hành',
        
        // About section
        'about-title': 'Tại sao chọn Code Up Your Brain?',
        'about-subtitle': 'Phương pháp học tập hiệu quả với nội dung chất lượng cao',
        'feature1-title': 'Phát triển tư duy thuật toán',
        'feature1-desc': 'Học cách tư duy như một lập trình viên chuyên nghiệp, giải quyết vấn đề một cách logic và hiệu quả.',
        'feature2-title': 'Thực hành 100%',
        'feature2-desc': 'Mỗi bài học đều có bài tập thực tế, từ cơ bản đến nâng cao, giúp củng cố kiến thức ngay lập tức.',
        'feature3-title': 'Song ngữ Việt - Anh',
        'feature3-desc': 'Nội dung được biên soạn song ngữ, giúp bạn làm quen với thuật ngữ kỹ thuật quốc tế.',
        'feature4-title': 'Tích hợp AI',
        'feature4-desc': 'Học cách xây dựng chatbot, AI đánh cờ và các ứng dụng thông minh khác.',
        
        // Curriculum section
        'curriculum-title': 'Chương trình học',
        'curriculum-subtitle': '12 modules từ cơ bản đến nâng cao',
        'show-more': 'Xem thêm 6 modules',
        'show-less': 'Thu gọn',
        
        // Module 1
        'module1-title': 'Introduction',
        'module1-desc': 'Khái niệm cơ bản về lập trình, cấu trúc chương trình, kiểu dữ liệu và phép toán.',
        'module1-topic1': 'Nhập xuất dữ liệu',
        'module1-topic2': 'Phép toán cơ bản',
        
        // Module 2
        'module2-title': 'Conditional Statements',
        'module2-desc': 'Cấu trúc điều kiện và rẽ nhánh trong lập trình.',
        'module2-topic1': 'Kiểm tra năm nhuận',
        'module2-topic2': 'Tính tiền điện',
        
        // Module 3
        'module3-title': 'Loops',
        'module3-desc': 'Cấu trúc vòng lặp và các kỹ thuật xử lý với vòng lặp.',
        'module3-topic1': 'Tính số gạch lát sàn',
        'module3-topic2': 'Sức chứa tàu điện',
        
        // Module 4
        'module4-title': 'Functions',
        'module4-desc': 'Chương trình con, biến cục bộ/toàn cục và chia file chương trình.',
        'module4-topic1': 'Số nguyên tố',
        'module4-topic2': 'Ước chung lớn nhất',
        
        // Module 5
        'module5-title': 'Arrays',
        'module5-desc': 'Mảng một chiều và các kỹ thuật xử lý trên mảng.',
        'module5-topic1': 'Mua hàng siêu thị',
        'module5-topic2': 'Quản lý nhân viên',
        
        // Module 6
        'module6-title': 'Matrix - 2D Arrays',
        'module6-desc': 'Mảng hai chiều và các kỹ thuật xử lý trên mảng 2D.',
        'module6-topic1': 'Chơi cờ vua',
        'module6-topic2': 'Đếm like album',
        
        // Module 7
        'module7-title': 'String',
        'module7-desc': 'Chuỗi và kiểu kí tự, bảng mã ASCII và kỹ thuật lập trình với chuỗi.',
        'module7-topic1': 'Chuẩn hóa tên',
        'module7-topic2': 'Đếm kí tự phân biệt',
        
        // Module 8
        'module8-title': 'Recursion',
        'module8-desc': 'Kỹ thuật lập trình đệ quy cơ bản và cấu trúc dữ liệu Stack.',
        'module8-topic1': 'Số Fibonacci',
        'module8-topic2': 'Chuyển đổi hệ số',
        
        // Module 9
        'module9-title': 'Data Abstraction',
        'module9-desc': 'Struct/Class và getters/setters để tạo kiểu dữ liệu mới.',
        'module9-topic1': 'Thông tin học sinh',
        'module9-topic2': 'Tọa độ 2D',
        
        // Module 10
        'module10-title': 'Sorting Algorithms',
        'module10-desc': 'Các thuật toán sắp xếp kinh điển và độ phức tạp thuật toán.',
        'module10-topic1': 'Sắp xếp sinh viên',
        'module10-topic2': 'Xây dựng tháp',
        
        // Module 11
        'module11-title': 'Singly Linked List',
        'module11-desc': 'Danh sách liên kết đơn FIFO/LIFO và các thao tác cơ bản.',
        'module11-topic1': 'Phòng khách sạn',
        'module11-topic2': 'Reversed list',
        
        // Module 12
        'module12-title': 'Trees',
        'module12-desc': 'Cấu trúc dữ liệu cây và Binary Search Tree.',
        'module12-topic1': 'Điểm cao nhất',
        'module12-topic2': 'Level order traversal',
        
        // Module Actions
        'start-lesson': 'Bắt đầu học',
        
        // Instructor section
        'instructor-title': 'Giảng viên',
        'instructor-subtitle': 'Học từ chuyên gia hàng đầu',
        'instructor-name': 'Thầy Trí',
        'instructor-position': 'Senior Technical Leader tại Zalo',
        'badge-senior': 'Senior Tech Leader',
        'badge-users': '25M+ Users',
        'badge-experience': '8+ Years',
        'edu-1': 'Tốt nghiệp loại giỏi ĐH Bách Khoa TP.HCM',
        'edu-2': 'Xuất bản bài báo khoa học tại AUN/SEED 2018',
        'exp-1': '8+ năm kinh nghiệm tối ưu và phát triển phần mềm',
        'exp-2': 'Phát triển ứng dụng Zalo PC với 25+ triệu người dùng',
        'exp-3': 'Tốt nghiệp Leadership Program - Fulbright University',
        'exp-5': 'Hiện đang học Kinh doanh & Khởi nghiệp tại YUP Education, Tâm lý học & Phát triển bản thân',
        'exp-4': 'Đồng sáng lập học viện InnoMind (2025)',
        'vision-title': 'Tầm nhìn InnoMind',
        'vision-desc': '"InnoMind là học viện chuẩn quốc tế đào tạo Toán Quốc Tế, Tiếng Anh, Lập trình & AI hàng đầu tại Đà Nẵng"',
        
        // CTA section
        'cta-title': 'Sẵn sàng nâng tầm kỹ năng lập trình?',
        'cta-desc': 'Tham gia cùng hàng nghìn học viên đã thành công với Code Up Your Brain',
        'cta-start': 'Bắt đầu học ngay',
        'cta-demo': 'Xem demo miễn phí',
        'cta-feature1': 'Học thử miễn phí',
        'cta-feature2': 'Hỗ trợ 24/7',
        'cta-feature3': 'Chứng chỉ hoàn thành',
        
        // Footer
        'footer-desc': 'Nâng tầm tư duy lập trình với khóa học Python và Thuật Toán chất lượng cao.',
        'footer-course': 'Khóa học',
        'footer-python': 'Python cơ bản',
        'footer-algorithm': 'Thuật toán',
        'footer-data-structure': 'Cấu trúc dữ liệu',
        'footer-ai': 'AI & Machine Learning',
        'footer-support': 'Hỗ trợ',
        'footer-faq': 'Câu hỏi thường gặp',
        'footer-contact': 'Liên hệ',
        'footer-community': 'Cộng đồng',
        'footer-blog': 'Blog',
        'footer-contact-title': 'Liên hệ',
        'footer-address': 'Đà Nẵng, Việt Nam',
        'footer-copyright': '© 2025 Code Up Your Brain. All rights reserved.',
        
        // Contact Popup
        'contact-popup-title': 'Thông tin liên hệ',
        'contact-address-label': 'Địa chỉ:',
        'contact-address': '136 Nguyễn Mậu Tài, Hòa Xuân, Cẩm Lệ, Đà Nẵng',
        'contact-phone-label': 'Số điện thoại:',
        'contact-email-label': 'Email:',
        
        // Notifications
        'notification-enrollment': 'Đang chuyển hướng đến trang đăng ký...',
        'notification-preview': 'Đang tải video demo...',
        'error-general': 'Đã xảy ra lỗi. Vui lòng thử lại.',
        
        // Lesson 1 Translations
        'lesson1-title': 'Bài 1: Bắt đầu với Lập trình - Code Up Your Brain',
        'lesson1-meta': 'Học cơ bản lập trình, cài đặt VS Code, và viết chương trình Python đầu tiên',
        'lesson1-main-title': 'Bắt đầu với Lập trình',
        'lesson1-subtitle': 'Học phương pháp học hiệu quả, thiết lập môi trường phát triển, và viết chương trình Python đầu tiên',
        'lesson1-duration': '45 phút',
        'lesson1-level': 'Cơ bản',
        'lesson1-exercises': '4 bài tập',
        
        // Breadcrumb
        'breadcrumb-home': 'Trang chủ',
        'breadcrumb-course': 'Khóa học',
        'breadcrumb-lesson1': 'Bài 1',
        'lesson-label': 'Bài học',
        
        // Table of Contents
        'toc-title': 'Mục lục',
        'toc-study': '1. Cách học',
        'toc-vscode': '2. Cài đặt Visual Studio Code',
        'toc-first': '3. Chương trình đầu tiên',
        'toc-variables': '4. Biến',
        'toc-operators': '5. Toán tử',
        'toc-exercises': '6. Bài tập thực hành',
        
        // Section 1
        'section1-title': '1. Cách học',
        'objective-title': '💡 Mục tiêu:',
        'section1-objective': 'Hiểu cách học hiệu quả nhất trong suốt khóa Code Up Your Brain.',
        'study-principles': 'Nguyên tắc học:',
        'principle1-title': 'Nội dung bài giảng được công khai trên website',
        'principle1-point1': '→ Bạn có thể xem lại mọi phần lý thuyết, ví dụ, và bài tập bất cứ lúc nào.',
        'principle1-point2': '→ Không sợ "bị bỏ lỡ" khi vắng buổi.',
        'principle2-title': 'Xem lại lý thuyết và làm bài tập đầy đủ sau mỗi buổi',
        'principle2-point1': '→ Học lập trình là luyện tập. Mỗi dòng code bạn viết là một bước tiến.',
        'principle3-title': 'Thầy code tới đâu – mình code tới đó',
        'principle3-point1': '→ Đừng chỉ xem, hãy mở Visual Studio và gõ cùng.',
        'principle3-point2': '→ Khi bạn tự tay gõ, não bạn mới thực sự học.',
        'programming-quote': 'Lập trình không phải để nhớ, mà để hiểu và làm được.',
        
        // Section 2
        'section2-title': '2. Cài đặt Visual Studio Code (VS Code)',
        'step1-title': '⚙️ Bước 1: Tải và cài đặt',
        'step1-point1': 'Truy cập:',
        'step1-point2': 'Chọn phiên bản phù hợp với hệ điều hành (Windows / macOS / Linux).',
        'step1-point3': 'Cài đặt theo hướng dẫn mặc định (Next → Next → Finish).',
        'step2-title': '⚙️ Bước 2: Cài Python Extension',
        'step2-point1': 'Mở VS Code',
        'step2-point2': 'Nhấn Ctrl + Shift + X để mở tab Extensions',
        'step2-point3': 'Tìm "Python" → chọn Python (by Microsoft) → Install',
        'step3-title': '⚙️ Bước 3: Kiểm tra cài đặt',
        'step3-point1': 'Mở Terminal trong VS Code (Ctrl + ~)',
        'step3-point2': 'Nhập:',
        'step3-result': 'Nếu hiện ra ví dụ như:',
        'step3-success': '→ Nghĩa là đã sẵn sàng lập trình! 🎉',
        
        // Section 3
        'section3-title': '3. Chương trình đầu tiên',
        'section3-objective': 'Chạy được dòng code đầu tiên và hiểu quy trình "chạy chương trình".',
        'first-step1': 'Bước 1: Tạo file mới',
        'first-step1-point1': 'Vào File → New File',
        'first-step1-point2': 'Lưu lại với tên hello.py',
        'first-step2': 'Bước 2: Viết đoạn code:',
        'first-step3': 'Bước 3: Nhấn Ctrl + F5 để chạy',
        'first-result': 'Kết quả:',
        'congratulations': 'Chúc mừng bạn! Bạn vừa viết chương trình Python đầu tiên của mình.',
        
        // Section 4
        'section4-title': '4. Biến (Variables)',
        'concept-title': '💡 Khái niệm:',
        'variables-concept': 'Biến là "chiếc hộp" để chứa dữ liệu trong bộ nhớ. Mỗi biến có:',
        'var-name': 'Tên (name)',
        'var-value': 'Giá trị (value)',
        'var-example': 'Ví dụ:',
        'naming-rules': '⚙️ Quy tắc đặt tên biến:',
        'rule1': 'Chỉ chứa chữ cái, số và dấu gạch dưới _',
        'rule2': 'Không bắt đầu bằng số',
        'rule3': 'Phân biệt chữ hoa và chữ thường',
        'valid-examples': '✅ Ví dụ hợp lệ:',
        'invalid-examples': '❌ Ví dụ sai:',
        
        // Section 5
        'section5-title': '5. Toán tử (Operators)',
        'arithmetic-operators': '📘 Toán tử số học:',
        'comparison-operators': '📘 Toán tử so sánh:',
        'table-operator': 'Toán tử',
        'table-meaning': 'Ý nghĩa',
        'table-example': 'Ví dụ',
        'table-result': 'Kết quả',
        'op-add': 'Cộng',
        'op-sub': 'Trừ',
        'op-mul': 'Nhân',
        'op-div': 'Chia',
        'op-floor': 'Chia lấy phần nguyên',
        'op-mod': 'Chia lấy dư',
        'op-pow': 'Lũy thừa',
        'op-equal': 'Bằng nhau',
        'op-not-equal': 'Khác nhau',
        'op-greater': 'Lớn hơn',
        'op-less': 'Nhỏ hơn',
        'op-gte': 'Lớn hơn hoặc bằng',
        'op-lte': 'Nhỏ hơn hoặc bằng',
        
        // Section 6
        'section6-title': '6. Bài tập thực hành',
        'exercise1-title': '🧩 Bài 1 – Chào người dùng',
        'exercise1-desc': 'Viết chương trình:',
        'exercise2-title': '🧩 Bài 2 – Tính tuổi',
        'exercise3-title': '🧩 Bài 3 – Tính toán đơn giản',
        'exercise3-desc': 'Viết chương trình nhập hai số và in kết quả các phép tính cộng, trừ, nhân, chia.',
        'exercise4-title': '🧩 Bài 4 – Thử thách nhỏ',
        'exercise4-desc': 'Viết chương trình hỏi tên, tuổi và in ra:',
        
        // Summary
        'summary-title': '✅ Tổng kết bài 1',
        'summary1': 'Cài đặt và mở VS Code',
        'summary2': 'Viết chương trình Python đầu tiên',
        'summary3': 'Hiểu khái niệm biến & toán tử',
        'summary4': 'Tự tay chạy chương trình và làm bài tập',
        
        // Homework
        'homework-title': 'Bài Tập Về Nhà',
        'homework-subtitle': '15 Bài Tập Thực Hành',
        'homework-desc': 'Hoàn thành các bài tập này để củng cố kiến thức về biến, toán tử và các khái niệm lập trình cơ bản.',
        'homework-basic': 'Cơ bản',
        'homework-intermediate': 'Trung bình',  
        'homework-advanced': 'Nâng cao',
        'homework-download': 'Làm Bài Tập',
        
        // Homework Page - Simplified
        'homework-page-title': 'Bài Tập Về Nhà - Lesson 1: Getting Started with Programming',
        'homework-main-title': 'Bài Tập Về Nhà - Lesson 1',
        'homework-main-desc': '15 bài tập thực hành từ cơ bản đến nâng cao để củng cố kiến thức lập trình Python',
        
        // Instructions
        'instructions-title': 'Hướng dẫn làm bài',
        'instruction-1': 'Tạo file Python mới cho mỗi bài tập (ví dụ: bai1.py, bai2.py)',
        'instruction-2': 'Chạy code để kiểm tra kết quả',
        'instruction-3': 'Không cần nộp bài, chỉ cần thực hành',
        'instruction-4': 'Nếu gặp khó khăn, hãy xem lại lý thuyết trong Lesson 1',
        
        // Exercise Categories
        'basic-title': 'Bài Tập Cơ Bản (1-5)',
        'intermediate-title': 'Bài Tập Trung Bình (6-10)',
        'advanced-title': 'Bài Tập Nâng Cao (11-15)',
        
        // Exercise Titles & Descriptions
        'ex1-title': 'Bài 1: Thông tin cá nhân',
        'ex1-desc': 'Viết chương trình yêu cầu người dùng nhập: Họ tên, Tuổi, Thành phố',
        'ex1-format': 'Sau đó in ra màn hình theo định dạng:',
        
        'ex2-title': 'Bài 2: Tính chu vi và diện tích hình chữ nhật',
        'ex2-desc': 'Nhập chiều dài và chiều rộng của hình chữ nhật. Tính và in ra: Chu vi, Diện tích',
        
        'ex3-title': 'Bài 3: Đổi độ C sang độ F',
        'ex3-desc': 'Nhập nhiệt độ theo độ C, chuyển đổi sang độ F và in kết quả.',
        'ex3-formula': 'Công thức: F = C * 9/5 + 32',
        
        'ex4-title': 'Bài 4: Tính tiền tip',
        'ex4-desc': 'Nhập số tiền hóa đơn và phần trăm tip. Tính và in ra: Tiền tip, Tổng tiền phải trả',
        
        'ex5-title': 'Bài 5: Tính BMI',
        'ex5-desc': 'Nhập cân nặng (kg) và chiều cao (m). Tính chỉ số BMI theo công thức: BMI = cân nặng / (chiều cao^2)',
        
        'ex6-title': 'Bài 6: Máy tính đơn giản',
        'ex6-desc': 'Nhập 2 số và 1 phép toán (+, -, *, /, %, **). In ra kết quả của phép tính đó.',
        
        'ex7-title': 'Bài 7: Tính thời gian',
        'ex7-desc': 'Nhập số giây, chuyển đổi và in ra định dạng: [giờ] giờ [phút] phút [giây] giây',
        
        'ex8-title': 'Bài 8: Tính tiền lương',
        'ex8-desc': 'Nhập: Số giờ làm việc, Lương theo giờ. Tính tổng lương (nếu > 40 giờ thì tính overtime x1.5)',
        
        'ex9-title': 'Bài 9: Chia kẹo',
        'ex9-desc': 'Có N viên kẹo, chia đều cho M người. Tính: Mỗi người được bao nhiêu viên, Còn thừa bao nhiêu viên',
        
        'ex10-title': 'Bài 10: Tính tuổi chính xác',
        'ex10-desc': 'Nhập năm sinh, tính và in ra: Tuổi hiện tại, Số ngày đã sống (gần đúng)',
        
        'ex11-title': 'Bài 11: Hoán đổi giá trị',
        'ex11-desc': 'Nhập 2 số a và b. In ra giá trị sau khi hoán đổi mà KHÔNG dùng biến thứ 3.',
        
        'ex12-title': 'Bài 12: Tính số tiền đi taxi',
        'ex12-desc': 'Nhập số km đi taxi. Quy tắc: 2km đầu: 15,000đ/km, Từ km thứ 3 trở đi: 12,000đ/km',
        
        'ex13-title': 'Bài 13: Phân tích số tiền',
        'ex13-desc': 'Nhập một số tiền (VD: 234,500đ). Phân tích thành các tờ tiền: 500,000đ, 200,000đ, 100,000đ, 50,000đ, v.v...',
        
        'ex14-title': 'Bài 14: Tính lãi suất ngân hàng',
        'ex14-desc': 'Nhập: Số tiền gửi ban đầu, Lãi suất (%/năm), Số tháng gửi. Tính số tiền nhận được sau khi gửi (lãi suất tính theo tháng).',
        
        'ex15-title': 'Bài 15: Thử thách cuối',
        'ex15-desc': 'Viết chương trình tính toán cho một cửa hàng. Nhập: Tên sản phẩm, Giá gốc, Phần trăm giảm giá, Thuế VAT (%). In ra: Giá sau giảm giá, Thuế phải trả, Giá cuối cùng khách phải trả, Lợi nhuận cửa hàng (giả sử giá gốc = 70% giá bán)',
        
        // Notes & Goals
        'notes-title': 'Lưu ý quan trọng',
        'note-1': 'Đặt tên biến có ý nghĩa: chieu_dai thay vì a',
        'note-2': 'Comment code: Giải thích những gì bạn làm',
        'note-3': 'Test nhiều trường hợp: Thử với số âm, số 0, số thập phân',
        'note-4': 'Format output đẹp: Dùng f-string để in kết quả dễ đọc',
        'note-5': 'Xử lý lỗi cơ bản: Kiểm tra input hợp lý',
        
        'goals-title': 'Mục tiêu',
        'goals-intro': 'Sau khi hoàn thành 15 bài tập này, bạn sẽ:',
        'goal-1': 'Thành thạo cú pháp Python cơ bản',
        'goal-2': 'Hiểu rõ về variables và operators',
        'goal-3': 'Biết cách làm việc với input/output',
        'goal-4': 'Có nền tảng vững chắc cho Lesson 2',
        'good-luck': 'Chúc bạn học tập hiệu quả! 💪',
        'breadcrumb-homework': 'Bài Tập',
        'nav-back-lesson': 'Về Bài 1',
        'nav-course': 'Về Khóa Học',
        
        // Authentication
        'auth-title': '🔐 Truy Cập Khóa Học',
        'auth-subtitle': 'Nhập mật khẩu để xem nội dung khóa học',
        'auth-password-label': 'Mật khẩu:',
        'auth-password-placeholder': 'Nhập mật khẩu khóa học',
        'auth-submit': 'Truy Cập Khóa Học',
        'auth-contact': 'Liên hệ giảng viên để được cấp mật khẩu',
        'auth-success': 'Truy cập thành công! Chào mừng bạn đến với khóa học.',
        'auth-error': 'Mật khẩu không đúng. Vui lòng thử lại.',
        
        // Lesson 2 Translations
        'lesson2-title': 'Bài 2: Câu lệnh điều kiện - Code Up Your Brain',
        'lesson2-meta': 'Học câu lệnh if-else, toán tử so sánh, và logic ra quyết định trong lập trình Python',
        'lesson2-main-title': 'Câu lệnh điều kiện',
        'lesson2-subtitle': 'Làm chủ câu lệnh if-else, toán tử so sánh, và logic ra quyết định trong Python',
        'breadcrumb-lesson2': 'Bài 2',
        
        // Table of Contents - Lesson 2
        'toc-intro': '1. Giới thiệu về điều kiện',
        'toc-comparison': '2. Toán tử so sánh',
        'toc-if': '3. Câu lệnh if cơ bản',
        'toc-if-else-elif': '4. if-else và elif',
        'toc-logical': '5. Toán tử logic',
        'toc-leap-year': '6. Dự án: Kiểm tra năm nhuận',
        'toc-electricity': '7. Dự án: Tính tiền điện',
        'toc-exercises': '8. Bài tập thực hành',
        
        // Lesson 2 Content
        'section1-title-lesson2': '1. Giới thiệu về câu lệnh điều kiện',
        'section2-title-lesson2': '2. Toán tử so sánh',
        'section3-title-lesson2': '3. Câu lệnh if cơ bản',
        'section4-title-lesson2': '4. if-else và elif',
        'section5-title-lesson2': '5. Toán tử logic',
        'section6-title-lesson2': '6. Dự án: Kiểm tra năm nhuận',
        'section7-title-lesson2': '7. Dự án: Tính tiền điện',
        'section8-title-lesson2': '8. Bài tập thực hành & Bài tập về nhà',
        
        'what-are-conditionals': 'Câu lệnh điều kiện là gì?',
        'conditionals-explanation': 'Câu lệnh điều kiện cho phép chương trình ra quyết định dựa trên các tình huống khác nhau. Chúng giống như việc đặt câu hỏi "Nếu thế thì sao?" trong code của bạn.',
        'everyday-example': '🏠 Ví dụ hàng ngày:',
        'umbrella-example': '"Nếu trời mưa, tôi sẽ mang ô. Nếu không, tôi sẽ không mang."',
        'flowchart-title': 'Luồng quyết định:',
        'flow-start': 'Bắt đầu',
        'flow-condition': 'Điều kiện có đúng?',
        'flow-yes': 'Có',
        'flow-no': 'Không',
        'flow-action1': 'Làm việc này',
        'flow-action2': 'Làm việc kia',
        
        // Section 2
        'comparison-intro': 'Trước khi có thể ra quyết định, chúng ta cần so sánh các giá trị. Python cung cấp một số toán tử so sánh:',
        'operator-header': 'Toán tử',
        'meaning-header': 'Ý nghĩa',
        'example-header': 'Ví dụ',
        'result-header': 'Kết quả',
        'equal-to': 'Bằng',
        'not-equal': 'Không bằng',
        'greater-than': 'Lớn hơn',
        'less-than': 'Nhỏ hơn',
        'greater-equal': 'Lớn hơn hoặc bằng',
        'less-equal': 'Nhỏ hơn hoặc bằng',
        'try-it': '✏️ Thử nghiệm:',
        
        // Section 3
        'if-intro': 'Câu lệnh <code>if</code> là câu lệnh điều kiện cơ bản nhất. Nó thực thi code chỉ khi điều kiện là đúng.',
        'syntax-title': '📝 Cú pháp:',
        'important-title': '⚠️ Quan trọng:',
        'colon-note': 'Đừng quên dấu hai chấm (:) sau điều kiện',
        'indent-note': 'Thụt lề code bên trong khối if (4 dấu cách hoặc 1 tab)',
        'example-title': 'Ví dụ:',
        'output-title': 'Kết quả:',
        
        // Section 4-8 Content
        'if-else-title': 'Câu lệnh if-else',
        'elif-title': 'Câu lệnh elif',
        'section6-title': '6. Dự án: Kiểm tra năm nhuận',
        'leap-year-objective': 'Tạo chương trình xác định năm nhập vào có phải năm nhuận hay không sử dụng câu lệnh điều kiện.',
        'leap-year-rules': '📋 Quy tắc năm nhuận:',
        'rule1-desc': 'Nếu năm chia hết cho 4, có thể là năm nhuận',
        'rule2-desc': 'Nếu cũng chia hết cho 100, thì KHÔNG phải năm nhuận',
        'rule3-desc': 'TRỪ KHI cũng chia hết cho 400, thì VẪN LÀ năm nhuận',
        'examples-title': '✅ Ví dụ:',
        'step-by-step': '🔨 Giải pháp từng bước:',
        'step1-title': 'Bước 1: Cấu trúc cơ bản',
        'step2-title': 'Bước 2: Áp dụng quy tắc',
        'step3-title': 'Bước 3: Phiên bản tối ưu',
        'test-program': '🧪 Kiểm tra chương trình:',
        'test-years': 'Thử với các năm: 2024, 1900, 2000, 2023, 2028',
        'expected-title': 'Kết quả mong đợi:',
        
        'section7-title': '7. Dự án: Tính tiền điện',
        'electricity-objective': 'Tạo hệ thống tính tiền điện theo bậc thang dựa trên mức sử dụng.',
        'pricing-structure': '💰 Cơ cấu giá:',
        'usage-range': 'Mức sử dụng (kWh)',
        'price-per-unit': 'Giá mỗi đơn vị',
        'description-header': 'Mô tả',
        'tier1-desc': 'Bậc cơ bản - giá thấp nhất',
        'tier2-desc': 'Bậc tiêu chuẩn - giá trung bình',
        'tier3-desc': 'Bậc cao cấp - giá cao nhất',
        'example-calculation': '� Ví dụ tính toán:',
        'usage-example': 'Sử dụng: 250 kWh',
        
        'section8-title': '8. Bài tập thực hành',
        'exercise2-desc': 'Tạo chương trình chuyển đổi điểm số thành điểm chữ có dấu cộng/trừ.',
        'exercise3-desc': 'Tạo máy tính thuế lũy tiến với nhiều khung thuế.',
        'homework2-subtitle': 'Thực hành logic điều kiện',
        'homework2-desc': 'Luyện tập câu lệnh điều kiện với các tình huống thực tế bao gồm dự án kiểm tra năm nhuận và tính tiền điện.',
        'hints-title': 'Gợi ý:',
        'hint1': 'BMI = cân nặng (kg) / chiều cao (m)²',
        'hint2': 'Thiếu cân: BMI < 18.5',
        'hint3': 'Bình thường: 18.5 ≤ BMI < 25',
        'hint4': 'Thừa cân: 25 ≤ BMI < 30',
        'hint5': 'Béo phì: BMI ≥ 30',
        'tier1': '0-100 đơn vị: $0.10 mỗi đơn vị',
        'tier2': '101-200 đơn vị: $0.15 mỗi đơn vị',
        'tier3': '201+ đơn vị: $0.20 mỗi đơn vị',
        'rule1': 'Búa thắng Kéo',
        'rule2': 'Kéo thắng Bao',
        'rule3': 'Bao thắng Búa',
        'next-title': '🎯 Tiếp theo là gì?',
        'next-desc': 'Trong bài học tiếp theo, chúng ta sẽ học về vòng lặp - cách lặp lại code một cách hiệu quả!',
        'next-lesson': 'Đi tới Bài 3: Vòng lặp',
        'prev-lesson': 'Trước: Giới thiệu',
        'back-course': 'Tổng quan khóa học',
        'homework2': 'Bài tập về nhà 2',
        
        // Homework Card in Lesson 2
        'homework-title': '🎯 Sẵn sàng luyện tập?',
        'homework-description': 'Kiểm tra kiến thức câu lệnh điều kiện với 15 bài tập được thiết kế kỹ lưỡng. Từ if-else cơ bản đến logic quyết định phức tạp - hoàn thiện kỹ năng từng bước!',
        'easy-exercises': 'Dễ',
        'medium-exercises': 'Trung bình',
        'hard-exercises': 'Khó',
        'start-homework': 'Bắt đầu bài tập về nhà',
        
        // Homework 2 Page Translations
        'homework2-title': 'Bài tập về nhà 2: Thực hành câu lệnh điều kiện - Code Up Your Brain',
        'homework2-meta': 'Thực hành câu lệnh điều kiện với 15 bài tập thực tế từ cơ bản đến nâng cao',
        'homework2-main-title': 'Thực hành câu lệnh điều kiện',
        'homework2-subtitle': '15 bài tập thực tế để thành thạo câu lệnh if-else, toán tử so sánh và logic ra quyết định',
        'homework-label': 'Bài tập về nhà',
        'breadcrumb-homework': 'Bài tập về nhà',
        
        // Instructions
        'instructions-title': '📋 Hướng dẫn',
        'instruction1-title': 'Lập trình bằng Python',
        'instruction1-desc': 'Viết tất cả giải pháp bằng Python 3.x với cú pháp và thụt lề chính xác',
        'instruction2-title': 'Kiểm tra code của bạn',
        'instruction2-desc': 'Kiểm tra từng chương trình với nhiều đầu vào để đảm bảo hoạt động đúng',
        'instruction3-title': 'Thêm comment',
        'instruction3-desc': 'Bao gồm comment giải thích logic và cách tiếp cận của bạn',
        'instruction4-title': 'Quản lý thời gian',
        'instruction4-desc': 'Dễ: 15-20 phút, Trung bình: 25-35 phút, Khó: 40-60 phút mỗi bài',
        
        // Progress
        'progress-title': '📊 Tiến độ của bạn',
        'easy-title': 'Bài tập dễ (1-5)',
        'easy-desc': 'Xây dựng nền tảng với câu lệnh điều kiện cơ bản',
        'medium-title': 'Bài tập trung bình (6-10)',
        'medium-desc': 'Thử thách bản thân với logic điều kiện phức tạp',
        'hard-title': 'Bài tập khó (11-15)',
        'hard-desc': 'Thành thạo logic điều kiện nâng cao và các tình huống phức tạp',
        
        // Summary
        'summary-title': '🎯 Tóm tắt & Bước tiếp theo',
        
        // Navigation
        'back-lesson': 'Về Bài 2',
        'back-course': 'Tổng quan khóa học',
        'next-lesson': 'Đến Bài 3: Vòng lặp',
        
        // Contact
        'contact-title': 'Thông tin liên hệ',
        'email-label': 'Email',
        'phone-label': 'Điện thoại',
        'address-label': 'Địa chỉ',
        'address-full': '123 Đường Công nghệ, Khu Đổi mới, Đà Nẵng, Việt Nam',
        'hours-label': 'Giờ làm việc',
        'office-hours': 'Thứ Hai - Thứ Sáu: 9:00 AM - 6:00 PM',
        
        // Exercise common labels
        'difficulty-easy': 'Dễ',
        'difficulty-medium': 'Trung bình',
        'difficulty-hard': 'Khó',
        'mark-complete': 'Đánh dấu hoàn thành',
        'problem-label': 'Bài toán:',
        'requirements-label': 'Yêu cầu:',
        'sample-io-label': 'Ví dụ Input/Output:',
        'hints-label': 'Gợi ý:',
        'solution-label': 'Giải pháp:',
        
        // Exercise 1: Age Category
        'exercise1-title': 'Phân loại độ tuổi',
        'exercise1-problem': 'Viết chương trình phân loại độ tuổi của một người thành các nhóm: Trẻ em (0-12), Thiếu niên (13-19), Người lớn (20-64), hoặc Cao tuổi (65+).',
        'exercise1-req1': 'Hỏi người dùng về độ tuổi của họ',
        'exercise1-req2': 'Kiểm tra độ tuổi không được âm',
        'exercise1-req3': 'Hiển thị nhóm tuổi phù hợp',
        'exercise1-req4': 'Thêm tin nhắn cá nhân hóa cho mỗi nhóm',
        'exercise1-sample': 'Input: 25\nOutput: Bạn là Người lớn. Độ tuổi tuyệt vời để xây dựng sự nghiệp!',
        
        // Exercise 2: Grade Letter
        'exercise2-title': 'Máy tính điểm chữ',
        'exercise2-problem': 'Chuyển đổi điểm số (0-100) thành điểm chữ (A, B, C, D, F) với trạng thái đậu/rớt.',
        'exercise2-req1': 'A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59',
        'exercise2-req2': 'Hiển thị điểm chữ và trạng thái đậu/rớt',
        'exercise2-req3': 'Kiểm tra điểm trong khoảng 0-100',
        'exercise2-req4': 'Thêm tin nhắn khuyến khích/động viên',
        
        // Exercise 3: Temperature Converter
        'exercise3-title': 'Chuyển đổi nhiệt độ',
        'exercise3-problem': 'Tạo chương trình chuyển đổi nhiệt độ giữa Celsius, Fahrenheit và Kelvin.',
        'exercise3-req1': 'Hỏi người dùng về giá trị nhiệt độ và đơn vị nguồn',
        'exercise3-req2': 'Chuyển đổi sang đơn vị đích sử dụng công thức phù hợp',
        'exercise3-req3': 'Kiểm tra đầu vào nhiệt độ (ví dụ: Kelvin không thể âm)',
        'exercise3-req4': 'Hiển thị kết quả với định dạng thích hợp',
        
        // Exercise 4: Simple Calculator  
        'exercise4-title': 'Máy tính đơn giản',
        'exercise4-problem': 'Tạo máy tính đơn giản thực hiện các phép tính số học cơ bản (+, -, *, /) dựa trên lựa chọn của người dùng.',
        'exercise4-req1': 'Hỏi hai số và một phép tính',
        'exercise4-req2': 'Hỗ trợ các phép tính +, -, *, /',
        'exercise4-req3': 'Xử lý chia cho không',
        'exercise4-req4': 'Hiển thị phép tính và kết quả rõ ràng',
        
        // Exercise 5: Day of Week Activities
        'exercise5-title': 'Hoạt động theo ngày trong tuần',
        'exercise5-problem': 'Dựa trên ngày trong tuần, đề xuất các hoạt động khác nhau (ngày làm việc vs cuối tuần).',
        'exercise5-req1': 'Chấp nhận tên ngày (Thứ Hai, Thứ Ba, v.v.)',
        'exercise5-req2': 'Phân loại thành ngày trong tuần hoặc cuối tuần',
        'exercise5-req3': 'Đề xuất các hoạt động phù hợp',
        'exercise5-req4': 'Xử lý đầu vào không phân biệt chữ hoa/thường',
        
        // Exercise 6: BMI Calculator
        'exercise6-title': 'Máy tính BMI & Sức khỏe',
        'exercise6-problem': 'Tạo máy tính BMI toàn diện với khuyến nghị sức khỏe và đánh giá rủi ro.',
        'exercise6-req1': 'Tính BMI = cân nặng(kg) / chiều cao²(m²)',
        'exercise6-req2': 'Phân loại: Thiếu cân (<18.5), Bình thường (18.5-24.9), Thừa cân (25-29.9), Béo phì (≥30)',
        'exercise6-req3': 'Cung cấp khuyến nghị sức khỏe cho mỗi nhóm',
        'exercise6-req4': 'Hỗ trợ cả đơn vị metric và imperial',
        'exercise6-req5': 'Bao gồm tin nhắn đánh giá rủi ro',
        
        // Exercise 7: Triangle Analyzer
        'exercise7-title': 'Phân tích tam giác',
        'exercise7-problem': 'Xác định ba cạnh có thể tạo thành tam giác không, và nếu có, phân loại theo cạnh và góc.',
        'exercise7-req1': 'Kiểm tra bất đẳng thức tam giác: tổng hai cạnh bất kỳ > cạnh thứ ba',
        'exercise7-req2': 'Phân loại theo cạnh: Đều, Cân, Thường',
        'exercise7-req3': 'Phân loại theo góc: Vuông, Nhọn, Tù (sử dụng định lý Pythagoras)',
        'exercise7-req4': 'Tính chu vi và diện tích',
        'exercise7-req5': 'Xử lý đầu vào không hợp lệ một cách khéo léo',
        
        // Exercise 8: Password Strength
        'exercise8-title': 'Kiểm tra độ mạnh mật khẩu',
        'exercise8-problem': 'Tạo công cụ kiểm tra độ mạnh mật khẩu đánh giá mật khẩu dựa trên nhiều tiêu chí.',
        'exercise8-req1': 'Kiểm tra độ dài (tối thiểu 8 ký tự)',
        'exercise8-req2': 'Yêu cầu chữ hoa, chữ thường, số và ký tự đặc biệt',
        'exercise8-req3': 'Kiểm tra các mẫu phổ biến và từ từ điển',
        'exercise8-req4': 'Cung cấp điểm số và đề xuất cải thiện',
        'exercise8-req5': 'Phân loại: Yếu, Trung bình, Mạnh, Rất mạnh',
        
        // Exercise 9: Tax Calculator
        'exercise9-title': 'Máy tính thuế',
        'exercise9-problem': 'Tạo máy tính thuế thông minh với khung thuế lũy tiến và các khoản khấu trừ.',
        'exercise9-req1': 'Khung thuế lũy tiến nhiều bậc',
        'exercise9-req2': 'Khấu trừ gia cảnh và người phụ thuộc',
        'exercise9-req3': 'Khấu trừ bảo hiểm và đóng góp từ thiện',
        'exercise9-req4': 'Tạo báo cáo thuế chi tiết',
        
        // Exercise 10: Rock Paper Scissors
        'exercise10-title': 'Búa Bao Kéo',
        'exercise10-problem': 'Tạo trò chơi Búa-Bao-Kéo với AI thông minh và theo dõi thống kê.',
        'exercise10-req1': 'Trò chơi người vs máy với AI thích ứng',
        'exercise10-req2': 'Theo dõi thống kê và lịch sử',
        'exercise10-req3': 'Nhiều chế độ chơi khác nhau',
        'exercise10-req4': 'Phân tích mẫu người chơi',
        
        // Exercise 11: Smart Banking System
        'exercise11-title': 'Hệ thống ngân hàng thông minh',
        'exercise11-problem': 'Mô phỏng hệ thống ngân hàng với quản lý tài khoản và giao dịch nâng cao.',
        'exercise11-req1': 'Tạo và quản lý nhiều loại tài khoản',
        'exercise11-req2': 'Xử lý giao dịch với xác thực bảo mật',
        'exercise11-req3': 'Tính lãi suất và phí dịch vụ',
        'exercise11-req4': 'Báo cáo tài chính chi tiết',
        
        // Exercise 12: Date Validator
        'exercise12-title': 'Xác thực ngày tháng',
        'exercise12-problem': 'Tạo hệ thống xác thực ngày tháng toàn diện với múi giờ và lịch.',
        'exercise12-req1': 'Xác thực định dạng ngày đa dạng',
        'exercise12-req2': 'Xử lý năm nhuận và múi giờ',
        'exercise12-req3': 'Tính toán khoảng cách ngày',
        'exercise12-req4': 'Hỗ trợ nhiều định dạng lịch',
        
        // Exercise 13: Loan Eligibility
        'exercise13-title': 'Đánh giá điều kiện vay',
        'exercise13-problem': 'Phân tích điều kiện vay dựa trên thu nhập, tín dụng và rủi ro.',
        'exercise13-req1': 'Đánh giá điểm tín dụng và lịch sử',
        'exercise13-req2': 'Tính tỷ lệ thu nhập trên nợ',
        'exercise13-req3': 'Phân tích rủi ro và đảm bảo',
        'exercise13-req4': 'Đề xuất gói vay phù hợp',
        
        // Exercise 14: Insurance Premium
        'exercise14-title': 'Tính phí bảo hiểm',
        'exercise14-problem': 'Tính phí bảo hiểm dựa trên hồ sơ rủi ro và các yếu tố cá nhân.',
        'exercise14-req1': 'Đánh giá yếu tố rủi ro cá nhân',
        'exercise14-req2': 'Tính phí theo độ tuổi và sức khỏe',
        'exercise14-req3': 'Áp dụng giảm giá và ưu đãi',
        'exercise14-req4': 'So sánh các gói bảo hiểm',
        
        // Exercise 15: Grade Management
        'exercise15-title': 'Quản lý điểm số',
        'exercise15-problem': 'Hệ thống quản lý điểm số toàn diện cho học sinh và giáo viên.',
        'exercise15-req1': 'Quản lý điểm theo môn học và kỳ',
        'exercise15-req2': 'Tính GPA và xếp hạng lớp',
        'exercise15-req3': 'Tạo báo cáo tiến độ học tập',
        'exercise15-req4': 'Cảnh báo học lực yếu và khuyến nghị',
        
        // Navigation
        'nav-back': 'Về trang khóa học',
        'nav-next': 'Tiếp: Câu lệnh điều kiện'
    },
    
    // English translations
    en: {
        // Meta and title
        'title': 'Code Up Your Brain - Python and Algorithm Course',
        'meta-description': 'High-quality Python and Algorithm course taught by experienced instructor from Zalo. Learn from basic to advanced with 100% hands-on practice method.',
        
        // Logo and navigation
        'logo-text': 'Code Up Your Brain',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-course': 'Course',
        'nav-instructor': 'Instructor',
        'nav-contact': 'Contact',
        'header-cta': 'Enroll Now',
        
        // Hero section
        'hero-title': 'Level up your thinking with<br><span class="highlight">Python & Algorithms</span>',
        'hero-description': 'High-quality course that helps you master Python programming and algorithms from basic to advanced. Taught by Senior Technical Leader with 8+ years of experience at Zalo.',
        'hero-start': 'Start Learning Now',
        'hero-preview': 'Course Preview',
        'start-course': 'Start Learning Now',
        'jump-lesson1': 'Jump to Lesson 1',
        'stat-modules': 'Modules',
        'stat-exercises': 'Exercises',
        'stat-practical': 'Hands-on',
        
        // About section
        'about-title': 'Why Choose Code Up Your Brain?',
        'about-subtitle': 'Effective learning methodology with high-quality content',
        'feature1-title': 'Develop Algorithmic Thinking',
        'feature1-desc': 'Learn to think like a professional programmer, solving problems logically and efficiently.',
        'feature2-title': '100% Hands-on Practice',
        'feature2-desc': 'Every lesson includes practical exercises from basic to advanced, reinforcing knowledge immediately.',
        'feature3-title': 'Bilingual Vietnamese - English',
        'feature3-desc': 'Content is bilingual, helping you get familiar with international technical terminology.',
        'feature4-title': 'AI Integration',
        'feature4-desc': 'Learn to build chatbots, chess AI, and other intelligent applications.',
        
        // Curriculum section
        'curriculum-title': 'Course Curriculum',
        'curriculum-subtitle': '12 modules from basic to advanced',
        'show-more': 'Show 6 more modules',
        'show-less': 'Collapse',
        
        // Module 1
        'module1-title': 'Introduction',
        'module1-desc': 'Basic programming concepts, program structure, data types and operations.',
        'module1-topic1': 'Input/Output data',
        'module1-topic2': 'Basic operations',
        
        // Module 2
        'module2-title': 'Conditional Statements',
        'module2-desc': 'Conditional structures and branching in programming.',
        'module2-topic1': 'Leap year check',
        'module2-topic2': 'Electricity bill calculation',
        
        // Module 3
        'module3-title': 'Loops',
        'module3-desc': 'Loop structures and processing techniques with loops.',
        'module3-topic1': 'Floor tile calculation',
        'module3-topic2': 'Train capacity',
        
        // Module 4
        'module4-title': 'Functions',
        'module4-desc': 'Subroutines, local/global variables and program file division.',
        'module4-topic1': 'Prime numbers',
        'module4-topic2': 'Greatest common divisor',
        
        // Module 5
        'module5-title': 'Arrays',
        'module5-desc': 'One-dimensional arrays and processing techniques on arrays.',
        'module5-topic1': 'Supermarket shopping',
        'module5-topic2': 'Employee management',
        
        // Module 6
        'module6-title': 'Matrix - 2D Arrays',
        'module6-desc': 'Two-dimensional arrays and processing techniques on 2D arrays.',
        'module6-topic1': 'Chess game',
        'module6-topic2': 'Album likes count',
        
        // Module 7
        'module7-title': 'String',
        'module7-desc': 'Strings and character types, ASCII table and string programming techniques.',
        'module7-topic1': 'Name normalization',
        'module7-topic2': 'Distinct character count',
        
        // Module 8
        'module8-title': 'Recursion',
        'module8-desc': 'Basic recursive programming techniques and Stack data structure.',
        'module8-topic1': 'Fibonacci numbers',
        'module8-topic2': 'Number system conversion',
        
        // Module 9
        'module9-title': 'Data Abstraction',
        'module9-desc': 'Struct/Class and getters/setters to create new data types.',
        'module9-topic1': 'Student information',
        'module9-topic2': '2D coordinates',
        
        // Module 10
        'module10-title': 'Sorting Algorithms',
        'module10-desc': 'Classic sorting algorithms and algorithm complexity.',
        'module10-topic1': 'Student sorting',
        'module10-topic2': 'Tower building',
        
        // Module 11
        'module11-title': 'Singly Linked List',
        'module11-desc': 'Single linked list FIFO/LIFO and basic operations.',
        'module11-topic1': 'Hotel rooms',
        'module11-topic2': 'Reversed list',
        
        // Module 12
        'module12-title': 'Trees',
        'module12-desc': 'Tree data structure and Binary Search Tree.',
        'module12-topic1': 'Highest score',
        'module12-topic2': 'Level order traversal',
        
        // Module Actions
        'start-lesson': 'Start Learning',
        
        // Instructor section
        'instructor-title': 'Instructor',
        'instructor-subtitle': 'Learn from leading expert',
        'instructor-name': 'Mr. Tri',
        'instructor-position': 'Senior Technical Leader at Zalo',
        'badge-senior': 'Senior Tech Leader',
        'badge-users': '25M+ Users',
        'badge-experience': '8+ Years',
        'edu-1': 'Graduated with honors from HCMC University of Technology',
        'edu-2': 'Published scientific paper at AUN/SEED 2018 conference',
        'exp-1': '8+ years experience in software optimization and development',
        'exp-2': 'Developed Zalo PC application with 25+ million users',
        'exp-3': 'Graduated Leadership Program - Fulbright University',
        'exp-5': 'Currently studying Business & Entrepreneurship at YUP Education, Psychology & Personal Development',
        'exp-4': 'Co-founded InnoMind Academy (2025)',
        'vision-title': 'InnoMind Vision',
        'vision-desc': '"InnoMind is an international standard academy for training International Mathematics, English, Programming & AI in Da Nang"',
        
        // CTA section
        'cta-title': 'Ready to Level Up Your Programming Skills?',
        'cta-desc': 'Join thousands of students who have succeeded with Code Up Your Brain',
        'cta-start': 'Start Learning Now',
        'cta-demo': 'Watch Free Demo',
        'cta-feature1': 'Free trial',
        'cta-feature2': '24/7 Support',
        'cta-feature3': 'Certificate of completion',
        
        // Footer
        'footer-desc': 'Level up your programming mindset with high-quality Python and Algorithm courses.',
        'footer-course': 'Courses',
        'footer-python': 'Python Basics',
        'footer-algorithm': 'Algorithms',
        'footer-data-structure': 'Data Structures',
        'footer-ai': 'AI & Machine Learning',
        'footer-support': 'Support',
        'footer-faq': 'Frequently Asked Questions',
        'footer-contact': 'Contact',
        'footer-community': 'Community',
        'footer-blog': 'Blog',
        'footer-contact-title': 'Contact',
        'footer-address': 'Da Nang, Vietnam',
        'footer-copyright': '© 2025 Code Up Your Brain. All rights reserved.',
        
        // Contact Popup
        'contact-popup-title': 'Contact Information',
        'contact-address-label': 'Address:',
        'contact-address': '136 Nguyen Mau Tai, Hoa Xuan, Cam Le, Da Nang',
        'contact-phone-label': 'Phone:',
        'contact-email-label': 'Email:',
        
        // Notifications
        'notification-enrollment': 'Redirecting to enrollment page...',
        'notification-preview': 'Loading demo video...',
        'error-general': 'An error occurred. Please try again.',
        
        // Lesson 1 Translations
        'lesson1-title': 'Lesson 1: Getting Started with Programming - Code Up Your Brain',
        'lesson1-meta': 'Learn programming fundamentals, setup VS Code, and write your first Python program',
        'lesson1-main-title': 'Getting Started with Programming',
        'lesson1-subtitle': 'Learn effective study methods, set up your development environment, and write your first Python program',
        'lesson1-duration': '45 minutes',
        'lesson1-level': 'Beginner',
        'lesson1-exercises': '4 exercises',
        
        // Breadcrumb
        'breadcrumb-home': 'Home',
        'breadcrumb-course': 'Course',
        'breadcrumb-lesson1': 'Lesson 1',
        'lesson-label': 'Lesson',
        
        // Table of Contents
        'toc-title': 'Table of Contents',
        'toc-study': '1. How to Study',
        'toc-vscode': '2. Setting up Visual Studio Code',
        'toc-first': '3. Your First Program',
        'toc-variables': '4. Variables',
        'toc-operators': '5. Operators',
        'toc-exercises': '6. Practice Exercises',
        
        // Section 1
        'section1-title': '1. How to Study',
        'objective-title': '💡 Objective:',
        'section1-objective': 'Understand the most effective way to study throughout the Code Up Your Brain course.',
        'study-principles': 'Study Principles:',
        'principle1-title': 'Content is publicly available on the website',
        'principle1-point1': '→ You can review all theory, examples, and exercises anytime.',
        'principle1-point2': '→ Don\'t worry about "missing out" when absent.',
        'principle2-title': 'Review theory and complete exercises after each session',
        'principle2-point1': '→ Programming is practice. Every line of code you write is progress.',
        'principle3-title': 'Code along with the instructor',
        'principle3-point1': '→ Don\'t just watch, open Visual Studio and type along.',
        'principle3-point2': '→ When you type by hand, your brain truly learns.',
        'programming-quote': 'Programming is not about memorizing, but understanding and doing.',
        
        // Section 2
        'section2-title': '2. Setting up Visual Studio Code (VS Code)',
        'step1-title': '⚙️ Step 1: Download and Install',
        'step1-point1': 'Visit:',
        'step1-point2': 'Choose the version suitable for your operating system (Windows / macOS / Linux).',
        'step1-point3': 'Install with default settings (Next → Next → Finish).',
        'step2-title': '⚙️ Step 2: Install Python Extension',
        'step2-point1': 'Open VS Code',
        'step2-point2': 'Press Ctrl + Shift + X to open Extensions tab',
        'step2-point3': 'Search "Python" → select Python (by Microsoft) → Install',
        'step3-title': '⚙️ Step 3: Verify Installation',
        'step3-point1': 'Open Terminal in VS Code (Ctrl + ~)',
        'step3-point2': 'Type:',
        'step3-result': 'If you see something like:',
        'step3-success': '→ You\'re ready to program! 🎉',
        
        // Section 3
        'section3-title': '3. Your First Program',
        'section3-objective': 'Run your first line of code and understand the "run program" process.',
        'first-step1': 'Step 1: Create new file',
        'first-step1-point1': 'Go to File → New File',
        'first-step1-point2': 'Save as hello.py',
        'first-step2': 'Step 2: Write the code:',
        'first-step3': 'Step 3: Press Ctrl + F5 to run',
        'first-result': 'Result:',
        'congratulations': 'Congratulations! You just wrote your first Python program.',
        
        // Section 4
        'section4-title': '4. Variables',
        'concept-title': '💡 Concept:',
        'variables-concept': 'Variables are "containers" that store data in memory. Each variable has:',
        'var-name': 'Name',
        'var-value': 'Value',
        'var-example': 'Example:',
        'naming-rules': '⚙️ Variable Naming Rules:',
        'rule1': 'Only contains letters, numbers, and underscore _',
        'rule2': 'Cannot start with a number',
        'rule3': 'Case sensitive',
        'valid-examples': '✅ Valid examples:',
        'invalid-examples': '❌ Invalid examples:',
        
        // Section 5
        'section5-title': '5. Operators',
        'arithmetic-operators': '📘 Arithmetic Operators:',
        'comparison-operators': '📘 Comparison Operators:',
        'table-operator': 'Operator',
        'table-meaning': 'Meaning',
        'table-example': 'Example',
        'table-result': 'Result',
        'op-add': 'Addition',
        'op-sub': 'Subtraction',
        'op-mul': 'Multiplication',
        'op-div': 'Division',
        'op-floor': 'Floor division',
        'op-mod': 'Modulus',
        'op-pow': 'Power',
        'op-equal': 'Equal',
        'op-not-equal': 'Not equal',
        'op-greater': 'Greater than',
        'op-less': 'Less than',
        'op-gte': 'Greater than or equal',
        'op-lte': 'Less than or equal',
        
        // Section 6
        'section6-title': '6. Practice Exercises',
        'exercise1-title': '🧩 Exercise 1 – Greet the User',
        'exercise1-desc': 'Write a program:',
        'exercise2-title': '🧩 Exercise 2 – Calculate Age',
        'exercise3-title': '🧩 Exercise 3 – Simple Calculator',
        'exercise3-desc': 'Write a program that inputs two numbers and prints the results of addition, subtraction, multiplication, and division.',
        'exercise4-title': '🧩 Exercise 4 – Small Challenge',
        'exercise4-desc': 'Write a program that asks for name and age, then prints:',
        
        // Summary
        'summary-title': '✅ Lesson 1 Summary',
        'summary1': 'Install and open VS Code',
        'summary2': 'Write your first Python program',
        'summary3': 'Understand variables & operators',
        'summary4': 'Run programs and complete exercises',
        
        // Homework
        'homework-title': 'Homework',
        'homework-subtitle': '15 Practice Exercises',
        'homework-desc': 'Complete these exercises to reinforce your understanding of variables, operators, and basic programming concepts.',
        'homework-basic': 'Basic',
        'homework-intermediate': 'Intermediate',  
        'homework-advanced': 'Advanced',
        'homework-download': 'Do Exercises',
        
        // Homework Page - Simplified
        'homework-page-title': 'Homework - Lesson 1: Getting Started with Programming',
        'homework-main-title': 'Homework - Lesson 1',
        'homework-main-desc': '15 practice exercises from basic to advanced to reinforce your Python programming knowledge',
        
        // Instructions
        'instructions-title': 'Instructions',
        'instruction-1': 'Create a new Python file for each exercise (e.g., exercise1.py, exercise2.py)',
        'instruction-2': 'Run the code to check your results',
        'instruction-3': 'No need to submit, just practice',
        'instruction-4': 'If you encounter difficulties, review the theory in Lesson 1',
        
        // Exercise Categories
        'basic-title': 'Basic Exercises (1-5)',
        'intermediate-title': 'Intermediate Exercises (6-10)',
        'advanced-title': 'Advanced Exercises (11-15)',
        
        // Exercise Titles & Descriptions
        'ex1-title': 'Exercise 1: Personal Information',
        'ex1-desc': 'Write a program that asks the user to input: Full name, Age, City',
        'ex1-format': 'Then print to screen in format:',
        
        'ex2-title': 'Exercise 2: Rectangle Perimeter and Area',
        'ex2-desc': 'Input length and width of a rectangle. Calculate and print: Perimeter, Area',
        
        'ex3-title': 'Exercise 3: Convert Celsius to Fahrenheit',
        'ex3-desc': 'Input temperature in Celsius, convert to Fahrenheit and print result.',
        'ex3-formula': 'Formula: F = C * 9/5 + 32',
        
        'ex4-title': 'Exercise 4: Calculate Tip',
        'ex4-desc': 'Input bill amount and tip percentage. Calculate and print: Tip amount, Total amount to pay',
        
        'ex5-title': 'Exercise 5: Calculate BMI',
        'ex5-desc': 'Input weight (kg) and height (m). Calculate BMI using formula: BMI = weight / (height^2)',
        
        'ex6-title': 'Exercise 6: Simple Calculator',
        'ex6-desc': 'Input 2 numbers and 1 operator (+, -, *, /, %, **). Print the result of that calculation.',
        
        'ex7-title': 'Exercise 7: Time Conversion',
        'ex7-desc': 'Input number of seconds, convert and print in format: [hours] hours [minutes] minutes [seconds] seconds',
        
        'ex8-title': 'Exercise 8: Calculate Salary',
        'ex8-desc': 'Input: Hours worked, Hourly wage. Calculate total salary (if > 40 hours, calculate overtime x1.5)',
        
        'ex9-title': 'Exercise 9: Divide Candy',
        'ex9-desc': 'Have N candies, divide equally among M people. Calculate: How many candies each person gets, How many candies are left over',
        
        'ex10-title': 'Exercise 10: Calculate Exact Age',
        'ex10-desc': 'Input birth year, calculate and print: Current age, Number of days lived (approximate)',
        
        'ex11-title': 'Exercise 11: Swap Values',
        'ex11-desc': 'Input 2 numbers a and b. Print values after swapping WITHOUT using a third variable.',
        
        'ex12-title': 'Exercise 12: Calculate Taxi Fare',
        'ex12-desc': 'Input taxi distance in km. Rules: First 2km: 15,000₫/km, From 3rd km onwards: 12,000₫/km',
        
        'ex13-title': 'Exercise 13: Money Breakdown',
        'ex13-desc': 'Input an amount of money (e.g., 234,500₫). Break down into banknotes: 500,000₫, 200,000₫, 100,000₫, 50,000₫, etc.',
        
        'ex14-title': 'Exercise 14: Calculate Bank Interest',
        'ex14-desc': 'Input: Initial deposit amount, Interest rate (%/year), Number of months deposited. Calculate amount received after deposit (interest calculated monthly).',
        
        'ex15-title': 'Exercise 15: Final Challenge',
        'ex15-desc': 'Write a store calculation program. Input: Product name, Original price, Discount percentage, VAT tax (%). Print: Price after discount, Tax to pay, Final price customer pays, Store profit (assume original price = 70% of selling price)',
        
        // Notes & Goals
        'notes-title': 'Important Notes',
        'note-1': 'Use meaningful variable names: length instead of a',
        'note-2': 'Comment your code: Explain what you\'re doing',
        'note-3': 'Test multiple cases: Try with negative numbers, zero, decimals',
        'note-4': 'Format output nicely: Use f-strings for readable results',
        'note-5': 'Basic error handling: Check for valid input',
        
        'goals-title': 'Goals',
        'goals-intro': 'After completing these 15 exercises, you will:',
        'goal-1': 'Master basic Python syntax',
        'goal-2': 'Understand variables and operators clearly',
        'goal-3': 'Know how to work with input/output',
        'goal-4': 'Have a solid foundation for Lesson 2',
        'good-luck': 'Happy learning! 💪',
        'breadcrumb-homework': 'Homework',
        'nav-back-lesson': 'Back to Lesson 1',
        'nav-course': 'Back to Course',
        
        // Authentication
        'auth-title': '🔐 Course Access',
        'auth-subtitle': 'Enter password to access course content',
        'auth-password-label': 'Password:',
        'auth-password-placeholder': 'Enter course password',
        'auth-submit': 'Access Course',
        'auth-contact': 'Contact instructor for password access',
        'auth-success': 'Access granted! Welcome to the course.',
        'auth-error': 'Incorrect password. Please try again.',
        
        // Navigation
        'homework-title': 'Bài Tập Về Nhà',
        'homework-subtitle': '15 Bài Tập Thực Hành',
        'homework-desc': 'Hoàn thành các bài tập này để củng cố kiến thức về biến, toán tử và các khái niệm lập trình cơ bản.',
        'homework-basic': 'Cơ bản',
        'homework-intermediate': 'Trung bình',  
        'homework-advanced': 'Nâng cao',
        'homework-download': 'Tải Bài Tập',
        
        // Lesson 2 Translations
        'lesson2-title': 'Lesson 2: Conditional Statements - Code Up Your Brain',
        'lesson2-meta': 'Learn if-else statements, comparison operators, and logical decision making in Python programming',
        'lesson2-main-title': 'Conditional Statements',
        'lesson2-subtitle': 'Master if-else statements, comparison operators, and logical decision making in Python',
        'breadcrumb-lesson2': 'Lesson 2',
        
        // Table of Contents - Lesson 2
        'toc-intro': '1. Introduction to Conditionals',
        'toc-comparison': '2. Comparison Operators',
        'toc-if': '3. Basic if Statements',
        'toc-if-else-elif': '4. if-else and elif',
        'toc-logical': '5. Logical Operators',
        'toc-leap-year': '6. Project: Leap Year Checker',
        'toc-electricity': '7. Project: Electricity Bill Calculator',
        'toc-examples': '8. Real-world Examples',
        
        // Lesson 2 Content
        'section1-title-lesson2': '1. Introduction to Conditionals',
        'section2-title-lesson2': '2. Comparison Operators',
        'section3-title-lesson2': '3. Basic if Statements',
        'section4-title-lesson2': '4. if-else and elif',
        'section5-title-lesson2': '5. Logical Operators',
        'section6-title-lesson2': '6. Project: Leap Year Checker',
        'section7-title-lesson2': '7. Project: Electricity Bill Calculator',
        'section8-title-lesson2': '8. Practice Exercises & Homework',
        
        'what-are-conditionals': 'What are Conditional Statements?',
        'conditionals-explanation': 'Conditional statements allow programs to make decisions based on different situations. They\'re like asking "What if?" questions in your code.',
        'everyday-example': '🏠 Everyday Example:',
        'umbrella-example': '"If it\'s raining, I\'ll bring an umbrella. Otherwise, I won\'t."',
        'flowchart-title': 'Decision Flow:',
        'flow-start': 'Start',
        'flow-condition': 'Is condition true?',
        'flow-yes': 'Yes',
        'flow-no': 'No',
        'flow-action1': 'Do this',
        'flow-action2': 'Do that',
        
        // Section 2
        'comparison-intro': 'Before we can make decisions, we need to compare values. Python provides several comparison operators:',
        'operator-header': 'Operator',
        'meaning-header': 'Meaning',
        'example-header': 'Example',
        'result-header': 'Result',
        'equal-to': 'Equal to',
        'not-equal': 'Not equal to',
        'greater-than': 'Greater than',
        'less-than': 'Less than',
        'greater-equal': 'Greater than or equal',
        'less-equal': 'Less than or equal',
        'try-it': '✏️ Try it yourself:',
        
        // Section 3
        'if-intro': 'The <code>if</code> statement is the most basic conditional statement. It executes code only when a condition is true.',
        'syntax-title': '📝 Syntax:',
        'important-title': '⚠️ Important:',
        'colon-note': 'Don\'t forget the colon (:) after the condition',
        'indent-note': 'Indent the code inside the if block (4 spaces or 1 tab)',
        'example-title': 'Example:',
        'output-title': 'Output:',
        
        // Section 4-8 Content
        'if-else-title': 'if-else Statements',
        'elif-title': 'elif Statements',
        'section6-title': '6. Project: Leap Year Checker',
        'leap-year-objective': 'Create a program that determines if a given year is a leap year using conditional statements.',
        'leap-year-rules': '📋 Leap Year Rules:',
        'rule1-desc': 'If a year is divisible by 4, it might be a leap year',
        'rule2-desc': 'If it\'s also divisible by 100, it\'s NOT a leap year',
        'rule3-desc': 'UNLESS it\'s also divisible by 400, then it IS a leap year',
        'examples-title': '✅ Examples:',
        'step-by-step': '🔨 Step-by-step Solution:',
        'step1-title': 'Step 1: Basic Structure',
        'step2-title': 'Step 2: Apply the Rules',
        'step3-title': 'Step 3: Optimized Version',
        'test-program': '🧪 Test Your Program:',
        'test-years': 'Try these years: 2024, 1900, 2000, 2023, 2028',
        'expected-title': 'Expected Results:',
        
        'section7-title': '7. Project: Electricity Bill Calculator',
        'electricity-objective': 'Create a tiered electricity billing system based on usage levels.',
        'pricing-structure': '💰 Pricing Structure:',
        'usage-range': 'Usage Range (kWh)',
        'price-per-unit': 'Price per Unit',
        'description-header': 'Description',
        'tier1-desc': 'Basic tier - lowest rate',
        'tier2-desc': 'Standard tier - medium rate',
        'tier3-desc': 'Premium tier - highest rate',
        'example-calculation': '� Example Calculation:',
        'usage-example': 'Usage: 250 kWh',
        
        'section8-title': '8. Practice Exercises',
        'exercise2-desc': 'Create a program that converts numerical scores to letter grades with plus/minus.',
        'exercise3-desc': 'Create a progressive tax calculator with multiple tax brackets.',
        'homework2-subtitle': 'Conditional Logic Practice',
        'homework2-desc': 'Practice conditional statements with real-world scenarios including the leap year and electricity bill projects.',
        'hints-title': 'Hints:',
        'hint1': 'BMI = weight (kg) / height (m)²',
        'hint2': 'Underweight: BMI < 18.5',
        'hint3': 'Normal: 18.5 ≤ BMI < 25',
        'hint4': 'Overweight: 25 ≤ BMI < 30',
        'hint5': 'Obese: BMI ≥ 30',
        'tier1': '0-100 units: $0.10 per unit',
        'tier2': '101-200 units: $0.15 per unit',
        'tier3': '201+ units: $0.20 per unit',
        'rule1': 'Rock beats Scissors',
        'rule2': 'Scissors beats Paper',
        'rule3': 'Paper beats Rock',
        'next-title': '🎯 What\'s Next?',
        'next-desc': 'In the next lesson, we\'ll learn about loops - how to repeat code efficiently!',
        'next-lesson': 'Go to Lesson 3: Loops',
        'prev-lesson': 'Previous: Introduction',
        'back-course': 'Course Overview',
        'homework2': 'Homework 2',
        
        // Homework Card in Lesson 2
        'homework-title': '🎯 Ready for Practice?',
        'homework-description': 'Test your conditional statements knowledge with 15 carefully crafted exercises. From basic if-else to complex logical decisions - perfect your skills step by step!',
        'easy-exercises': 'Easy',
        'medium-exercises': 'Medium',
        'hard-exercises': 'Hard',
        'start-homework': 'Start Homework Exercises',
        
        // Homework 2 Page Translations  
        'homework2-title': 'Homework 2: Conditional Statements Practice - Code Up Your Brain',
        'homework2-meta': 'Practice conditional statements with 15 hands-on exercises from basic to advanced level',
        'homework2-main-title': 'Conditional Statements Practice',
        'homework2-subtitle': '15 hands-on exercises to master if-else statements, comparison operators, and logical decision making',
        'homework-label': 'Homework',
        'breadcrumb-homework': 'Homework',
        
        // Instructions
        'instructions-title': '📋 Instructions',
        'instruction1-title': 'Code in Python',
        'instruction1-desc': 'Write all solutions in Python 3.x using proper syntax and indentation',
        'instruction2-title': 'Test Your Code',
        'instruction2-desc': 'Test each program with multiple inputs to ensure it works correctly',
        'instruction3-title': 'Add Comments',
        'instruction3-desc': 'Include comments explaining your logic and approach',
        'instruction4-title': 'Time Management',
        'instruction4-desc': 'Easy: 15-20 min, Medium: 25-35 min, Hard: 40-60 min per exercise',
        
        // Progress
        'progress-title': '📊 Your Progress',
        'easy-title': 'Easy Exercises (1-5)',
        'easy-desc': 'Build your foundation with basic conditional statements',
        'medium-title': 'Medium Exercises (6-10)',
        'medium-desc': 'Challenge yourself with complex conditional logic',
        'hard-title': 'Hard Exercises (11-15)',
        'hard-desc': 'Master advanced conditional logic and complex scenarios',
        
        // Summary
        'summary-title': '🎯 Summary & Next Steps',
        
        // Navigation
        'back-lesson': 'Back to Lesson 2',
        'next-lesson': 'Go to Lesson 3: Loops',
        
        // Contact
        'contact-title': 'Contact Information',
        'email-label': 'Email',
        'phone-label': 'Phone',
        'address-label': 'Address',
        'address-full': '123 Tech Street, Innovation District, Da Nang, Vietnam',
        'hours-label': 'Office Hours',
        'office-hours': 'Monday - Friday: 9:00 AM - 6:00 PM',
        
        // Exercise common labels
        'difficulty-easy': 'Easy',
        'difficulty-medium': 'Medium',
        'difficulty-hard': 'Hard',
        'mark-complete': 'Mark Complete',
        'problem-label': 'Problem:',
        'requirements-label': 'Requirements:',
        'sample-io-label': 'Sample Input/Output:',
        'hints-label': 'Hints:',
        'solution-label': 'Solution:',
        
        // Exercise 1: Age Category
        'exercise1-title': 'Age Category Classifier',
        'exercise1-problem': 'Write a program that classifies a person\'s age into categories: Child (0-12), Teen (13-19), Adult (20-64), or Senior (65+).',
        'exercise1-req1': 'Ask user for their age',
        'exercise1-req2': 'Validate that age is not negative',
        'exercise1-req3': 'Display the appropriate category',
        'exercise1-req4': 'Add a personalized message for each category',
        'exercise1-sample': 'Input: 25\nOutput: You are an Adult. Great age for building your career!',
        
        // Exercise 2: Grade Letter
        'exercise2-title': 'Grade Letter Calculator',
        'exercise2-problem': 'Convert numeric scores (0-100) to letter grades (A, B, C, D, F) with pass/fail status.',
        'exercise2-req1': 'A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59',
        'exercise2-req2': 'Show letter grade and pass/fail status',
        'exercise2-req3': 'Validate score is between 0-100',
        'exercise2-req4': 'Add encouraging/motivational messages',
        
        // Exercise 3: Temperature Converter
        'exercise3-title': 'Temperature Converter',
        'exercise3-problem': 'Create a temperature converter that converts between Celsius, Fahrenheit, and Kelvin.',
        'exercise3-req1': 'Ask user for temperature value and source unit',
        'exercise3-req2': 'Convert to the target unit using appropriate formulas',
        'exercise3-req3': 'Validate temperature inputs (e.g., Kelvin can\'t be negative)',
        'exercise3-req4': 'Display result with proper formatting',
        
        // Exercise 4: Simple Calculator
        'exercise4-title': 'Simple Calculator',
        'exercise4-problem': 'Create a simple calculator that performs basic arithmetic operations (+, -, *, /) based on user choice.',
        'exercise4-req1': 'Ask for two numbers and an operation',
        'exercise4-req2': 'Support +, -, *, / operations',
        'exercise4-req3': 'Handle division by zero',
        'exercise4-req4': 'Show the calculation and result clearly',
        
        // Exercise 5: Day of Week Activities
        'exercise5-title': 'Day of Week Activities',
        'exercise5-problem': 'Based on the day of the week, suggest different activities (work days vs weekends).',
        'exercise5-req1': 'Accept day name (Monday, Tuesday, etc.)',
        'exercise5-req2': 'Categorize as weekday or weekend',
        'exercise5-req3': 'Suggest appropriate activities',
        'exercise5-req4': 'Handle case-insensitive input',
        
        // Exercise 6: BMI Calculator
        'exercise6-title': 'BMI Health Calculator',
        'exercise6-problem': 'Create a comprehensive BMI calculator with health recommendations and risk assessments.',
        'exercise6-req1': 'Calculate BMI = weight(kg) / height²(m²)',
        'exercise6-req2': 'Categories: Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (≥30)',
        'exercise6-req3': 'Provide health recommendations for each category',
        'exercise6-req4': 'Support both metric and imperial units',
        'exercise6-req5': 'Include risk assessment messages',
        
        // Exercise 7: Triangle Analyzer
        'exercise7-title': 'Triangle Type Analyzer',
        'exercise7-problem': 'Determine if three sides can form a triangle, and if so, classify it by sides and angles.',
        'exercise7-req1': 'Validate triangle inequality: sum of any two sides > third side',
        'exercise7-req2': 'Classify by sides: Equilateral, Isosceles, Scalene',
        'exercise7-req3': 'Classify by angles: Right, Acute, Obtuse (using Pythagorean theorem)',
        'exercise7-req4': 'Calculate perimeter and area',
        'exercise7-req5': 'Handle invalid inputs gracefully',
        
        // Exercise 8: Password Strength
        'exercise8-title': 'Password Strength Validator',
        'exercise8-problem': 'Create a password strength checker that evaluates passwords based on multiple criteria.',
        'exercise8-req1': 'Check length (minimum 8 characters)',
        'exercise8-req2': 'Require uppercase, lowercase, numbers and special characters',
        'exercise8-req3': 'Check for common patterns and dictionary words',
        'exercise8-req4': 'Provide score and improvement suggestions',
        'exercise8-req5': 'Categorize: Weak, Fair, Strong, Very Strong',
        
        // Exercise 9: Tax Calculator
        'exercise9-title': 'Tax Calculator',
        'exercise9-problem': 'Create an intelligent tax calculator with progressive tax brackets and deductions.',
        'exercise9-req1': 'Progressive multi-tier tax brackets',
        'exercise9-req2': 'Personal and dependent deductions',
        'exercise9-req3': 'Insurance and charitable contribution deductions',
        'exercise9-req4': 'Generate detailed tax report',
        
        // Exercise 10: Rock Paper Scissors
        'exercise10-title': 'Rock Paper Scissors',
        'exercise10-problem': 'Create a Rock-Paper-Scissors game with intelligent AI and statistics tracking.',
        'exercise10-req1': 'Human vs AI game with adaptive AI',
        'exercise10-req2': 'Track statistics and history',
        'exercise10-req3': 'Multiple game modes',
        'exercise10-req4': 'Analyze player patterns',
        
        // Exercise 11: Smart Banking System
        'exercise11-title': 'Smart Banking System',
        'exercise11-problem': 'Simulate a banking system with advanced account management and transactions.',
        'exercise11-req1': 'Create and manage multiple account types',
        'exercise11-req2': 'Process transactions with security validation',
        'exercise11-req3': 'Calculate interest rates and service fees',
        'exercise11-req4': 'Generate detailed financial reports',
        
        // Exercise 12: Date Validator
        'exercise12-title': 'Date Validator',
        'exercise12-problem': 'Create a comprehensive date validation system with timezone and calendar support.',
        'exercise12-req1': 'Validate various date formats',
        'exercise12-req2': 'Handle leap years and timezones',
        'exercise12-req3': 'Calculate date differences',
        'exercise12-req4': 'Support multiple calendar formats',
        
        // Exercise 13: Loan Eligibility
        'exercise13-title': 'Loan Eligibility',
        'exercise13-problem': 'Analyze loan eligibility based on income, credit, and risk assessment.',
        'exercise13-req1': 'Evaluate credit score and history',
        'exercise13-req2': 'Calculate debt-to-income ratio',
        'exercise13-req3': 'Analyze risk factors and collateral',
        'exercise13-req4': 'Recommend suitable loan packages',
        
        // Exercise 14: Insurance Premium
        'exercise14-title': 'Insurance Premium',
        'exercise14-problem': 'Calculate insurance premiums based on risk profile and personal factors.',
        'exercise14-req1': 'Assess personal risk factors',
        'exercise14-req2': 'Calculate premiums by age and health',
        'exercise14-req3': 'Apply discounts and benefits',
        'exercise14-req4': 'Compare insurance packages',
        
        // Exercise 15: Grade Management
        'exercise15-title': 'Grade Management',
        'exercise15-problem': 'Comprehensive grade management system for students and teachers.',
        'exercise15-req1': 'Manage grades by subject and semester',
        'exercise15-req2': 'Calculate GPA and class ranking',
        'exercise15-req3': 'Generate academic progress reports',
        'exercise15-req4': 'Alert for poor performance and recommendations',
        
        // Navigation
        'nav-back': 'Back to Course',
        'nav-next': 'Next: Conditional Statements'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}

// Make available globally
window.translations = translations;