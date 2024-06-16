
import { useState } from "react"
import { UseInput } from "../hooks/UseInput";

export const Form = () => {

  const { inputValue, onSubmit, verValueInfo, data } = UseInput()

  return (
    <>
      <div className="container">

        <form className="form-container" onSubmit={onSubmit}>

          <label className="inputContainer">
            <h1>
              NodeMailer
            </h1>
            <input
              className="input"
              type="email"
              name="input1"
              placeholder="Correo"
              onChange={verValueInfo}
              value={inputValue.input1}
            />

            <input
              className="input"
              type="text"
              name="input2"
              placeholder="Asunto"
              onChange={verValueInfo}
              value={inputValue.input2}
            />

            <input
              className="input"
              type="text"
              name="input3"
              placeholder="Comentario"
              onChange={verValueInfo}
              value={inputValue.input3}
            />
        </label>

        <label className="btn-container">
          <input
            type="submit" onClick={onSubmit}
            className="btn-enviar"
          />
        </label>

        <h3>
          {data}
        </h3>
      </form>

    </div >

    </>
  )
}



