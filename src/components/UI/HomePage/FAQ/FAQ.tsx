"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

// FAQ Data - 7 relevant questions for a healthcare project
const faqData = [
  {
    question: "How do I book an appointment with a specialist?",
    answer:
      "You can search for a doctor by their specialty or department on our home page. Once you find the right doctor, click 'Book Appointment' and select your preferred date and time.",
  },
  {
    question: "Are the online consultations secure and private?",
    answer:
      "Yes, we use end-to-end encryption for all video consultations and follow strict data privacy regulations to ensure your medical history remains confidential.",
  },
  {
    question: "Can I get a refund if I cancel my appointment?",
    answer:
      "You can cancel an appointment up to 24 hours before the scheduled time for a full refund. Cancellations made within 24 hours may be subject to a small fee.",
  },
  {
    question: "How do I access my medical reports and prescriptions?",
    answer:
      "All your reports and prescriptions are saved in your personal dashboard. Simply log in and navigate to the 'My Records' section to view or download them.",
  },
  {
    question: "What should I do in case of a medical emergency?",
    answer:
      "Our platform is for non-emergency consultations. In case of a critical emergency, please dial your local emergency number or visit the nearest hospital immediately.",
  },
  {
    question: "Do you offer family health subscription plans?",
    answer:
      "Yes, our 'Premium Care' package covers up to 4 family members and includes priority scheduling and annual wellness checkups.",
  },
  {
    question: "How can I pay for the health packages?",
    answer:
      "We accept all major credit/debit cards, mobile banking (like bKash/Nagad), and online bank transfers through our secure payment gateway.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  // Handle accordion change
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container sx={{ py: 10 }}>
      {/* Section Header */}
      <Box textAlign="center" mb={6}>
        <Typography color="primary" fontWeight={700} variant="h6">
          Support
        </Typography>
        <Typography variant="h4" fontWeight={800} mt={1}>
          Frequently Asked Questions
        </Typography>
      </Box>

      {/* Accordion Container with Framer Motion */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        sx={{ maxWidth: "800px", mx: "auto" }}
      >
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            elevation={0}
            sx={{
              mb: 2,
              border: "1px solid #e0e0e0",
              borderRadius: "12px !important", // Rounded corners for each accordion
              "&:before": { display: "none" }, // Remove default MUI line
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": { borderColor: "#1586FD" },
              boxShadow:
                expanded === `panel${index}`
                  ? "0px 4px 20px rgba(0,0,0,0.05)"
                  : "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              sx={{
                px: 3,
                py: 1,
                bgcolor:
                  expanded === `panel${index}`
                    ? "rgba(21, 134, 253, 0.02)"
                    : "transparent",
              }}
            >
              <Typography
                fontWeight={600}
                color={
                  expanded === `panel${index}` ? "primary" : "text.primary"
                }
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ px: 3, pb: 3, bgcolor: "rgba(21, 134, 253, 0.02)" }}
            >
              <Typography color="text.secondary" lineHeight={1.7}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQSection;
