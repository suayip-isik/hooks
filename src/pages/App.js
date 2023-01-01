import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import useFecth from "../hooks/useFetch/useFetch";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const App = () => {

  const [users, setUsers] = useState([]);

  // const getData = async () => {
  //   let res = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   if (res.data) {
  //     // console.log(res.data);
  //     setUsers(res.data)
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  // useEffect(() => {
  //   console.log(users);
  //   console.log("---------");
  // }, [users])

  const { loading, data, error } = useFecth(USERS_URL)


  const CustomerCard = ({ value: { address: { city, street, suite, zipcode }, company: { bs, catchPhrase, name: companyName }, email, name, phone, username, website }, i }) => {
    console.log("Customer Card: " + i)
    console.log("Customer Card: " + city)
    console.log("Customer Card: " + street)
    console.log("Customer Card: " + suite)
    console.log("Customer Card: " + zipcode)
    console.log("Customer Card: " + bs)
    console.log("Customer Card: " + catchPhrase)
    console.log("Customer Card: " + companyName)
    console.log("Customer Card: " + email)
    console.log("Customer Card: " + name)
    console.log("Customer Card: " + phone)
    console.log("Customer Card: " + username)
    console.log("Customer Card: " + website)
    console.log("-------------")
    return (
      <View key={i}>
        <Text></Text>
      </View>
    );
  }



  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => console.log(users)}>
        <Text>List Data</Text>
      </TouchableOpacity>

      {
        data.map((value, i) => <CustomerCard value={value} key={i} i={i} />)
      }

    </SafeAreaView>
  )
}

export default App;