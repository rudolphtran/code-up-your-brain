// Lesson 1 specific translations
const lesson1Translations = {
    vi: {
        // Page meta
        'lesson1-title': 'Bài 1: Bắt đầu với Lập trình - Code Up Your Brain',
        'lesson1-meta': 'Học cơ bản lập trình, cài đặt VS Code, và viết chương trình Python đầu tiên',
        'lesson1-main-title': 'Bắt đầu với Lập trình',
        'lesson1-subtitle': 'Học phương pháp học hiệu quả, thiết lập môi trường phát triển, và viết chương trình Python đầu tiên',
        
        // Breadcrumb
        'breadcrumb-lesson1': 'Bài 1',
        
        // Table of Contents
        'toc-study': '1. Cách học',
        'toc-vscode': '2. Cài đặt Visual Studio Code',
        'toc-first': '3. Chương trình đầu tiên',
        'toc-variables': '4. Biến',
        'toc-operators': '5. Toán tử',
        
        // Section 1
        'section1-title': '1. Cách học',
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
        'summary4': 'Tự tay chạy chương trình và làm bài tập'
    },
    
    en: {
        // Page meta
        'lesson1-title': 'Lesson 1: Getting Started with Programming - Code Up Your Brain',
        'lesson1-meta': 'Learn programming fundamentals, setup VS Code, and write your first Python program',
        'lesson1-main-title': 'Getting Started with Programming',
        'lesson1-subtitle': 'Learn effective study methods, set up your development environment, and write your first Python program',
        
        // Breadcrumb
        'breadcrumb-lesson1': 'Lesson 1',
        
        // Table of Contents
        'toc-study': '1. How to Study',
        'toc-vscode': '2. Setting up Visual Studio Code',
        'toc-first': '3. Your First Program',
        'toc-variables': '4. Variables',
        'toc-operators': '5. Operators',
        
        // Section 1
        'section1-title': '1. How to Study',
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
        'variables-concept': 'A variable is a "container" to store data in memory. Each variable has:',
        'var-name': 'Name',
        'var-value': 'Value',
        'var-example': 'Example:',
        'naming-rules': '⚙️ Variable naming rules:',
        'rule1': 'Only contains letters, numbers and underscore _',
        'rule2': 'Cannot start with a number',
        'rule3': 'Case-sensitive',
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
        'op-floor': 'Floor Division',
        'op-mod': 'Modulus',
        'op-pow': 'Exponentiation',
        'op-equal': 'Equal to',
        'op-not-equal': 'Not equal',
        'op-greater': 'Greater than',
        'op-less': 'Less than',
        'op-gte': 'Greater than or equal',
        'op-lte': 'Less than or equal',
        
        // Section 6
        'section6-title': '6. Practice Exercises',
        'exercise1-title': '🧩 Exercise 1 – Greet User',
        'exercise1-desc': 'Write a program:',
        'exercise2-title': '🧩 Exercise 2 – Calculate Age',
        'exercise3-title': '🧩 Exercise 3 – Simple Calculations',
        'exercise3-desc': 'Write a program to input two numbers and print the results of addition, subtraction, multiplication, and division.',
        'exercise4-title': '🧩 Exercise 4 – Mini Challenge',
        'exercise4-desc': 'Write a program to ask for name, age and print:',
        
        // Summary
        'summary-title': '✅ Lesson 1 Summary',
        'summary1': 'Install and open VS Code',
        'summary2': 'Write first Python program',
        'summary3': 'Understand variables & operators',
        'summary4': 'Run programs and complete exercises'
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.lesson1Translations = lesson1Translations;
}
