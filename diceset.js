import { DiceSystem } from '../../dice-so-nice/api.js';

Hooks.once('diceSoNiceReady', async (dice3d) => {
    try {
        console.log('DSN Ready, registering Fear & Hunger Coin');
        
        const FHcoinSystem = new DiceSystem(
            'fear-and-hunger-coin',
            'Fear & Hunger Coin',
            'default',
            'Fear & Hunger'
        );
        
        dice3d.addSystem(FHcoinSystem);
        
        dice3d.addDicePreset(
            {
                type: 'dc',
                labels: [
                    'modules/fear-and-hunger-coin/textures/tails.webp',
                    'modules/fear-and-hunger-coin/textures/heads.webp'
                ],
                bumpMaps: [
                    'modules/fear-and-hunger-coin/textures/tails_bump_v2.png',
                    'modules/fear-and-hunger-coin/textures/heads_bump_v2.png'
                ],
                system: 'fear-and-hunger-coin'
            },
            'dc'
        );
        
        await dice3d.preloadPresets('fear-and-hunger-coin');
        console.log('Fear & Hunger Coin registered successfully!');
        
    } catch (error) {
        console.error('Error registering Fear & Hunger Coin:', error);
    }
});