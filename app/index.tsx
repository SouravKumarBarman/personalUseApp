import { Text, View, StatusBar } from "react-native";
import React, { useEffect } from "react";
import InputWithLabel from "@/components/InputWithLabel";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
    , [totalSurcharge])

  return (
    <SafeAreaProvider style={{ backgroundColor: "white"}}>
      <StatusBar barStyle={"dark-content"}/>
      <View style={{ paddingHorizontal: 15 }}>
        <InputWithLabel label="1. Total Bill" onInputChange={(value) => setTotalBill(Number(value))} />
        <InputWithLabel label="2. RC/DC Charges" value={rcDcCharges} />
        <View style={{borderTopWidth: 1.5, borderColor:"#d3d3d3", marginHorizontal: 25}}></View>
        <InputWithLabel label="3. Total Bill Amount(1+2)" value={totalBillAmount} />
        <View style={{borderTopWidth: 1.5, borderColor:"#d3d3d3", marginHorizontal: 25}}></View>
        <InputWithLabel label="4. Current Interest" onInputChange={(value) => setCurrentInterest(Number(value))} />
        <InputWithLabel label="5. Arrear Interest" onInputChange={(value) => setArrearInterest(Number(value))} />
        <View style={{borderTopWidth: 1.5, borderColor:"#d3d3d3", marginHorizontal: 25}}></View>
        <InputWithLabel label="6. Total Surcharge (4+5)" value={totalSurcharge} />
        <View style={{borderTopWidth: 1.5, borderColor:"#d3d3d3", marginHorizontal: 25}}></View>
        <InputWithLabel label="7. Discount (80% of 6)" value={discount} />
        <View style={{borderTopWidth: 1.5, borderColor:"#000000"}}></View>
      </View>
      <View style={{alignItems:"center"}}>
      <Text style={{ fontSize: 18}}>Total Amount Payable :{totalPayable.toFixed(2)}</Text>
      </View>
    </SafeAreaProvider>

  );
}
