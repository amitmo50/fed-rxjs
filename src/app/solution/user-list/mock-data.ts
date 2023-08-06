

export const mockUsers = [
  {
    id: 8946,
    first_name: 'Emory',
    last_name: 'Lesch',
    avatar: 'https://robohash.org/estinventorein.png?size=300x300&set=set1',
    date_of_birth: '1994-10-28',
    "email": "emory.lesch@email.com",
    phone_number: '+690 528.188.6811 x09374',
    address: {
      city: 'Kundeside',
      street_name: 'Fahey Green',
      street_address: '4415 Gorczany View',
      zip_code: '25930',
      state: 'Illinois',
      country: 'United States'
    }
  },
  {
    id: 8337,
    first_name: 'Maggie',
    last_name: 'Hegmann',
    avatar: 'https://robohash.org/eiusveritatissunt.png?size=300x300&set=set1',
    date_of_birth: '2001-10-19',
    phone_number: '+299 (318) 622-5496 x0630',
    "email": "maggie.hegmann@email.com",
    address: {
      "city": "Lake Nicky",
      "street_name": "Wolf Knoll",
      "street_address": "60599 Sasha Falls",
      "zip_code": "46901-9069",
      "state": "Maryland",
      "country": "United States",
    }
  }
];

export const mockCountryData = [
  {
    name: {
      common: 'United States',
      official: 'United States of America',
      nativeName: {
        eng: {
          official: 'United States of America',
          common: 'United States'
        }
      }
    },
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$'
      }
    },
    languages: {
      eng: 'English'
    },
    flag: '🇺🇸'
  }
];
export const mockExpectedResult = [
  {
    firstName: 'Emory',
    lastName: 'Lesch',
    "email": "emory.lesch@email.com",
    image: 'https://robohash.org/estinventorein.png?size=300x300&set=set1',
    phone: '+690 528.188.6811 x09374',
    dateOfBirth: '1994-10-28',
    address: {
      country: 'United States',
      flag: '🇺🇸',
      city: 'Kundeside',
      street: '4415 Gorczany View',
      currency: 'USD'
    }
  },
  {
    firstName: 'Maggie',
    lastName: 'Hegmann',
    "email": "maggie.hegmann@email.com",
    image: 'https://robohash.org/eiusveritatissunt.png?size=300x300&set=set1',
    phone: '+299 (318) 622-5496 x0630',
    dateOfBirth: '2001-10-19',
    address: {
      country: 'United States',
      flag: '🇺🇸',
      city: 'Lake Nicky',
      street: '60599 Sasha Falls',
      currency: 'USD'
    }
  }
];

