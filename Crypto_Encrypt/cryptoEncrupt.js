// ====================================================================
// =============== Crypto Encrypt / Decrypt ===========================
// ====================================================================



// Encrypt Function

// This function takes in a string 'str' and a number 'n' as input.
// It encrypts every alphabetic character in the string by shifting 
// the character code by 'n' positions.
function encrypt(str, n) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            // If the character is uppercase, it shifts the character 
            // code within the range of 65-90 (A-Z).
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + n) % 26) + 65);
                // If the character is lowercase, it shifts the character 
                // code within the range of 97-122 (a-z).
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + n) % 26) + 97);
            }
        }
        // The result is returned as a new encrypted string.
        result += char;
    }
    return result;
}


// Decrypt Function

// This function takes in a string 'str' and a number 'n' as input.
// It decrypts every alphabetic character in the string by shifting 
// the character code backwards by 'n' positions.

function decrypt(str, n) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            // If the character is uppercase, it shifts the character code 
            // within the range of 65-90 (A-Z).
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - n + 26) % 26) + 65);
                // If the character is lowercase, it shifts the character 
                // code within the range of 97-122 (a-z).
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - n + 26) % 26) + 97);
            }
        }
        // The formula used for decryption is the reverse of that 
        // used in the encrypt function.
        result += char;
    }
    // The result is returned as a new decrypted string.
    return result;
}

export { encrypt, decrypt };
