const fs = require('fs')
const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2('password', 'salt', 5000000, 512, 'sha512', () => {
    console.log('1 - CryptoPBKDF2 done');
});

crypto.pbkdf2('password', 'salt', 5000000, 512, 'sha512', () => {
    console.log('2 - CryptoPBKDF2 done');
});
crypto.pbkdf2('password', 'salt', 5000000, 512, 'sha512', () => {
    console.log('3 - CryptoPBKDF2 done');
});

crypto.pbkdf2('password', 'salt', 5000000, 512, 'sha512', () => {
    console.log('4 - CryptoPBKDF2 done');
});
crypto.pbkdf2('password', 'salt', 5000000, 512, 'sha512', () => {
    console.log('5 - CryptoPBKDF2 done');
});

