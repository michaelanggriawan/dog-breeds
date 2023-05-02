import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from '@mui/material';

type SelectedBreedCardProps = {
  image: string;
  breed: string;
};

export default function ViewFeedCard({ image, breed }: SelectedBreedCardProps) {
  const [isLike, setIsLike] = useState(false);
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader title={breed} />
      <CardMedia component="img" height="194" image={image} alt={breed} />
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setIsLike(!isLike)}
        >
          <FavoriteIcon color={isLike ? 'secondary' : 'action'} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
