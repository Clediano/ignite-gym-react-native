import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Heading, HStack, Text, VStack, Icon } from "native-base";

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto
                source={{ uri: "https://gitlab.com/uploads/-/system/user/avatar/2776227/avatar.png" }}
                alt="Imagem do usuário"
                size={16}
                mr={4}
            />
            <VStack flex={1}>
                <Text
                    color="gray.100"
                    fontSize="md"
                >
                    Olá,
                </Text>
                <Heading
                    color="gray.100"
                    fontSize="md"
                >
                    Clediano
                </Heading>
            </VStack>

            <TouchableOpacity>
                <Icon
                    as={MaterialIcons}
                    name="logout"
                    color="gray.200"
                    size={7}
                />
            </TouchableOpacity>
        </HStack>
    );
}