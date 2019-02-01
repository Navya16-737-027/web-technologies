/* exported freq*/
/* eslint-env browser */
/* eslint no-console:0 */
function freq(arr) {
    var n = arr.length;
    var i, j, l;
    var frequency = 0;
    for (i = 0; i < n; i++) {
        l=0;
        for (j = 0; j < n; j++) {
            if (arr[i] == arr[j])
            l++;
        }
            if (frequency < l)
                frequency = l;
        
    }
    document.write(frequency);
}
console.log(freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,8]));
