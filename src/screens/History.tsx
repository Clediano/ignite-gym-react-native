import { Heading, VStack, SectionList, Box, Text } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";
import { useState } from "react";

export function History() {
  const [exercises, setExercises] = useState([
    { title: "28.08.2023", data: ["Puxada frontal", "Supino com halteres"] },
    { title: "27.08.2023", data: ["Agachamento livre", "Supino reto"] },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={5} mb={3}>
            {section.title}
          </Heading>
        )}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda {"\n"}
            Bora treinar?
          </Text>
        )}
        px={8}
      />
    </VStack>
  );
}
