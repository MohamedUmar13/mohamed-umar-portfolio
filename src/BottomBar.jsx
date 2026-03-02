import { Box } from "@mui/material";

export default function BottomBar() {
    return (
        <>
            <Box component="footer"
                sx={{
                    background:
                        "radial-gradient(ellipse at top, #1a1a1a 0%, #0b0b0b 60%)",
                    borderTop: "1px solid rgba(202,168,77,0.25)",
                    color: "white",
                    px: { xs: 2, md: 8 },
                    py: 2,
                }}>

            </Box>
        </>
    );
}