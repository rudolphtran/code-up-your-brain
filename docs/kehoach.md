# Kế hoạch chương trình học — Code Up Your Brain (Buổi 1–48)

> Tài liệu tổng quan — dùng để duyệt/chỉnh trước khi soạn nội dung chi tiết từng buổi (bài giảng, bài tập, đề mock).

## Bối cảnh

- Lớp đã học xong 24 buổi, hoàn thành chương 6 (Array, đã gộp thêm String).
- Học viên: cuối tiểu học – đầu THCS (~10–12 tuổi, lớp 5–7).
- Mục tiêu (giai đoạn tiếp theo): luyện thi **HSG Tin học cấp trường/quận/tỉnh**.
- Nhịp độ: 2 buổi/tuần xuyên suốt.
- Buổi 25–27: hoàn thiện Matrix (mảng 2 chiều). Buổi 28–35 (1 tháng kế tiếp): **chương ôn tập tổng hợp** — mỗi buổi 3 bài kết hợp nhiều chủ đề đã học (IO, điều kiện, vòng lặp, hàm, mảng 1 chiều/xâu, ma trận), độ khó tăng dần theo phong cách đề thi HSG thật. Từ buổi 36 trở đi (OOP, error handling, thuật toán, giải đề...): **chưa lên kế hoạch chi tiết**, sẽ cập nhật sau.

## Phần 1 — Kế hoạch 24 buổi đầu (Buổi 1–24)

> Tổng hợp lại từ nội dung đã có trên site (`lessons/lesson1.html` → `lesson6.html`, `docs/inputdata.ini`). Ranh giới buổi cụ thể trong từng chương không được ghi lại riêng — bảng dưới tổng hợp theo chương, không phải theo từng buổi lẻ.

| Chương | Nội dung chính | Bài toán ứng dụng |
|---|---|---|
| 1. Introduction | Khái niệm lập trình cơ bản, cấu trúc chương trình, kiểu dữ liệu, phép toán số học/luận lý, làm quen hệ thống chấm bài | Nhập xuất dữ liệu, các phép toán số học cơ bản |
| 2. Conditional Statements | Cấu trúc điều kiện, rẽ nhánh (if/elif/else) | Kiểm tra năm nhuận, tính tiền điện theo mức sử dụng |
| 3. Flowcharts | Ký hiệu flowchart, kỹ thuật vẽ sơ đồ thuật toán trước khi viết code | Vẽ sơ đồ thuật toán cho các bài toán đã học |
| 4. Loops | Vòng lặp for/while, nested loops, các kỹ thuật xử lý với vòng lặp | Tính số gạch cần lát sàn nhà, tính sức chứa của một chuyến tàu điện |
| 5. Functions | Chương trình con, biến cục bộ/toàn cục, chia file chương trình | Kiểm tra số nguyên tố, tìm ước chung lớn nhất (UCLN) của 2 số |
| 6. Arrays + String | Mảng 1 chiều (khai báo, truy xuất, kỹ thuật xử lý), cách tìm lỗi sai nhanh; chuỗi và ký tự, bảng mã ASCII | Mua hàng trong siêu thị, quản lý mã số nhân viên, tìm bài post nhiều like nhất, chuẩn hóa tên, đếm ký tự phân biệt |

## Phần 2 — Kế hoạch buổi 25 trở đi

> Buổi 36 trở đi (OOP, error handling, thuật toán, giải đề...) sẽ được lên kế hoạch chi tiết sau — phần dưới đây chỉ chốt đến buổi 35.

### Giai đoạn 1 — Matrix (Buổi 25–27)

| Buổi | Chủ đề | Mục tiêu |
|---|---|---|
| 25 | Matrix – Mảng 2 chiều (nhập/xuất, duyệt) | Nắm cú pháp mảng 2D, duyệt hàng/cột, các bài toán tổng/max/min cơ bản |
| 26 | Matrix – Kỹ thuật xử lý nâng cao | Ma trận vuông, đường chéo, xoay ma trận, ma trận xoắn ốc — dạng hay gặp trong đề thi |
| 27 | Matrix – Luyện tập & bài toán ứng dụng | Áp dụng mảng 2D vào bài toán mô phỏng (lưới, bảng điểm, cờ vua...) |

### Giai đoạn ôn tập tổng hợp (Buổi 28–35)

Mỗi buổi gồm 3 bài tập **tổng hợp nhiều chủ đề đã học** (không tách riêng theo từng chủ đề), độ khó tăng dần qua từng buổi, bám sát phong cách đề thi HSG Tin học THCS / Tin học trẻ Bảng B thật: đọc input bằng `input()`, in output đúng format yêu cầu, không cần ngữ cảnh đời sống hoa mỹ.

Ký hiệu chủ đề: **IO** = Nhập xuất & phép toán cơ bản · **DK** = Điều kiện/rẽ nhánh · **VL** = Vòng lặp · **HS** = Hàm/chương trình con · **M1** = Mảng 1 chiều & xâu ký tự · **M2** = Ma trận/mảng 2 chiều.

| Buổi | Chủ đề chính buổi | Bài 1 — Dễ | Bài 2 — Trung bình | Bài 3 — Khó |
|---|---|---|---|---|
| 28 | Khởi động: IO/DK/VL/HS | IO+DK: phân loại số nhập vào theo điều kiện | DK+VL: đếm số thoả điều kiện trong dãy nhập liên tục (chưa dùng mảng) | VL+HS: hàm kiểm tra tính chất số (số hoàn hảo/Armstrong) dùng vòng lặp |
| 29 | Nhập môn mảng 1 chiều | M1+IO: nhập mảng, tính tổng/trung bình | M1+DK: lọc & đếm phần tử thoả điều kiện trong mảng | M1+HS: hàm tìm phần tử xuất hiện nhiều nhất trong mảng |
| 30 | Xâu ký tự kết hợp | M1(xâu)+DK: kiểm tra chuỗi đối xứng | M1(xâu)+VL: đếm ký tự, chuẩn hoá chuỗi (bỏ khoảng trắng thừa) | M1(xâu)+HS: hàm tách câu thành mảng từ, đếm số từ phân biệt |
| 31 | Nhập môn ma trận kết hợp | M2+IO: nhập ma trận, tính tổng phần tử | M2+DK+VL: đếm/tìm phần tử thoả điều kiện theo hàng/cột | M2+HS: hàm tính tổng đường chéo / xoay ma trận 90° |
| 32 | Tổng hợp mảng 1D + 2D | M1+M2: chuyển mảng 1D thành ma trận theo quy tắc | M2+M1(xâu): ma trận ký tự (bảng chữ/bàn cờ), xử lý theo hàng/cột | M2+HS+VL: hàm kiểm tra ma trận vuông đối xứng qua đường chéo |
| 33 | Tổng hợp hàm đa chủ đề | HS+DK+VL: hàm lọc số nguyên tố trong dãy nhập | HS+M1: hàm tính UCLN áp dụng lên từng cặp phần tử liên tiếp trong mảng | HS+M1+M2: hàm nhận ma trận, trả mảng tổng mỗi hàng, tìm hàng lớn nhất |
| 34 | Đa chủ đề (4+), độ khó cao | VL+DK+M1: mô phỏng nhỏ (quản lý kho hàng, nhập đến khi gặp lệnh dừng) | M1+M2+HS: hàm chuyển đổi mảng ↔ ma trận có điều kiện hợp lệ | Tổng hợp cả 6 chủ đề: mô phỏng lưới/bàn cờ dùng hàm, vòng lặp lồng, điều kiện, ma trận + mảng phụ trợ |
| 35 | Ôn tổng hợp cuối, sát đề thi thật | M1+VL+DK: dạng đề thi thật — đếm dãy con thoả điều kiện | M2+HS+VL: bài ma trận có thuật toán con (đường đi đơn giản/xoắn ốc) | Tổng hợp toàn bộ: mô phỏng 1 bài thi hoàn chỉnh, input/output chuẩn hoá |

## Việc chưa làm / cần xác nhận tiếp

- [x] Outline chương ôn tập tổng hợp buổi 28–35 (chủ đề kết hợp + 3 bài mỗi buổi) — đã chốt ở Phần 2 phía trên.
- [ ] Soạn nội dung chi tiết (đề bài đầy đủ, input/output mẫu) cho 24 bài của buổi 28–35, sau đó quyết định viết thẳng thành HTML (`lessons/reviewN.html` hay tên khác) theo cấu trúc site hiện tại hay dùng tài liệu ngoài trước.
- [ ] Lên kế hoạch lại phần từ buổi 36 trở đi (OOP, error handling, thuật toán, giải đề, mock test...) — phần cũ đã bị lược bỏ, cần soạn lại từ đầu.
