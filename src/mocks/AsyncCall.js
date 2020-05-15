export class AsyncCall {
    customAction({ position }) {
        return new Promise(function(resolve) {
            const milliSeconds = Math.floor(Math.random() * 9) * 100;
            console.log('position', position);
            console.log('milliSeconds', milliSeconds);
            setTimeout(() => resolve(position), milliSeconds);
        });
    }
}