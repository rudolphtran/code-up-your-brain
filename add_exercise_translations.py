#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to automatically add translation keys to homework exercises
"""

import re
import json
import sys

# Set UTF-8 encoding for output
sys.stdout.reconfigure(encoding='utf-8')

# Danh sách tất cả các bài tập với nội dung tiếng Việt
exercises = [
    {
        "id": 3,
        "title_en": "Temperature Converter",
        "title_vi": "Chuyển đổi nhiệt độ",
        "problem_en": "Create a temperature converter that converts between Celsius, Fahrenheit, and Kelvin.",
        "problem_vi": "Tạo chương trình chuyển đổi nhiệt độ giữa Celsius, Fahrenheit và Kelvin.",
        "requirements_en": [
            "Ask user for temperature value and source unit",
            "Convert to the target unit using appropriate formulas",
            "Validate temperature inputs (e.g., Kelvin can't be negative)",
            "Display result with proper formatting"
        ],
        "requirements_vi": [
            "Hỏi người dùng về giá trị nhiệt độ và đơn vị nguồn",
            "Chuyển đổi sang đơn vị đích sử dụng công thức phù hợp",
            "Kiểm tra đầu vào nhiệt độ (ví dụ: Kelvin không thể âm)",
            "Hiển thị kết quả với định dạng thích hợp"
        ]
    },
    {
        "id": 4,
        "title_en": "Number Type Checker",
        "title_vi": "Kiểm tra loại số",
        "problem_en": "Determine if a number is positive, negative, zero, even, or odd.",
        "problem_vi": "Xác định một số là dương, âm, bằng không, chẵn hay lẻ.",
        "requirements_en": [
            "Check if number is positive, negative, or zero",
            "Check if number is even or odd (for non-zero numbers)",
            "Handle decimal numbers appropriately",
            "Provide clear, descriptive output"
        ],
        "requirements_vi": [
            "Kiểm tra số là dương, âm, hay bằng không",
            "Kiểm tra số chẵn hay lẻ (cho số khác không)",
            "Xử lý số thập phân một cách thích hợp",
            "Cung cấp đầu ra rõ ràng, mô tả"
        ]
    },
    {
        "id": 5,
        "title_en": "Simple Calculator",
        "title_vi": "Máy tính đơn giản",
        "problem_en": "Create a basic calculator that performs arithmetic operations with error handling.",
        "problem_vi": "Tạo máy tính cơ bản thực hiện các phép tính số học với xử lý lỗi.",
        "requirements_en": [
            "Support addition, subtraction, multiplication, division",
            "Handle division by zero error",
            "Validate operator input",
            "Display results with appropriate precision"
        ],
        "requirements_vi": [
            "Hỗ trợ cộng, trừ, nhân, chia",
            "Xử lý lỗi chia cho không",
            "Kiểm tra đầu vào toán tử",
            "Hiển thị kết quả với độ chính xác thích hợp"
        ]
    },
    # Medium exercises (6-10)
    {
        "id": 6,
        "title_en": "BMI Calculator & Health Advisor",
        "title_vi": "Máy tính BMI & Tư vấn sức khỏe",
        "problem_en": "Calculate BMI and provide health recommendations based on the result.",
        "problem_vi": "Tính BMI và đưa ra khuyến nghị sức khỏe dựa trên kết quả.",
        "requirements_en": [
            "Calculate BMI using weight (kg) and height (m)",
            "Categorize: Underweight, Normal, Overweight, Obese",
            "Provide personalized health advice for each category",
            "Include recommendations for improvement"
        ],
        "requirements_vi": [
            "Tính BMI sử dụng cân nặng (kg) và chiều cao (m)",
            "Phân loại: Thiếu cân, Bình thường, Thừa cân, Béo phì",
            "Cung cấp lời khuyên sức khỏe cá nhân hóa cho mỗi nhóm",
            "Bao gồm khuyến nghị để cải thiện"
        ]
    },
    {
        "id": 7,
        "title_en": "Electricity Bill Calculator",
        "title_vi": "Máy tính hóa đơn điện",
        "problem_en": "Calculate electricity bill using tiered pricing system.",
        "problem_vi": "Tính hóa đơn tiền điện sử dụng hệ thống giá bậc thang.",
        "requirements_en": [
            "Tier 1: 0-100 units at $0.10/unit",
            "Tier 2: 101-200 units at $0.15/unit", 
            "Tier 3: 201+ units at $0.20/unit",
            "Calculate total bill with breakdown by tier"
        ],
        "requirements_vi": [
            "Bậc 1: 0-100 số điện với giá 2.500đ/số",
            "Bậc 2: 101-200 số điện với giá 3.000đ/số",
            "Bậc 3: 201+ số điện với giá 3.500đ/số",
            "Tính tổng hóa đơn với chi tiết theo từng bậc"
        ]
    },
    {
        "id": 8,
        "title_en": "Leap Year & Date Validator",
        "title_vi": "Kiểm tra năm nhuận & Xác thực ngày",
        "problem_en": "Check if a year is a leap year and validate dates.",
        "problem_vi": "Kiểm tra một năm có phải năm nhuận và xác thực ngày tháng.",
        "requirements_en": [
            "Determine if a year is a leap year",
            "Validate day/month/year combinations",
            "Handle different month lengths",
            "Provide clear feedback for invalid dates"
        ],
        "requirements_vi": [
            "Xác định một năm có phải năm nhuận",
            "Kiểm tra tổ hợp ngày/tháng/năm",
            "Xử lý độ dài tháng khác nhau",
            "Cung cấp phản hồi rõ ràng cho ngày không hợp lệ"
        ]
    },
    {
        "id": 9,
        "title_en": "Rock Paper Scissors Game",
        "title_vi": "Trò chơi Búa Bao Kéo",
        "problem_en": "Create a rock-paper-scissors game with computer opponent.",
        "problem_vi": "Tạo trò chơi búa-bao-kéo với đối thủ máy tính.",
        "requirements_en": [
            "Player vs Computer gameplay",
            "Random computer choice generation",
            "Implement all winning/losing conditions",
            "Keep score and declare overall winner"
        ],
        "requirements_vi": [
            "Trò chơi Người chơi vs Máy tính",
            "Tạo lựa chọn ngẫu nhiên cho máy tính",
            "Triển khai tất cả điều kiện thắng/thua",
            "Ghi điểm và tuyên bố người thắng cuộc chung"
        ]
    },
    {
        "id": 10,
        "title_en": "Student Grade Analyzer",
        "title_vi": "Phân tích điểm số học sinh",
        "problem_en": "Analyze student performance across multiple subjects.",
        "problem_vi": "Phân tích hiệu suất học sinh qua nhiều môn học.",
        "requirements_en": [
            "Input grades for multiple subjects",
            "Calculate average grade",
            "Determine pass/fail status for each subject",
            "Provide overall performance summary"
        ],
        "requirements_vi": [
            "Nhập điểm cho nhiều môn học",
            "Tính điểm trung bình",
            "Xác định trạng thái đậu/rớt cho từng môn",
            "Cung cấp tóm tắt hiệu suất tổng thể"
        ]
    },
    # Hard exercises (11-15)
    {
        "id": 11,
        "title_en": "Advanced Tax Calculator",
        "title_vi": "Máy tính thuế nâng cao",
        "problem_en": "Calculate income tax using progressive tax brackets with deductions.",
        "problem_vi": "Tính thuế thu nhập sử dụng khung thuế lũy tiến với các khoản khấu trừ.",
        "requirements_en": [
            "Multiple tax brackets with different rates",
            "Standard and itemized deductions",
            "Tax credits and exemptions",
            "Generate detailed tax breakdown report"
        ],
        "requirements_vi": [
            "Nhiều khung thuế với mức thuế khác nhau",
            "Khấu trừ tiêu chuẩn và chi tiết",
            "Tín dụng thuế và miễn trừ",
            "Tạo báo cáo chi tiết về thuế"
        ]
    },
    {
        "id": 12,
        "title_en": "Banking System Simulator",
        "title_vi": "Mô phỏng hệ thống ngân hàng",
        "problem_en": "Simulate banking operations with account management and transaction validation.",
        "problem_vi": "Mô phỏng các hoạt động ngân hàng với quản lý tài khoản và xác thực giao dịch.",
        "requirements_en": [
            "Account creation with validation",
            "Deposit, withdrawal, and balance inquiry",
            "Overdraft protection and fees",
            "Transaction history and receipts"
        ],
        "requirements_vi": [
            "Tạo tài khoản với xác thực",
            "Gửi tiền, rút tiền và kiểm tra số dư",
            "Bảo vệ thấu chi và phí",
            "Lịch sử giao dịch và biên lai"
        ]
    },
    {
        "id": 13,
        "title_en": "Weather Condition Analyzer",
        "title_vi": "Phân tích điều kiện thời tiết",
        "problem_en": "Analyze weather data and provide clothing/activity recommendations.",
        "problem_vi": "Phân tích dữ liệu thời tiết và đưa ra khuyến nghị về quần áo/hoạt động.",
        "requirements_en": [
            "Input temperature, humidity, wind speed, precipitation",
            "Categorize weather conditions",
            "Recommend appropriate clothing",
            "Suggest suitable outdoor activities"
        ],
        "requirements_vi": [
            "Nhập nhiệt độ, độ ẩm, tốc độ gió, lượng mưa",
            "Phân loại điều kiện thời tiết",
            "Khuyến nghị quần áo phù hợp",
            "Đề xuất hoạt động ngoài trời thích hợp"
        ]
    },
    {
        "id": 14,
        "title_en": "Course Grade Calculator",
        "title_vi": "Máy tính điểm khóa học",
        "problem_en": "Calculate final course grades with weighted assignments and curve options.",
        "problem_vi": "Tính điểm cuối khóa học với bài tập có trọng số và tùy chọn cong điểm.",
        "requirements_en": [
            "Weighted categories (homework, exams, projects)",
            "Bonus points and extra credit",
            "Grade curve calculations",
            "Detailed grade breakdown and GPA impact"
        ],
        "requirements_vi": [
            "Các hạng mục có trọng số (bài tập, thi, dự án)",
            "Điểm thưởng và tín chỉ bổ sung",
            "Tính toán cong điểm",
            "Chi tiết phân tích điểm và tác động GPA"
        ]
    },
    {
        "id": 15,
        "title_en": "Investment Portfolio Analyzer",
        "title_vi": "Phân tích danh mục đầu tư",
        "problem_en": "Analyze investment portfolio performance and risk assessment.",
        "problem_vi": "Phân tích hiệu suất danh mục đầu tư và đánh giá rủi ro.",
        "requirements_en": [
            "Multiple investment types (stocks, bonds, crypto)",
            "Risk level assessment based on portfolio composition",
            "Return on investment calculations",
            "Diversification recommendations"
        ],
        "requirements_vi": [
            "Nhiều loại đầu tư (cổ phiếu, trái phiếu, crypto)",
            "Đánh giá mức độ rủi ro dựa trên cấu thành danh mục",
            "Tính toán lợi nhuận đầu tư",
            "Khuyến nghị đa dạng hóa"
        ]
    }
]

def generate_translation_keys():
    """Generate translation keys for all exercises"""
    vi_keys = []
    en_keys = []
    
    for exercise in exercises:
        exercise_id = exercise["id"]
        
        # Title
        vi_keys.append(f"        'exercise{exercise_id}-title': '{exercise['title_vi']}',")
        en_keys.append(f"        'exercise{exercise_id}-title': '{exercise['title_en']}',")
        
        # Problem
        vi_keys.append(f"        'exercise{exercise_id}-problem': '{exercise['problem_vi']}',")
        en_keys.append(f"        'exercise{exercise_id}-problem': '{exercise['problem_en']}',")
        
        # Requirements
        for i, req in enumerate(exercise['requirements_vi'], 1):
            vi_keys.append(f"        'exercise{exercise_id}-req{i}': '{req}',")
        
        for i, req in enumerate(exercise['requirements_en'], 1):
            en_keys.append(f"        'exercise{exercise_id}-req{i}': '{req}',")
        
        vi_keys.append("")  # Empty line for readability
        en_keys.append("")
    
    return vi_keys, en_keys

def generate_html_updates():
    """Generate HTML updates for exercises"""
    html_updates = []
    
    for exercise in exercises:
        exercise_id = exercise["id"]
        difficulty = "easy" if exercise_id <= 5 else "medium" if exercise_id <= 10 else "hard"
        difficulty_label = {"easy": "Easy", "medium": "Medium", "hard": "Hard"}[difficulty]
        
        html_updates.append(f"""
                <!-- Exercise {exercise_id}: {exercise['title_en']} -->
                <div class="exercise-card {difficulty}" data-exercise="{exercise_id}">
                    <div class="exercise-header">
                        <h3><span class="exercise-number">{exercise_id}.</span> <span data-lang-key="exercise{exercise_id}-title">{exercise['title_en']}</span></h3>
                        <div class="exercise-meta">
                            <span class="difficulty" data-lang-key="difficulty-{difficulty}">{difficulty_label}</span>
                            <span class="time">⏱️ {"15-20" if difficulty == "easy" else "25-35" if difficulty == "medium" else "40-60"} min</span>
                            <button class="complete-btn" onclick="toggleComplete({exercise_id})">
                                <i class="fas fa-check"></i> <span data-lang-key="mark-complete">Mark Complete</span>
                            </button>
                        </div>
                    </div>
                    <div class="exercise-content">
                        <div class="problem-statement">
                            <h4 data-lang-key="problem-label">Problem:</h4>
                            <p data-lang-key="exercise{exercise_id}-problem">{exercise['problem_en']}</p>
                        </div>
                        <div class="requirements">
                            <h4 data-lang-key="requirements-label">Requirements:</h4>
                            <ul>""")
        
        for i, req in enumerate(exercise['requirements_en'], 1):
            html_updates.append(f'                                <li data-lang-key="exercise{exercise_id}-req{i}">{req}</li>')
        
        html_updates.append("""                            </ul>
                        </div>
                        <div class="sample-io">
                            <h4 data-lang-key="sample-io-label">Sample Input/Output:</h4>
                            <pre><code>// Add your sample here</code></pre>
                        </div>
                        <div class="hints-solution">
                            <details>
                                <summary data-lang-key="hints-label">💡 Hints</summary>
                                <p>Add hints here...</p>
                            </details>
                        </div>
                    </div>
                </div>
""")
    
    return html_updates

if __name__ == "__main__":
    print("Generating translation keys...")
    vi_keys, en_keys = generate_translation_keys()
    
    print("\n=== VIETNAMESE KEYS ===")
    for key in vi_keys:
        print(key)
    
    print("\n=== ENGLISH KEYS ===")
    for key in en_keys:
        print(key)
    
    print("\n=== HTML STRUCTURE EXAMPLES ===")
    html_updates = generate_html_updates()
    for line in html_updates[:50]:  # Show first 50 lines as example
        print(line)
    
    print("\nScript completed! Copy the keys above to translations.js")