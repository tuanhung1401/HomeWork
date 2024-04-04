function getCountElement(arr) {
    //Khởi tạo countObj trống
    let countObj = {};
    //Duyệt mảng arr, kiểm tra từng phần tử này đã có trong countObj chưa
    arr.forEach((element) => {
        //Xem key tương ứng trong countObj[element]
        if (countObj[element]) {
            countObj[element] += 1;
        } else {
            countObj[element] = 1;
        }
    });
    //Trả về countObj với giá trị tương ứng là tên phần từ kèm số lần xuất hiện
    return countObj;
}

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));

