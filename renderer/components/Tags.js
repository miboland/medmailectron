import React from "react";
import {
  useColorMode,
  Flex,
  Tag,
  TagIcon,
  TagLabel,
  Text,
  Divider,
  Box,
} from "@chakra-ui/core";
import styled from "@emotion/styled";
import { Container, Draggable } from "react-smooth-dnd";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 100px;
`;

const Tags = () => {
  const { colorMode } = useColorMode();

  const tags = [
    {
      id: "starred",
      title: "Starred",
      color: "yellow",
      icon: "star",
    },
    {
      id: "passing",
      title: "Passing",
      color: "green",
      icon: "check",
    },
    {
      id: "flagged",
      title: "Flagged",
      color: "red",
      icon: "bell",
    },
  ];

  const navBgColor = {
    light: "rgba(255, 255, 255, 1)",
    dark: "rgba(23, 25, 35, 1)",
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="flex-stat"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        mt={[0, 2]}
        mb={2}
        pb={4}
      >
        <Box>
          <Flex>
            <Text mr={1}>Draggable Tags</Text>
            <Text fontSize="sm">(drop above report titles)</Text>
          </Flex>
          <Divider></Divider>
          <Container
            groupName="tags"
            behaviour="copy"
            getChildPayload={(i) => tags[i]}
            orientation="horizontal"
          >
            {tags.map((tag, index) => {
              return (
                <Draggable key={index}>
                  <Tag size="sm" variantColor={tag.color} mr={2}>
                    <TagIcon icon={tag.icon} size="12px" />
                    <TagLabel>{tag.title}</TagLabel>
                  </Tag>
                </Draggable>
              );
            })}
          </Container>
        </Box>
      </StickyNav>
    </>
  );
};

export default Tags;
