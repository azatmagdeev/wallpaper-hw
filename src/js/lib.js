export function calculateRolls( lenghtRoom, widthRoom,heightRoom, widthWallpaper,lenghtWallpaper ) {
    const perimeterRoom = 2 * lenghtRoom + 2 * widthRoom;
    const clothsWallpaper = Math.ceil(perimeterRoom / widthWallpaper);
    const reserve = 0.1;
    const clothsPerRoll = Math.floor(lenghtWallpaper / heightRoom + reserve);
    return  Math.ceil(clothsWallpaper / clothsPerRoll);
}


