const capitalise = Object.defineProperty(String.prototype, 'capitalise', {
    value: function () {
        return this[0].toUpperCase() + this.slice(1);
    },
    writable: true, // so that one can overwrite it later
    configurable: true // so that it can be deleted later
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

module.exports = {
    capitalise,
    validateEmail,
}