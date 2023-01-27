"use client";

import { Flex, Heading, Text, Link, AccordionItem, AccordionButton, Box, Accordion, AccordionPanel, Button } from '@chakra-ui/react'
import NextLink from 'next/link';
import { MinusIcon, AddIcon } from '@chakra-ui/icons'

const AccItem = ({
  title, text
}: {
  title: string;
  text: string;
}) => {
  return (<AccordionItem
    borderRadius='xl'
    border='1px'
    borderColor='gray.200'
    mr={3} ml={3}
  >
    {({ isExpanded }) => (
      <>
        <h3>
          <AccordionButton
            _hover={{
              color: 'none'
            }}
            pt='7' pl='7' pr='7' pb={isExpanded ? '1' : '7'}
            bgColor={isExpanded ? 'white' : 'gray.50'}
            borderRadius='xl'
          >
            <Box as="span" flex='1' textAlign='left' fontSize='2xl'>
              {title}
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h3>
        <AccordionPanel pl='7' pr='7'>
          <Text color='gray.600' textAlign='left' fontSize='medium'>
            {text}
          </Text>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>)
}

const FAQ = () => {
  return (
    <Flex justifyContent='center' flexDirection='column' mt={10}>
      <Heading fontWeight='extrabold' fontSize={['2xl', '3xl', '5xl']} textAlign='center'>
        Frequently Asked Questions
      </Heading>
      <Text textAlign='center' mt={10} color='gray.600'>
        If you have any questions not answered in the FAQ please don&apos;t hesitate to{' '}
        <Link as={NextLink} color='blue.400' href='#'>
          contact us
        </Link>
        .
      </Text>
      <Accordion
        borderRadius='xl'
        maxW='964px'
        w='100%'
        marginBlock='10'
        alignSelf='center'
        overflow='hidden'
        textAlign='center'
      >
        <AccItem
          title='What&apos;s included into the free trial?'
          text='After signing up you get access to all Personizely features for 14 days. You don&apos;t need a credit cart to start your trial.'
        />
        <br />
        <AccItem
          title='Do I need a developer to connect my website?'
          text='If you use Shopify, Wix or Wordpress - we have a 1 click integration which doesn&apos;t require any technical knowledge. For any other CMS you&apos;ll just need to insert a piece of code into your website to get started. If you need assistance with that, we&apos;ll be happy to help you.'
        />
        <br />
        <AccItem
          title='How is the monthly visitors quota calculated?'
          text='You quota represents the total number of unique visitors that visit your website within a month, so if a visitor visits your website a few times within this period it will still be counted as one against your quota.'
        />
      </Accordion>

      <Button colorScheme='purple'
        size='lg'
        alignSelf="center"
        mb={10}
        paddingBlock={8}
      >
        SHOW MORE
      </Button>
    </Flex>
  )
}

export default FAQ