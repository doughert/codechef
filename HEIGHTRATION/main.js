process.stdin.resume();
process.stdin.setEncoding('utf8');


const main = (data) => {
    
    const input = data.split(/ /).map(Number);

    process.stdout.write(Math.max(...input).toString());
    
};

process.stdin.on('data', main);