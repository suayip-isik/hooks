import React from "react";
import { View, Text } from "react-native";
import styles from './BusinessCard.style';

const BusinessCard = ({ value: { address: { city, street, suite, zipcode }, company: { bs, catchPhrase, name: companyName }, email, name, phone, username, website } }) => {
    // console.log("Customer Card: " + i)
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
        <View style={styles.container}>
            <Text>Veriler Geldi</Text>
        </View>
    );
}

export default BusinessCard;