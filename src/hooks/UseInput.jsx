
import { useState } from "react";

export const UseInput = () => {
  const [data, setData] = useState("")

  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
    input3: "",
  })


  const onSubmit = async (e) => {
    e.preventDefault()

    const { input1, input2, input3 } = inputValue

    if (input1.indexOf("@") != -1 && input2 && input3) {
      try {
        let dato = await fetch("http://localhost:3000", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputValue)
        });

        let moreData = await dato.json()

        setData(moreData)
        setInputValue({ input1: "", input2: "", input3: "" })

      } catch (error) {
        console.log(error);
      }
    }else{
      setData("Completa los campos con su información")
    }

  }

  const verValueInfo = (e) => {
    const { value, name } = e.target

    setInputValue({
      ...inputValue,
      [name]: value
    })
  }


  return {
    inputValue,
    onSubmit,
    verValueInfo,
    data
  }
}
