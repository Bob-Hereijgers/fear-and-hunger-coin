// Import the DiceSystem class from DSN
import { DiceSystem } from '../dice-so-nice/api.js';

Hooks.once('diceSoNiceReady', async (dice3d) => {
    // Create a proper System object (v14 way)
    const coinSystem = new DiceSystem(
        'fear-and-hunger-coin',  // id
        'Fear & Hunger Coin',     // name
        'default',                // mode: 'preferred' or 'default'
        'Fear & Hunger'          // group (optional, for categorization)
    );
    
    // Register the system
    dice3d.addSystem(coinSystem);
    
    // Add the dice preset - note the shape parameter is now the second argument
    // For a coin, we use 'dc' (two-sided coin) shape
    dice3d.addDicePreset(
        {
            type: 'dc',           // The die type
            labels: [
                'modules/fear-and-hunger-coin/textures/tails.webp',
                'modules/fear-and-hunger-coin/textures/heads.webp'
            ],
            bumpMaps: [
                'modules/fear-and-hunger-coin/textures/tails_bump_v2.png',
                'modules/fear-and-hunger-coin/textures/heads_bump_v2.png'
            ],
            system: 'fear-and-hunger-coin',  // Must match the system id above
            // Optional: Add colorset if you want a specific theme
            // colorset: 'your-colorset-id',
            // Optional: Add backgrounds if you want per-face backgrounds
            // backgrounds: ['path/to/bg1.webp', 'path/to/bg2.webp']
        },
        'dc'  // The shape parameter - explicitly set to 'dc' for coin
    );
    
    // Optional: Preload the preset to avoid first-roll lag
    await dice3d.preloadPresets('fear-and-hunger-coin');
});