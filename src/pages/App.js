import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView } from "react-native";
import axios from "axios";
import useFecth from "../hooks/useFetch/useFetch";
import BusinessCard from "../components/BusinessCard";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const App = () => {

  const [users, setUsers] = useState([]);

  const { loading, data, error } = useFecth(USERS_URL)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <BusinessCard value={item} />}
        keyExtractor={item => item.id} />
    </SafeAreaView>
  )
}

export default App;