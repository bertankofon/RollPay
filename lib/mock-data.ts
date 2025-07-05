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
    id: "1",
    name: "Alice Johnson",
    email: "alice@company.com",
    intmaxId: "T6rZy11KtFN2Zo2yJP15So7L1cMMaQtsiNc96Lyi7dc2ffiMcP7JU5J7tUZ2w3QgpB6w2ipKHpCQb3yDZGhaWUK84KStp3F",
    monthlySalary: 4500,
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@company.com",
    intmaxId: "T8aZx22LuGO3Ap3zKQ26Tp8M2dNNbRutjOd07Mzj8ed3ggjNdQ8KV6K8uVA3x4RhrC7x3jqLIqDRc4zEAibaXVL95LTuq4G",
    monthlySalary: 3800,
  },
  {
    id: "3",
    name: "Carol Davis",
    email: "carol@company.com",
    intmaxId: "T9bAy33MvHP4Bq4aLR37Uq9N3eOOcSvukPe18NakaFe4hhjOeR9LW7L9vWB4y5SisD8y4krMJrESd5aFBjcbYWM06MUvr5H",
    monthlySalary: 4200,
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david@company.com",
    intmaxId: "T0cBz44NwIQ5Cr5bMS48Vr0O4fPPdTwvlQf29OblaGf5iikPfS0MX8M0wXC5z6TjtE9z5lsNKsFTe6bGCkdcZXN17NVws6I",
    monthlySalary: 3600,
  },
  {
    id: "5",
    name: "Eva Brown",
    email: "eva@company.com",
    intmaxId: "T1dCa55OxJR6Ds6cNT59Ws1P5gQQeUxwmRg30PcmbHg6jjlQgT1NY9N1xYD6a7UkuF0a6mtOLtGUf7cHDledaYO28OWxt7J",
    monthlySalary: 4000,
  },
]

export type Employee = {
  id: string
  name: string
  email: string
  intmaxId: string
  monthlySalary: number
}
