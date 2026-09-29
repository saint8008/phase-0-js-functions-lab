




// This is required for the test to function properly  
function calculateTax(amount) {
    const taxedAmount = (0.1 * amount);
    return taxedAmount;
}

function convertToUpperCase(text) {
    const upperText = text.toUpperCase();
    return upperText;
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function isPalindrome(word) {
    const lowerCase = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedString = lowerCase.split('').reverse().join('');

    return word === reversedString;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    if (discountPercentage < 0) {
       return originalPrice
    } else {
         const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
        return discountedPrice;
    }

    return discountedPrice;
}


module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };