module.exports = {
  // Domestic
  '14': 'UPS Next Day Air Early',
  '01': 'UPS Next Day Air',
  '13': 'UPS Next Day Air Saver',
  '59': 'UPS 2nd Day Air A.M.',
  '02': 'UPS 2nd Day Air',
  '12': 'UPS 3 Day Select',
  '03': 'UPS Ground',

  // International
  '11': 'UPS Standard',
  '07': 'UPS Worldwide Express',
  '54': 'UPS Worldwide Express Plus',
  '08': 'UPS Worldwide Expedited',
  '65': 'UPS Worldwide Saver',
  '96': 'UPS Worldwide Express Freight',
  '82': 'UPS Today Standard',
  '83': 'UPS Today Dedicated Courier',
  '84': 'UPS Today Intercity',
  '85': 'UPS Today Express',
  '86': 'UPS Today Express Saver',
  '70': 'UPS Access Point Economy',

  isValid: function(code) {
    return this.hasOwnProperty(code);
  }
};
