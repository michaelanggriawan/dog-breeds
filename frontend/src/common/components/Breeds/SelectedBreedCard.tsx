import { Card, CardHeader, CardMedia } from '@mui/material';

type SelectedBreedCardProps = {
  image: string;
  breed: string;
};

export default function SelectedBreedCard({
  image,
  breed,
}: SelectedBreedCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={breed} />
      <CardMedia component="img" height="194" image={image} alt={breed} />
    </Card>
  );
}
