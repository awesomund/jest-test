
export function caesarCipher(string){
    return string.split('')
        .map(s => s.charCodeAt(0) - 96)
        .join('');
}
