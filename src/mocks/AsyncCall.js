export class AsyncCall {
    customAction({ atmosphereLayerPosition, atmosphereLayers, tokenId }) {
        return new Promise(function(resolve) {
            if(tokenId !== '123123') {
                console.error('Invalid token ID: ', tokenId);
                return;
            }

            console.log('token ID: ', tokenId);

            const topPosition = atmosphereLayers.length - 1;
            let position = atmosphereLayerPosition + 1;

            if (topPosition === atmosphereLayerPosition) {
                position = 0;
            }

            const milliSeconds = Math.floor(Math.random() * 3) * 100;
            console.log('position', position);
            console.log('milliSeconds', milliSeconds);
            setTimeout(() => resolve(position), milliSeconds);
        });
    }
}