import React from "react";
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  TagIcon,
  TagLabel,
  Tag,
  TagCloseButton,
  useColorMode,
} from "@chakra-ui/core";

import { Container, Draggable } from "react-smooth-dnd";

import NextLink from "next/link";
import { useStoreActions, useStoreState } from "easy-peasy";

function ReportCard({ report, searchValue }) {
  const { title, body, tags } = report;
  const route = searchValue
    ? `archive/${title}?q=${searchValue}`
    : `archive/${title}`;
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  const reports = useStoreState((state) => state.reports.data);
  const addTag = useStoreActions((actions) => actions.reports.addTag);
  const removeTag = useStoreActions((actions) => actions.reports.removeTag);

  const addReportTag = async (e, title) => {
    if (e.addedIndex === 0) {
      const report = reports.find((report) => report.title === title);
      await addTag({ report, tag: e.payload });
    }
  };

  const removeReportTag = async (e, tag, title) => {
    e.preventDefault();
    const report = reports.find((report) => report.title === title);
    removeTag({ report, tag });
  };

  return (
    <NextLink href={`archive/[slug]?q=${searchValue}`} as={route} passHref>
      <Link
        as="a"
        mb={4}
        _hover={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          textDecoration: "none",
        }}
      >
        <Flex
          align="center"
          border="1px solid"
          borderColor={borderColor[colorMode]}
          borderRadius={4}
          p={5}
        >
          <Stack>
            <Container
              groupName="tags"
              onDrop={(e) => addReportTag(e, title)}
              orientation="vertical"
            >
              <Draggable>
                {tags.map((tag, i) => {
                  return (
                    <Tag size="sm" variantColor={tag.color} mr={2} key={i}>
                      <TagIcon icon={tag.icon} size="12px" />
                      <TagLabel>{tag.title}</TagLabel>
                      <TagCloseButton
                        onClick={(e) => removeReportTag(e, tag, title)}
                      />
                    </Tag>
                  );
                })}
                <Heading
                  as="h4"
                  size="md"
                  fontWeight="bold"
                  mb={4}
                  mt={2}
                  letterSpacing="tighter"
                >
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </Heading>
                <Text lineHeight="1.3">{body}</Text>
              </Draggable>
            </Container>
          </Stack>
        </Flex>
      </Link>
    </NextLink>
  );
}

export default ReportCard;
