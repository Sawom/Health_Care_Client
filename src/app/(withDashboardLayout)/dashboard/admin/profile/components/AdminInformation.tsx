import { Box, Stack, styled, Typography } from "@mui/material";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const AdminInformation = ({ data }: any) => {
  return (
    <>
      <Typography variant="h5" color="primary.main" mb={2}>
        Personal Information
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap={"wrap"}>
        {/* role */}
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Role
          </Typography>
          <Typography>{data?.role}</Typography>
        </StyledInformationBox>
        {/* name */}
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Name
          </Typography>
          <Typography>{data?.name}</Typography>
        </StyledInformationBox>
        {/* email */}
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Email
          </Typography>
          <Typography>{data?.email}</Typography>
        </StyledInformationBox>
        {/* status */}
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Status
          </Typography>
          <Typography>{data?.status}</Typography>
        </StyledInformationBox>
        {/* contact number */}
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Contact Number
          </Typography>
          <Typography>{data?.contactNumber}</Typography>
        </StyledInformationBox>
        {/* joined */}
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Joined
          </Typography>
          <Typography>
            {data
              ? new Date(data.createdAt).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "2-digit",
                })
              : null}
          </Typography>
        </StyledInformationBox>
      </Stack>
    </>
  );
};

export default AdminInformation;
