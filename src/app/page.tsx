"use client";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Home() {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const Today = () => {
    return <Text>{new Date().toLocaleDateString("en-US")}</Text>;
  };

  const PopulateFakeDate = () => {
    // Loop through the array of data
    // for each item in the array, create a new row
    // add the row to the table body
    // return the table body
    const items: {
      name: string;
      code: string;
      count: number;
      updatedAt: string;
      createdAt: string;
    }[] = [
      {
        name: "Jennifer",
        code: "1205",
        count: 2,
        updatedAt: new Date().toDateString(),
        createdAt: new Date().toDateString(),
      },
      {
        name: "Jennifer",
        code: "1206",
        count: 6,
        updatedAt: new Date().toDateString(),
        createdAt: new Date().toDateString(),
      },
      {
        name: "Jennifer",
        code: "1209",
        count: 1,
        updatedAt: new Date().toDateString(),
        createdAt: new Date().toDateString(),
      },
    ];

    return (
      <Tbody>
        {items.map((item, index) => {
          return (
            <Tr key={`${index}-table-row`}>
              <Td>{item.name}</Td>
              <Td isNumeric>{item.code}</Td>
              <Td isNumeric>{item.count}</Td>
              <Td>
                <Text>{item.updatedAt as unknown as string}</Text>
              </Td>
              <Td>
                <Text>{item.createdAt}</Text>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    );
  };

  return (
    <VStack m={4} spacing={10} align="start">
      <Heading>Medicine Inventory</Heading>
      <Input onChange={handleInputChange} placeholder="Basic usage" />
      <TableContainer>
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>Code</Th>
              <Th isNumeric>Count</Th>
              <Th>UpdatedAt</Th>
              <Th>CreatedAt</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Jennifer</Td>
              <Td isNumeric>1205</Td>
              <Td isNumeric>2</Td>
              <Td>{<Today />}</Td>
              <Td>{<Today />}</Td>
            </Tr>
            <Tr>
              <Td>Jennifer</Td>
              <Td isNumeric>1205</Td>
              <Td isNumeric>2</Td>
              <Td>{<Today />}</Td>
              <Td>{<Today />}</Td>
            </Tr>
            <Tr>
              <Td>Jennifer</Td>
              <Td isNumeric>1205</Td>
              <Td isNumeric>2</Td>
              <Td>{<Today />}</Td>
              <Td>{<Today />}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
}
