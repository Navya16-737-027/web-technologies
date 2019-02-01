/* exported rangeBetween */
/* eslint-env browser */
/* eslint no-console:0 */

function rangeBetween(low, high) {
    var arr = new Array();
    var i = 0;
    while (low < high) {
        arr[i] = low;
        i++;
        low++;
    }
    arr[i] = high;
    document.write("[" + arr + "]" + " <br> ");
    return arr;
}

console.log(rangeBetween(4, 7));
