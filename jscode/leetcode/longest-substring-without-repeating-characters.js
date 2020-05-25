var lengthOfLongestSubstring = function(s) {
    if (!s.length) {
        return 0;
    }

    var longest = 0;
    var i = 0, j = 0;
    while (i < s.length) {
        const d = {};
        j = i;

        while (!(s[j] in d) && j < (s.length)) {
            d[s[j]] = j;
            j+=1;
        }

        longest = Math.max(longest, j - i);
        i+=1;
    }

    return longest;
};

var input = "abcabcbb";
//input = "pwwkew";
//input = "dvdf";
console.log(lengthOfLongestSubstring(input));
