import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Quis culpa duis enim esse do incididunt. Dolor dolore minim sit ut
        eiusmod laborum proident velit veniam do consectetur. Eu ex quis ut nisi
        magna nulla labore proident in id consectetur ipsum veniam ut. Lorem
        labore in dolor ut laborum quis eiusmod ex in. Enim incididunt quis
        aliquip sit ut consectetur ex fugiat proident esse qui. Officia non
        laboris reprehenderit ipsum. Eiusmod in culpa sint ut commodo
        consectetur labore minim et.
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColort: 'error', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 40 }} />
      </IconButton>
    </JournalLayout>
  );
};
