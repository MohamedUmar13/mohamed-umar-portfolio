import { Box, Link, Stack, Typography } from "@mui/material";

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
                    py: 4, 
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'end'                  
                }}>

                <div>
                    <Typography>
                        Mohamed Umar
                    </Typography>

                    <Typography>
                        Full Stack Developer | Flutter & React
                    </Typography>
                </div>

                <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
                    <Link href="https://github.com/MohamedUmar13" color="inherit" underline="hover">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/mohamed-umar-5541ab20b/" color="inherit" underline="hover">
                        LinkedIn
                    </Link>
                    <Link href="mailto:umarmohamedcid@gmail.com" color="inherit" underline="hover">
                        Email
                    </Link>
                </Stack>

                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                    © {new Date().getFullYear()} Mohamed Umar. All rights reserved.
                </Typography>
            </Box>
        </>
    );
}