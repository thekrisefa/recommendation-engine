import React from "react"
import {CssBaseline, Box, Typography, Container} from "@mui/material"

export default () => {
	return (
		<Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <CssBaseline />
			<Container component="main" sx={{mt: 8, mb: 2}} maxWidth="sm">
				<Typography variant="h2" component="h1" gutterBottom>
					Hello world
				</Typography>
				<Typography variant="h5" component="h2" gutterBottom>
					lorem ipsum dolor sit amet, consectetur adip
				</Typography>
			</Container>
			<Box component="footer" sx={{py: 3, px: 2, mt: "auto", backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800]), }}>
				<Container maxWidth="sm">
					<Typography variant="body1">lorem ipsum dolor sit amet, consectetur adip</Typography>
				</Container>
			</Box>
		</Box>
	)
}
