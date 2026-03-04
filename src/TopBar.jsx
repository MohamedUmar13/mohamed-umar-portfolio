import { AppBar, Fade, MenuItem, Slide, Toolbar, Tooltip, useScrollTrigger } from '@mui/material';


function HideOnScroll({ children }) {
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 100,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <Fade in={!trigger} timeout={300}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "fixed", zIndex: 1100 }}>
                    {children}
                </div>
            </Fade>
        </Slide>
    );
}

export default function TopBar() {

    const pages = ["Home", "Projects", "Certifications"];

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 10,
    });

    return (
        <HideOnScroll>
            <AppBar
                position="static"
                elevation={scrolled ? 6 : 0}
                sx={{
                    height: "70px",
                    width: "70%",
                    borderRadius: "5px",
                    transition: "all 0.3s ease",
                    background: scrolled
                        ? "rgba(30, 30, 30, 0.85)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(14px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
                    boxShadow: scrolled
                        ? "0 8px 32px rgba(0,0,0,0.3)"
                        : "none",
                }}
            >
                <Toolbar sx={{ justifyContent: "center", width: "100%" }}>
                    {pages.map((page) => (
                        <Tooltip title="under development !">
                            <MenuItem key={page}>
                                {page}
                            </MenuItem>
                        </Tooltip>
                    ))}
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}