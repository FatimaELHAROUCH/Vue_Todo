

const isPasswordAllowed = require('./signUp')


test('Is password allow those values', () => {
    expect(isPasswordAllowed('')).toBe(false);
    expect(isPasswordAllowed('fffffffff')).toBe(false);
    expect(isPasswordAllowed('fatima123')).toBe(true);
});

describe('isPasswordAllowed', () => {
    const allowedPasswords= ["FatimaELharouch1997", "HelloWorld123"];
    const notAllowedPassewords = ['', 'aaaaaaaaaa', 'bbbbbbbbbbbb']


    allowedPasswords.forEach(pwd => {
        it('"$(pwd)" should be allowed', () => {
            expect(isPasswordAllowed(pwd)).toBe(true);
        })
    })

    notAllowedPassewords.forEach(pwd => {
        it('"$(pwd)" should not be allowed', () => {
            expect(isPasswordAllowed(pwd)).toBe(false);
        })
    })

})


