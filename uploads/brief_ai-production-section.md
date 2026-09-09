# Brief — Section "AI Production" cho portfolio site

## Bối cảnh

Site portfolio cá nhân của Khai (Daniel) Tran — motion graphic designer / video engineer / studio lead. Phong cách hiện tại: sci-fi HUD, nền gần đen, accent teal, chữ label viết hoa có letter-spacing, card có ngoặc góc kiểu khung ngắm.

Các section đang có, theo thứ tự nav:
`ABOUT` → `PROBLEM SOLVING` → `ALSO BUILT` → `TOOLSET` → `REEL` → `WORK` → `CONTACT`

Cần thêm một section mới: **AI PRODUCTION** — trưng bày các project video sản xuất bằng AI.

Nội dung sẽ có:
- **SoundPEATS AIR6 HS** — TVC 15s, cinematic 16:9, đã hoàn thành. Có video final, treatment deck 31 slide, 18 still.
- **AYN Odin 3** — TVC cinematic 16:9 cho máy chơi game, đang làm.
- Còn 1–2 project cá nhân nữa trong tương lai gần, chưa xác định nội dung.

Quyết định quan trọng nhất đã chốt: **đây là gallery, KHÔNG phải case study.** Đã có 3 case study ở section PROBLEM SOLVING rồi. Section này chỉ trưng bày, không kể chuyện.

---

## Nguyên tắc

1. **Gallery, không phải case study.** Không headline kể chuyện, không cấu trúc problem → solution, không dải pipeline, không before/after, không danh sách "bài học rút ra". Chỉ có video, ảnh và metadata ngắn.

2. **Không tự định nghĩa hệ visual mới.** Lấy đúng token đang dùng ở section `PROBLEM SOLVING`: màu nền, màu accent, kiểu viền card, ngoặc góc, badge trạng thái, font, letter-spacing của label. Section mới phải nhìn như vốn đã ở đó.

3. **Layout phải chạy được với 2, 3 hoặc 4 project.** Không hard-code số lượng. Thêm project thứ tư chỉ là thêm một item vào mảng dữ liệu, không phải sửa layout.

4. **Dòng disclaimer là bắt buộc và không được làm mờ đi.** Mọi project trong section đều phải có. Cùng cỡ chữ, cùng độ tương phản với các dòng metadata khác. Không giảm opacity, không thu nhỏ, không đẩy xuống chân trang.

5. **Section này không được lấn át section WORK.** WORK là client thật (ASUS, BRÜMATE, BIC) và vẫn nặng ký hơn. AI PRODUCTION là bằng chứng về cách làm việc, không phải phần chiếm nhiều đất nhất trang.

6. **Chữ hiển thị dùng caps + letter-spacing** giống các label hiện có trên site (`// AI PRODUCTION`, `SHIPPED`, `IN PROGRESS`).

---

## Việc cần làm

### 1. Section AI PRODUCTION — chế độ lưới

Đặt sau section `WORK` (*vị trí này là đề xuất — xác nhận trước khi build*). Thêm mục `AI PRODUCTION` vào nav bar theo đúng vị trí đó.

Cấu trúc:
- Label nhỏ phía trên: `// AI PRODUCTION`
- Headline dùng đúng style headline của các section khác
- Lưới project: **1 card featured lớn bên trái + các card nhỏ xếp dọc bên phải**
  - Card featured: thumbnail 16:9 lớn, tên project, dòng metadata ngắn
  - Card nhỏ: thumbnail 16:9 nhỏ bên trái, tên project + badge trạng thái bên phải
  - Card thứ tư trở đi rơi xuống hàng dưới, không phá layout
- Card featured là project mạnh nhất, không nhất thiết là mới nhất. Để featured cấu hình được bằng một cờ trong dữ liệu, không phải luôn lấy phần tử đầu mảng.

Badge trạng thái, dùng lại đúng component/style badge `SHIPPED` ở section PROBLEM SOLVING:
- `SHIPPED` — project đã xong
- `IN PROGRESS` — đang làm

Ở lưới ngoài **không** hiện dòng disclaimer. Chỉ tên project + badge + metadata một dòng.

### 2. Detail view — lightbox

Click vào card thì mở lightbox đè lên trang (không phải điều hướng sang trang con). Đóng lightbox thì về đúng vị trí lưới cũ.

Bố cục bên trong:

- **Video final** — khối 16:9 lớn, chiếm khoảng 60% chiều ngang, canh trái
- **Khối thông tin** — cột bên phải video:
  - Tên project
  - Một dòng loại project (ví dụ `TVC 15s · CONCEPT`)
  - Đường kẻ ngăn
  - Các dòng metadata: `AI-DIRECTED` / `18 SHOTS · 5 LOCATIONS` / dòng disclaimer
- **Dải deck** — nhãn `DECK`, 4–5 thumbnail trang deck xếp ngang, click phóng to
- **Lưới still** — nhãn `STILLS`, 6–8 khung 16:9 xếp lưới 4 cột, click phóng to

Không có phần nào khác. Không mô tả dài, không tiêu đề phụ, không nút "read more".

### 3. Nội dung text cụ thể

**SoundPEATS AIR6 HS** (featured, `SHIPPED`)
```
TVC 15s · CONCEPT
AI-DIRECTED
18 SHOTS · 5 LOCATIONS
PERSONAL PROJECT — NOT COMMISSIONED BY SOUNDPEATS
```

**AYN Odin 3** (`IN PROGRESS`)
```
TVC · CONCEPT
AI-DIRECTED
PERSONAL PROJECT — NOT COMMISSIONED BY AYN
```

Mẫu disclaimer cho project sau: `PERSONAL PROJECT — NOT COMMISSIONED BY <TÊN BRAND>`. Luôn ghi đích danh tên brand, không dùng "the brand".

### 4. Nút "Watch reel" trong hero

Việc riêng, không thuộc section trên. Thêm một nút `WATCH REEL` trong khu vực hero ở đầu trang, cuộn xuống section `REEL` khi click. Thứ tự nav giữ nguyên, không đảo.

---

## Trường hợp cần xử lý

- **Chỉ có 1 project**: lưới không được vỡ hay để lỗ trống. Card featured chiếm full chiều ngang.
- **Có 4 project trở lên**: card thứ tư xuống hàng dưới, giữ nguyên kích thước card nhỏ.
- **Project chưa có video final** (đang `IN PROGRESS`): thumbnail dùng một still. Trong detail view, khối video thay bằng một still lớn 16:9 và không hiện nút play.
- **Project chưa có ảnh deck hoặc still**: ẩn hẳn dải đó, không hiện nhãn `DECK` / `STILLS` rỗng.
- **Mobile**: lưới xếp thành một cột, card featured và card nhỏ cùng chiều rộng. Lightbox chiếm full màn, cuộn dọc: video → thông tin → deck → still.
- **Video trong lightbox**: không autoplay có tiếng. Mặc định tắt tiếng hoặc chờ người dùng bấm play.
- **Đóng lightbox**: phím Esc, click ra ngoài, và một nút đóng rõ ràng. Khoá cuộn trang nền khi lightbox đang mở.
- **Ảnh deck**: là ảnh đã export sạch, không có viền hay chrome của PowerPoint. Nếu ảnh đưa vào còn viền thì báo lại, đừng tự crop.

---

## Chưa làm gì ngoài phạm vi trên

Cụ thể là **không** làm những thứ sau, kể cả khi thấy hợp lý:

- Không thêm dải pipeline, sơ đồ quy trình, timeline sản xuất
- Không thêm phần before/after hay ảnh so sánh bản gen hỏng với bản đạt
- Không thêm danh sách "bài học" / "nguyên tắc" / "cách tôi làm"
- Không viết đoạn mô tả dài cho project
- Không tạo trang con riêng cho từng project
- Không sửa các section khác của site
- Không đổi thứ tự nav hiện có
- Không sửa danh sách chip ở section `TOOLSET`
- Không thêm hiệu ứng, animation hay chuyển cảnh mới ngoài những gì site đang dùng

---

## Cách test

1. Xoá bớt dữ liệu xuống còn 1 project → lưới vẫn cân, không lỗ trống.
2. Thêm dữ liệu giả lên 4 project → card thứ tư xuống hàng dưới đúng kích thước, không tràn.
3. Đặt một project ở trạng thái không có video và không có ảnh deck → detail view vẫn mở được, không có nhãn rỗng, không có khối vỡ.
4. Mở detail view của cả hai project → đếm đủ 4 khối: video, thông tin, deck, still. Không có khối thứ năm.
5. Đọc dòng disclaimer ở cỡ hiển thị thật trên màn 1440px và trên mobile → phải đọc được rõ, không mờ hơn các dòng metadata cạnh nó.
6. So sánh screenshot section mới với section `PROBLEM SOLVING` → viền card, ngoặc góc, badge, letter-spacing, màu accent phải trùng khớp, không lệch tông.
7. Thu về chiều rộng mobile → lưới một cột, lightbox full màn, cuộn được hết, đóng được bằng nút.
8. Mở lightbox rồi cuộn → trang nền không cuộn theo.
9. Bấm `WATCH REEL` ở hero → cuộn tới đúng section `REEL`.
10. Đối chiếu lại mục "Chưa làm gì ngoài phạm vi trên" → không có mục nào bị vi phạm.
