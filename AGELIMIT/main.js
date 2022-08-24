var input = '';

const cacheInput = (data) => {
    input += data;
}

const prepareInput = () => {
    input = input.split(/\s+/).map(Number);
}

const main = () => {
    prepareInput();
    const T = input.splice(0, 1)[0];
    for (var i = 0; i < T; ++i) {
        const X = input.splice(0, 1)[0];
        const Y = input.splice(0, 1)[0];
        const A = input.splice(0, 1)[0];
        process.stdout.write(A >= X && A < Y && 'YES\n' || 'NO\n' );
    }
    process.exit();
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);