// Lesson 5: Functions - Translations
const lesson5Translations = {
    vi: {
        // Meta và Tiêu đề
        "lesson5-title": "Bài 5: Hàm (Functions) - Code Up Your Brain",
        "lesson5-meta": "Làm chủ hàm trong Python. Học cách tạo code có thể tái sử dụng với tham số, giá trị trả về và thực hành tốt nhất.",
        "breadcrumb-lesson5": "Bài 5",
        "lesson5-main-title": "Hàm (Functions)",
        "lesson5-subtitle": "Học cách viết code có thể tái sử dụng, module hóa với hàm, tham số và giá trị trả về",
        
        // Mục lục
        "toc-intro-functions": "1. Giới thiệu về Hàm",
        "toc-creating-functions": "2. Tạo Hàm",
        "toc-parameters-arguments": "3. Tham số và Đối số",
        "toc-return-values": "4. Giá trị Trả về",
        "toc-scope": "5. Phạm vi Biến",
        "toc-advanced-topics": "6. Chủ đề Nâng cao",
        
        // Phần 1: Giới thiệu
        "section1-title-lesson5": "1. Giới thiệu về Hàm",
        "section1-intro": "Hàm là các khối code có thể tái sử dụng để thực hiện một nhiệm vụ cụ thể. Chúng giúp code của bạn được tổ chức, dễ đọc và dễ bảo trì hơn. Thay vì viết cùng một đoạn code nhiều lần, bạn có thể tạo một hàm và gọi nó bất cứ khi nào cần.",
        "why-functions": "Tại sao Sử dụng Hàm?",
        "functions-reason1": "Tái sử dụng Code: Viết một lần, dùng nhiều lần",
        "functions-reason2": "Module hóa: Chia nhỏ bài toán phức tạp thành các phần nhỏ dễ quản lý",
        "functions-reason3": "Dễ đọc: Làm cho code dễ hiểu và dễ bảo trì",
        "functions-reason4": "Kiểm thử: Kiểm tra từng hàm độc lập",
        "functions-reason5": "Hợp tác: Nhiều lập trình viên có thể làm việc trên các hàm khác nhau",
        "without-functions": "❌ Không dùng Hàm (Lặp lại)",
        "with-functions": "✅ Có dùng Hàm (Tái sử dụng)",
        
        // Phần 2: Tạo Hàm
        "section2-title-lesson5": "2. Tạo Hàm",
        "function-syntax": "Cú pháp Hàm",
        "syntax-explanation": "Trong Python, chúng ta định nghĩa hàm bằng từ khóa def theo sau là tên hàm và dấu ngoặc đơn. Khối code bên trong hàm được thụt lề.",
        "simple-function-example": "Ví dụ Hàm Đơn giản",
        "naming-conventions": "🎯 Thực hành Tốt nhất khi Đặt tên Hàm",
        "naming-rule1": "Dùng chữ thường với gạch dưới: calculate_total()",
        "naming-rule2": "Dùng tên mô tả: get_user_input() chứ không phải gui()",
        "naming-rule3": "Bắt đầu bằng động từ: print_report(), calculate_average()",
        "naming-rule4": "Tránh từ khóa Python: đừng dùng print(), sum() làm tên",
        
        // Phần 3: Tham số và Đối số
        "section3-title-lesson5": "3. Tham số và Đối số",
        "params-intro": "Tham số là các biến được liệt kê trong định nghĩa hàm. Đối số là các giá trị thực tế được truyền vào hàm khi gọi nó.",
        "single-parameter": "Tham số Đơn",
        "multiple-parameters": "Nhiều Tham số",
        "default-parameters": "Tham số Mặc định",
        "keyword-arguments": "Đối số Từ khóa",
        "common-mistakes": "⚠️ Lỗi Thường gặp",
        
        // Phần 4: Giá trị Trả về
        "section4-title-lesson5": "4. Giá trị Trả về",
        "return-intro": "Lệnh return gửi một giá trị trở lại cho người gọi. Hàm có thể trả về các giá trị được lưu trong biến hoặc sử dụng trong biểu thức.",
        "basic-return": "Lệnh Return Cơ bản",
        "return-types": "Các Kiểu Trả về Khác nhau",
        "multiple-returns": "Trả về Nhiều Giá trị",
        "early-return": "Return Sớm (Guard Clauses)",
        "return-vs-print": "💡 Return so với Print",
        
        // Phần 5: Phạm vi Biến
        "section5-title-lesson5": "5. Phạm vi Biến",
        "scope-intro": "Phạm vi xác định nơi một biến có thể được truy cập. Python có hai phạm vi chính: local (bên trong hàm) và global (bên ngoài hàm).",
        "local-scope": "Phạm vi Local",
        "global-scope": "Phạm vi Global",
        "scope-rules": "Quy tắc Phạm vi",
        "scope-best-practices": "⚠️ Thực hành Tốt nhất",
        "scope-tip1": "✅ Ưu tiên biến local và tham số",
        "scope-tip2": "✅ Trả về giá trị thay vì sửa đổi biến global",
        "scope-tip3": "⚠️ Tránh dùng từ khóa global trừ khi cần thiết",
        "scope-tip4": "✅ Dùng tên biến mô tả để tránh nhầm lẫn",
        
        // Phần 6: Chủ đề Nâng cao
        "section6-title-lesson5": "6. Chủ đề Nâng cao",
        "docstrings": "Docstrings (Chuỗi Tài liệu)",
        "docstring-intro": "Docstrings là các comment đặc biệt mô tả hàm làm gì. Chúng xuất hiện ngay sau định nghĩa hàm và dùng dấu ngoặc kép ba.",
        "lambda-functions": "Hàm Lambda (Hàm Ẩn danh)",
        "lambda-intro": "Hàm Lambda là các hàm nhỏ, một dòng không có tên. Hữu ích cho các thao tác đơn giản.",
        "recursion": "Đệ quy (Hàm Gọi chính nó)",
        "variable-args": "Số lượng Đối số Biến thiên",
        
        // Phần 7: Bài tập
        "section7-title-lesson5": "7. Bài tập Thực hành",
        "exercise1-title": "Bài tập 1: Chuyển đổi Nhiệt độ",
        "exercise1-desc": "Tạo một hàm chuyển đổi độ C sang độ F. Công thức: F = (C × 9/5) + 32",
        "exercise2-title": "Bài tập 2: Tính Điểm chữ",
        "exercise2-desc": "Tạo hàm nhận điểm số (0-100) và trả về điểm chữ: A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: dưới 60",
        "exercise3-title": "Bài tập 3: Thống kê Danh sách",
        "exercise3-desc": "Tạo hàm nhận danh sách số và trả về tổng, trung bình, giá trị lớn nhất và nhỏ nhất.",
        "exercise4-title": "Bài tập 4: Kiểm tra Mật khẩu",
        "exercise4-desc": "Tạo hàm kiểm tra mật khẩu hợp lệ. Mật khẩu hợp lệ phải: Dài ít nhất 8 ký tự, Chứa ít nhất một chữ số, Chứa ít nhất một chữ hoa",
        "exercise5-title": "Bài tập 5: Hàm Giai thừa",
        "exercise5-desc": "Tạo hàm tính giai thừa của một số. Ví dụ: factorial(5) = 5 × 4 × 3 × 2 × 1 = 120",
        "exercise6-title": "Bài tập 6: Lọc Danh sách",
        "exercise6-desc": "Tạo hàm lọc danh sách dựa trên điều kiện. Hàm nhận danh sách và chỉ trả về các số chẵn.",
        "challenge-title": "🏆 Thử thách: Kiểm tra Số Nguyên tố",
        "challenge-desc": "Tạo hàm kiểm tra một số có phải là số nguyên tố không. Số nguyên tố chỉ chia hết cho 1 và chính nó. Sau đó, tạo hàm khác tìm tất cả số nguyên tố đến một giới hạn cho trước.",
        "show-solution": "💡 Hiện Lời giải",
        
        // Điều hướng
        "prev-lesson": "Trước: Bài 4 - Vòng lặp",
        "next-lesson": "Tiếp: Sắp ra mắt"
    },
    en: {
        // Meta and Title
        "lesson5-title": "Lesson 5: Functions - Code Up Your Brain",
        "lesson5-meta": "Master functions in Python. Learn to create reusable code with parameters, return values, and best practices.",
        "breadcrumb-lesson5": "Lesson 5",
        "lesson5-main-title": "Functions",
        "lesson5-subtitle": "Learn to write reusable, modular code with functions, parameters, and return values",
        
        // Table of Contents
        "toc-intro-functions": "1. Introduction to Functions",
        "toc-creating-functions": "2. Creating Functions",
        "toc-parameters-arguments": "3. Parameters and Arguments",
        "toc-return-values": "4. Return Values",
        "toc-scope": "5. Variable Scope",
        "toc-advanced-topics": "6. Advanced Topics",
        
        // Section 1: Introduction
        "section1-title-lesson5": "1. Introduction to Functions",
        "section1-intro": "Functions are reusable blocks of code that perform a specific task. They help make your code more organized, readable, and maintainable. Instead of writing the same code multiple times, you can create a function and call it whenever needed.",
        "why-functions": "Why Use Functions?",
        "functions-reason1": "Code Reusability: Write once, use many times",
        "functions-reason2": "Modularity: Break complex problems into smaller, manageable pieces",
        "functions-reason3": "Readability: Make code easier to understand and maintain",
        "functions-reason4": "Testing: Test individual functions independently",
        "functions-reason5": "Collaboration: Multiple developers can work on different functions",
        "without-functions": "❌ Without Functions (Repetitive)",
        "with-functions": "✅ With Functions (Reusable)",
        
        // Section 2: Creating Functions
        "section2-title-lesson5": "2. Creating Functions",
        "function-syntax": "Function Syntax",
        "syntax-explanation": "In Python, we define functions using the def keyword followed by the function name and parentheses. The code block inside the function is indented.",
        "simple-function-example": "Simple Function Examples",
        "naming-conventions": "🎯 Function Naming Best Practices",
        "naming-rule1": "Use lowercase letters with underscores: calculate_total()",
        "naming-rule2": "Use descriptive names: get_user_input() not gui()",
        "naming-rule3": "Start with a verb: print_report(), calculate_average()",
        "naming-rule4": "Avoid Python keywords: don't use print(), sum() as names",
        
        // Section 3: Parameters and Arguments
        "section3-title-lesson5": "3. Parameters and Arguments",
        "params-intro": "Parameters are variables listed in the function definition. Arguments are the actual values passed to the function when calling it.",
        "single-parameter": "Single Parameter",
        "multiple-parameters": "Multiple Parameters",
        "default-parameters": "Default Parameters",
        "keyword-arguments": "Keyword Arguments",
        "common-mistakes": "⚠️ Common Mistakes",
        
        // Section 4: Return Values
        "section4-title-lesson5": "4. Return Values",
        "return-intro": "The return statement sends a value back to the caller. Functions can return values that can be stored in variables or used in expressions.",
        "basic-return": "Basic Return Statement",
        "return-types": "Different Return Types",
        "multiple-returns": "Returning Multiple Values",
        "early-return": "Early Return (Guard Clauses)",
        "return-vs-print": "💡 Return vs Print",
        
        // Section 5: Variable Scope
        "section5-title-lesson5": "5. Variable Scope",
        "scope-intro": "Scope determines where a variable can be accessed. Python has two main scopes: local (inside functions) and global (outside functions).",
        "local-scope": "Local Scope",
        "global-scope": "Global Scope",
        "scope-rules": "Scope Rules",
        "scope-best-practices": "⚠️ Best Practices",
        "scope-tip1": "✅ Prefer local variables and parameters",
        "scope-tip2": "✅ Return values instead of modifying globals",
        "scope-tip3": "⚠️ Avoid using global keyword unless necessary",
        "scope-tip4": "✅ Use descriptive variable names to avoid confusion",
        
        // Section 6: Advanced Topics
        "section6-title-lesson5": "6. Advanced Topics",
        "docstrings": "Docstrings (Documentation Strings)",
        "docstring-intro": "Docstrings are special comments that describe what a function does. They appear immediately after the function definition and use triple quotes.",
        "lambda-functions": "Lambda Functions (Anonymous Functions)",
        "lambda-intro": "Lambda functions are small, one-line functions without a name. Useful for simple operations.",
        "recursion": "Recursion (Function Calling Itself)",
        "variable-args": "Variable Number of Arguments",
        
        // Section 7: Exercises
        "section7-title-lesson5": "7. Practice Exercises",
        "exercise1-title": "Exercise 1: Temperature Converter",
        "exercise1-desc": "Create a function that converts Celsius to Fahrenheit. Formula: F = (C × 9/5) + 32",
        "exercise2-title": "Exercise 2: Grade Calculator",
        "exercise2-desc": "Create a function that takes a score (0-100) and returns a letter grade: A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60",
        "exercise3-title": "Exercise 3: List Statistics",
        "exercise3-desc": "Create a function that takes a list of numbers and returns the sum, average, maximum, and minimum values.",
        "exercise4-title": "Exercise 4: Password Validator",
        "exercise4-desc": "Create a function that checks if a password is valid. A valid password must: Be at least 8 characters long, Contain at least one digit, Contain at least one uppercase letter",
        "exercise5-title": "Exercise 5: Factorial Function",
        "exercise5-desc": "Create a function that calculates the factorial of a number. Example: factorial(5) = 5 × 4 × 3 × 2 × 1 = 120",
        "exercise6-title": "Exercise 6: List Filter",
        "exercise6-desc": "Create a function that filters a list based on a condition. The function should take a list and return only the even numbers.",
        "challenge-title": "🏆 Challenge: Prime Number Checker",
        "challenge-desc": "Create a function that checks if a number is prime. A prime number is only divisible by 1 and itself. Then, create another function that finds all prime numbers up to a given limit.",
        "show-solution": "💡 Show Solution",
        
        // Navigation
        "prev-lesson": "Previous: Lesson 4 - Loops",
        "next-lesson": "Next: Coming Soon"
    }
};

// Make translations available globally
if (typeof window !== 'undefined') {
    window.lesson5Translations = lesson5Translations;
}
