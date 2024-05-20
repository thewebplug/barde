import {
    Box,
    Button,
    Table,
    TableBody,
    TableContainer,
    Checkbox,
    ListItemText,
    TableHead,
    FormControl,
    TableRow,
    Typograph,
    TableCell,
    Modal,
    Typography,
    Grid,
    Pagination,
    Tabs,
    Tab,
    MenuItem,
    Select,
    Badge,
  } from "@mui/material";
  import { useEffect } from "react";
  import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image1 from '../assets/logo.jpeg'

  const courses = [
    {
      name: "Introduction to Computing and application",
      code: "SEN 101",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Algebra and Trigonometry",
      code: "MAT 101",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Vectors, Mechanics and Geometry",
      code:"MAT 103",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "General Physical Chemistry",
      code: "CHM 105",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Mechanics, thermal Physics & waves",
      code: "PHY 101",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "General Physics Laboratory I",
      code:"PHY 107",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Introduction to Computer Science",
      code: "CMP 101",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Communication in English I",
      code: "GNS 101",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Basic Communication in Arabic I",
      code: 'GNS 103',
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Use of Library, Study Skills and ICT",
      code: "GNS 105",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Introduction to Web Technologies",
      code: "SEN 102",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Introduction to Web Technologies",
      code: "SEN 104",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Calculus",
      code: "MAT 102",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Electricity, Magnetism & Modern physics",
      code: "PHY 102",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "General Physics Laboratory II",
      code: "PHY 108",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Introduction to Problem Solving",
      code: "CMP 102",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Statistical Inference I",
      code: "STA 102",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Introduction to Probability",
      code: "STA 104",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Communication in English II",
      code: "GNS 102",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Islamic Faith and Practice",
      code: "GNS 104",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Nigeria People, Culture and the Economy",
      code: "GNS 106",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Introduction to Software Engineering",
      code: "SEN 201",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Requirements and Design",
      code: "SEN 205",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Computer Architecture and Organization",
      code: "SEN 207",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Construction",
      code: "SEN 211",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Principle of Operating System",
      code: "SEN 213",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Linear Algebra I",
      code: "MAT 205",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Statistics for Physical Sciences and Engineering I",
      code: "STA 209",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Logic, Philosophy, and Human Existence",
      code: "GNS 201",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Basic Communication in Arabic II",
      code: "GNS 203",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Introduction to Entrepreneurship",
      code: "GNS 205",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Principles of Programming II",
      code: "SEN 202",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Logic and Its Application in Computer Science",
      code: "SEN 204",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Design and Analysis of Computer Algorithms",
      code: "SEN 208",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Engineering Process",
      code: "SEN 212",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Computer Hardware",
      code: "CMP 212",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Data Structure and Algorithms",
      code: "CMP 204",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Discrete Structure",
      code: "CMP 208",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Nigerian People, Culture & Economy",
      code: "GNS 202",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Basic Islamic Concepts",
      code: "GNS 204",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Contemporary Health Issues",
      code: "GNS 206",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Object-Oriented Analysis and Design",
      code: "SEN 301",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Testing and Quality Assurance",
      code: "SEN 303",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Web Application Development",
      code: "SEN 305",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Database Systems",
      code: "SEN 307",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Research Methodology",
      code: "SEN 311",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Engineering Mobile Applications",
      code: "SEN 313",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Operation Research",
      code: "CMP 331",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Environment & Sustainable Development",
      code: "GNS 301",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Entrepreneurship and Skills Development",
      code: "GNS 303",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Leadership Skills, Peace & Conflict Resolution",
      code: "GNS 302",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Configuration Management and Maintenance",
      code: "SEN 401",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Engineering Project Management",
      code: "SEN 403",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Engineering Professional Practice",
      code: "SEN 407",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Engineering Security",
      code: "SEN 409",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Concepts of Programming Languages",
      code: "SEN 415",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Engineering Economics",
      code: "SEN 402",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Open Source Software Development and Applications",
      code: "CMP 408",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Distributed, Parallel and Cloud Computing",
      code: "SEN 406",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Software Architecture and Design",
      code: "SEN 408",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Unix/Linux Operating Systems",
      code: "SEN 410",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Computer Networks and Communication",
      code: "SEN 420",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Al and Expert Systems",
      code: "CMP 411",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Special Topics in Software Engineering",
      code: "SEN 412",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Parallel Algorithm and Programming",
      code: "SEN 413",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Fault-Tolerant Computer",
      code: "SEN 414",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Game Design and Development",
      code: "SEN 416",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Modelling and Computer Simulation",
      code: "CMP 412",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    },
    {
      name: "Computer Graphics and Visualization",
      code: "CMP 433",
      studentNo: "15",
      students: [
        { name: "Amira Khalil", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "82" },
        { name: "Zaid Rasheed", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "75" },
        { name: "Layla Karim", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "88" },
        { name: "Omar Habib", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "59" },
        { name: "Noor Faris", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "71" },
        { name: "Muhammad Barde", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "51" },
        { name: "John Boyega", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "91" },
        { name: "Will James", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "61" },
        { name: "Farid Khan", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "81" },
        { name: "Jamal Luis", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "Kobbie Mianoo", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "21" },
        { name: "James Robson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "60" },
        { name: "Harley Quinn", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" },
        { name: "Andre Onana", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "54" },
        { name: "Clark Johnson", matricNo: "2022/1/", facaulty: "Natural and applied science", department: "computer science", program: "software engineering", level: "200", attendancePercentage: "74" }
      ]
    }
  ];
  
  const Home = () => {
    const navigate = useNavigate();

    const [result, setResult] = useState(null)
    const [student, setStudent] = useState(null)
  
  
   
    return (
      <div className="result">
        <div className="result__main">
          <div className="title-flex">
            <img src={Image1} className="title-flex__logo" />
            <div className="title-flex__container">
              <div className="flex-container__title">Alhikmah university ilorin Exams verification system <br /> based on 75% attendance</div>
            </div>
          </div>
          
          <TableContainer className="main__table">
            <Table>
              <TableHead className="main__table-head">
                <TableRow>
                  <TableCell className="table__row">S/N</TableCell>
                  <TableCell className="table__row">Course Code</TableCell>
                  <TableCell className="table__row">Course Title</TableCell>
                  <TableCell className="table__row">Total Number of Students</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody className="main__table-body">
                {courses.map((course, index) => 
            <TableRow onClick={() => navigate(`/course/${index}`)}>
            <TableCell className="table__row">{index + 1}</TableCell>
            <TableCell className="table__row">{course?.code}</TableCell>
            <TableCell className="table__row">{course?.name}</TableCell>
            <TableCell className="table__row grade grade_exc">{course?.studentNo}</TableCell>
          </TableRow>
            )}
                
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  };
  
  export default Home;
  