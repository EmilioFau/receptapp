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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  searchButton: {
    paddingTop: 8,
  },
  searchButtonText: {
    color: "#6D94C5",
    fontSize: 16,
    fontWeight: "bold",
  },
  versionText: {
    color: "#6D94C5",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#F5F7FA",
    borderRadius: 20,
    padding: 24,
    outlineColor: "#000000",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6D94C5",
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    color: "#6D94C5",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#ffd864ff",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 28,
    marginTop: 8,
  },
  modalButtonText: {
    color: "#22223B",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
