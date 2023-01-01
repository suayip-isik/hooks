import React from "react";
import { View, Text } from "react-native";
import styles from './BusinessCard.style';

const BusinessCard = ({ value: { address: { city, street, suite, zipcode }, company: { bs, catchPhrase, name: companyName }, email, name, phone, username, website } }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adres Bilgisi</Text>
            <Text style={styles.text}>Şehir: {city}</Text>
            <Text style={styles.text}>Sokak: {street}</Text>
            <Text style={styles.text}>Apartman: {suite}</Text>
            <Text style={styles.text}>Zip code: {zipcode}</Text>


            <Text style={styles.title}>Şirket Bilgisi</Text>
            <Text style={styles.text}>Şehir: {bs}</Text>
            <Text style={styles.text}>Sokak: {catchPhrase}</Text>
            <Text style={styles.text}>Apartman: {companyName}</Text>

            <Text style={styles.title}>Kişi Bilgisi</Text>
            <Text style={styles.text}>e-Mail: {email}</Text>
            <Text style={styles.text}>Nmae: {name}</Text>
            <Text style={styles.text}>Phone: {phone}</Text>
            <Text style={styles.text}>Username: {username}</Text>
            <Text style={styles.text}>Web Site: {website}</Text>
        </View>
    );
}

export default BusinessCard;