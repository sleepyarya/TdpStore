import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import https from 'https';

const items = [
    { name: 'team_drag_pelan_official_shirt', url: 'https://www.roblox.com/catalog/131981903348061/Team-Drag-Pelan-Official-Shirt' },
    { name: 'tdp_sweater', url: 'https://www.roblox.com/catalog/83496818350776/Team-Drag-Pelan-Distro' },
    { name: 'tdp_sport_pants', url: 'https://www.roblox.com/catalog/76938877127778/Jumper-TDP-Distro' },
    { name: 'tdp_on_fire_shirt', url: 'https://www.roblox.com/catalog/133884655223379/TDP-On-Fire-Shirt' },
    { name: 'tdp_v4_pinky_boy', url: 'https://www.roblox.com/catalog/81499276980301/TDP-Pinky-boy' },
    { name: 'tdp_pinky_pants', url: 'https://www.roblox.com/catalog/124618391968431/TDP-Pinky-Pants' },
    { name: 'tdp_mechanic_v1', url: 'https://www.roblox.com/catalog/84250597815895/TDP-MECHANIC-V1' },
    { name: 'tdp_mechanic_pants', url: 'https://www.roblox.com/catalog/128195002810300/TDP-MECHANIC-PANTS' },
    { name: 'jaket_tdp', url: 'https://www.roblox.com/catalog/71703674823383/TDP-Jacket' },
    { name: 'celana_jumper_tdp_grey', url: 'https://www.roblox.com/catalog/117737994942390/TDP-Grey-Pants' }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
            }
        });
    });
};

async function fetchImages() {
    for (const item of items) {
        try {
            console.log(`Fetching ${item.name}...`);
            // We need to fetch the HTML content to find the image
            // Since we can't easily fetch full HTML with fetch() due to potential bot protection/headers, 
            // we will try to cheat by using the roblox thumbnail API if possible, or just trying to scrape the og:image.
            // However, the AssetId is in the URL.
            // URL format: .../catalog/[ID]/...
            const match = item.url.match(/catalog\/(\d+)\//);
            if (match) {
                const assetId = match[1];
                // Roblox thumbnail API
                // https://thumbnails.roblox.com/docs/index.html
                // GET /v1/assets?assetIds={assetId}&returnPolicy=PlaceHolder&size=420x420&format=Png&isCircular=false
                const apiUrl = `https://thumbnails.roblox.com/v1/assets?assetIds=${assetId}&returnPolicy=PlaceHolder&size=420x420&format=Png&isCircular=false`;

                const apiRes = await fetch(apiUrl);
                const data = await apiRes.json();

                if (data.data && data.data.length > 0 && data.data[0].imageUrl) {
                    const imageUrl = data.data[0].imageUrl;
                    await downloadImage(imageUrl, path.join('src/assets', `${item.name}.png`));
                    console.log(`Saved ${item.name}.png`);
                } else {
                    console.error(`Could not find image for ${item.name}`);
                }
            }
        } catch (error) {
            console.error(`Error processing ${item.name}:`, error);
        }
    }
}

fetchImages();
