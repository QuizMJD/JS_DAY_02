// count-item
const cart = new Cart();

// Hàm thêm sản phẩm vào giỏ hàng
function addCart(product) {
  cart.addProduct(product); // Thêm sản phẩm vào giỏ hàng
  cart.onChange(); // Cập nhật giao diện và lưu vào localStorage
  return false; // Ngăn chặn mặc định của sự kiện (ví dụ: form submit)
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function remoteCart(id) {
  cart.removeProduct(id); // Xóa sản phẩm khỏi giỏ hàng
  cart.onChange(); // Cập nhật giao diện và lưu vào localStorage
  return false; // Ngăn chặn mặc định của sự kiện (ví dụ: form submit)
}
