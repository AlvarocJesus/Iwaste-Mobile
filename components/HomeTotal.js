import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

import {styles} from '../styles'

export function HomeTotal() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [geocode, setGeocode] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    console.log('oi');
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMessage('Permission to access location was denied');
    }
    console.log(status);
    await setLatLong();
  };
  const setLatLong = async () => {
    let location = await Location.getCurrentPositionAsync();
    console.log(location);
    console.log(location.coords.latitude);
    setLat(location.coords.latitude);
    setLong(location.coords.longitude);
    let corda = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    await getGeocodeAsync(corda);
  };

  const getGeocodeAsync = async (corda) => {
    // Parâmetros adicionados

    console.log(corda);
    let geocode = await Location.reverseGeocodeAsync(corda);
    console.log('faz o l2');
    console.log(geocode);
    setGeocode(geocode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>{geocode ? `${geocode[0].subregion}` : ""}</Text>
      <Text style={styles.heading2}>{geocode ? geocode[0].country : ""}</Text>
      <Text style={styles.heading2}>{errorMessage}</Text>
      <TouchableOpacity onPress={() => getGeocodeAsync()}/>
    </View>
  );
}

