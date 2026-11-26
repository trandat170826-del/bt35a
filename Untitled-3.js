
const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    // Ngăn trang web tải lại khi gửi form
    event.preventDefault();

    // Lấy dữ liệu từ các ô nhập
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;
    const message = document.getElementById("message");

    // Kiểm tra email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra mật khẩu có chữ hoa, chữ thường và số
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Kiểm tra họ tên
    if (name === "") {
        message.textContent = "Vui lòng nhập họ và tên!";
        message.className = "error";
        return;
    }

    // Kiểm tra email
    if (!emailRegex.test(email)) {
        message.textContent = "Email không hợp lệ!";
        message.className = "error";
        return;
    }

    // Kiểm tra mật khẩu
    if (!passwordRegex.test(password)) {
        message.textContent =
            "Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường và số!";
        message.className = "error";
        return;
    }

    // Kiểm tra điều khoản
    if (!agree) {
        message.textContent = "Bạn cần đồng ý với điều khoản!";
        message.className = "error";
        return;
    }

    // Lưu dữ liệu vào LocalStorage
    const user = {
        name: name,
        email: email,
        registeredAt: new Date().toLocaleString()
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Hiển thị thông báo thành công
    message.textContent = "Đăng ký thành công!";
    message.className = "success";

    // Xóa dữ liệu trên form
    form.reset();
});
