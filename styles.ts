import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8DFCA",
  },
  recipeDetails: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 400,
  },
  shortDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginVertical: 8,
  },
  time: {
    fontSize: 14,
    color: "#999",
  },
  ingredients: {
    fontSize: 14,
    color: "#999",
  },
  scrollView: {
    paddingHorizontal: 16,
    backgroundColor: "#E8DFCA",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6D94C5",
    marginTop: 16,
  },
  card: {
    backgroundColor: "#F5EFE6",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#6D94C5",
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#6D94C5",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6D94C5",
    textDecorationLine: "underline",
  },
  infoContainer: {
    marginVertical: 8,
  },
});
