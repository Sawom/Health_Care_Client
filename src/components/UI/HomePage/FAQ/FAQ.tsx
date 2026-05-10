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

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Box textAlign="center" mb={6} suppressHydrationWarning={true}>
          <Typography
            color="primary"
            fontWeight={700}
            variant="h6"
            sx={{ textTransform: "uppercase", letterSpacing: 1 }}
          >
            Support
          </Typography>
          <Typography
            variant="h4"
            fontWeight={800}
            mt={1}
            fontSize={{ xs: "1.8rem", md: "2.5rem" }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>
      </motion.div>

      {/* Accordion Container */}
      <Box sx={{ maxWidth: "850px", mx: "auto" }}>
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              elevation={0}
              disableGutters // অতিরিক্ত স্পেসিং রিমুভ করে
              sx={{
                mb: 2,
                border: "1px solid #f0f0f0", // ডিফল্ট বর্ডার খুব হালকা
                borderRadius: "16px !important",
                "&:before": { display: "none" },
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                // ক্লিক বা হোভারে বর্ডার কালার চেঞ্জ হবে না
                "&.Mui-expanded": {
                  border: "1px solid #f0f0f0",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.04)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                sx={{
                  px: 3,
                  py: 1.5,
                  // ক্লিক করলে নীল বর্ডার বা আউটলাইন আসবে না
                  "&.Mui-focusVisible": { bgcolor: "transparent" },
                  bgcolor:
                    expanded === `panel${index}`
                      ? "rgba(21, 134, 253, 0.03)"
                      : "transparent",
                }}
              >
                <Typography
                  fontWeight={600}
                  fontSize={{ xs: "1rem", md: "1.1rem" }}
                  color={
                    expanded === `panel${index}`
                      ? "primary.main"
                      : "text.primary"
                  }
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: 3,
                  pb: 3,
                  bgcolor:
                    expanded === `panel${index}`
                      ? "rgba(21, 134, 253, 0.03)"
                      : "transparent",
                }}
              >
                {/* টেক্সট ওপেন হওয়ার সময় হালকা এনিমেশন */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    expanded === `panel${index}`
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -10 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <Typography
                    color="text.secondary"
                    lineHeight={1.8}
                    fontSize="0.95rem"
                  >
                    {faq.answer}
                  </Typography>
                </motion.div>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
