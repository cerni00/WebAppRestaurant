export const generateRandomRestaurants = () => {
    const restaurants = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 10; i++) {
      let name = 'Restaurant ';
      for (let j = 0; j < 1; j++) {
        name += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
      restaurants.push(name);
    }
    return restaurants.slice(0,10);
  };

