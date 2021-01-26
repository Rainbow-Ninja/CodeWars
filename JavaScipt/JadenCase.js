String.prototype.toJadenCase = function () {
    let phrase = this.split(" ");
    for(let i = 0; i < phrase.length; i++){
        phraseBits = phrase[i].split("");
        phraseBits[0] = phraseBits[0].toUpperCase();
        phrase[i] = phraseBits.join("");
    }
    return phrase.join(" ");
};


var str = "How can mirrors be real if our eyes aren't real";
blip = str.toJadenCase();
console.log(blip)
