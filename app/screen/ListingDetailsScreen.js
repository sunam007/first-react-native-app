import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{"Red Jacket for Sale"}</AppText>
        <AppText style={styles.subTitle}>{"$100"}</AppText>
      </View>
      <View style={styles.userContainer}></View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title={"Mosh Hamedani"}
        subTitle={"5 Listings"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: { width: "100%", height: 300 },
  subTitle: {
    color: colors.secondary,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 10,
  },
});
export default ListingDetailsScreen;
