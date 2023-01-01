import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, View, Text } from "react-native";
import axios from "axios";
import useFecth from "../hooks/useFetch/useFetch";
import BusinessCard from "../components/BusinessCard";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {

  const { loading, data, error } = useFecth(USERS_URL)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'lightgray' }}>
      {
        error
          ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', color: 'black', fontSize: 16 }}>{error}</Text>
          </View>
          : loading
            ? <ActivityIndicator size={'large'} style={{ flex: 1 }} />
            : <FlatList style={{ flex: 1 }}
              data={data}
              renderItem={({ item }) => <BusinessCard value={item} />}
              keyExtractor={item => item.id} />}
    </SafeAreaView>
  )
}

export default App;