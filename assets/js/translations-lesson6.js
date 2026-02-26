// Lesson 6: Arrays - Translations
const lesson6Translations = {
    vi: {
        "lesson6-title": "Bài 6: Mảng (Arrays) - Code Up Your Brain",
        "lesson6-meta": "Học mảng một chiều trong Python: khai báo, duyệt, tìm kiếm, cập nhật và các bài tập thực hành.",
        "breadcrumb-lesson6": "Bài 6",
        "lesson6-main-title": "Mảng (Arrays)",
        "lesson6-subtitle": "Làm chủ mảng một chiều trong Python: khai báo, duyệt, cập nhật và xử lý dữ liệu hiệu quả",

        "toc-intro-arrays": "1. Array là gì?",
        "toc-create-access": "2. Khởi tạo và truy cập phần tử",
        "toc-traversal": "3. Duyệt mảng và tính toán",
        "toc-update": "4. Cập nhật mảng",
        "toc-search": "5. Tìm kiếm và thống kê",

        "section1-title-lesson6": "1. Array là gì?",
        "section1-intro-lesson6": "Trong Python, \"array\" ở mức cơ bản thường được học qua <code>list</code> (danh sách). Mảng là một tập hợp nhiều phần tử đặt trong cùng một biến, giúp lưu trữ và xử lý dữ liệu theo chỉ số.",
        "array-benefits-title": "Lợi ích khi dùng mảng",
        "array-example-compare": "Ví dụ: Không dùng mảng vs Dùng mảng",
        "array-no-list": "❌ Không dùng mảng",
        "array-with-list": "✅ Dùng mảng (list)",
        "array-benefit-1": "<strong>Gọn code:</strong> Không cần tạo nhiều biến rời rạc.",
        "array-benefit-2": "<strong>Dễ lặp:</strong> Duyệt dữ liệu bằng vòng lặp rất thuận tiện.",
        "array-benefit-3": "<strong>Dễ mở rộng:</strong> Có thể thêm, xóa, sắp xếp linh hoạt.",
        "array-benefit-4": "<strong>Ứng dụng rộng:</strong> Tính điểm, quản lý sản phẩm, thống kê dữ liệu,...",

        "section2-title-lesson6": "2. Khởi tạo và truy cập phần tử",
        "array-basic-syntax": "Cú pháp cơ bản",
        "array-note-title": "💡 Lưu ý",
        "section2-intro-lesson6": "Chỉ số trong Python bắt đầu từ <code>0</code>. Ví dụ phần tử đầu tiên là <code>numbers[0]</code>, phần tử cuối có thể truy cập bằng <code>numbers[-1]</code>.",
        "array-note-content": "Truy cập chỉ số vượt phạm vi sẽ gây lỗi <code>IndexError</code>. Luôn kiểm tra độ dài mảng khi cần.",

        "section3-title-lesson6": "3. Duyệt mảng và tính toán",
        "section3-intro-lesson6": "Có hai cách phổ biến để duyệt mảng: duyệt trực tiếp từng phần tử hoặc duyệt theo chỉ số bằng <code>range(len(array))</code>.",
        "array-example-sum-even": "Ví dụ: Tính tổng và đếm số chẵn",
        "array-example-index-loop": "Ví dụ: Duyệt theo chỉ số",

        "section4-title-lesson6": "4. Cập nhật mảng",
        "section4-intro-lesson6": "Python list hỗ trợ nhiều thao tác cập nhật dữ liệu rất tiện lợi:",
        "array-update-example": "Ví dụ cập nhật",
        "array-update-1": "<code>append(x)</code>: thêm phần tử vào cuối.",
        "array-update-2": "<code>insert(i, x)</code>: chèn phần tử tại vị trí i.",
        "array-update-3": "<code>remove(x)</code>: xóa phần tử có giá trị x đầu tiên.",
        "array-update-4": "<code>pop()</code>: xóa phần tử cuối và trả về giá trị đã xóa.",
        "array-update-5": "<code>sort()</code>: sắp xếp tăng dần tại chỗ.",

        "section5-title-lesson6": "5. Tìm kiếm và thống kê",
        "section5-intro-lesson6": "Khi làm việc với mảng, ta thường cần tìm phần tử lớn nhất/nhỏ nhất, kiểm tra sự tồn tại, hoặc đếm số lần xuất hiện của một giá trị.",
        "array-search-example": "Ví dụ tổng hợp",

        "section6-title-lesson6": "6. Bài tập thực hành",
        "lesson6-ex1-title": "Bài tập 1: Tính tổng mảng",
        "lesson6-ex1-desc": "Viết chương trình nhận vào mảng số nguyên và in ra tổng các phần tử.",
        "lesson6-ex2-title": "Bài tập 2: Tìm số lớn nhất",
        "lesson6-ex2-desc": "Cho mảng số nguyên, hãy in ra phần tử lớn nhất và vị trí của nó.",
        "lesson6-ex3-title": "Bài tập 3: Lọc số chẵn",
        "lesson6-ex3-desc": "Tạo mảng mới chỉ chứa các số chẵn từ mảng ban đầu.",
        "lesson6-challenge-title": "🏆 Thử thách: Quản lý điểm lớp học",
        "lesson6-challenge-desc": "Nhập một mảng điểm, sau đó in ra: điểm trung bình, điểm cao nhất, điểm thấp nhất, số lượng học sinh đạt từ 8.0 trở lên.",
        "lesson6-homework-desc": "Tiếp tục luyện tập xử lý mảng với nhiều bài từ dễ đến khó để củng cố tư duy thuật toán.",
        "lesson6-homework-soon": "Bài tập 6 - Sắp ra mắt",

        "prev-lesson": "Trước: Bài 5 - Hàm (Functions)",
        "next-lesson": "Tiếp: Sắp ra mắt"
    },
    en: {
        "lesson6-title": "Lesson 6: Arrays - Code Up Your Brain",
        "lesson6-meta": "Learn one-dimensional arrays in Python: initialization, traversal, search, update, and practice exercises.",
        "breadcrumb-lesson6": "Lesson 6",
        "lesson6-main-title": "Arrays",
        "lesson6-subtitle": "Master one-dimensional arrays in Python: initialize, traverse, update, and process data efficiently",

        "toc-intro-arrays": "1. What is an Array?",
        "toc-create-access": "2. Initialize and Access Elements",
        "toc-traversal": "3. Traverse and Calculate",
        "toc-update": "4. Update Arrays",
        "toc-search": "5. Search and Statistics",

        "section1-title-lesson6": "1. What is an Array?",
        "section1-intro-lesson6": "In Python, beginners usually learn arrays through <code>list</code>. An array-like list is a collection of elements stored in one variable, allowing indexed storage and processing.",
        "array-benefits-title": "Benefits of Arrays",
        "array-example-compare": "Example: Without Arrays vs With Arrays",
        "array-no-list": "❌ Without Arrays",
        "array-with-list": "✅ With Arrays (list)",
        "array-benefit-1": "<strong>Cleaner code:</strong> You don't need many separate variables.",
        "array-benefit-2": "<strong>Easy iteration:</strong> Looping through data is straightforward.",
        "array-benefit-3": "<strong>Easy scaling:</strong> Add, remove, and sort elements flexibly.",
        "array-benefit-4": "<strong>Wide usage:</strong> Grade calculation, product management, data statistics, etc.",

        "section2-title-lesson6": "2. Initialize and Access Elements",
        "array-basic-syntax": "Basic Syntax",
        "array-note-title": "💡 Note",
        "section2-intro-lesson6": "Indexes in Python start at <code>0</code>. For example, the first element is <code>numbers[0]</code>, and the last one can be accessed with <code>numbers[-1]</code>.",
        "array-note-content": "Accessing an out-of-range index raises <code>IndexError</code>. Always check array length when needed.",

        "section3-title-lesson6": "3. Traverse and Calculate",
        "section3-intro-lesson6": "There are two common ways to traverse an array: iterate values directly or iterate by index using <code>range(len(array))</code>.",
        "array-example-sum-even": "Example: Sum and Count Even Numbers",
        "array-example-index-loop": "Example: Traverse by Index",

        "section4-title-lesson6": "4. Update Arrays",
        "section4-intro-lesson6": "Python lists support many convenient update operations:",
        "array-update-example": "Update Example",
        "array-update-1": "<code>append(x)</code>: add an element to the end.",
        "array-update-2": "<code>insert(i, x)</code>: insert an element at index i.",
        "array-update-3": "<code>remove(x)</code>: remove the first element with value x.",
        "array-update-4": "<code>pop()</code>: remove and return the last element.",
        "array-update-5": "<code>sort()</code>: sort ascending in place.",

        "section5-title-lesson6": "5. Search and Statistics",
        "section5-intro-lesson6": "When working with arrays, we often find max/min values, check existence, or count occurrences.",
        "array-search-example": "Combined Example",

        "section6-title-lesson6": "6. Practice Exercises",
        "lesson6-ex1-title": "Exercise 1: Array Sum",
        "lesson6-ex1-desc": "Write a program that takes an integer array and prints the sum of all elements.",
        "lesson6-ex2-title": "Exercise 2: Find Maximum",
        "lesson6-ex2-desc": "Given an integer array, print the maximum value and its first position.",
        "lesson6-ex3-title": "Exercise 3: Filter Even Numbers",
        "lesson6-ex3-desc": "Create a new array containing only even numbers from the original array.",
        "lesson6-challenge-title": "🏆 Challenge: Class Score Management",
        "lesson6-challenge-desc": "Input an array of scores, then print: average score, highest score, lowest score, and number of students scoring at least 8.0.",
        "lesson6-homework-desc": "Continue practicing array processing with exercises from easy to hard to strengthen algorithmic thinking.",
        "lesson6-homework-soon": "Homework 6 - Coming Soon",

        "prev-lesson": "Previous: Lesson 5 - Functions",
        "next-lesson": "Next: Coming Soon"
    }
};

if (typeof window !== 'undefined') {
    window.lesson6Translations = lesson6Translations;
}
