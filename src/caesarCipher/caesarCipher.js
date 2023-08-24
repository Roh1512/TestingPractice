function caesarCipher(text, shift) {
  const shiftAmount = shift % 26;
  return text.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    let shiftedCode = code + shiftAmount;

    if (
      (code >= 65 && code <= 90 && shiftedCode > 90) ||
      (code >= 97 && code <= 122 && shiftedCode > 122)
    ) {
      shiftedCode -= 26;
    }
    return String.fromCharCode(shiftedCode);
  });
}
module.exports = caesarCipher;
