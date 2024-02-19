import { Colors } from 'theme/colors';
import './style.scss';

import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';

type CardProps = {
  link?: string;
  text?: string;
  header?: string;
  image?: string;
  maxWidth?: string;
};

export const CustomCard = ({
  link,
  header,
  text,
  image,
  maxWidth,
}: CardProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Card
      maxW="sm"
      align="center"
      variant="elevated"
      background={Colors.BACKGROUND}
      outline={Colors.FANDANGO}
      border={Colors.GLAUCOUS}
      cursor={link ? 'pointer' : 'auto'}
      maxWidth={maxWidth}
      onClick={handleClick}
      rounded="sm"
    >
      <CardBody>
        <Image src={image} alt={header} borderRadius="sm" />
        <Stack mt="5" spacing="2" align="center">
          {header && <Heading size="md">{header}</Heading>}
          {text && <Text align="center">{text}</Text>}
        </Stack>
      </CardBody>
    </Card>
  );
};
