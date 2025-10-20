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