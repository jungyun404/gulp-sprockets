import crypto from 'crypto';

const hash = {
  /**
   * @param {String} contents .
   * @return {String} Encrypted string by sha256.
   */
  create: (contents) => {
    return crypto.createHash('sha256').update(contents).digest('hex');
  }
};

export default hash;
