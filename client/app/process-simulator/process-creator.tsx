"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import { useState } from "react";
import { ProcessListItem } from "./types";

function generateRandomPID() {
    return Math.floor(Math.random() * 4194304) + 1;
}

export default function ProcessCreator() {
    const [processList, setProcessList] = useState<ProcessListItem[]>([]);

    const addNewProcess = () => {
        if (processList.length === 5) return;
        
        const pid = generateRandomPID();
        const newProcess = {
            name: `PID_${pid}`,
            pid: pid,
            submitted: false,
        }

        setProcessList(prev => [...prev, newProcess]);
    }

  return (
    <div className="p-3 rounded-md border-gray-200 border-2 w-fit">
      <div>
        <Button className="cursor-pointer" onClick={addNewProcess}>
            <Plus />
            Create New Process
        </Button>
      </div>
        <div className="mt-2">
            {processList.map(p => (
                <Input key={p.pid} value={p.name} />
            ))}
        </div>
    </div>
  );
}
