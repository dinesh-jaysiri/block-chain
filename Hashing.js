const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// given a hash, return the color that created the hash
function findColor(hash) {
    const matchingColor = COLORS.find(color => {
        const colorHash = sha256(utf8ToBytes(color));
        return toHex(colorHash) === toHex(hash);
    });

    return matchingColor;
}

//The "toHex" function from the "ethereum-cryptography/utils" package is used to convert the resulting hash from the SHA256 function to a hexadecimal string, so that it can be compared to the input hash.

//"utf8ToBytes" is a function provided by the "ethereum-cryptography/utils" package in JavaScript. This function takes a string encoded in UTF-8 format and converts it into a sequence of bytes, which can be used as input to various cryptographic functions, such as hashing functions.

//UTF-8 is a character encoding that can represent any Unicode character, and it is widely used in web applications and other software that deals with text data. The "utf8ToBytes" function takes a UTF-8 encoded string as input and returns an array of bytes, where each byte represents a single character in the string.

//The bytes output by "utf8ToBytes" can be used as input to various cryptographic functions, such as hashing or encryption functions. By converting the input string to bytes, the function ensures that the input is properly formatted and can be processed by these functions.

//A sequence of bytes is a collection of binary data, where each byte is represented by a group of eight bits. A byte is the basic unit of storage in computer memory and can represent a value between 0 and 255. In other words, a byte is a set of 8 bits that can represent 2^8 or 256 possible values.

//A sequence of bytes can represent various types of data, such as text, images, audio, or video, and it can be processed by computers and other electronic devices. For example, a text document can be represented as a sequence of bytes, where each character is encoded as a particular byte value based on a specific character encoding system, such as ASCII, UTF-8, or UTF-16.

//SHA-256 is a cryptographic hash function that takes an input message and produces a fixed-length output (256 bits or 32 bytes). The output of SHA-256 is typically represented as a hexadecimal string, which is a sequence of characters that represent the output bytes as hexadecimal digits.

//The number of characters in a hash depends on the output size of the hash function used. For example, the SHA-256 hash function produces a fixed-length output of 256 bits, which is equivalent to 32 bytes. When this output is represented in hexadecimal format, it requires 64 characters (each hexadecimal digit represents 4 bits, so 64 hexadecimal digits are needed to represent 256 bits).