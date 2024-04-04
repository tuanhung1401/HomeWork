function getStringHasMaxLength(arr) {
    let maxLength = 0;
    let ans = []; // Lưu các chuỗi có độ dài lớn nhất

    // Duyệt mảng, tìm độ dài lớn nhất và các chuỗi có độ dài đó
    for (let str of arr) {
        // Nếu chuỗi hiện tại có độ dài lớn hơn maxLength thì cập nhật lại maxLength
        if (str.length > maxLength) {
            maxLength = str.length;
            ans = [str];
        }
        // Ngược lại nếu chuỗi hiện tại có độ dài bằng maxLen thì thêm vào mảng ans
        else if (str.length === maxLength) {
            ans.push(str);
        }
    }

    return ans;
}

// Test
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd'])); 
console.log(getStringHasMaxLength(['hello', 'world', 'nice'])); 
console.log(getStringHasMaxLength([])); 
