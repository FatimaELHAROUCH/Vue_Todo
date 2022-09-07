function isPasswordAllowed(password) {
    return password.length > 0 && /\d/.test(password) && /\D/.test(password);
}

module.exports = isPasswordAllowed;