'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {

  const [inputValue, setInputValue] = useState("")

  function handleInputTyping(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="h-screen flex flex-col gap-10 items-center">
      <h1 className="text-6xl font-bold mt-48">DevWorld Index</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row items-center justify-center gap-6 w-full px-8">
        <Input value={inputValue} onChange={(event) => handleInputTyping(event)} placeholder="Nome do curso..." className="max-w-2xl border-2" />
        <Button className="font-bold" variant={'default'}>
          Pesquisar
        </Button>
      </form>
    </div>
  )
}
