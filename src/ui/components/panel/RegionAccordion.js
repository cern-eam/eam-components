import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';

const RegionAccordion = styled(Accordion)(() => ({
    '& .MuiPaper-root': {
      margin: "8px 0px",
      boxShadow: 'none'
    },
    boxShadow: 'none'
  }));

export default RegionAccordion;