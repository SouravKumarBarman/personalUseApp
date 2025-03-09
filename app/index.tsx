import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import React, { useEffect } from "react";
import InputWithLabel from "@/components/InputWithLabel";
import { useState } from "react";

export default function Index() {
  const [totalBill, setTotalBill] = useState(0);
  const rcDcCharges: number = 400;
  const [totalBillAmount, setTotalBillAmount] = useState(0);
  const [currentInterest, setCurrentInterest] = useState(0);
  const [arrearInterest, setArrearInterest] = useState(0);
  const [totalSurcharge, setTotalSurcharge] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);


  useEffect(() => {
    setTotalBillAmount(totalBill + rcDcCharges);
  }
    , [totalBill]);

  useEffect(() => {
    setTotalSurcharge(currentInterest + arrearInterest);

  }
    , [currentInterest, arrearInterest]);

  useEffect(() => {
    const temp = (totalSurcharge * 0.8).toFixed(2);
    setDiscount(Number(temp));

    setTotalPayable(totalBillAmount - discount);
  }
    , [totalSurcharge]);

  const handleCalculate = () => {
  };



  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 20
      }}
    >
        <InputWithLabel label="1. Total Bill" onInputChange={(value) => setTotalBill(Number(value))} />
        <InputWithLabel label="2. RC/DC Charges" value={rcDcCharges} />
        <InputWithLabel label="3. Total Bill Amount " value={totalBillAmount} />
        <InputWithLabel label="4. Current Interest" onInputChange={(value) => setCurrentInterest(Number(value))} />
        <InputWithLabel label="5. Arrear Interest" onInputChange={(value) => setArrearInterest(Number(value))} />
        <InputWithLabel label="6. Total Surcharge" value={totalSurcharge} />
        <InputWithLabel label="7. Discount on 80% of " value={discount} />
     
      <Text style={{ fontSize: 18 }}>Total Amount Payable :{totalPayable}</Text>
    </View>
  );
}
