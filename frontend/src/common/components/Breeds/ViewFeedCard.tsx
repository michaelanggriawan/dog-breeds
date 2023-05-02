import { Card, CardHeader, CardMedia } from '@mui/material';

type SelectedBreedCardProps = {
  image: string;
  breed: string;
};

export default function ViewFeedCard({ image, breed }: SelectedBreedCardProps) {
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader title={breed} />
      <CardMedia component="img" height="194" image={image} alt={breed} />
    </Card>
  );
}
