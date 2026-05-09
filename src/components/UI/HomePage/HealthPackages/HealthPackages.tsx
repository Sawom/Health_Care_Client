"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Divider,
  Modal,
  TextField,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const packages = [
  {
    name: "Basic Care",
    price: "25",
    color: "#1586FD",
    features: [
      "10 Consultations",
      "Basic Health Checkup",
      "24/7 Support",
      "Online Reports",
    ],
  },
  {
    name: "Standard Care",
    price: "55",
    color: "#00C38B",
    isRecommended: true,
    features: [
      "Unlimited Consultations",
      "Full Body Checkup",
      "Specialist Access",
      "Home Sample Collection",
      "Diet Plan",
    ],
  },
  {
    name: "Premium Care",
    price: "99",
    color: "#1586FD",
    features: [
      "Family Coverage (4)",
      "Priority Scheduling",
      "Personal Health Coach",
      "Annual Wellness Trip",
      "VIP Access",
    ],
  },
];

const HealthPackages = () => {
  const [selectedPkg, setSelectedPkg] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", phone: "" });

  const handleClose = () => {
    if (!isSubmitting) {
      setSelectedPkg(null);
      setUserInfo({ name: "", phone: "" });
    }
  };

  const handleConfirm = () => {
    if (!userInfo.name || !userInfo.phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `Request Sent! We'll contact you shortly regarding ${selectedPkg.name}.`,
      );
      handleClose();
    }, 1000);
  };

  return (
    <Container sx={{ py: 10 }}>
      <Box textAlign="center" mb={8}>
        <Typography color="primary" fontWeight={700} variant="h6">
          Pricing Plans
        </Typography>
        <Typography variant="h4" fontWeight={800} mt={1}>
          Affordable Health Packages
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {packages.map((pkg, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            sx={{
              flex: "1 1 300px",
              maxWidth: "380px",
              display: "flex",
              flexDirection: "column",
              p: 4,
              borderRadius: 4,
              border: pkg.isRecommended
                ? `2px solid ${pkg.color}`
                : "1px solid #e0e0e0",
              boxShadow: pkg.isRecommended
                ? "0px 10px 30px rgba(0,0,0,0.1)"
                : "0px 4px 12px rgba(0,0,0,0.05)",
              position: "relative",
              bgcolor: "white",
            }}
          >
            {pkg.isRecommended && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: pkg.color,
                  color: "white",
                  px: 3,
                  py: 0.5,
                  borderRadius: 5,
                  fontSize: "0.8rem",
                  fontWeight: 700,
                }}
              >
                Recommended
              </Box>
            )}

            <Typography variant="h5" fontWeight={700}>
              {pkg.name}
            </Typography>
            <Stack direction="row" alignItems="baseline" spacing={0.5} my={2}>
              <Typography variant="h3" fontWeight={800} color="primary">
                ${pkg.price}
              </Typography>
              <Typography color="text.secondary">/month</Typography>
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Stack spacing={2} sx={{ flexGrow: 1, mb: 4 }}>
              {pkg.features.map((feature, i) => (
                <Stack
                  key={i}
                  direction="row"
                  spacing={1.5}
                  alignItems="flex-start"
                >
                  <CheckCircleIcon
                    sx={{ color: pkg.color, fontSize: 18, mt: 0.3 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {feature}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Button
              fullWidth
              variant={pkg.isRecommended ? "contained" : "outlined"}
              onClick={() => setSelectedPkg(pkg)}
              sx={{
                borderRadius: "10px",
                py: 1.5,
                fontWeight: 700,
                textTransform: "none",
                borderColor: pkg.color,
                bgcolor: pkg.isRecommended ? pkg.color : "transparent",
                color: pkg.isRecommended ? "white" : pkg.color,
                "&:hover": {
                  bgcolor: pkg.color,
                  color: "white",
                },
              }}
            >
              Choose Plan
            </Button>
          </Box>
        ))}
      </Box>

      <Modal open={!!selectedPkg} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 400 },
            bgcolor: "white",
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <AnimatePresence>
            {selectedPkg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Typography variant="h6" fontWeight={700} mb={1}>
                  Express Interest
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  You have selected <strong>{selectedPkg.name}</strong>. Provide
                  your details so we can reach out.
                </Typography>

                <Stack spacing={2.5}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    size="small"
                    required
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    size="small"
                    required
                    type="tel"
                    value={userInfo.phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      // only number
                      if (/^[0-9]*$/.test(value)) {
                        setUserInfo({ ...userInfo, phone: value });
                      }
                    }}
                    inputProps={{
                      maxLength: 11,
                    }}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleConfirm}
                    disabled={isSubmitting || !userInfo.name || !userInfo.phone}
                    sx={{
                      py: 1.5,
                      fontWeight: 700,
                      bgcolor: selectedPkg.color,
                      "&:hover": { bgcolor: selectedPkg.color },
                    }}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Modal>
    </Container>
  );
};

export default HealthPackages;
