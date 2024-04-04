users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

function filterUser(users) {
    return users.filter(function (user) {
        //Lọc ra những user có age > 25 và isStatus là true
        return user.age > 25 && user.isStatus === true;
    });
}

var result = filterUser(users);
console.log(result);

function sortUser(users) {
    return users.sort(function (a, b) {
        //Sắp xếp user theo thứ tự age tăng dần
        return a.age - b.age;
    });
}

var result = sortUser(users);
console.log(result);
