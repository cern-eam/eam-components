import React from "react";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const EAMGridFooter = (props) => {
    return (
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    background: theme.palette.grey[100],
                    border: `1px solid ${theme.palette.grey[200]}`,
                    borderTop: "none",
                    borderRadius: "0 0 4px 4px",
                    padding: "0.5rem",
                    flexWrap: "wrap",
                }}
            >
                {props.children}
            </Box>
    );
};

export default EAMGridFooter;
