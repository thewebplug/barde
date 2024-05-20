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
import { useNavigate, useParams } from "react-router-dom";
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

const CourseDetails = () => {
  const pathname = useParams();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleModalClose = (e) => {
    if(e.target.classList[0] === "result__modal") {
      setSelectedStudent(false);
    }
  }

  useEffect(() => {
    setFilteredList(courses[pathname?.id]?.students)
  }, [])
  useEffect(() => {
      const temp = courses[pathname?.id]?.students?.filter((item) => item?.name?.toLowerCase()?.includes(search.toLowerCase()))
    setFilteredList(temp)
  }, [search])

  return (
    <div className="result">
      <div className="result__main">
        <div className="title-flex">
        <img src={Image1} className="title-flex__logo" />
          <div className="title-flex__container">
            <div className="flex-container__title">{courses[pathname?.id]?.name}</div>
            <div className="flex-container__subtitle">{courses[pathname?.id]?.code}</div>
            <div className="flex-container__subtitle flex-container__id">
            </div>
            <div className="flex-container__subtitle flex-container__id">
            NO. OF STIDENTS: <span>{courses[pathname?.id]?.studentNo}</span>
            </div>
          </div>
        </div>
        <input className="result__main__input" type="text" placeholder="Search student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer className="main__table">
          <Table>
            <TableHead className="main__table-head">
              <TableRow>
                <TableCell className="table__row">S/N</TableCell>
                <TableCell className="table__row">Student Name</TableCell>
                <TableCell className="table__row">Matric No.</TableCell>
                <TableCell className="table__row">Facaulty</TableCell>
                <TableCell className="table__row">Department</TableCell>
                <TableCell className="table__row">Program</TableCell>
                <TableCell className="table__row">Course Code </TableCell>
                <TableCell className="table__row">Course Title</TableCell>
                <TableCell className="table__row">Level</TableCell>
                <TableCell className="table__row">
                  Attendance Percentage
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="main__table-body">
              {filteredList.map((student, index) => (
                <TableRow onClick={() => setSelectedStudent(student)}>
                  <TableCell className="table__row">{index + 1}</TableCell>
                  <TableCell className="table__row">{student?.name}</TableCell>
                  <TableCell className="table__row">{student?.matricNo}</TableCell>
                  <TableCell className="table__row">{student?.facaulty}</TableCell>
                  <TableCell className="table__row">{student?.department}</TableCell>
                  <TableCell className="table__row">{student?.program}</TableCell>
                  <TableCell className="table__row">{courses[pathname?.id]?.code}</TableCell>
                  <TableCell className="table__row">{courses[pathname?.id]?.name}</TableCell>
                  <TableCell className="table__row">{student?.level}</TableCell>
                  <TableCell className="table__row grade grade_exc">
                    {student?.attendancePercentage}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
     {selectedStudent && <div className="result__modal" onClick={handleModalClose}>
        <div className="result__modal__inner">
          <div className="result__modal__inner__group">
            {parseInt(selectedStudent?.attendancePercentage) >= 75 && <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14 19.2857L15.8 21L20 17M16.5 14.4018C16.2052 14.2315 15.8784 14.1098 15.5303 14.0472C15.4548 14.0337 15.3748 14.024 15.2842 14.0171C15.059 14 14.9464 13.9915 14.7961 14.0027C14.6399 14.0143 14.5527 14.0297 14.4019 14.0723C14.2569 14.1132 13.9957 14.2315 13.4732 14.4682C12.7191 14.8098 11.8817 15 11 15C10.1183 15 9.28093 14.8098 8.52682 14.4682C8.00429 14.2315 7.74302 14.1131 7.59797 14.0722C7.4472 14.0297 7.35983 14.0143 7.20361 14.0026C7.05331 13.9914 6.94079 14 6.71575 14.0172C6.6237 14.0242 6.5425 14.0341 6.46558 14.048C5.23442 14.2709 4.27087 15.2344 4.04798 16.4656C4 16.7306 4 17.0485 4 17.6841V19.4C4 19.9601 4 20.2401 4.10899 20.454C4.20487 20.6422 4.35785 20.7951 4.54601 20.891C4.75992 21 5.03995 21 5.6 21H10.5M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                  stroke="#00a85a"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>}
            {parseInt(selectedStudent?.attendancePercentage) < 75 &&
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 16L17.5 18.5M17.5 18.5L20 21M17.5 18.5L20 16M17.5 18.5L15 21M11 15C10.1183 15 9.28093 14.8098 8.52682 14.4682C8.00429 14.2315 7.74302 14.1131 7.59797 14.0722C7.4472 14.0297 7.35983 14.0143 7.20361 14.0026C7.05331 13.9914 6.94079 14 6.71575 14.0172C6.6237 14.0242 6.5425 14.0341 6.46558 14.048C5.23442 14.2709 4.27087 15.2344 4.04798 16.4656C4 16.7306 4 17.0485 4 17.6841V19.4C4 19.9601 4 20.2401 4.10899 20.454C4.20487 20.6422 4.35785 20.7951 4.54601 20.891C4.75992 21 5.03995 21 5.6 21H11M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
}
           <div>
           <div className="result__modal__inner__group__title">{selectedStudent?.name}</div>
          <div className="result__modal__inner__group__subtitle">
            Course: <span>{courses[pathname?.id]?.name}</span>
          </div>
          <div className="result__modal__inner__group__subsubtitle">Level: {selectedStudent?.level}</div>
           </div>
          </div>
         
          <div className="result__modal__inner__attendance">
            Attendance:{" "}
            {parseInt(selectedStudent?.attendancePercentage) < 75 &&<span className="result__modal__inner__attendance__error">
              Fail(<span>{selectedStudent?.attendancePercentage}%</span>)
            </span>}
            {parseInt(selectedStudent?.attendancePercentage) >= 75 &&<span>
              Pass(<span>{selectedStudent?.attendancePercentage}%</span>)
            </span>}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default CourseDetails;
