function reverseString() {
    const input = document.getElementById('str').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('reverseResult').innerHTML = reversed;
}

function replaceString() {
    const originalString = document.getElementById('str').value;
    const toFind = document.getElementById('findText').value;
    const toReplace = document.getElementById('replaceText').value;

    if (toFind) {
        const newString = originalString.replaceAll(toFind, toReplace);
        document.getElementById('replaceResult').innerHTML = newString;
    } else {
        document.getElementById('replaceResult').innerHTML = "Please enter text to find.";
    }
}

function checkPalindrome() {
    const input = document.getElementById('str').value.toLowerCase();
    const reversed = input.split('').reverse().join('');

    if (input && input === reversed) {
        document.getElementById('palindromeResult').innerHTML = "It's a palindrome!";
    } else if (!input) {
        document.getElementById('palindromeResult').innerHTML = "";
    } else {
        document.getElementById('palindromeResult').innerHTML = "Not a palindrome.";
    }
}

function Reset() {
    document.getElementById('str').value = '';
    document.getElementById('findText').value = '';
    document.getElementById('replaceText').value = '';
    document.getElementById('reverseResult').innerHTML = '';
    document.getElementById('replaceResult').innerHTML = '';
    document.getElementById('palindromeResult').innerHTML = '';
}