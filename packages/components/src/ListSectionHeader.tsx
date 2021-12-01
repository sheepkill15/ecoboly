import { Box, Divider, Typography } from "@material-ui/core";

export default function ListSectionHeader(props: {headerName: string}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography style={{ marginRight: 10 }} variant="h5">{props.headerName}</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Divider />
      </Box>
    </Box>
  );
}
