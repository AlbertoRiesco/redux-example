export class AsyncCall {
    customAction({ position }) {
        return new Promise(function(resolve) {
            const seconds = Math.floor(Math.random() * 4);
            console.log('position', position);
            console.log('seconds', seconds);
            setTimeout(() => resolve(position), seconds * 1000);
        });
    }
}