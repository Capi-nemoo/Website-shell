function renderASCII(text) {
    const termInstance = $('body').terminal();
    const cols = termInstance.cols();
    return trim(figlet.textSync(text, {
        font: 'Slant', // Puedes cambiar la fuente aquí
        width: cols,
        whitespaceBreak: true
    }));
}

function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}
