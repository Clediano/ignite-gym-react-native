import { HStack, Text, Pressable } from "native-base";

type Props = {
    name: string;
};

export function Group({ name }: Props) {
    return (
        <HStack>
            <Pressable>
                <Text
                    color="gray.200"
                    textTransform="uppercase"
                    fontSize="xs"
                    fontWeight="bold"
                >
                    {name}
                </Text>
            </Pressable>
        </HStack>
    );
}