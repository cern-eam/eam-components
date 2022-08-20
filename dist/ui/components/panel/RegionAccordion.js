import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
var RegionAccordion = styled(Accordion)(function () {
  return {
    '& .MuiPaper-root': {
      margin: "8px 0px",
      boxShadow: 'none'
    },
    boxShadow: 'none'
  };
});
export default RegionAccordion;