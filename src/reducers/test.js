let content = "This is itm number 1";
let key = "";
const keyword = new RegExp(`${key}`,"i");

const val = () => {
    return keyword.test(content)
}
let res = val();
console.log(res);
