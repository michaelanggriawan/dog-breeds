import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  useTheme,
} from '@mui/material';

import { useRemoveSelectedBreedMutation } from '@/features/breeds/breeds';

type SelectedBreedCardProps = {
  image: string;
  breed: string;
};

export default function SelectedBreedCard({
  image,
  breed,
}: SelectedBreedCardProps) {
  const theme = useTheme();
  const [removeBreed] = useRemoveSelectedBreedMutation();
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        title={breed}
        action={
          <IconButton
            onClick={async () => {
              try {
                await removeBreed({ breed }).unwrap();
                toast.success(`${breed} is deleted`, {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                });
                // eslint-disable-next-line no-empty
              } catch (err) {}
            }}
          >
            <DeleteIcon sx={{ color: theme.palette.primary.dark }} />
          </IconButton>
        }
      />
      <CardMedia component="img" height="194" image={image} alt={breed} />
    </Card>
  );
}
