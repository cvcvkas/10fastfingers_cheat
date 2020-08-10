let ev = $.Event("keyup");
ev.which = 32;
let input_cont = document.querySelector("#inputfield");
let full_words = [];
let current_word = 0;
let all_words = Array.from(document.querySelectorAll("#row1 > span"));
all_words.forEach(word => {
    full_words.push(word.innerHTML);
});
console.log(full_words);
document.onkeypress = event => {
    if (event.key == ' '){
        console.log(full_words[current_word]);
        input_cont.value = full_words[current_word] + ' ';
        current_word++;
        $(input_cont).trigger(ev);
    };
};
console.clear();
console.log("Don't forget to subscribe to lowhatex at youtube");
// Because 10fastfingers is too hard for your slow ass fingers.
