import { FlatList, HStack, Heading, Text, VStack } from "native-base";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useState } from "react";
import { ExerciceCard } from "@components/ExerciceCard";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costas");
  const [groups, setGroups] = useState([
    "costas",
    "ombros",
    "pernas",
    "biceps",
    "triceps",
  ]);
  const [exercices, setExercices] = useState([
    "Remada Unilateral",
    "Supino Reto",
    "Crucifixo com haltere",
    "Agachamento livre",
    "Leg Press 45",
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        renderItem={({ item }) => (
          <Group
            name={item}
            onPress={() => setGroupSelected(item)}
            isActive={groupSelected === item}
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercices.length}
          </Text>
        </HStack>

        <FlatList
          data={exercices}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20}}
          renderItem={({ item }) => <ExerciceCard />}
        />
      </VStack>
    </VStack>
  );
}
