export const randomPasswordGenerator = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map((x) => {
    return x[Math.floor(Math.random() * x.length)]
}).join('');
