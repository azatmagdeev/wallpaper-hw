import {calculateRolls} from "../lib.js";

test ('the function count correct',() => {
    const lenghtRoom = 6;
    const widthRoom = 5;
    const widthWallpaper = 1.06;
    const lenghtWallpaper = 10;
    const heightRoom = 2.75;


    const expected = 7;
    const result = calculateRolls(lenghtRoom,widthRoom,heightRoom,widthWallpaper,lenghtWallpaper);

    expect(result).toBe(expected);
});

