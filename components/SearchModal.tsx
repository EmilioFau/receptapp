import { useState } from "react";
import { Modal, TextInput, View, Text, Pressable } from "react-native";
import { styles } from "../styles";

export default function SearchModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        // Implement search logic here
        console.log("Searching for:", searchQuery);
    };

    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Sök recept</Text>
                    <TextInput
                        style={[styles.modalText, { backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, width: '100%', marginBottom: 20, borderWidth: 1, borderColor: '#6D94C5' }]}
                        placeholder="Sök..."
                        placeholderTextColor="#6D94C5"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <Pressable style={[styles.modalButton, { flex: 1, marginRight: 8 }]} onPress={onClose}>
                            <Text style={styles.modalButtonText}>Stäng</Text>
                        </Pressable>
                        <Pressable style={[styles.modalButton, { flex: 1, marginLeft: 8 }]} onPress={handleSearch}>
                            <Text style={styles.modalButtonText}>Sök</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}