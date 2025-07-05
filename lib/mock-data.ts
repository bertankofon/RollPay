export const mockOverviewData = {
  nextPayoutDate: "2024-01-15",
  employeeCount: 12,
  estimatedGasUSD: 2.45,
}

export const mockPayrolls = [
  {
    batchId: "BATCH-001",
    date: "2024-01-01",
    employees: 12,
    totalUSDC: 45000,
    status: "Paid" as const,
  },
  {
    batchId: "BATCH-002",
    date: "2024-01-15",
    employees: 12,
    totalUSDC: 45000,
    status: "Pending" as const,
  },
  {
    batchId: "BATCH-003",
    date: "2024-02-01",
    employees: 11,
    totalUSDC: 42500,
    status: "Pending" as const,
  },
]

export const mockEmployees = [
  {
    name: "Alice Johnson",
    email: "alice@company.com",
    intmaxId: "0x1a2b3c4d5e6f7890",
    monthlySalary: 4500,
  },
  {
    name: "Bob Smith",
    email: "bob@company.com",
    intmaxId: "0x2b3c4d5e6f789012",
    monthlySalary: 3800,
  },
  {
    name: "Carol Davis",
    email: "carol@company.com",
    intmaxId: "0x3c4d5e6f78901234",
    monthlySalary: 4200,
  },
  {
    name: "David Wilson",
    email: "david@company.com",
    intmaxId: "0x4d5e6f7890123456",
    monthlySalary: 3600,
  },
  {
    name: "Eva Brown",
    email: "eva@company.com",
    intmaxId: "0x5e6f789012345678",
    monthlySalary: 4000,
  },
]
