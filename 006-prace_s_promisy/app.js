const promiseA = new Promise(resolve => setTimeout(() => resolve('A'), 2000));
const promiseB = new Promise((resolve, reject) => setTimeout(reject, 1500));
const promiseC = new Promise(resolve => setTimeout(() => resolve('C'), 4000));


async function main() {
    try {
        console.time('a');
        
        const response = await Promise.race([
            promiseA,
            promiseB,
            promiseC
        ]);

        console.log('All resolved');
        console.log(response);
        console.timeEnd('a');
    } catch (e) {
        console.log('Rejected...');
        console.timeEnd('a');
    }
}

main();