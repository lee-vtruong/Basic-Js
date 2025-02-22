const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

// Mặc định chưa click vào tab nào cả nên hiện tab đầu tiên nên phải xử lý 
document.getElementById('tinhbai1').addEventListener('click', function() {
    // lấy giá trị từ input
    let luong = 1 * document.getElementById('luong').value;
    let ngay = 1 * document.getElementById('ngay').value;

    // tính lương
    let tongluong = luong * ngay;

    // hiển thị lương
    document.getElementById('tienluong').innerHTML += tongluong;
});

tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();

        tabs.forEach(t => t.classList.remove('active'));

        this.classList.add('active');

        contents.forEach(content => content.classList.remove('active-content'));

        const tabID = this.getAttribute('data-tab');
        document.getElementById(tabID).classList.add('active-content');

        if (tabID == 'bai1') {
            // lắng nghe sự kiện click vào nút tính lương
            document.getElementById('tinhbai1').addEventListener('click', function() {
                // lấy giá trị từ input
                let luong = 1 * document.getElementById('luong').value;
                let ngay = 1 * document.getElementById('ngay').value;

                // tính lương
                let tongluong = luong * ngay;

                // hiển thị lương
                document.getElementById('tienluong').innerHTML = `Kết quả: ${tongluong}`;
            });
        } else if (tabID == 'bai2') {
            // lắng nghe sự kiện click vào nút tính trung bình
            document.getElementById('tinhbai2').addEventListener('click', function() {
                let so1 = 1 * document.getElementById('so1').value;
                let so2 = 1 * document.getElementById('so2').value  ;
                let so3 = 1 * document.getElementById('so3').value;
                let so4 = 1 * document.getElementById('so4').value;
                let so5 = 1 * document.getElementById('so5').value;

                let tong = so1 + so2 + so3 + so4 + so5;
                let trungbinh = tong / 5;

                document.getElementById('trungbinh').innerHTML = `Kết quả: ${trungbinh}`;
            });
        } else if (tabID == 'bai3') {
            // lắng nghe sự kiện click vào nút tính quy đổi
            document.getElementById('tinhbai3').addEventListener('click', function() {
                let usd = 1 * document.getElementById('usd').value;
                let tygia = 23500;

                let vnd = usd * tygia;

                // hiển thị theo format tiền tệ
                document.getElementById('vnd').innerHTML = `Kết quả: ${vnd.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}`;
            });
        } else if (tabID == 'bai4') {
            // lắng nghe sự kiện click vào nút tính diện tích
            document.getElementById('tinhbai4').addEventListener('click', function() {
                let chieudai = 1 * document.getElementById('chieudai').value;
                let chieurong = 1 * document.getElementById('chieurong').value;

                let dientich = chieudai * chieurong;
                let chuvi = (chieudai + chieurong) * 2;

                document.getElementById('dientich').innerHTML = `Diện tích: ${dientich}`;
                document.getElementById('chuvi').innerHTML = `Chu vi: ${chuvi}`;
            });
        } else if (tabID == 'bai5') {
            document.getElementById('tinhbai5').addEventListener('click', function() {
                let so = 1 * document.getElementById('so').value;

                let hangchuc = Math.floor(so / 10);
                let hangdonvi = so % 10;

                // in tổng của hàng chục và hàng đơn vị
                document.getElementById('tong').innerHTML = `Tổng 2 ký số: ${hangchuc + hangdonvi}`;
            });
        }
    })
})