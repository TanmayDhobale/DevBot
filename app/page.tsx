"use client"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { generateContent } from "../lib/ai";
import {Admin} from "@/components/response";

export default function Home() {
  const [text, setText] = useState('');
  const [response,setResponse] = useState('');

  function handleSubmit() {
    async function generate() {
      const response = await generateContent(text);
      setResponse(response);
    }
    generate();
  }
  

  return (
    <main className="flex flex-col items-center justify-center">
      <Input
        className="flex items-center justify-center w-1/3 m-4"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <Button className="m-3" onClick={handleSubmit}>
        Genrate
      </Button>
      <Admin/>
      <SyntaxHighlighter>
        {response || ""}
      </SyntaxHighlighter>
      <div>

      </div>
    </main>
  );
}
