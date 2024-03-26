const list = document.getElementById('list');

// Thêm 3 thẻ <li> mới
for (let i = 8; i <= 10; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = 'Item ' + i;
    list.appendChild(newItem);
}

// Sửa màu chữ cho thẻ <li> 1 thành màu đỏ
list.children[0].style.color = 'red';

// Sửa background cho thẻ <li> 3 thành màu xanh
list.children[2].style.backgroundColor = 'green';

// Xóa thẻ <li> 4
list.removeChild(list.children[3]);

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa
const replacementItem = document.createElement('li');
replacementItem.textContent = 'New Item';
list.insertBefore(replacementItem, list.children[3]);