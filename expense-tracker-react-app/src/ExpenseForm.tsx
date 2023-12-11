import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react";

function ExpenseForm() {
    const { addExpense } = useContext(ExpenseTrackerContext)!;
    const [reason, setReason] = useState("");
    const [amount, setAmount] = useState<number | "">(0);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (reason && amount) {
        addExpense({ reason, amount: parseFloat(amount), type: "expense" });
        setReason("");
        setAmount("");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Reason</FormLabel>
            <Input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Add Expense
          </Button>
        </Stack>
      </form>
    );
  }
  