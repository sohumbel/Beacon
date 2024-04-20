import React from "react";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { auth } from "firebase-admin";
import { user } from "firebase-functions/v1/auth";
import { User } from "firebase/auth";

type SearchInputProps = {
  user: User;
};

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  return (
    <Flex
      flexGrow={1}
      maxWidth={user ? "auto" : "600px"}
      mr={2}
      alignItems="center"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="#043f61"
          // children={<SearchIcon mb={2} />}
        >
          <SearchIcon mb={2} />
        </InputLeftElement>
        <Input
          placeholder="Search Beacon "
          fontSize="10pt"
          borderColor = "#043f61"
          borderWidth = "2px"
          _placeholder={{ color: "gray.400" }}
          _hover={{
            bg: "white",
            border: "2.5px solid",
            borderColor: "#043f61",
          }}
          _focus={{
            outline: "none",
            border: "2.5px solid",
            borderColor: "#043f61",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
