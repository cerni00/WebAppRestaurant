import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateRandomRestaurants } from '../../api/index';

interface Review {
  text: string;
  rating: number;
}

interface RestaurantReviews {
  [key: string]: {
    text: string;
    rating: number;
    reviews?: Review[];
  };
}

const RestaurantListScreen: React.FC = () => {
  const [reviews, setReviews] = useState<RestaurantReviews>({});
  const [restaurants] = useState<string[]>(generateRandomRestaurants());

  useEffect(() => {
    loadPreviousReviews();
  }, []);

  const fetchRandomRestaurants = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/random-restaurants', {
        method: 'GET',
        headers: {
          'Accept': '**',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ro,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
          'Connection': 'keep-alive',
          'Cookie': '_ga=GA1.1.1390343735.1713103932; _ga_6GZR5522G8=GS1.1.1713103931.1.1.1713104150.0.0.0',
          'Host': 'localhost:8081',
          'Referer': 'http://localhost:8081/',
          'Sec-Ch-Ua': '"Microsoft Edge";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '"Windows"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0'
        },
        mode: 'no-cors'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchRandomRestaurants();
  }, []);

  const loadPreviousReviews = async () => {
    try {
      const storedReviews = await AsyncStorage.getItem('reviews');
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      }
    } catch (error) {
      console.error('Error loading previous reviews:', error);
    }
  };

  const saveReviews = async () => {
    try {
      await AsyncStorage.setItem('reviews', JSON.stringify(reviews));
    } catch (error) {
      console.error('Error saving reviews:', error);
    }
  };

  const handleReviewTextChange = (restaurant: string, text: string) => {
    setReviews(prevReviews => ({
      ...prevReviews,
      [restaurant]: { ...prevReviews[restaurant], text },
    }));
  };

  const handleRatingChange = (restaurant: string, rating: number) => {
    setReviews(prevReviews => ({
      ...prevReviews,
      [restaurant]: { ...prevReviews[restaurant], rating },
    }));
  };

  const handleReviewSubmit = async (restaurant: string) => {
    const review = reviews[restaurant];
    if (!review || !review.text || !review.rating) {
      Alert.alert('Please provide both a review and a rating.');
      return;
    }

    const existingReviews = review.reviews || [];
    const newReviews = [...existingReviews, { text: review.text, rating: review.rating }];
    setReviews(prevReviews => ({
      ...prevReviews,
      [restaurant]: { ...prevReviews[restaurant], reviews: newReviews },
    }));

    saveReviews();

    setReviews(prevReviews => ({
      ...prevReviews,
      [restaurant]: { ...prevReviews[restaurant], text: '', rating: 0 },
    }));
  };

  const renderItem = ({ item }: { item: string }) => (
    <View>
      <Text>{item}</Text>
      <TextInput
        placeholder="Enter your review"
        value={reviews[item]?.text || ''}
        onChangeText={text => handleReviewTextChange(item, text)}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map(star => (
          <Button
            key={star}
            title={star.toString()}
            onPress={() => handleRatingChange(item, star)}
            color={star <= (reviews[item]?.rating || 0) ? 'yellow' : 'gray'}
          />
        ))}
      </View>
      <Button title="Submit Review" onPress={() => handleReviewSubmit(item)} />
      <Text>Previous Reviews:</Text>
      {reviews[item]?.reviews?.map((review, index) => (
        <Text key={index}>{`${review.text} (${review.rating} stars)`}</Text>
      ))}
    </View>
  );

  return (
    <View>
      <Text>Restaurant List</Text>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default RestaurantListScreen;

