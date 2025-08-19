import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ text, route }) => {
  const navigate = useNavigate();

  return (
    <Button variant="contained" 
            sx = {{
                backgroundColor: '#ff8000',
                '&:hover': {
                    backgroundColor: 'black',
                    color: 'white'
                },
                borderRadius: '20px',
                color: 'black',
                fontSize: '16px',
            }}  
            onClick={() => navigate(`/${route}`)}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

