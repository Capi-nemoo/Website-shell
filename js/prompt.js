const user = 'guest';
const server = 'example.com';
const root = '~';
let cwd = root;

function getPrompt() {
    return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
}
