import * as Yup from 'yup';

const getBranch = (std: string) => {
  const branchStdPairs: { [key: string]: string } = {
    164: "AIML",
    169: "CS(Hindi)",
    154: "CSE(DS)",
    153: "CSE(AIML)",
    10: "CSE",
    21: "EN",
    40: "Mechanical",
    "00": "CE",
    12: "CS",
    11: "CSIT",
    31: "ECE",
    13: "IT",
  };

  const code = std.slice(2, std.length - 3);
  return branchStdPairs[code] || "Invalid Student No";
};

const validationSchema = Yup.object({
  studentNumber: Yup.string()
    .matches(/^23\d{5,6}$/, "Enter a valid Student Number")
    .test(
      "is-valid-branch",
      "Invalid student number",
      function (value) {
        if (!value) return false; 
        const branch = getBranch(value.trim());
        return branch !== "Invalid Student No";
      }
    )
    .required("Student Number is required")
    .trim(),
  password: Yup.string()
    .required("Password is required"),
});

export default validationSchema;
