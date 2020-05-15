export class AsyncCall {
    customAction({ position }) {
        return new Promise(function(resolve) {
            const milliSeconds = Math.floor(Math.random() * 4) * 100;
            console.log('position', position);
            console.log('seconds', milliSeconds);
            setTimeout(() => resolve(position), milliSeconds);
        });
    }
}