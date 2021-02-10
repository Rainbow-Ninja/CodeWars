const VALUES = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9,  'V': 5, 'IV': 4,  'I': 1}

const RomanNumerals = {
    toRoman: function toRom(num) {
        romNum = "";
        while(num > 0) {
            for(n in VALUES) {
                if(num >= VALUES[n]) {
                    romNum += n
                    num -= VALUES[n]
                    break
                }
            }
        }
        return romNum;
    },
    
    fromRoman: function fromRom(num) {
        let decNum = 0

        i = 0
        while(i < num.length) {
            if(VALUES[num[i]] < VALUES[num[i+1]]) {
                decNum += VALUES[num[i] + num[i+1]]
                i += 2
            } else {
                decNum += VALUES[num[i]]
                i++
            }
        }
        return decNum;
    }
}


console.log(RomanNumerals.toRoman(2006)); // MMVI
console.log(RomanNumerals.toRoman(1000)); // M 
console.log(RomanNumerals.toRoman(999)); // CMXCIX
console.log(RomanNumerals.toRoman(1991)); // MCMXCI
console.log(RomanNumerals.toRoman(4)); //IV

console.log(RomanNumerals.fromRoman('XXI')) // 21
console.log(RomanNumerals.fromRoman('MMVII')) // 2007
console.log(RomanNumerals.fromRoman('MDCLXIX')) // 1669
