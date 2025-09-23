import { useState } from "react";
import { Modal, TextInput, View, Text, Pressable } from "react-native";
import { styles } from "../styles";
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
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
            <LinearGradient
                colors={['#F5F7FA', '#9F86C0']}
                style={styles.modalContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.modalTitle}>Sök recept</Text>
                <TextInput
                    style={[
                        styles.modalText,
                        {
                            backgroundColor: '#fff',
                            borderRadius: 8,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            width: '100%',
                            marginBottom: 20,
                            borderWidth: 1,
                            borderColor: '#6D94C5',
                        },
                    ]}
                    placeholder="Sök..."
                    placeholderTextColor="#6D94C5"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Pressable
                        style={[styles.modalButton, { flex: 1, marginRight: 8 }]}
                        onPress={() => {
                            Haptics.selectionAsync();
                            onClose();
                        }}
                    >
                        <Text style={styles.modalButtonText}>Stäng</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.modalButton, { flex: 1, marginLeft: 8 }]}
                        onPress={() => {
                            Haptics.selectionAsync();
                            handleSearch();
                        }}
                    >
                        <Text style={styles.modalButtonText}>Sök</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    </Modal>
);
}